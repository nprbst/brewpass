import { Instance } from "mobx-state-tree"
import { OrdersVarianceFieldsModelBase } from "./OrdersVarianceFieldsModel.base"

/* The TypeScript type of an instance of OrdersVarianceFieldsModel */
export interface OrdersVarianceFieldsModelType extends Instance<typeof OrdersVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersVarianceFieldsModel */
export { selectFromOrdersVarianceFields, ordersVarianceFieldsModelPrimitives, OrdersVarianceFieldsModelSelector } from "./OrdersVarianceFieldsModel.base"

/**
 * OrdersVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const OrdersVarianceFieldsModel = OrdersVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
