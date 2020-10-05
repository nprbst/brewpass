/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsVarianceFieldsBase
 * auto generated base class for the model OrderItems10MinsVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const OrderItems10MinsVarianceFieldsModelBase = ModelBase
  .named('OrderItems10MinsVarianceFields')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_variance_fields"), "order_items_10_mins_variance_fields"),
    count: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsVarianceFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromOrderItems10MinsVarianceFields() {
  return new OrderItems10MinsVarianceFieldsModelSelector()
}

export const orderItems10MinsVarianceFieldsModelPrimitives = selectFromOrderItems10MinsVarianceFields().count
