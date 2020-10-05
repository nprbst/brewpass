/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MenuItemsStddevFieldsBase
 * auto generated base class for the model MenuItemsStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const MenuItemsStddevFieldsModelBase = ModelBase
  .named('MenuItemsStddevFields')
  .props({
    __typename: types.optional(types.literal("menu_items_stddev_fields"), "menu_items_stddev_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsStddevFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromMenuItemsStddevFields() {
  return new MenuItemsStddevFieldsModelSelector()
}

export const menuItemsStddevFieldsModelPrimitives = selectFromMenuItemsStddevFields().venue_id
