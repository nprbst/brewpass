/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MenuItemsModel, MenuItemsModelType } from "./MenuItemsModel"
import { MenuItemsModelSelector } from "./MenuItemsModel.base"
import { RootStoreType } from "./index"


/**
 * MenuItemsMutationResponseBase
 * auto generated base class for the model MenuItemsMutationResponseModel.
 *
 * response of any mutation on the table "menu_items"
 */
export const MenuItemsMutationResponseModelBase = ModelBase
  .named('MenuItemsMutationResponse')
  .props({
    __typename: types.optional(types.literal("menu_items_mutation_response"), "menu_items_mutation_response"),
    /** number of affected rows by the mutation */
    affected_rows: types.union(types.undefined, types.integer),
    /** data of the affected rows by the mutation */
    returning: types.union(types.undefined, types.array(types.late((): any => MenuItemsModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsMutationResponseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`returning`, MenuItemsModelSelector, builder) }
}
export function selectFromMenuItemsMutationResponse() {
  return new MenuItemsMutationResponseModelSelector()
}

export const menuItemsMutationResponseModelPrimitives = selectFromMenuItemsMutationResponse().affected_rows
