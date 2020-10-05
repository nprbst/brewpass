import { Instance } from "mobx-state-tree"
import { OrderItems10MinsStddevSampFieldsModelBase } from "./OrderItems10MinsStddevSampFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsStddevSampFieldsModel */
export interface OrderItems10MinsStddevSampFieldsModelType extends Instance<typeof OrderItems10MinsStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsStddevSampFieldsModel */
export { selectFromOrderItems10MinsStddevSampFields, orderItems10MinsStddevSampFieldsModelPrimitives, OrderItems10MinsStddevSampFieldsModelSelector } from "./OrderItems10MinsStddevSampFieldsModel.base"

/**
 * OrderItems10MinsStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const OrderItems10MinsStddevSampFieldsModel = OrderItems10MinsStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
