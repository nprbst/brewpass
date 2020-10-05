import { observer } from "mobx-react-lite";
import { Badge, Box, Link as ChakraLink } from "@chakra-ui/core";

export interface OrderProps {
  id?: string | null;
  item?: string | null;
  venue?: string | null;
  ago?: number;
  recent?: number;
  score?: number;
}

const agoText = (ago: number): string => {
  const agoInt = Math.round(ago);
  let agoStr = "seconds";
  if (agoInt > 1 && agoInt < 60) {
    agoStr = Math.round(ago) + " minutes";
  } else if (agoInt >= 60 && agoInt < 120) {
    agoStr = "an hour";
  } else if (agoInt >= 120 && agoInt < 23 * 60) {
    agoStr = "hours";
  } else if (agoInt >= 23 * 60) {
    agoStr = "days";
  }
  return agoStr + " ago";
};

export const OrderTile = observer(
  ({ id, item, venue, ago, recent, score }: OrderProps) => (
    <Box px={5} py={3} borderWidth="1px">
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {item}
        <Badge rounded="full" px="2" color="black.500" float="right">
          [{id}]
        </Badge>
        <Badge rounded="full" px="2" color="green.500" float="right">
          {score}
        </Badge>
      </Box>

      <Box mb="2" fontWeight={700} fontSize="sm">
        <ChakraLink color="cyan.600">{venue}</ChakraLink>
      </Box>

      {(recent && recent > 1 && (
        <Badge rounded="full" px="2" color="purple.500">
          {recent} purchased recently
        </Badge>
      )) ||
        null}
      <Badge rounded="full" px="2" color="orange.500">
        ordered {agoText(ago)}
      </Badge>
    </Box>
  )
);
