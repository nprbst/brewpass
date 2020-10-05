import { useContext, createContext } from "react";

import { RootStoreInstance, rootStore } from "./models/root";

export const isDevelopment = process.env.NODE_ENV === "development";
export const isProduction = process.env.NODE_ENV === "production";
export const isSSR = () => typeof window === "undefined";

if (!isSSR() && isDevelopment) {
  (window as any).rootStore = rootStore;
}

const RootStoreContext = createContext<null | RootStoreInstance>(null);

export const { Provider } = RootStoreContext;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error(
      "RootsStore cannot be null. Do you need to add a context provider?"
    );
  }

  return store;
}
