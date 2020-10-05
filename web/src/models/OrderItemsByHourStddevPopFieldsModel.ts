import { Instance } from "mobx-state-tree"
import { OrderItemsByHourStddevPopFieldsModelBase } from "./OrderItemsByHourStddevPopFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourStddevPopFieldsModel */
export interface OrderItemsByHourStddevPopFieldsModelType extends Instance<typeof OrderItemsByHourStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourStddevPopFieldsModel */
export { selectFromOrderItemsByHourStddevPopFields, orderItemsByHourStddevPopFieldsModelPrimitives, OrderItemsByHourStddevPopFieldsModelSelector } from "./OrderItemsByHourStddevPopFieldsModel.base"

/**
 * OrderItemsByHourStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const OrderItemsByHourStddevPopFieldsModel = OrderItemsByHourStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
