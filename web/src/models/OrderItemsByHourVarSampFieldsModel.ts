import { Instance } from "mobx-state-tree"
import { OrderItemsByHourVarSampFieldsModelBase } from "./OrderItemsByHourVarSampFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourVarSampFieldsModel */
export interface OrderItemsByHourVarSampFieldsModelType extends Instance<typeof OrderItemsByHourVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourVarSampFieldsModel */
export { selectFromOrderItemsByHourVarSampFields, orderItemsByHourVarSampFieldsModelPrimitives, OrderItemsByHourVarSampFieldsModelSelector } from "./OrderItemsByHourVarSampFieldsModel.base"

/**
 * OrderItemsByHourVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const OrderItemsByHourVarSampFieldsModel = OrderItemsByHourVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
