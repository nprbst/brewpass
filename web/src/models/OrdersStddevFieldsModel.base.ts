/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersStddevFieldsBase
 * auto generated base class for the model OrdersStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const OrdersStddevFieldsModelBase = ModelBase
  .named('OrdersStddevFields')
  .props({
    __typename: types.optional(types.literal("orders_stddev_fields"), "orders_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersStddevFields() {
  return new OrdersStddevFieldsModelSelector()
}

export const ordersStddevFieldsModelPrimitives = selectFromOrdersStddevFields().venue_id
