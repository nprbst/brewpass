/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsByHourMaxFieldsBase
 * auto generated base class for the model OrderItemsByHourMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const OrderItemsByHourMaxFieldsModelBase = ModelBase
  .named('OrderItemsByHourMaxFields')
  .props({
    __typename: types.optional(types.literal("order_items_by_hour_max_fields"), "order_items_by_hour_max_fields"),
    count: types.union(types.undefined, types.null, types.frozen()),
    hour_of_day: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.null, types.string),
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

export class OrderItemsByHourMaxFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get hour_of_day() { return this.__attr(`hour_of_day`) }
  get id() { return this.__attr(`id`) }
  get last_order() { return this.__attr(`last_order`) }
  get menu_item() { return this.__attr(`menu_item`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get venue() { return this.__attr(`venue`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsByHourMaxFields() {
  return new OrderItemsByHourMaxFieldsModelSelector()
}

export const orderItemsByHourMaxFieldsModelPrimitives = selectFromOrderItemsByHourMaxFields().count.hour_of_day.last_order.menu_item.menu_item_id.venue.venue_id
