import type { AuthSession, SignInDTO, SignUpDTO, User } from "./auth.types";
import type { RoleName } from "@/src/core/access-control/access.types";

// Mock users for development — replace with real API calls later
const MOCK_USERS: Record<string, { password: string; user: User }> = {
  "admin@test.com": {
    password: "123456",
    user: {
      id: "1",
      name: "Admin User",
      email: "admin@test.com",
      role: "admin",
    },
  },
  "manager@test.com": {
    password: "123456",
    user: {
      id: "2",
      name: "Manager User",
      email: "manager@test.com",
      role: "manager",
    },
  },
  "employee@test.com": {
    password: "123456",
    user: {
      id: "3",
      name: "Employee User",
      email: "employee@test.com",
      role: "employee",
    },
  },
  "viewer@test.com": {
    password: "123456",
    user: {
      id: "4",
      name: "Viewer User",
      email: "viewer@test.com",
      role: "viewer",
    },
  },
};

function generateFakeToken(): string {
  return `mock-token-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export const authService = {
  async signIn(dto: SignInDTO): Promise<AuthSession> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const mockUser = MOCK_USERS[dto.email];
    if (!mockUser || mockUser.password !== dto.password) {
      throw new Error("Invalid email or password");
    }

    return {
      user: mockUser.user,
      accessToken: generateFakeToken(),
      refreshToken: generateFakeToken(),
    };
  },

  async signUp(dto: SignUpDTO): Promise<AuthSession> {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const user: User = {
      id: Date.now().toString(),
      name: dto.name,
      email: dto.email,
      role: "viewer" as RoleName,
    };

    return {
      user,
      accessToken: generateFakeToken(),
      refreshToken: generateFakeToken(),
    };
  },

  async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return { accessToken: generateFakeToken() };
  },

  async signOut(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 200));
  },
};
