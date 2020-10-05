import { Instance } from "mobx-state-tree"
import { OrderItemsByHourMinFieldsModelBase } from "./OrderItemsByHourMinFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourMinFieldsModel */
export interface OrderItemsByHourMinFieldsModelType extends Instance<typeof OrderItemsByHourMinFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourMinFieldsModel */
export { selectFromOrderItemsByHourMinFields, orderItemsByHourMinFieldsModelPrimitives, OrderItemsByHourMinFieldsModelSelector } from "./OrderItemsByHourMinFieldsModel.base"

/**
 * OrderItemsByHourMinFieldsModel
 *
 * aggregate min on columns
 */
export const OrderItemsByHourMinFieldsModel = OrderItemsByHourMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
