import { Instance } from "mobx-state-tree"
import { OrderItems10MinsSumFieldsModelBase } from "./OrderItems10MinsSumFieldsModel.base"

/* The TypeScript type of an instance of OrderItems10MinsSumFieldsModel */
export interface OrderItems10MinsSumFieldsModelType extends Instance<typeof OrderItems10MinsSumFieldsModel.Type> {}

/* A graphql query fragment builders for OrderItems10MinsSumFieldsModel */
export { selectFromOrderItems10MinsSumFields, orderItems10MinsSumFieldsModelPrimitives, OrderItems10MinsSumFieldsModelSelector } from "./OrderItems10MinsSumFieldsModel.base"

/**
 * OrderItems10MinsSumFieldsModel
 *
 * aggregate sum on columns
 */
export const OrderItems10MinsSumFieldsModel = OrderItems10MinsSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
