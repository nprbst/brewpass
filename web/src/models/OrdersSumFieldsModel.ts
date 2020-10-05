import { Instance } from "mobx-state-tree"
import { OrdersSumFieldsModelBase } from "./OrdersSumFieldsModel.base"

/* The TypeScript type of an instance of OrdersSumFieldsModel */
export interface OrdersSumFieldsModelType extends Instance<typeof OrdersSumFieldsModel.Type> {}

/* A graphql query fragment builders for OrdersSumFieldsModel */
export { selectFromOrdersSumFields, ordersSumFieldsModelPrimitives, OrdersSumFieldsModelSelector } from "./OrdersSumFieldsModel.base"

/**
 * OrdersSumFieldsModel
 *
 * aggregate sum on columns
 */
export const OrdersSumFieldsModel = OrdersSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
