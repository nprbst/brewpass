import { Instance } from "mobx-state-tree"
import { OrdersAggregateModelBase } from "./OrdersAggregateModel.base"

/* The TypeScript type of an instance of OrdersAggregateModel */
export interface OrdersAggregateModelType extends Instance<typeof OrdersAggregateModel.Type> {}

/* A graphql query fragment builders for OrdersAggregateModel */
export { selectFromOrdersAggregate, ordersAggregateModelPrimitives, OrdersAggregateModelSelector } from "./OrdersAggregateModel.base"

/**
 * OrdersAggregateModel
 *
 * aggregated selection of "orders"
 */
export const OrdersAggregateModel = OrdersAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
