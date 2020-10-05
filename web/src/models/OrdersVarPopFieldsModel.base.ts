/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersVarPopFieldsBase
 * auto generated base class for the model OrdersVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const OrdersVarPopFieldsModelBase = ModelBase
  .named('OrdersVarPopFields')
  .props({
    __typename: types.optional(types.literal("orders_var_pop_fields"), "orders_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersVarPopFields() {
  return new OrdersVarPopFieldsModelSelector()
}

export const ordersVarPopFieldsModelPrimitives = selectFromOrdersVarPopFields().venue_id
