import { Instance } from "mobx-state-tree"
import { OrderItemsByHourAggregateFieldsModelBase } from "./OrderItemsByHourAggregateFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourAggregateFieldsModel */
export interface OrderItemsByHourAggregateFieldsModelType extends Instance<typeof OrderItemsByHourAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourAggregateFieldsModel */
export { selectFromOrderItemsByHourAggregateFields, orderItemsByHourAggregateFieldsModelPrimitives, OrderItemsByHourAggregateFieldsModelSelector } from "./OrderItemsByHourAggregateFieldsModel.base"

/**
 * OrderItemsByHourAggregateFieldsModel
 *
 * aggregate fields of "order_items_by_hour"
 */
export const OrderItemsByHourAggregateFieldsModel = OrderItemsByHourAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
