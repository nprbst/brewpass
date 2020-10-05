import { Instance } from "mobx-state-tree"
import { OrderItemsByHourMaxFieldsModelBase } from "./OrderItemsByHourMaxFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourMaxFieldsModel */
export interface OrderItemsByHourMaxFieldsModelType extends Instance<typeof OrderItemsByHourMaxFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourMaxFieldsModel */
export { selectFromOrderItemsByHourMaxFields, orderItemsByHourMaxFieldsModelPrimitives, OrderItemsByHourMaxFieldsModelSelector } from "./OrderItemsByHourMaxFieldsModel.base"

/**
 * OrderItemsByHourMaxFieldsModel
 *
 * aggregate max on columns
 */
export const OrderItemsByHourMaxFieldsModel = OrderItemsByHourMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
