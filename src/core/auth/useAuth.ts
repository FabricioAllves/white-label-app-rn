import { useCallback } from "react";
import { useAuthStore } from "./auth.store";
import { authService } from "./auth.service";
import { secureStore } from "@/src/core/storage/secure-store";
import { useAccessStore } from "@/src/core/access-control/access.store";
import type { SignInDTO, SignUpDTO } from "./auth.types";

export function useAuth() {
  const { user, isAuthenticated, isLoading, setSession, clearSession } =
    useAuthStore();
  const { setUserRole, reset: resetAccess } = useAccessStore();

  const signIn = useCallback(async (dto: SignInDTO) => {
    const session = await authService.signIn(dto);
    setSession(session.user, session.accessToken, session.refreshToken);
    setUserRole(session.user.role);

    await secureStore.saveTokens(session.accessToken, session.refreshToken);
    await secureStore.saveUser(session.user);
  }, [setSession, setUserRole]);

  const signUp = useCallback(async (dto: SignUpDTO) => {
    const session = await authService.signUp(dto);
    setSession(session.user, session.accessToken, session.refreshToken);
    setUserRole(session.user.role);

    await secureStore.saveTokens(session.accessToken, session.refreshToken);
    await secureStore.saveUser(session.user);
  }, [setSession, setUserRole]);

  const signOut = useCallback(async () => {
    await authService.signOut();
    await secureStore.clearTokens();
    clearSession();
    resetAccess();
  }, [clearSession, resetAccess]);

  return {
    user,
    isAuthenticated,
    isLoading,
    signIn,
    signUp,
    signOut,
  };
}
