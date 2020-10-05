import React from "react";
import { observer } from "mobx-react-lite";
import { debounce } from "lodash";
import { Box, Spinner, Text } from "@chakra-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

import { useMst } from "../mst";

import { OrderStack } from "./OrderStack";

export const OrderScroll = observer(() => {
  const state = useMst();
  const { orders, more } = state;

  const next = debounce(state.fetchMore, 500, { trailing: true });
  const refresh = state.reset;
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
      dataLength={orders.size}
      next={next}
      hasMore={more}
      loader={spinner}
      endMessage={thatsAll}
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={pullDown}
      releaseToRefreshContent={release}
    >
      <OrderStack orders={state.listFeatured} />
    </InfiniteScroll>
  );
});
