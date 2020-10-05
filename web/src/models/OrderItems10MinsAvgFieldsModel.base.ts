/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsAvgFieldsBase
 * auto generated base class for the model OrderItems10MinsAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const OrderItems10MinsAvgFieldsModelBase = ModelBase
  .named('OrderItems10MinsAvgFields')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_avg_fields"), "order_items_10_mins_avg_fields"),
    count: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsAvgFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromOrderItems10MinsAvgFields() {
  return new OrderItems10MinsAvgFieldsModelSelector()
}

export const orderItems10MinsAvgFieldsModelPrimitives = selectFromOrderItems10MinsAvgFields().count
