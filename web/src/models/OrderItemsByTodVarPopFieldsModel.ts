import { Instance } from "mobx-state-tree"
import { OrderItemsByTodVarPopFieldsModelBase } from "./OrderItemsByTodVarPopFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodVarPopFieldsModel */
export interface OrderItemsByTodVarPopFieldsModelType extends Instance<typeof OrderItemsByTodVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodVarPopFieldsModel */
export { selectFromOrderItemsByTodVarPopFields, orderItemsByTodVarPopFieldsModelPrimitives, OrderItemsByTodVarPopFieldsModelSelector } from "./OrderItemsByTodVarPopFieldsModel.base"

/**
 * OrderItemsByTodVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const OrderItemsByTodVarPopFieldsModel = OrderItemsByTodVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
