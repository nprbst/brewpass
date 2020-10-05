/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersStddevPopFieldsBase
 * auto generated base class for the model OrdersStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const OrdersStddevPopFieldsModelBase = ModelBase
  .named('OrdersStddevPopFields')
  .props({
    __typename: types.optional(types.literal("orders_stddev_pop_fields"), "orders_stddev_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersStddevPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersStddevPopFields() {
  return new OrdersStddevPopFieldsModelSelector()
}

export const ordersStddevPopFieldsModelPrimitives = selectFromOrdersStddevPopFields().venue_id
