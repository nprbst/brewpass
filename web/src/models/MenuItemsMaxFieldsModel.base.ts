/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MenuItemsMaxFieldsBase
 * auto generated base class for the model MenuItemsMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const MenuItemsMaxFieldsModelBase = ModelBase
  .named('MenuItemsMaxFields')
  .props({
    __typename: types.optional(types.literal("menu_items_max_fields"), "menu_items_max_fields"),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    deleted_at: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.null, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
    updated_at: types.union(types.undefined, types.null, types.frozen()),
    venue_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsMaxFieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get deleted_at() { return this.__attr(`deleted_at`) }
  get id() { return this.__attr(`id`) }
  get name() { return this.__attr(`name`) }
  get updated_at() { return this.__attr(`updated_at`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromMenuItemsMaxFields() {
  return new MenuItemsMaxFieldsModelSelector()
}

export const menuItemsMaxFieldsModelPrimitives = selectFromMenuItemsMaxFields().created_at.deleted_at.name.updated_at.venue_id
