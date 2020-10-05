/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MenuItemsSumFieldsBase
 * auto generated base class for the model MenuItemsSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const MenuItemsSumFieldsModelBase = ModelBase
  .named('MenuItemsSumFields')
  .props({
    __typename: types.optional(types.literal("menu_items_sum_fields"), "menu_items_sum_fields"),
    id: types.union(types.undefined, types.null, types.frozen()),
    venue_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromMenuItemsSumFields() {
  return new MenuItemsSumFieldsModelSelector()
}

export const menuItemsSumFieldsModelPrimitives = selectFromMenuItemsSumFields().venue_id
