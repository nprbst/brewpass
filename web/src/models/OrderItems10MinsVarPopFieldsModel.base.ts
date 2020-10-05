/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsVarPopFieldsBase
 * auto generated base class for the model OrderItems10MinsVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const OrderItems10MinsVarPopFieldsModelBase = ModelBase
  .named('OrderItems10MinsVarPopFields')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_var_pop_fields"), "order_items_10_mins_var_pop_fields"),
    count: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsVarPopFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
}
export function selectFromOrderItems10MinsVarPopFields() {
  return new OrderItems10MinsVarPopFieldsModelSelector()
}

export const orderItems10MinsVarPopFieldsModelPrimitives = selectFromOrderItems10MinsVarPopFields().count
