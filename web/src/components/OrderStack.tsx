import { debounce } from "lodash";
import { Stack } from "@chakra-ui/core";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { OrderProps, OrderTile } from "./OrderTile";

export interface OrderStackProps {
  orders: OrderProps[];
}

export const OrderStack = ({ orders }: OrderStackProps) => {
  const [_orders, setOrders] = useState(orders);
  const next = debounce(
    () => {
      setTimeout(() => {
        setOrders([..._orders, ...orders]);
      }, 200);
    },
    500,
    { trailing: true }
  );

  console.log("_orders", _orders.length);

  return (
    <Stack spacing="-1px">
      <InfiniteScroll
        height="100vh"
        dataLength={_orders.length}
        next={next}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {" "}
        {_orders.map(({ item, venue, ago, recent }, index) => (
          <OrderTile
            key={index}
            item={item}
            venue={venue}
            ago={ago}
            recent={recent}
          />
        ))}
      </InfiniteScroll>
    </Stack>
  );
};
