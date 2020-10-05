import { Instance } from "mobx-state-tree"
import { OrdersModelBase } from "./OrdersModel.base"

/* The TypeScript type of an instance of OrdersModel */
export interface OrdersModelType extends Instance<typeof OrdersModel.Type> {}

/* A graphql query fragment builders for OrdersModel */
export { selectFromOrders, ordersModelPrimitives, OrdersModelSelector } from "./OrdersModel.base"

/**
 * OrdersModel
 *
 * columns and relationships of "orders"
 */
export const OrdersModel = OrdersModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
