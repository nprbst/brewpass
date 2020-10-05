import React from "react";
import { observer } from "mobx-react-lite";
import { debounce } from "lodash";
import { Flex, Text, Image } from "@chakra-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

import { useQuery } from "../models";

import { OrderStack } from "./OrderStack";

export const OrderScroll = observer(() => {
  const { store /* error, loading, setQuery */ } = useQuery();
  // (store) =>
  //   store.loadInitial()
  // );

  const dataLength = store.sortedOrderItems.length;
  const hasMore = () => dataLength < 200;
  const next = debounce(store.loadMore, 500, { trailing: true });
  const refresh = store.loadInitial;
  const spinner = (
    <Flex pt="2rem" align="center" justify="center">
      {/* <Spinner /> */}
      <Image
        src="/img/clinking_beer_mugs.gif"
        height="128px"
        width="128px"
        align="center"
      />
    </Flex>
  );
  const thatsAll = (
    <Text mt="2rem" fontSize="xl" color="gray.400" textAlign="center">
      We're all tapped out!
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

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={next}
      hasMore={hasMore()}
      loader={spinner}
      endMessage={thatsAll}
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={pullDown}
      releaseToRefreshContent={release}
    >
      <OrderStack
        items={store.sortedOrderItems}
        virtualTime={store.virtualTime}
      />
    </InfiniteScroll>
  );
});
