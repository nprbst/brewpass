import { Stack } from "@chakra-ui/core";
import React from "react";

import { OrderProps, OrderTile } from "./OrderTile";

export interface OrderStackProps {
  orders: OrderProps[];
}

export const OrderStack = ({ orders }: OrderStackProps) => {
  console.log("orders", orders.length);

  return (
    <Stack spacing="-1px">
      {orders.map(({ item, venue, ago, recent }, index) => (
        <OrderTile
          key={index}
          item={item}
          venue={venue}
          ago={ago}
          recent={recent}
        />
      ))}
    </Stack>
  );
};
