import { Instance } from "mobx-state-tree"
import { OrderItemsByTodAggregateModelBase } from "./OrderItemsByTodAggregateModel.base"

/* The TypeScript type of an instance of OrderItemsByTodAggregateModel */
export interface OrderItemsByTodAggregateModelType extends Instance<typeof OrderItemsByTodAggregateModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodAggregateModel */
export { selectFromOrderItemsByTodAggregate, orderItemsByTodAggregateModelPrimitives, OrderItemsByTodAggregateModelSelector } from "./OrderItemsByTodAggregateModel.base"

/**
 * OrderItemsByTodAggregateModel
 *
 * aggregated selection of "order_items_by_tod"
 */
export const OrderItemsByTodAggregateModel = OrderItemsByTodAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
