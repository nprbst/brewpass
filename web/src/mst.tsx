import React, { PropsWithChildren, useContext } from "react";

import { RootStore, StoreContext } from "./models";
import { createHttpClient } from "mst-gql";
import { SubscriptionClient } from "subscriptions-transport-ws";

export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";
export const isSSR = () => typeof window === "undefined";

export function useMst() {
  const store = useContext(StoreContext);
  if (store === null) {
    throw new Error(
      "RootsStore cannot be null. Do you need to add a context provider?"
    );
  }

  return store;
}

const gqlHttpClient = createHttpClient(
  process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "http://localhost:8080/v1/graphql"
);
const gqlWsClient =
  !isSSR() &&
  new SubscriptionClient(
    process.env.NEXT_PUBLIC_GRAPHQL_SUBSCRIPTION_URL ??
      "ws://localhost:8080/v1/graphql",
    { reconnect: true }
  );

const rootStore = RootStore.create(undefined, {
  gqlHttpClient,
  gqlWsClient,
});

if (!isSSR() && isDevelopment) {
  (window as any).rootStore = rootStore;
}

const MSTProvider = ({ children }: PropsWithChildren<unknown>) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

export default MSTProvider;
