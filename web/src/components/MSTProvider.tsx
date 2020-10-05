import React, { PropsWithChildren } from "react";

import { rootStore } from "../models/root";

import { Provider } from "../mst";

const MSTProvider = ({ children }: PropsWithChildren<unknown>) => (
  <Provider value={rootStore}>{children}</Provider>
);

export default MSTProvider;
