import { Instance } from "mobx-state-tree"
import { OrderItemsByTodAggregateFieldsModelBase } from "./OrderItemsByTodAggregateFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodAggregateFieldsModel */
export interface OrderItemsByTodAggregateFieldsModelType extends Instance<typeof OrderItemsByTodAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodAggregateFieldsModel */
export { selectFromOrderItemsByTodAggregateFields, orderItemsByTodAggregateFieldsModelPrimitives, OrderItemsByTodAggregateFieldsModelSelector } from "./OrderItemsByTodAggregateFieldsModel.base"

/**
 * OrderItemsByTodAggregateFieldsModel
 *
 * aggregate fields of "order_items_by_tod"
 */
export const OrderItemsByTodAggregateFieldsModel = OrderItemsByTodAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
