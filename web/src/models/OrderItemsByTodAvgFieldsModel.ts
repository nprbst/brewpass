import { Instance } from "mobx-state-tree"
import { OrderItemsByTodAvgFieldsModelBase } from "./OrderItemsByTodAvgFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodAvgFieldsModel */
export interface OrderItemsByTodAvgFieldsModelType extends Instance<typeof OrderItemsByTodAvgFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodAvgFieldsModel */
export { selectFromOrderItemsByTodAvgFields, orderItemsByTodAvgFieldsModelPrimitives, OrderItemsByTodAvgFieldsModelSelector } from "./OrderItemsByTodAvgFieldsModel.base"

/**
 * OrderItemsByTodAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const OrderItemsByTodAvgFieldsModel = OrderItemsByTodAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
