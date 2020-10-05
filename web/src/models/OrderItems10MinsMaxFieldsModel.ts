import { Instance } from "mobx-state-tree"
import { OrderItems10MinsMaxFieldsModelBase } from "./OrderItems10MinsMaxFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsMaxFieldsModel */
export interface OrderItems10MinsMaxFieldsModelType extends Instance<typeof OrderItems10MinsMaxFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsMaxFieldsModel */
export { selectFromOrderItems10MinsMaxFields, orderItems10MinsMaxFieldsModelPrimitives, OrderItems10MinsMaxFieldsModelSelector } from "./OrderItems10MinsMaxFieldsModel.base"

/**
 * OrderItems10MinsMaxFieldsModel
 *
 * aggregate max on columns
 */
export const OrderItems10MinsMaxFieldsModel = OrderItems10MinsMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
