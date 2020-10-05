/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsByTodVarPopFieldsBase
 * auto generated base class for the model OrderItemsByTodVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const OrderItemsByTodVarPopFieldsModelBase = ModelBase
  .named('OrderItemsByTodVarPopFields')
  .props({
    __typename: types.optional(types.literal("order_items_by_tod_var_pop_fields"), "order_items_by_tod_var_pop_fields"),
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

export class OrderItemsByTodVarPopFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  get hour_of_day() { return this.__attr(`hour_of_day`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsByTodVarPopFields() {
  return new OrderItemsByTodVarPopFieldsModelSelector()
}

export const orderItemsByTodVarPopFieldsModelPrimitives = selectFromOrderItemsByTodVarPopFields().count.hour_of_day.menu_item_id.venue_id
