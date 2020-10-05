import { Instance } from "mobx-state-tree"
import { OrderItemsVarianceFieldsModelBase } from "./OrderItemsVarianceFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsVarianceFieldsModel */
export interface OrderItemsVarianceFieldsModelType extends Instance<typeof OrderItemsVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsVarianceFieldsModel */
export { selectFromOrderItemsVarianceFields, orderItemsVarianceFieldsModelPrimitives, OrderItemsVarianceFieldsModelSelector } from "./OrderItemsVarianceFieldsModel.base"

/**
 * OrderItemsVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const OrderItemsVarianceFieldsModel = OrderItemsVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
