import { observer } from "mobx-react-lite";
import { Badge, Box, Link as ChakraLink } from "@chakra-ui/core";
import FlashChange from "@avinlab/react-flash-change";

export interface OrderProps {
  id?: string | null;
  item?: string | null;
  venue?: string | null;
  ago?: number;
  recent?: number;
  score?: number;
}

const agoText = (ago?: number): string | null => {
  const agoInt = Math.round(ago || 0);
  let agoStr = "ordered seconds ago";
  if (agoInt > 1 && agoInt < 60) {
    agoStr = "ordered " + agoInt + " minutes ago";
  } else if (agoInt >= 60 && agoInt < 120) {
    agoStr = "ordered an hour ago";
  } else if (agoInt >= 120 && agoInt < 23 * 60) {
    agoStr = "ordered hours ago";
  } else if (agoInt >= 23 * 60) {
    agoStr = "ordered yesterday";
  }
  return agoStr;
};

export const OrderTile = observer(
  ({ item, venue, ago, recent, score }: OrderProps) => (
    <FlashChange
      value={score}
      className="flash-container"
      flashClassName="active"
      flashDuration={700}
      compare={(prevProps: { value: number }, nextProps: { value: number }) => {
        // Only flash items which have "moved up in the world"!
        return nextProps.value > prevProps.value;
      }}
    >
      <Box px={5} py={3} borderWidth="1px">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {item}
          {/* <Badge rounded="full" px="2" color="black.500" float="right">
            [{id}]
          </Badge>
          <Badge rounded="full" px="2" color="green.500" float="right">
            {score}
          </Badge> */}
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
          {agoText(ago)}
        </Badge>
      </Box>
    </FlashChange>
  )
);
