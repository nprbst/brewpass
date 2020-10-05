import { Instance } from "mobx-state-tree";
import { OrderItems10MinsModelBase } from "./OrderItems10MinsModel.base";

/* The TypeScript type of an instance of OrderItems10MinsModel */
export interface OrderItems10MinsModelType
  extends Instance<typeof OrderItems10MinsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsModel */
export {
  selectFromOrderItems10Mins,
  orderItems10MinsModelPrimitives,
  OrderItems10MinsModelSelector,
} from "./OrderItems10MinsModel.base";

function hourDiff(bucketTime: string): number {
  return 1;
}

/**
 * OrderItems10MinsModel
 *
 * columns and relationships of "order_items_10_mins"
 */
export const OrderItems10MinsModel = OrderItems10MinsModelBase.views(
  (self) => ({
    get heuristicScore() {
      const sameHourWeight = 20;
      const adjacentHourWeight = 10;
      const recencyWeight = 1;
      const countWeight = 3;
      // TODO: take into account total orders, recency and time-of-day

      let score = 0;
      score += sameHourWeight * (hourDiff(self.bucket) == 0 ? 1 : 0);
      score += adjacentHourWeight * (hourDiff(self.bucket) == 1 ? 1 : 0);
      // score += recencyWeight * (60 / (1 + self.lastOrderedMinAgo));
      score += countWeight * self.count;

      return score;
    },
  })
).actions((self) => ({
  // This is an auto-generated example action.
  log() {
    console.log(JSON.stringify(self));
  },
}));
