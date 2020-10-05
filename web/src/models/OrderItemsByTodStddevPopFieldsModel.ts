import { Instance } from "mobx-state-tree"
import { OrderItemsByTodStddevPopFieldsModelBase } from "./OrderItemsByTodStddevPopFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodStddevPopFieldsModel */
export interface OrderItemsByTodStddevPopFieldsModelType extends Instance<typeof OrderItemsByTodStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodStddevPopFieldsModel */
export { selectFromOrderItemsByTodStddevPopFields, orderItemsByTodStddevPopFieldsModelPrimitives, OrderItemsByTodStddevPopFieldsModelSelector } from "./OrderItemsByTodStddevPopFieldsModel.base"

/**
 * OrderItemsByTodStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const OrderItemsByTodStddevPopFieldsModel = OrderItemsByTodStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
