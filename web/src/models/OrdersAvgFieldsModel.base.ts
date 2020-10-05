/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersAvgFieldsBase
 * auto generated base class for the model OrdersAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const OrdersAvgFieldsModelBase = ModelBase
  .named('OrdersAvgFields')
  .props({
    __typename: types.optional(types.literal("orders_avg_fields"), "orders_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersAvgFields() {
  return new OrdersAvgFieldsModelSelector()
}

export const ordersAvgFieldsModelPrimitives = selectFromOrdersAvgFields().venue_id
