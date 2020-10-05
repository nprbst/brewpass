/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MenuItemsVarianceFieldsBase
 * auto generated base class for the model MenuItemsVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const MenuItemsVarianceFieldsModelBase = ModelBase
  .named('MenuItemsVarianceFields')
  .props({
    __typename: types.optional(types.literal("menu_items_variance_fields"), "menu_items_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromMenuItemsVarianceFields() {
  return new MenuItemsVarianceFieldsModelSelector()
}

export const menuItemsVarianceFieldsModelPrimitives = selectFromMenuItemsVarianceFields().venue_id
