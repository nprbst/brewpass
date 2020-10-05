import { Instance } from "mobx-state-tree"
import { OrderItemsByTodStddevFieldsModelBase } from "./OrderItemsByTodStddevFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodStddevFieldsModel */
export interface OrderItemsByTodStddevFieldsModelType extends Instance<typeof OrderItemsByTodStddevFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodStddevFieldsModel */
export { selectFromOrderItemsByTodStddevFields, orderItemsByTodStddevFieldsModelPrimitives, OrderItemsByTodStddevFieldsModelSelector } from "./OrderItemsByTodStddevFieldsModel.base"

/**
 * OrderItemsByTodStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const OrderItemsByTodStddevFieldsModel = OrderItemsByTodStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
