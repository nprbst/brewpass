import { Instance } from "mobx-state-tree"
import { OrderItems10MinsAvgFieldsModelBase } from "./OrderItems10MinsAvgFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsAvgFieldsModel */
export interface OrderItems10MinsAvgFieldsModelType extends Instance<typeof OrderItems10MinsAvgFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsAvgFieldsModel */
export { selectFromOrderItems10MinsAvgFields, orderItems10MinsAvgFieldsModelPrimitives, OrderItems10MinsAvgFieldsModelSelector } from "./OrderItems10MinsAvgFieldsModel.base"

/**
 * OrderItems10MinsAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const OrderItems10MinsAvgFieldsModel = OrderItems10MinsAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
