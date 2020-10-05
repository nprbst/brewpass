/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsSumFieldsBase
 * auto generated base class for the model OrderItems10MinsSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const OrderItems10MinsSumFieldsModelBase = ModelBase
  .named('OrderItems10MinsSumFields')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_sum_fields"), "order_items_10_mins_sum_fields"),
    count: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsSumFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromOrderItems10MinsSumFields() {
  return new OrderItems10MinsSumFieldsModelSelector()
}

export const orderItems10MinsSumFieldsModelPrimitives = selectFromOrderItems10MinsSumFields().count
