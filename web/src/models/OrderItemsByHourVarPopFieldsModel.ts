import { Instance } from "mobx-state-tree"
import { OrderItemsByHourVarPopFieldsModelBase } from "./OrderItemsByHourVarPopFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourVarPopFieldsModel */
export interface OrderItemsByHourVarPopFieldsModelType extends Instance<typeof OrderItemsByHourVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourVarPopFieldsModel */
export { selectFromOrderItemsByHourVarPopFields, orderItemsByHourVarPopFieldsModelPrimitives, OrderItemsByHourVarPopFieldsModelSelector } from "./OrderItemsByHourVarPopFieldsModel.base"

/**
 * OrderItemsByHourVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const OrderItemsByHourVarPopFieldsModel = OrderItemsByHourVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
