import { Instance } from "mobx-state-tree"
import { OrderItems10MinsVarianceFieldsModelBase } from "./OrderItems10MinsVarianceFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsVarianceFieldsModel */
export interface OrderItems10MinsVarianceFieldsModelType extends Instance<typeof OrderItems10MinsVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsVarianceFieldsModel */
export { selectFromOrderItems10MinsVarianceFields, orderItems10MinsVarianceFieldsModelPrimitives, OrderItems10MinsVarianceFieldsModelSelector } from "./OrderItems10MinsVarianceFieldsModel.base"

/**
 * OrderItems10MinsVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const OrderItems10MinsVarianceFieldsModel = OrderItems10MinsVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
