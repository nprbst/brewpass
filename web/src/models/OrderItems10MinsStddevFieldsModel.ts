import { Instance } from "mobx-state-tree"
import { OrderItems10MinsStddevFieldsModelBase } from "./OrderItems10MinsStddevFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsStddevFieldsModel */
export interface OrderItems10MinsStddevFieldsModelType extends Instance<typeof OrderItems10MinsStddevFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsStddevFieldsModel */
export { selectFromOrderItems10MinsStddevFields, orderItems10MinsStddevFieldsModelPrimitives, OrderItems10MinsStddevFieldsModelSelector } from "./OrderItems10MinsStddevFieldsModel.base"

/**
 * OrderItems10MinsStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const OrderItems10MinsStddevFieldsModel = OrderItems10MinsStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
