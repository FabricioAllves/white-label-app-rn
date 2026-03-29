import type { ReactNode } from "react";
import { useAccess } from "./useAccess";

interface AccessGateProps {
  resource: string;
  action?: string;
  fallback?: ReactNode;
  children: ReactNode;
}

export function AccessGate({
  resource,
  action = "read",
  fallback = null,
  children,
}: AccessGateProps) {
  const { hasPermission } = useAccess();

  if (!hasPermission(resource, action)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
