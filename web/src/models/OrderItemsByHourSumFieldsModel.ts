import { Instance } from "mobx-state-tree"
import { OrderItemsByHourSumFieldsModelBase } from "./OrderItemsByHourSumFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourSumFieldsModel */
export interface OrderItemsByHourSumFieldsModelType extends Instance<typeof OrderItemsByHourSumFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourSumFieldsModel */
export { selectFromOrderItemsByHourSumFields, orderItemsByHourSumFieldsModelPrimitives, OrderItemsByHourSumFieldsModelSelector } from "./OrderItemsByHourSumFieldsModel.base"

/**
 * OrderItemsByHourSumFieldsModel
 *
 * aggregate sum on columns
 */
export const OrderItemsByHourSumFieldsModel = OrderItemsByHourSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
