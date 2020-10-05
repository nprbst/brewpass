import { Instance } from "mobx-state-tree"
import { OrderItemsMutationResponseModelBase } from "./OrderItemsMutationResponseModel.base"

/* The TypeScript type of an instance of OrderItemsMutationResponseModel */
export interface OrderItemsMutationResponseModelType extends Instance<typeof OrderItemsMutationResponseModel.Type> {}

/* A graphql query fragment builders for OrderItemsMutationResponseModel */
export { selectFromOrderItemsMutationResponse, orderItemsMutationResponseModelPrimitives, OrderItemsMutationResponseModelSelector } from "./OrderItemsMutationResponseModel.base"

/**
 * OrderItemsMutationResponseModel
 *
 * response of any mutation on the table "order_items"
 */
export const OrderItemsMutationResponseModel = OrderItemsMutationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
