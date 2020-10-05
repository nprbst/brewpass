import { Instance } from "mobx-state-tree"
import { OrderItemsModelBase } from "./OrderItemsModel.base"

/* The TypeScript type of an instance of OrderItemsModel */
export interface OrderItemsModelType extends Instance<typeof OrderItemsModel.Type> {}

/* A graphql query fragment builders for OrderItemsModel */
export { selectFromOrderItems, orderItemsModelPrimitives, OrderItemsModelSelector } from "./OrderItemsModel.base"

/**
 * OrderItemsModel
 *
 * columns and relationships of "order_items"
 */
export const OrderItemsModel = OrderItemsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
