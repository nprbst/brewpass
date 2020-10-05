import { Instance } from "mobx-state-tree"
import { OrderItems10MinsVarPopFieldsModelBase } from "./OrderItems10MinsVarPopFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsVarPopFieldsModel */
export interface OrderItems10MinsVarPopFieldsModelType extends Instance<typeof OrderItems10MinsVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsVarPopFieldsModel */
export { selectFromOrderItems10MinsVarPopFields, orderItems10MinsVarPopFieldsModelPrimitives, OrderItems10MinsVarPopFieldsModelSelector } from "./OrderItems10MinsVarPopFieldsModel.base"

/**
 * OrderItems10MinsVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const OrderItems10MinsVarPopFieldsModel = OrderItems10MinsVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
