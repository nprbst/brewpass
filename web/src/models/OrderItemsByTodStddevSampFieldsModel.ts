import { Instance } from "mobx-state-tree"
import { OrderItemsByTodStddevSampFieldsModelBase } from "./OrderItemsByTodStddevSampFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodStddevSampFieldsModel */
export interface OrderItemsByTodStddevSampFieldsModelType extends Instance<typeof OrderItemsByTodStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodStddevSampFieldsModel */
export { selectFromOrderItemsByTodStddevSampFields, orderItemsByTodStddevSampFieldsModelPrimitives, OrderItemsByTodStddevSampFieldsModelSelector } from "./OrderItemsByTodStddevSampFieldsModel.base"

/**
 * OrderItemsByTodStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const OrderItemsByTodStddevSampFieldsModel = OrderItemsByTodStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
