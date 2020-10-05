import { Instance } from "mobx-state-tree"
import { OrdersMinFieldsModelBase } from "./OrdersMinFieldsModel.base"

/* The TypeScript type of an instance of OrdersMinFieldsModel */
export interface OrdersMinFieldsModelType extends Instance<typeof OrdersMinFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersMinFieldsModel */
export { selectFromOrdersMinFields, ordersMinFieldsModelPrimitives, OrdersMinFieldsModelSelector } from "./OrdersMinFieldsModel.base"

/**
 * OrdersMinFieldsModel
 *
 * aggregate min on columns
 */
export const OrdersMinFieldsModel = OrdersMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
