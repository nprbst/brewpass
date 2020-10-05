/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersMaxFieldsBase
 * auto generated base class for the model OrdersMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const OrdersMaxFieldsModelBase = ModelBase
  .named('OrdersMaxFields')
  .props({
    __typename: types.optional(types.literal("orders_max_fields"), "orders_max_fields"),
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

export class OrdersMaxFieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get display() { return this.__attr(`display`) }
  get id() { return this.__attr(`id`) }
  get ordered_at() { return this.__attr(`ordered_at`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersMaxFields() {
  return new OrdersMaxFieldsModelSelector()
}

export const ordersMaxFieldsModelPrimitives = selectFromOrdersMaxFields().created_at.display.ordered_at.venue_id
