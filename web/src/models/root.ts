import { Instance } from "mobx-state-tree";

import { Orders } from "./orders";

export const rootStore = Orders.create();

rootStore.reset();

export type RootStoreInstance = Instance<typeof rootStore>;
