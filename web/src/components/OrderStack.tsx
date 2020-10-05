import { Stack } from "@chakra-ui/core";
import { observer } from "mobx-react-lite";
import { OrderInstance } from "../models/orders";

import { OrderTile } from "./OrderTile";

export interface OrderStackProps {
  orders: OrderInstance[];
}

export const OrderStack = observer(({ orders }: OrderStackProps) => {
  console.log("orders", orders.length);

  return (
    <Stack spacing="-1px">
      {orders.map(({ id, item, venue, lastOrderedMinAgo, recentCount }) => (
        <OrderTile
          key={id}
          id={id}
          item={item}
          venue={venue}
          ago={lastOrderedMinAgo}
          recent={recentCount}
        />
      ))}
    </Stack>
  );
});
