/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsByTodSumFieldsBase
 * auto generated base class for the model OrderItemsByTodSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const OrderItemsByTodSumFieldsModelBase = ModelBase
  .named('OrderItemsByTodSumFields')
  .props({
    __typename: types.optional(types.literal("order_items_by_tod_sum_fields"), "order_items_by_tod_sum_fields"),
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

export class OrderItemsByTodSumFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get hour_of_day() { return this.__attr(`hour_of_day`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsByTodSumFields() {
  return new OrderItemsByTodSumFieldsModelSelector()
}

export const orderItemsByTodSumFieldsModelPrimitives = selectFromOrderItemsByTodSumFields().count.hour_of_day.menu_item_id.venue_id
