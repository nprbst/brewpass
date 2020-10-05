import { Instance } from "mobx-state-tree"
import { OrderItemsByTodMaxFieldsModelBase } from "./OrderItemsByTodMaxFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodMaxFieldsModel */
export interface OrderItemsByTodMaxFieldsModelType extends Instance<typeof OrderItemsByTodMaxFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodMaxFieldsModel */
export { selectFromOrderItemsByTodMaxFields, orderItemsByTodMaxFieldsModelPrimitives, OrderItemsByTodMaxFieldsModelSelector } from "./OrderItemsByTodMaxFieldsModel.base"

/**
 * OrderItemsByTodMaxFieldsModel
 *
 * aggregate max on columns
 */
export const OrderItemsByTodMaxFieldsModel = OrderItemsByTodMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
