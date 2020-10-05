import { Instance } from "mobx-state-tree"
import { OrderItemsByTodVarSampFieldsModelBase } from "./OrderItemsByTodVarSampFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodVarSampFieldsModel */
export interface OrderItemsByTodVarSampFieldsModelType extends Instance<typeof OrderItemsByTodVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodVarSampFieldsModel */
export { selectFromOrderItemsByTodVarSampFields, orderItemsByTodVarSampFieldsModelPrimitives, OrderItemsByTodVarSampFieldsModelSelector } from "./OrderItemsByTodVarSampFieldsModel.base"

/**
 * OrderItemsByTodVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const OrderItemsByTodVarSampFieldsModel = OrderItemsByTodVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
