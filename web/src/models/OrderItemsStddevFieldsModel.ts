import { Instance } from "mobx-state-tree"
import { OrderItemsStddevFieldsModelBase } from "./OrderItemsStddevFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsStddevFieldsModel */
export interface OrderItemsStddevFieldsModelType extends Instance<typeof OrderItemsStddevFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsStddevFieldsModel */
export { selectFromOrderItemsStddevFields, orderItemsStddevFieldsModelPrimitives, OrderItemsStddevFieldsModelSelector } from "./OrderItemsStddevFieldsModel.base"

/**
 * OrderItemsStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const OrderItemsStddevFieldsModel = OrderItemsStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
