/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsStddevPopFieldsBase
 * auto generated base class for the model OrderItems10MinsStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const OrderItems10MinsStddevPopFieldsModelBase = ModelBase
  .named('OrderItems10MinsStddevPopFields')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_stddev_pop_fields"), "order_items_10_mins_stddev_pop_fields"),
    count: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsStddevPopFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromOrderItems10MinsStddevPopFields() {
  return new OrderItems10MinsStddevPopFieldsModelSelector()
}

export const orderItems10MinsStddevPopFieldsModelPrimitives = selectFromOrderItems10MinsStddevPopFields().count
