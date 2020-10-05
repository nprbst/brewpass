/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsMinFieldsBase
 * auto generated base class for the model OrderItemsMinFieldsModel.
 *
 * aggregate min on columns
 */
export const OrderItemsMinFieldsModelBase = ModelBase
  .named('OrderItemsMinFields')
  .props({
    __typename: types.optional(types.literal("order_items_min_fields"), "order_items_min_fields"),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.null, types.frozen()),
    menu_item_id: types.union(types.undefined, types.null, types.frozen()),
    order_id: types.union(types.undefined, types.null, types.frozen()),
    ordered_at: types.union(types.undefined, types.null, types.frozen()),
    venue_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsMinFieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get id() { return this.__attr(`id`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get order_id() { return this.__attr(`order_id`) }
  get ordered_at() { return this.__attr(`ordered_at`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsMinFields() {
  return new OrderItemsMinFieldsModelSelector()
}

export const orderItemsMinFieldsModelPrimitives = selectFromOrderItemsMinFields().created_at.menu_item_id.order_id.ordered_at.venue_id
