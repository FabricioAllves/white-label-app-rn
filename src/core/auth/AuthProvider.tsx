import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "./auth.store";
import { secureStore } from "@/src/core/storage/secure-store";
import type { User } from "./auth.types";

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const { setSession, clearSession, setLoading } = useAuthStore();

  useEffect(() => {
    hydrate();
  }, []);

  async function hydrate() {
    try {
      setLoading(true);
      const { accessToken, refreshToken } = await secureStore.getTokens();
      const user = await secureStore.getUser<User>();

      if (accessToken && refreshToken && user) {
        setSession(user, accessToken, refreshToken);
      } else {
        clearSession();
      }
    } catch {
      clearSession();
    }
  }

  return <>{children}</>;
}
