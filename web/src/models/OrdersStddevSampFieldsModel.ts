import { Instance } from "mobx-state-tree"
import { OrdersStddevSampFieldsModelBase } from "./OrdersStddevSampFieldsModel.base"

/* The TypeScript type of an instance of OrdersStddevSampFieldsModel */
export interface OrdersStddevSampFieldsModelType extends Instance<typeof OrdersStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersStddevSampFieldsModel */
export { selectFromOrdersStddevSampFields, ordersStddevSampFieldsModelPrimitives, OrdersStddevSampFieldsModelSelector } from "./OrdersStddevSampFieldsModel.base"

/**
 * OrdersStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const OrdersStddevSampFieldsModel = OrdersStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
