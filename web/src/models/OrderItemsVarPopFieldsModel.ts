import { Instance } from "mobx-state-tree"
import { OrderItemsVarPopFieldsModelBase } from "./OrderItemsVarPopFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsVarPopFieldsModel */
export interface OrderItemsVarPopFieldsModelType extends Instance<typeof OrderItemsVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsVarPopFieldsModel */
export { selectFromOrderItemsVarPopFields, orderItemsVarPopFieldsModelPrimitives, OrderItemsVarPopFieldsModelSelector } from "./OrderItemsVarPopFieldsModel.base"

/**
 * OrderItemsVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const OrderItemsVarPopFieldsModel = OrderItemsVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
