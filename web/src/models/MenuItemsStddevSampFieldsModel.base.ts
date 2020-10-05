/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * MenuItemsStddevSampFieldsBase
 * auto generated base class for the model MenuItemsStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const MenuItemsStddevSampFieldsModelBase = ModelBase
  .named('MenuItemsStddevSampFields')
  .props({
    __typename: types.optional(types.literal("menu_items_stddev_samp_fields"), "menu_items_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromMenuItemsStddevSampFields() {
  return new MenuItemsStddevSampFieldsModelSelector()
}

export const menuItemsStddevSampFieldsModelPrimitives = selectFromMenuItemsStddevSampFields().venue_id
