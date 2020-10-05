import { Instance } from "mobx-state-tree"
import { OrdersMutationResponseModelBase } from "./OrdersMutationResponseModel.base"

/* The TypeScript type of an instance of OrdersMutationResponseModel */
export interface OrdersMutationResponseModelType extends Instance<typeof OrdersMutationResponseModel.Type> {}

/* A graphql query fragment builders for OrdersMutationResponseModel */
export { selectFromOrdersMutationResponse, ordersMutationResponseModelPrimitives, OrdersMutationResponseModelSelector } from "./OrdersMutationResponseModel.base"

/**
 * OrdersMutationResponseModel
 *
 * response of any mutation on the table "orders"
 */
export const OrdersMutationResponseModel = OrdersMutationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
