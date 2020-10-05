import { Instance } from "mobx-state-tree"
import { OrderItems10MinsMinFieldsModelBase } from "./OrderItems10MinsMinFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsMinFieldsModel */
export interface OrderItems10MinsMinFieldsModelType extends Instance<typeof OrderItems10MinsMinFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsMinFieldsModel */
export { selectFromOrderItems10MinsMinFields, orderItems10MinsMinFieldsModelPrimitives, OrderItems10MinsMinFieldsModelSelector } from "./OrderItems10MinsMinFieldsModel.base"

/**
 * OrderItems10MinsMinFieldsModel
 *
 * aggregate min on columns
 */
export const OrderItems10MinsMinFieldsModel = OrderItems10MinsMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
