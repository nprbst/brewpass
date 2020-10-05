import { Instance } from "mobx-state-tree"
import { OrderItems10MinsVarSampFieldsModelBase } from "./OrderItems10MinsVarSampFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsVarSampFieldsModel */
export interface OrderItems10MinsVarSampFieldsModelType extends Instance<typeof OrderItems10MinsVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsVarSampFieldsModel */
export { selectFromOrderItems10MinsVarSampFields, orderItems10MinsVarSampFieldsModelPrimitives, OrderItems10MinsVarSampFieldsModelSelector } from "./OrderItems10MinsVarSampFieldsModel.base"

/**
 * OrderItems10MinsVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const OrderItems10MinsVarSampFieldsModel = OrderItems10MinsVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
