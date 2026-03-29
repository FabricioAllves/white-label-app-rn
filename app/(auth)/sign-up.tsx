import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
  Alert,
  ActivityIndicator,
  TextInput as RNTextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTheme } from "@shopify/restyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text, type Theme } from "@/src/core/theme";
import { useAuth } from "@/src/core/auth";
import { useBrand } from "@/src/core/brand";

const signUpSchema = z.object({
  name: z.string().min(2, "Mínimo de 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo de 6 caracteres"),
});

type SignUpForm = z.infer<typeof signUpSchema>;

export default function SignUpScreen() {
  const router = useRouter();
  const { signUp } = useAuth();
  const { displayName } = useBrand();
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  async function onSubmit(data: SignUpForm) {
    try {
      setLoading(true);
      await signUp(data);
    } catch (error) {
      Alert.alert(
        "Erro",
        error instanceof Error ? error.message : "Erro ao criar conta",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingTop: insets.top + 40,
            paddingBottom: insets.bottom + 20,
            paddingHorizontal: theme.spacing.l,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <Box flex={1} justifyContent="center">
            <Text variant="h1" textAlign="center" marginBottom="s">
              {displayName}
            </Text>
            <Text variant="bodySmall" textAlign="center" marginBottom="xl">
              Crie sua conta para começar
            </Text>

            {/* Name */}
            <Text variant="label" marginBottom="xs">
              Nome
            </Text>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <Box
                  backgroundColor="inputBackground"
                  borderRadius="m"
                  borderWidth={1}
                  borderColor={errors.name ? "statusError" : "inputBorder"}
                  paddingHorizontal="m"
                  paddingVertical="s"
                  marginBottom="xs"
                >
                  <RNTextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Seu nome"
                    placeholderTextColor={theme.colors.inputPlaceholder}
                    autoCapitalize="words"
                    autoComplete="name"
                    style={{
                      fontSize: 16,
                      color: theme.colors.textPrimary,
                      lineHeight: 24,
                    }}
                  />
                </Box>
              )}
            />
            {errors.name && (
              <Text variant="caption" color="statusError" marginBottom="m">
                {errors.name.message}
              </Text>
            )}
            {!errors.name && <Box marginBottom="m" />}

            {/* Email */}
            <Text variant="label" marginBottom="xs">
              Email
            </Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Box
                  backgroundColor="inputBackground"
                  borderRadius="m"
                  borderWidth={1}
                  borderColor={errors.email ? "statusError" : "inputBorder"}
                  paddingHorizontal="m"
                  paddingVertical="s"
                  marginBottom="xs"
                >
                  <RNTextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="seu@email.com"
                    placeholderTextColor={theme.colors.inputPlaceholder}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoComplete="email"
                    style={{
                      fontSize: 16,
                      color: theme.colors.textPrimary,
                      lineHeight: 24,
                    }}
                  />
                </Box>
              )}
            />
            {errors.email && (
              <Text variant="caption" color="statusError" marginBottom="m">
                {errors.email.message}
              </Text>
            )}
            {!errors.email && <Box marginBottom="m" />}

            {/* Password */}
            <Text variant="label" marginBottom="xs">
              Senha
            </Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Box
                  backgroundColor="inputBackground"
                  borderRadius="m"
                  borderWidth={1}
                  borderColor={errors.password ? "statusError" : "inputBorder"}
                  paddingHorizontal="m"
                  paddingVertical="s"
                  marginBottom="xs"
                >
                  <RNTextInput
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder="Mínimo 6 caracteres"
                    placeholderTextColor={theme.colors.inputPlaceholder}
                    secureTextEntry
                    autoComplete="password-new"
                    style={{
                      fontSize: 16,
                      color: theme.colors.textPrimary,
                      lineHeight: 24,
                    }}
                  />
                </Box>
              )}
            />
            {errors.password && (
              <Text variant="caption" color="statusError" marginBottom="l">
                {errors.password.message}
              </Text>
            )}
            {!errors.password && <Box marginBottom="l" />}

            {/* Submit */}
            <Pressable
              onPress={handleSubmit(onSubmit)}
              disabled={loading}
              style={({ pressed }) => ({
                backgroundColor: pressed
                  ? theme.colors.primaryColorPressed
                  : theme.colors.primaryColor,
                borderRadius: theme.borderRadii.m,
                paddingVertical: theme.spacing.s + 4,
                alignItems: "center",
                opacity: loading ? 0.7 : 1,
              })}
            >
              {loading ? (
                <ActivityIndicator color={theme.colors.textInverse} />
              ) : (
                <Text variant="button">Criar conta</Text>
              )}
            </Pressable>

            {/* Sign In Link */}
            <Pressable
              onPress={() => router.back()}
              style={{ marginTop: theme.spacing.l, alignItems: "center" }}
            >
              <Text variant="bodySmall">
                Já tem conta?{" "}
                <Text variant="bodySmall" color="textLink">
                  Entrar
                </Text>
              </Text>
            </Pressable>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
}
