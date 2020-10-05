import { observer } from "mobx-react-lite";
import { Badge, Box, Link as ChakraLink, Stack } from "@chakra-ui/core";

export interface OrderProps {
  id: string;
  item: string;
  venue: string;
  ago?: number;
  recent?: number;
}

export const OrderTile = observer(
  ({ id, item, venue, ago, recent }: OrderProps) => (
    <Box px={5} py={3} borderWidth="1px">
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {item}
        <Badge rounded="full" px="2" color="black.500" float="right">
          {id}
        </Badge>
      </Box>

      <Box mb="2" fontWeight={700} fontSize="sm">
        <ChakraLink color="cyan.600">{venue}</ChakraLink>
      </Box>

      {(recent && recent > 2 && (
        <Badge rounded="full" px="2" color="purple.500">
          {recent} purchased recently
        </Badge>
      )) ||
        null}
      {(ago && ago < 60 && (
        <Badge rounded="full" px="2" color="orange.500">
          ordered {ago} minutes ago
        </Badge>
      )) ||
        null}
    </Box>
  )
);
