import { Instance } from "mobx-state-tree"
import { OrderItemsStddevSampFieldsModelBase } from "./OrderItemsStddevSampFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsStddevSampFieldsModel */
export interface OrderItemsStddevSampFieldsModelType extends Instance<typeof OrderItemsStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsStddevSampFieldsModel */
export { selectFromOrderItemsStddevSampFields, orderItemsStddevSampFieldsModelPrimitives, OrderItemsStddevSampFieldsModelSelector } from "./OrderItemsStddevSampFieldsModel.base"

/**
 * OrderItemsStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const OrderItemsStddevSampFieldsModel = OrderItemsStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
