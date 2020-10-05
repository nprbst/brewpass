import { Instance } from "mobx-state-tree"
import { OrderItemsMinFieldsModelBase } from "./OrderItemsMinFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsMinFieldsModel */
export interface OrderItemsMinFieldsModelType extends Instance<typeof OrderItemsMinFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsMinFieldsModel */
export { selectFromOrderItemsMinFields, orderItemsMinFieldsModelPrimitives, OrderItemsMinFieldsModelSelector } from "./OrderItemsMinFieldsModel.base"

/**
 * OrderItemsMinFieldsModel
 *
 * aggregate min on columns
 */
export const OrderItemsMinFieldsModel = OrderItemsMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
