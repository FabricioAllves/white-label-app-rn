import { useTheme } from "@shopify/restyle";
import { TextInput as RNTextInput, type TextInputProps } from "react-native";

import { Box, Text, type Theme } from "@/src/core/theme";

interface InputProps extends Omit<TextInputProps, "style"> {
  label?: string;
  error?: string;
}

export function Input({ label, error, ...rest }: InputProps) {
  const theme = useTheme<Theme>();

  return (
    <Box marginBottom="m">
      {label && (
        <Text variant="label" marginBottom="xs">
          {label}
        </Text>
      )}
      <Box
        backgroundColor="inputBackground"
        borderRadius="m"
        borderWidth={1}
        borderColor={error ? "statusError" : "inputBorder"}
        paddingHorizontal="m"
        paddingVertical="s"
      >
        <RNTextInput
          placeholderTextColor={theme.colors.inputPlaceholder}
          style={{
            fontSize: 16,
            color: theme.colors.textPrimary,
            lineHeight: 24,
          }}
          {...rest}
        />
      </Box>
      {error && (
        <Text variant="caption" color="statusError" marginTop="xs">
          {error}
        </Text>
      )}
    </Box>
  );
}
