import { Instance } from "mobx-state-tree"
import { OrderItemsStddevPopFieldsModelBase } from "./OrderItemsStddevPopFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsStddevPopFieldsModel */
export interface OrderItemsStddevPopFieldsModelType extends Instance<typeof OrderItemsStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsStddevPopFieldsModel */
export { selectFromOrderItemsStddevPopFields, orderItemsStddevPopFieldsModelPrimitives, OrderItemsStddevPopFieldsModelSelector } from "./OrderItemsStddevPopFieldsModel.base"

/**
 * OrderItemsStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const OrderItemsStddevPopFieldsModel = OrderItemsStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
