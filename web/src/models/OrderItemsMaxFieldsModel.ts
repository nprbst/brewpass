import { Instance } from "mobx-state-tree"
import { OrderItemsMaxFieldsModelBase } from "./OrderItemsMaxFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsMaxFieldsModel */
export interface OrderItemsMaxFieldsModelType extends Instance<typeof OrderItemsMaxFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsMaxFieldsModel */
export { selectFromOrderItemsMaxFields, orderItemsMaxFieldsModelPrimitives, OrderItemsMaxFieldsModelSelector } from "./OrderItemsMaxFieldsModel.base"

/**
 * OrderItemsMaxFieldsModel
 *
 * aggregate max on columns
 */
export const OrderItemsMaxFieldsModel = OrderItemsMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
