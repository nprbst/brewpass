import { Instance } from "mobx-state-tree"
import { OrdersStddevPopFieldsModelBase } from "./OrdersStddevPopFieldsModel.base"

/* The TypeScript type of an instance of OrdersStddevPopFieldsModel */
export interface OrdersStddevPopFieldsModelType extends Instance<typeof OrdersStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersStddevPopFieldsModel */
export { selectFromOrdersStddevPopFields, ordersStddevPopFieldsModelPrimitives, OrdersStddevPopFieldsModelSelector } from "./OrdersStddevPopFieldsModel.base"

/**
 * OrdersStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const OrdersStddevPopFieldsModel = OrdersStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
