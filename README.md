# Whitelabel App

App React Native com Expo, arquitetura modular, suporte a white-label (multi-marca) e controle de acesso por módulos (RBAC).

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Expo SDK 55 / React Native 0.83 |
| Navegação | Expo Router (file-based routing) |
| Theming | @shopify/restyle |
| Estado (client) | Zustand |
| Estado (server) | @tanstack/react-query |
| Formulários | react-hook-form + zod |
| Listas | @shopify/flash-list |
| Storage | expo-secure-store / react-native-mmkv |
| HTTP | axios |
| Lint/Format | Biome |

## Pré-requisitos

- **Node.js** >= 18
- **npm** >= 9
- **Expo CLI**: instalado automaticamente via `npx`
- **iOS**: Xcode 15+ (para simulador) ou app Expo Go
- **Android**: Android Studio (para emulador) ou app Expo Go

## Instalação

```bash
cd whitelabel-app
npm install
```

## Como rodar

### Modo desenvolvimento (Expo Go)

```bash
# Brand A (padrão — tema azul)
npx expo start

# Brand B (tema rosa, sem módulo Dashboard)
BRAND=brand-b npx expo start
```

Escaneie o QR code com o app **Expo Go** (Android) ou a câmera do iPhone.

### Simulador/Emulador

```bash
# iOS Simulator
npx expo start --ios

# Android Emulator
npx expo start --android

# Web
npx expo start --web
```

### Com marca específica

```bash
# Brand A no iOS
BRAND=brand-a npx expo start --ios

# Brand B no Android
BRAND=brand-b npx expo start --android
```

## Login (Mock)

O app inicia com autenticação mockada. Use estes usuários para testar diferentes níveis de acesso:

| Email | Senha | Role | Acesso |
|---|---|---|---|
| `admin@test.com` | `123456` | Admin | Todos os módulos + painel admin |
| `manager@test.com` | `123456` | Gerente | Home, Dashboard (completo), Perfil |
| `employee@test.com` | `123456` | Funcionário | Home, Dashboard (somente leitura), Perfil |
| `viewer@test.com` | `123456` | Visualizador | Home, Dashboard (somente leitura), Perfil |

## Arquitetura

### Estrutura de pastas

```
whitelabel-app/
├── app/                          # Rotas (Expo Router)
│   ├── _layout.tsx               # Root: providers
│   ├── index.tsx                 # Redirect auth/app
│   ├── (auth)/                   # Telas públicas
│   │   ├── sign-in.tsx
│   │   └── sign-up.tsx
│   └── (app)/                    # Telas protegidas
│       ├── (tabs)/               # Navegação por tabs
│       │   ├── home/
│       │   ├── dashboard/
│       │   └── profile/
│       └── unauthorized.tsx
├── src/
│   ├── core/                     # Infraestrutura
│   │   ├── theme/                # @shopify/restyle (tokens, primitives, dark mode)
│   │   ├── brand/                # Config por marca (BrandProvider, registry)
│   │   ├── auth/                 # Autenticação (store, service mock, provider)
│   │   ├── access-control/       # RBAC (roles, permissions, AccessGate)
│   │   ├── modules/              # Registry de módulos + useModules hook
│   │   ├── api/                  # Axios client com interceptors
│   │   └── storage/              # expo-secure-store wrapper
│   ├── features/                 # Módulos de feature (self-contained)
│   │   ├── home/
│   │   ├── dashboard/
│   │   └── profile/
│   ├── shared/                   # Componentes reutilizáveis
│   │   └── components/           # Button, Input, Avatar, Badge, etc.
│   └── brands/                   # Configurações por marca
│       ├── brand-a/              # Tema azul, todos os módulos
│       └── brand-b/              # Tema rosa, sem dashboard
├── app.config.ts                 # Config Expo dinâmico (lê BRAND env)
├── eas.json                      # Build profiles por marca
└── biome.json                    # Linter/formatter
```

### Fluxo de controle de acesso

```
Login → JWT com role → AccessProvider seta role no Zustand
                            ↓
                    useModules() filtra:
                    1. Brand → enabledModules / featureFlags
                    2. Role → requiredPermissions
                            ↓
                    Tabs dinâmicas (href: null esconde tabs sem acesso)
                    + Guard por módulo no _layout.tsx
```

### Como funciona o white-label

1. Variável `BRAND` (env) define qual marca carregar
2. `app.config.ts` gera config Expo com nome, ícone, splash e bundleId da marca
3. `BrandProvider` carrega `BrandConfig` (cores, feature flags, módulos habilitados)
4. `ThemeProvider` aplica o tema da marca via `@shopify/restyle`
5. `useModules()` filtra módulos disponíveis pela marca

### Como funciona o RBAC

- Roles: `admin`, `manager`, `employee`, `viewer`, `guest`
- Cada role tem um array de `{ resource, action }` permissions
- Cada módulo declara `requiredPermissions` no seu `feature.config.ts`
- `useAccess()` hook expõe `hasPermission()`, `canAccessModule()`
- `<AccessGate resource="dashboard" action="manage">` renderiza children apenas se o user tem permissão

## Adicionando um novo módulo

1. Criar pasta em `src/features/<modulo>/`
2. Criar `feature.config.ts` com `ModuleConfig`
3. Registrar em `src/core/modules/module.registry.ts`
4. Criar rota em `app/(app)/(tabs)/<modulo>/`
5. Adicionar tab em `app/(app)/(tabs)/_layout.tsx`
6. Adicionar permissões em `src/core/access-control/roles.ts`

## Adicionando uma nova marca

1. Criar pasta `src/brands/<marca>/` com `brand.config.ts`, `theme.ts` e `assets/`
2. Registrar em `src/core/brand/brand.registry.ts`
3. Adicionar config em `app.config.ts` (bundleId, ícones)
4. Adicionar profiles em `eas.json`

## Build de produção (EAS)

```bash
# Brand A - iOS
eas build --profile brand-a-production --platform ios

# Brand B - Android
eas build --profile brand-b-production --platform android

# Preview (distribuição interna)
eas build --profile brand-a-preview --platform all
```

## Lint e formatação

```bash
npx biome check .
npx biome check --write .
```

## Scripts disponíveis

| Script | Comando |
|---|---|
| `npm start` | `expo start` |
| `npm run ios` | `expo start --ios` |
| `npm run android` | `expo start --android` |
| `npm run web` | `expo start --web` |
