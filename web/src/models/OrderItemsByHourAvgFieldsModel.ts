import { Instance } from "mobx-state-tree"
import { OrderItemsByHourAvgFieldsModelBase } from "./OrderItemsByHourAvgFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourAvgFieldsModel */
export interface OrderItemsByHourAvgFieldsModelType extends Instance<typeof OrderItemsByHourAvgFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourAvgFieldsModel */
export { selectFromOrderItemsByHourAvgFields, orderItemsByHourAvgFieldsModelPrimitives, OrderItemsByHourAvgFieldsModelSelector } from "./OrderItemsByHourAvgFieldsModel.base"

/**
 * OrderItemsByHourAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const OrderItemsByHourAvgFieldsModel = OrderItemsByHourAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
