import { Instance } from "mobx-state-tree"
import { OrdersAggregateFieldsModelBase } from "./OrdersAggregateFieldsModel.base"

/* The TypeScript type of an instance of OrdersAggregateFieldsModel */
export interface OrdersAggregateFieldsModelType extends Instance<typeof OrdersAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersAggregateFieldsModel */
export { selectFromOrdersAggregateFields, ordersAggregateFieldsModelPrimitives, OrdersAggregateFieldsModelSelector } from "./OrdersAggregateFieldsModel.base"

/**
 * OrdersAggregateFieldsModel
 *
 * aggregate fields of "orders"
 */
export const OrdersAggregateFieldsModel = OrdersAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
