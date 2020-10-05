import { Instance } from "mobx-state-tree"
import { OrderItems10MinsAggregateFieldsModelBase } from "./OrderItems10MinsAggregateFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsAggregateFieldsModel */
export interface OrderItems10MinsAggregateFieldsModelType extends Instance<typeof OrderItems10MinsAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsAggregateFieldsModel */
export { selectFromOrderItems10MinsAggregateFields, orderItems10MinsAggregateFieldsModelPrimitives, OrderItems10MinsAggregateFieldsModelSelector } from "./OrderItems10MinsAggregateFieldsModel.base"

/**
 * OrderItems10MinsAggregateFieldsModel
 *
 * aggregate fields of "order_items_10_mins"
 */
export const OrderItems10MinsAggregateFieldsModel = OrderItems10MinsAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
