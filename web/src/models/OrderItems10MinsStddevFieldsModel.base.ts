/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsStddevFieldsBase
 * auto generated base class for the model OrderItems10MinsStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const OrderItems10MinsStddevFieldsModelBase = ModelBase
  .named('OrderItems10MinsStddevFields')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_stddev_fields"), "order_items_10_mins_stddev_fields"),
    count: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsStddevFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromOrderItems10MinsStddevFields() {
  return new OrderItems10MinsStddevFieldsModelSelector()
}

export const orderItems10MinsStddevFieldsModelPrimitives = selectFromOrderItems10MinsStddevFields().count
