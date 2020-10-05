/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MenuItemsModel, MenuItemsModelType } from "./MenuItemsModel"
import { MenuItemsModelSelector } from "./MenuItemsModel.base"
import { VenuesModel, VenuesModelType } from "./VenuesModel"
import { VenuesModelSelector } from "./VenuesModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItemsBase
 * auto generated base class for the model OrderItemsModel.
 *
 * columns and relationships of "order_items"
 */
export const OrderItemsModelBase = ModelBase
  .named('OrderItems')
  .props({
    __typename: types.optional(types.literal("order_items"), "order_items"),
    created_at: types.union(types.undefined, types.frozen()),
    id: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    menu_item: types.union(types.undefined, types.late((): any => MenuItemsModel)),
    menu_item_id: types.union(types.undefined, types.frozen()),
    order_id: types.union(types.undefined, types.frozen()),
    ordered_at: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    venue: types.union(types.undefined, types.late((): any => VenuesModel)),
    venue_id: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get id() { return this.__attr(`id`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get order_id() { return this.__attr(`order_id`) }
  get ordered_at() { return this.__attr(`ordered_at`) }
  get venue_id() { return this.__attr(`venue_id`) }
  menu_item(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`menu_item`, MenuItemsModelSelector, builder) }
  venue(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`venue`, VenuesModelSelector, builder) }
}
export function selectFromOrderItems() {
  return new OrderItemsModelSelector()
}

export const orderItemsModelPrimitives = selectFromOrderItems().created_at.menu_item_id.order_id.ordered_at.venue_id
