import { Box, Text } from "@/src/core/theme";
import { Image, type ImageSourcePropType } from "react-native";

interface Props {
  source?: ImageSourcePropType;
  name?: string;
  size?: number;
}

export function Avatar({ source, name, size = 40 }: Props) {
  if (source) {
    return (
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    );
  }

  const initial = name?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <Box
      width={size}
      height={size}
      borderRadius="full"
      backgroundColor="primaryColorLight"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        variant="label"
        color="primaryColor"
        style={{ fontSize: size * 0.4 }}
      >
        {initial}
      </Text>
    </Box>
  );
}
