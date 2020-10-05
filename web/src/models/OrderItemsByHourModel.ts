import { Instance, types } from "mobx-state-tree";
import { OrderItemsByHourModelBase } from "./OrderItemsByHourModel.base";

/* The TypeScript type of an instance of OrderItemsByHourModel */
export interface OrderItemsByHourModelType
  extends Instance<typeof OrderItemsByHourModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourModel */
export {
  selectFromOrderItemsByHour,
  orderItemsByHourModelPrimitives,
  OrderItemsByHourModelSelector,
} from "./OrderItemsByHourModel.base";

function minAgo(now: Date, then: string): number {
  return (now.valueOf() - new Date(then).valueOf()) / (60 * 1000);
}

function hoursDiff(now: Date, then: number): number {
  const thisHour = now.getHours();
  return Math.abs(then - thisHour);
}

/**
 * OrderItemsByHourModel
 *
 * columns and relationships of "order_items_by_hour"
 */
export const OrderItemsByHourModel = OrderItemsByHourModelBase.props({
  id: types.identifier,
})
  .views((self) => ({
    heuristicScore(now: Date) {
      const hourBandBoost = hoursDiff(now, self.hour_of_day) <= 2 ? 1.5 : 1.0;
      const recencyWeight = 0.5;
      const countWeight = 2;

      let score = 0;
      score += countWeight * self.count;
      score += recencyWeight * (60 / (30 + minAgo(now, self.last_order)));
      score *= hourBandBoost;

      console.log(
        "[" + self.id + "]",
        score,
        ":",
        self.count,
        minAgo(now, self.last_order),
        hoursDiff(now, self.hour_of_day),
        self.last_order
      );

      return score;
    },
  }))
  .actions((self) => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self));
    },
  }));
