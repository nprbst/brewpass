/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsStddevSampFieldsBase
 * auto generated base class for the model OrderItems10MinsStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const OrderItems10MinsStddevSampFieldsModelBase = ModelBase
  .named('OrderItems10MinsStddevSampFields')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_stddev_samp_fields"), "order_items_10_mins_stddev_samp_fields"),
    count: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsStddevSampFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromOrderItems10MinsStddevSampFields() {
  return new OrderItems10MinsStddevSampFieldsModelSelector()
}

export const orderItems10MinsStddevSampFieldsModelPrimitives = selectFromOrderItems10MinsStddevSampFields().count
