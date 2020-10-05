import { Instance } from "mobx-state-tree"
import { OrdersAvgFieldsModelBase } from "./OrdersAvgFieldsModel.base"

/* The TypeScript type of an instance of OrdersAvgFieldsModel */
export interface OrdersAvgFieldsModelType extends Instance<typeof OrdersAvgFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersAvgFieldsModel */
export { selectFromOrdersAvgFields, ordersAvgFieldsModelPrimitives, OrdersAvgFieldsModelSelector } from "./OrdersAvgFieldsModel.base"

/**
 * OrdersAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const OrdersAvgFieldsModel = OrdersAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
