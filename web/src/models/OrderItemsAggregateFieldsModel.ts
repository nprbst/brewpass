import { Instance } from "mobx-state-tree"
import { OrderItemsAggregateFieldsModelBase } from "./OrderItemsAggregateFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsAggregateFieldsModel */
export interface OrderItemsAggregateFieldsModelType extends Instance<typeof OrderItemsAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsAggregateFieldsModel */
export { selectFromOrderItemsAggregateFields, orderItemsAggregateFieldsModelPrimitives, OrderItemsAggregateFieldsModelSelector } from "./OrderItemsAggregateFieldsModel.base"

/**
 * OrderItemsAggregateFieldsModel
 *
 * aggregate fields of "order_items"
 */
export const OrderItemsAggregateFieldsModel = OrderItemsAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
