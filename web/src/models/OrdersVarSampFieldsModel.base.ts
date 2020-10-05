/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersVarSampFieldsBase
 * auto generated base class for the model OrdersVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const OrdersVarSampFieldsModelBase = ModelBase
  .named('OrdersVarSampFields')
  .props({
    __typename: types.optional(types.literal("orders_var_samp_fields"), "orders_var_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersVarSampFields() {
  return new OrdersVarSampFieldsModelSelector()
}

export const ordersVarSampFieldsModelPrimitives = selectFromOrdersVarSampFields().venue_id
