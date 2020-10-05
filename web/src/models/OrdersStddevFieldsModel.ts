import { Instance } from "mobx-state-tree"
import { OrdersStddevFieldsModelBase } from "./OrdersStddevFieldsModel.base"

/* The TypeScript type of an instance of OrdersStddevFieldsModel */
export interface OrdersStddevFieldsModelType extends Instance<typeof OrdersStddevFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersStddevFieldsModel */
export { selectFromOrdersStddevFields, ordersStddevFieldsModelPrimitives, OrdersStddevFieldsModelSelector } from "./OrdersStddevFieldsModel.base"

/**
 * OrdersStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const OrdersStddevFieldsModel = OrdersStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
