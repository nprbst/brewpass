/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsAggregateModel, OrderItemsAggregateModelType } from "./OrderItemsAggregateModel"
import { OrderItemsAggregateModelSelector } from "./OrderItemsAggregateModel.base"
import { OrderItemsModel, OrderItemsModelType } from "./OrderItemsModel"
import { OrderItemsModelSelector } from "./OrderItemsModel.base"
import { VenuesModel, VenuesModelType } from "./VenuesModel"
import { VenuesModelSelector } from "./VenuesModel.base"
import { RootStoreType } from "./index"


/**
 * MenuItemsBase
 * auto generated base class for the model MenuItemsModel.
 *
 * columns and relationships of "menu_items"
 */
export const MenuItemsModelBase = ModelBase
  .named('MenuItems')
  .props({
    __typename: types.optional(types.literal("menu_items"), "menu_items"),
    created_at: types.union(types.undefined, types.frozen()),
    deleted_at: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.frozen()),
    item_type: types.union(types.undefined, types.frozen()),
    name: types.union(types.undefined, types.string),
    /** An array relationship */
    order_items: types.union(types.undefined, types.array(types.late((): any => OrderItemsModel))),
    /** An aggregated array relationship */
    order_items_aggregate: types.union(types.undefined, types.late((): any => OrderItemsAggregateModel)),
    updated_at: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    venue: types.union(types.undefined, types.late((): any => VenuesModel)),
    venue_id: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get deleted_at() { return this.__attr(`deleted_at`) }
  get id() { return this.__attr(`id`) }
  get item_type() { return this.__attr(`item_type`) }
  get name() { return this.__attr(`name`) }
  get updated_at() { return this.__attr(`updated_at`) }
  get venue_id() { return this.__attr(`venue_id`) }
  order_items(builder?: string | OrderItemsModelSelector | ((selector: OrderItemsModelSelector) => OrderItemsModelSelector)) { return this.__child(`order_items`, OrderItemsModelSelector, builder) }
  order_items_aggregate(builder?: string | OrderItemsAggregateModelSelector | ((selector: OrderItemsAggregateModelSelector) => OrderItemsAggregateModelSelector)) { return this.__child(`order_items_aggregate`, OrderItemsAggregateModelSelector, builder) }
  venue(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`venue`, VenuesModelSelector, builder) }
}
export function selectFromMenuItems() {
  return new MenuItemsModelSelector()
}

export const menuItemsModelPrimitives = selectFromMenuItems().created_at.deleted_at.item_type.name.updated_at.venue_id
