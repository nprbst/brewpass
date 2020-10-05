import { Instance } from "mobx-state-tree"
import { OrderItemsSumFieldsModelBase } from "./OrderItemsSumFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsSumFieldsModel */
export interface OrderItemsSumFieldsModelType extends Instance<typeof OrderItemsSumFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsSumFieldsModel */
export { selectFromOrderItemsSumFields, orderItemsSumFieldsModelPrimitives, OrderItemsSumFieldsModelSelector } from "./OrderItemsSumFieldsModel.base"

/**
 * OrderItemsSumFieldsModel
 *
 * aggregate sum on columns
 */
export const OrderItemsSumFieldsModel = OrderItemsSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
