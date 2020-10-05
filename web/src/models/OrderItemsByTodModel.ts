import { Instance, types } from "mobx-state-tree";
import { OrderItemsByTodModelBase } from "./OrderItemsByTodModel.base";

/* The TypeScript type of an instance of OrderItemsByTodModel */
export interface OrderItemsByTodModelType
  extends Instance<typeof OrderItemsByTodModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodModel */
export {
  selectFromOrderItemsByTod,
  orderItemsByTodModelPrimitives,
  OrderItemsByTodModelSelector,
} from "./OrderItemsByTodModel.base";

function minAgo(now: Date, then: string): number {
  return (now.valueOf() - new Date(then).valueOf()) / (60 * 1000);
}

function hoursDiff(now: Date, then: number): number {
  const thisHour = now.getHours();
  return Math.abs(then - thisHour);
}

/**
 * OrderItemsByTodModel
 *
 * columns and relationships of "order_items_by_tod"
 */
export const OrderItemsByTodModel = OrderItemsByTodModelBase.props({
  id: types.identifier,
})
  .views((self) => ({
    heuristicScore(now: Date) {
      const sameHourWeight = 10;
      const adjacentHourWeight = 5;
      const recencyWeight = 2;
      const countWeight = 1;

      let score = 0;
      score += countWeight * self.count;
      score += sameHourWeight * (hoursDiff(now, self.hour_of_day) == 0 ? 1 : 0);
      score +=
        adjacentHourWeight * (hoursDiff(now, self.hour_of_day) == 1 ? 1 : 0);
      score += recencyWeight * (60 / minAgo(now, self.last_order));

      return score;
    },
  }))
  .actions((self) => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self));
    },
  }));
