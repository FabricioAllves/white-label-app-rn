import { useEffect, type ReactNode } from "react";
import { useAccessStore } from "./access.store";
import { useAuthStore } from "@/src/core/auth/auth.store";
import { useBrand } from "@/src/core/brand/useBrand";

interface Props {
  children: ReactNode;
}

export function AccessProvider({ children }: Props) {
  const user = useAuthStore((s) => s.user);
  const { featureFlags: brandFlags } = useBrand();
  const { setUserRole, setBrandFeatureFlags, reset } = useAccessStore();

  useEffect(() => {
    if (user) {
      setUserRole(user.role);
      setBrandFeatureFlags(brandFlags);
    } else {
      reset();
    }
  }, [user, brandFlags, setUserRole, setBrandFeatureFlags, reset]);

  return <>{children}</>;
}
