import { Badge, Box, Link as ChakraLink, Stack } from "@chakra-ui/core";

export interface OrderProps {
  item: string;
  venue: string;
  ago?: number;
  recent?: number;
}

export const OrderTile = ({ item, venue, ago, recent }: OrderProps) => (
  <Box px={5} py={3} borderWidth="1px">
    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
      {item}
    </Box>

    <Box mb="2" fontWeight={700} fontSize="sm">
      <ChakraLink color="cyan.600">{venue}</ChakraLink>
    </Box>

    <Stack isInline>
      {recent && recent > 2 && (
        <Badge rounded="full" px="2" color="purple.500">
          {recent} purchased recently
        </Badge>
      )}
      {ago && ago < 60 && (
        <Badge rounded="full" px="2" color="orange.500">
          ordered {ago} minutes ago
        </Badge>
      )}
    </Stack>
  </Box>
);
