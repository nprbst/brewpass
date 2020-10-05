import { Instance } from "mobx-state-tree"
import { OrderItems10MinsStddevPopFieldsModelBase } from "./OrderItems10MinsStddevPopFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsStddevPopFieldsModel */
export interface OrderItems10MinsStddevPopFieldsModelType extends Instance<typeof OrderItems10MinsStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsStddevPopFieldsModel */
export { selectFromOrderItems10MinsStddevPopFields, orderItems10MinsStddevPopFieldsModelPrimitives, OrderItems10MinsStddevPopFieldsModelSelector } from "./OrderItems10MinsStddevPopFieldsModel.base"

/**
 * OrderItems10MinsStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const OrderItems10MinsStddevPopFieldsModel = OrderItems10MinsStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
