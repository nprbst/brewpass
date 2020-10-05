import { Instance } from "mobx-state-tree"
import { OrderItems10MinsAggregateModelBase } from "./OrderItems10MinsAggregateModel.base"

/* The TypeScript type of an instance of OrderItems10MinsAggregateModel */
export interface OrderItems10MinsAggregateModelType extends Instance<typeof OrderItems10MinsAggregateModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsAggregateModel */
export { selectFromOrderItems10MinsAggregate, orderItems10MinsAggregateModelPrimitives, OrderItems10MinsAggregateModelSelector } from "./OrderItems10MinsAggregateModel.base"

/**
 * OrderItems10MinsAggregateModel
 *
 * aggregated selection of "order_items_10_mins"
 */
export const OrderItems10MinsAggregateModel = OrderItems10MinsAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
