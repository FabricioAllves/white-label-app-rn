import type { RoleName } from "@/src/core/access-control/access.types";

export interface User {
  id: string;
  name: string;
  email: string;
  role: RoleName;
  avatar?: string;
}

export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface SignInDTO {
  email: string;
  password: string;
}

export interface SignUpDTO {
  name: string;
  email: string;
  password: string;
}
