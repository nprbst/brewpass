/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsByTodMinFieldsBase
 * auto generated base class for the model OrderItemsByTodMinFieldsModel.
 *
 * aggregate min on columns
 */
export const OrderItemsByTodMinFieldsModelBase = ModelBase
  .named('OrderItemsByTodMinFields')
  .props({
    __typename: types.optional(types.literal("order_items_by_tod_min_fields"), "order_items_by_tod_min_fields"),
    count: types.union(types.undefined, types.null, types.frozen()),
    hour_of_day: types.union(types.undefined, types.null, types.frozen()),
    last_order: types.union(types.undefined, types.null, types.frozen()),
    menu_item: types.union(types.undefined, types.null, types.string),
    menu_item_id: types.union(types.undefined, types.null, types.frozen()),
    venue: types.union(types.undefined, types.null, types.string),
    venue_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsByTodMinFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get hour_of_day() { return this.__attr(`hour_of_day`) }
  get last_order() { return this.__attr(`last_order`) }
  get menu_item() { return this.__attr(`menu_item`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get venue() { return this.__attr(`venue`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsByTodMinFields() {
  return new OrderItemsByTodMinFieldsModelSelector()
}

export const orderItemsByTodMinFieldsModelPrimitives = selectFromOrderItemsByTodMinFields().count.hour_of_day.last_order.menu_item.menu_item_id.venue.venue_id
