/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MenuItemsAggregateModel, MenuItemsAggregateModelType } from "./MenuItemsAggregateModel"
import { MenuItemsAggregateModelSelector } from "./MenuItemsAggregateModel.base"
import { MenuItemsModel, MenuItemsModelType } from "./MenuItemsModel"
import { MenuItemsModelSelector } from "./MenuItemsModel.base"
import { RootStoreType } from "./index"


/**
 * VenuesBase
 * auto generated base class for the model VenuesModel.
 *
 * columns and relationships of "venues"
 */
export const VenuesModelBase = ModelBase
  .named('Venues')
  .props({
    __typename: types.optional(types.literal("venues"), "venues"),
    created_at: types.union(types.undefined, types.frozen()),
    deleted_at: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.frozen()),
    lat: types.union(types.undefined, types.frozen()),
    long: types.union(types.undefined, types.frozen()),
    /** An array relationship */
    menu_items: types.union(types.undefined, types.array(types.late((): any => MenuItemsModel))),
    /** An aggregated array relationship */
    menu_items_aggregate: types.union(types.undefined, types.late((): any => MenuItemsAggregateModel)),
    name: types.union(types.undefined, types.string),
    osm_id: types.union(types.undefined, types.string),
    tags: types.union(types.undefined, types.frozen()),
    updated_at: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get deleted_at() { return this.__attr(`deleted_at`) }
  get id() { return this.__attr(`id`) }
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
  get name() { return this.__attr(`name`) }
  get osm_id() { return this.__attr(`osm_id`) }
  get tags() { return this.__attr(`tags`) }
  get updated_at() { return this.__attr(`updated_at`) }
  menu_items(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`menu_items`, MenuItemsModelSelector, builder) }
  menu_items_aggregate(builder?: string | MenuItemsAggregateModelSelector | ((selector: MenuItemsAggregateModelSelector) => MenuItemsAggregateModelSelector)) { return this.__child(`menu_items_aggregate`, MenuItemsAggregateModelSelector, builder) }
}
export function selectFromVenues() {
  return new VenuesModelSelector()
}

export const venuesModelPrimitives = selectFromVenues().created_at.deleted_at.lat.long.name.osm_id.tags.updated_at
