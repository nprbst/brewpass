import { Instance } from "mobx-state-tree"
import { OrdersMaxFieldsModelBase } from "./OrdersMaxFieldsModel.base"

/* The TypeScript type of an instance of OrdersMaxFieldsModel */
export interface OrdersMaxFieldsModelType extends Instance<typeof OrdersMaxFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersMaxFieldsModel */
export { selectFromOrdersMaxFields, ordersMaxFieldsModelPrimitives, OrdersMaxFieldsModelSelector } from "./OrdersMaxFieldsModel.base"

/**
 * OrdersMaxFieldsModel
 *
 * aggregate max on columns
 */
export const OrdersMaxFieldsModel = OrdersMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
