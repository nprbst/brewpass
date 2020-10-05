import { Instance } from "mobx-state-tree"
import { OrdersVarPopFieldsModelBase } from "./OrdersVarPopFieldsModel.base"

/* The TypeScript type of an instance of OrdersVarPopFieldsModel */
export interface OrdersVarPopFieldsModelType extends Instance<typeof OrdersVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersVarPopFieldsModel */
export { selectFromOrdersVarPopFields, ordersVarPopFieldsModelPrimitives, OrdersVarPopFieldsModelSelector } from "./OrdersVarPopFieldsModel.base"

/**
 * OrdersVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const OrdersVarPopFieldsModel = OrdersVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
