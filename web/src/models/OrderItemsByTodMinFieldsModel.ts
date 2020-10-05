import { Instance } from "mobx-state-tree"
import { OrderItemsByTodMinFieldsModelBase } from "./OrderItemsByTodMinFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodMinFieldsModel */
export interface OrderItemsByTodMinFieldsModelType extends Instance<typeof OrderItemsByTodMinFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodMinFieldsModel */
export { selectFromOrderItemsByTodMinFields, orderItemsByTodMinFieldsModelPrimitives, OrderItemsByTodMinFieldsModelSelector } from "./OrderItemsByTodMinFieldsModel.base"

/**
 * OrderItemsByTodMinFieldsModel
 *
 * aggregate min on columns
 */
export const OrderItemsByTodMinFieldsModel = OrderItemsByTodMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
