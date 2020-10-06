/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MenuItemsVarPopFieldsBase
 * auto generated base class for the model MenuItemsVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const MenuItemsVarPopFieldsModelBase = ModelBase
  .named('MenuItemsVarPopFields')
  .props({
    __typename: types.optional(types.literal("menu_items_var_pop_fields"), "menu_items_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromMenuItemsVarPopFields() {
  return new MenuItemsVarPopFieldsModelSelector()
}

export const menuItemsVarPopFieldsModelPrimitives = selectFromMenuItemsVarPopFields().venue_id