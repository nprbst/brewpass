import { Instance } from "mobx-state-tree"
import { OrderItemsByHourStddevSampFieldsModelBase } from "./OrderItemsByHourStddevSampFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourStddevSampFieldsModel */
export interface OrderItemsByHourStddevSampFieldsModelType extends Instance<typeof OrderItemsByHourStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourStddevSampFieldsModel */
export { selectFromOrderItemsByHourStddevSampFields, orderItemsByHourStddevSampFieldsModelPrimitives, OrderItemsByHourStddevSampFieldsModelSelector } from "./OrderItemsByHourStddevSampFieldsModel.base"

/**
 * OrderItemsByHourStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const OrderItemsByHourStddevSampFieldsModel = OrderItemsByHourStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
