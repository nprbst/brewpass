import { Instance } from "mobx-state-tree"
import { OrderItemsByHourAggregateModelBase } from "./OrderItemsByHourAggregateModel.base"

/* The TypeScript type of an instance of OrderItemsByHourAggregateModel */
export interface OrderItemsByHourAggregateModelType extends Instance<typeof OrderItemsByHourAggregateModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourAggregateModel */
export { selectFromOrderItemsByHourAggregate, orderItemsByHourAggregateModelPrimitives, OrderItemsByHourAggregateModelSelector } from "./OrderItemsByHourAggregateModel.base"

/**
 * OrderItemsByHourAggregateModel
 *
 * aggregated selection of "order_items_by_hour"
 */
export const OrderItemsByHourAggregateModel = OrderItemsByHourAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
