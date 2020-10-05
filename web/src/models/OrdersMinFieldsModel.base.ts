/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersMinFieldsBase
 * auto generated base class for the model OrdersMinFieldsModel.
 *
 * aggregate min on columns
 */
export const OrdersMinFieldsModelBase = ModelBase
  .named('OrdersMinFields')
  .props({
    __typename: types.optional(types.literal("orders_min_fields"), "orders_min_fields"),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    display: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.frozen()),
    ordered_at: types.union(types.undefined, types.null, types.frozen()),
    venue_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersMinFieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get display() { return this.__attr(`display`) }
  get id() { return this.__attr(`id`) }
  get ordered_at() { return this.__attr(`ordered_at`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersMinFields() {
  return new OrdersMinFieldsModelSelector()
}

export const ordersMinFieldsModelPrimitives = selectFromOrdersMinFields().created_at.display.ordered_at.venue_id
