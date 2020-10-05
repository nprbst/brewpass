/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsByHourSumFieldsBase
 * auto generated base class for the model OrderItemsByHourSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const OrderItemsByHourSumFieldsModelBase = ModelBase
  .named('OrderItemsByHourSumFields')
  .props({
    __typename: types.optional(types.literal("order_items_by_hour_sum_fields"), "order_items_by_hour_sum_fields"),
    count: types.union(types.undefined, types.null, types.frozen()),
    hour_of_day: types.union(types.undefined, types.null, types.frozen()),
    menu_item_id: types.union(types.undefined, types.null, types.frozen()),
    venue_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsByHourSumFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get hour_of_day() { return this.__attr(`hour_of_day`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsByHourSumFields() {
  return new OrderItemsByHourSumFieldsModelSelector()
}

export const orderItemsByHourSumFieldsModelPrimitives = selectFromOrderItemsByHourSumFields().count.hour_of_day.menu_item_id.venue_id
