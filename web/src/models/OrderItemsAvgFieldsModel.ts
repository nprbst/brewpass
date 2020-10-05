import { Instance } from "mobx-state-tree"
import { OrderItemsAvgFieldsModelBase } from "./OrderItemsAvgFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsAvgFieldsModel */
export interface OrderItemsAvgFieldsModelType extends Instance<typeof OrderItemsAvgFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsAvgFieldsModel */
export { selectFromOrderItemsAvgFields, orderItemsAvgFieldsModelPrimitives, OrderItemsAvgFieldsModelSelector } from "./OrderItemsAvgFieldsModel.base"

/**
 * OrderItemsAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const OrderItemsAvgFieldsModel = OrderItemsAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
