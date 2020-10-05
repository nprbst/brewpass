import { Instance } from "mobx-state-tree"
import { OrderItemsVarSampFieldsModelBase } from "./OrderItemsVarSampFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsVarSampFieldsModel */
export interface OrderItemsVarSampFieldsModelType extends Instance<typeof OrderItemsVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsVarSampFieldsModel */
export { selectFromOrderItemsVarSampFields, orderItemsVarSampFieldsModelPrimitives, OrderItemsVarSampFieldsModelSelector } from "./OrderItemsVarSampFieldsModel.base"

/**
 * OrderItemsVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const OrderItemsVarSampFieldsModel = OrderItemsVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
