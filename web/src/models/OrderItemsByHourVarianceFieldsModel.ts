import { Instance } from "mobx-state-tree"
import { OrderItemsByHourVarianceFieldsModelBase } from "./OrderItemsByHourVarianceFieldsModel.base"

/* The TypeScript type of an instance of OrderItemsByHourVarianceFieldsModel */
export interface OrderItemsByHourVarianceFieldsModelType extends Instance<typeof OrderItemsByHourVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItemsByHourVarianceFieldsModel */
export { selectFromOrderItemsByHourVarianceFields, orderItemsByHourVarianceFieldsModelPrimitives, OrderItemsByHourVarianceFieldsModelSelector } from "./OrderItemsByHourVarianceFieldsModel.base"

/**
 * OrderItemsByHourVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const OrderItemsByHourVarianceFieldsModel = OrderItemsByHourVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
