import { Instance } from "mobx-state-tree"
import { OrderItemsAggregateModelBase } from "./OrderItemsAggregateModel.base"

/* The TypeScript type of an instance of OrderItemsAggregateModel */
export interface OrderItemsAggregateModelType extends Instance<typeof OrderItemsAggregateModel.Type> {}

/* A graphql query fragment builders for OrderItemsAggregateModel */
export { selectFromOrderItemsAggregate, orderItemsAggregateModelPrimitives, OrderItemsAggregateModelSelector } from "./OrderItemsAggregateModel.base"

/**
 * OrderItemsAggregateModel
 *
 * aggregated selection of "order_items"
 */
export const OrderItemsAggregateModel = OrderItemsAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
