import { debounce } from "lodash";
import { Box, Spinner, Text } from "@chakra-ui/core";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Footer } from "./Footer";
import { OrderStack } from "./OrderStack";
import { OrderProps } from "./OrderTile";

export interface OrderScrollProps {
  orders: OrderProps[];
}

export const OrderScroll = ({ orders }: OrderScrollProps) => {
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
  const refresh = () => {
    setTimeout(() => {
      setOrders(orders);
    }, 200);
  };
  const spinner = (
    <Box pt="2rem" textAlign="center">
      <Spinner />
    </Box>
  );
  const thatsAll = (
    <Text mt="2rem" fontSize="xl" color="gray.400" textAlign="center">
      The End
    </Text>
  );
  const pullDown = (
    <Text fontSize="lg" color="gray.200" textAlign="center">
      &#8595; Pull down to refresh
    </Text>
  );
  const release = (
    <Text fontSize="lg" color="gray.400" textAlign="center">
      &#8593; Release to refresh
    </Text>
  );
  // console.log("_orders", _orders.length);

  return (
    <InfiniteScroll
      dataLength={_orders.length}
      next={next}
      hasMore={_orders.length < 100}
      loader={spinner}
      endMessage={thatsAll}
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={pullDown}
      releaseToRefreshContent={release}
    >
      <OrderStack orders={_orders} />
    </InfiniteScroll>
  );
};
