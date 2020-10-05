import { Instance } from "mobx-state-tree"
import { OrderItemsByTodSumFieldsModelBase } from "./OrderItemsByTodSumFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodSumFieldsModel */
export interface OrderItemsByTodSumFieldsModelType extends Instance<typeof OrderItemsByTodSumFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodSumFieldsModel */
export { selectFromOrderItemsByTodSumFields, orderItemsByTodSumFieldsModelPrimitives, OrderItemsByTodSumFieldsModelSelector } from "./OrderItemsByTodSumFieldsModel.base"

/**
 * OrderItemsByTodSumFieldsModel
 *
 * aggregate sum on columns
 */
export const OrderItemsByTodSumFieldsModel = OrderItemsByTodSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
