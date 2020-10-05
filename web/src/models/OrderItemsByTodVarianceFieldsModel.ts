import { Instance } from "mobx-state-tree"
import { OrderItemsByTodVarianceFieldsModelBase } from "./OrderItemsByTodVarianceFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByTodVarianceFieldsModel */
export interface OrderItemsByTodVarianceFieldsModelType extends Instance<typeof OrderItemsByTodVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByTodVarianceFieldsModel */
export { selectFromOrderItemsByTodVarianceFields, orderItemsByTodVarianceFieldsModelPrimitives, OrderItemsByTodVarianceFieldsModelSelector } from "./OrderItemsByTodVarianceFieldsModel.base"

/**
 * OrderItemsByTodVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const OrderItemsByTodVarianceFieldsModel = OrderItemsByTodVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
