import { Instance } from "mobx-state-tree"
import { OrdersVarSampFieldsModelBase } from "./OrdersVarSampFieldsModel.base"

/* The TypeScript type of an instance of OrdersVarSampFieldsModel */
export interface OrdersVarSampFieldsModelType extends Instance<typeof OrdersVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersVarSampFieldsModel */
export { selectFromOrdersVarSampFields, ordersVarSampFieldsModelPrimitives, OrdersVarSampFieldsModelSelector } from "./OrdersVarSampFieldsModel.base"

/**
 * OrdersVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const OrdersVarSampFieldsModel = OrdersVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
