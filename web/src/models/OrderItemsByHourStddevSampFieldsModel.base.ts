/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsByHourStddevSampFieldsBase
 * auto generated base class for the model OrderItemsByHourStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const OrderItemsByHourStddevSampFieldsModelBase = ModelBase
  .named('OrderItemsByHourStddevSampFields')
  .props({
    __typename: types.optional(types.literal("order_items_by_hour_stddev_samp_fields"), "order_items_by_hour_stddev_samp_fields"),
    count: types.union(types.undefined, types.null, types.number),
    hour_of_day: types.union(types.undefined, types.null, types.number),
    menu_item_id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsByHourStddevSampFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get hour_of_day() { return this.__attr(`hour_of_day`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsByHourStddevSampFields() {
  return new OrderItemsByHourStddevSampFieldsModelSelector()
}

export const orderItemsByHourStddevSampFieldsModelPrimitives = selectFromOrderItemsByHourStddevSampFields().count.hour_of_day.menu_item_id.venue_id
