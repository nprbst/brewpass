import { Instance } from "mobx-state-tree"
import { OrderItemsByHourStddevFieldsModelBase } from "./OrderItemsByHourStddevFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourStddevFieldsModel */
export interface OrderItemsByHourStddevFieldsModelType extends Instance<typeof OrderItemsByHourStddevFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourStddevFieldsModel */
export { selectFromOrderItemsByHourStddevFields, orderItemsByHourStddevFieldsModelPrimitives, OrderItemsByHourStddevFieldsModelSelector } from "./OrderItemsByHourStddevFieldsModel.base"

/**
 * OrderItemsByHourStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const OrderItemsByHourStddevFieldsModel = OrderItemsByHourStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
