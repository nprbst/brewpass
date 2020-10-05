/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MenuItemsAvgFieldsBase
 * auto generated base class for the model MenuItemsAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const MenuItemsAvgFieldsModelBase = ModelBase
  .named('MenuItemsAvgFields')
  .props({
    __typename: types.optional(types.literal("menu_items_avg_fields"), "menu_items_avg_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromMenuItemsAvgFields() {
  return new MenuItemsAvgFieldsModelSelector()
}

export const menuItemsAvgFieldsModelPrimitives = selectFromMenuItemsAvgFields().venue_id
