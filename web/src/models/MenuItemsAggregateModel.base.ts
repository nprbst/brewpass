/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MenuItemsAggregateFieldsModel, MenuItemsAggregateFieldsModelType } from "./MenuItemsAggregateFieldsModel"
import { MenuItemsAggregateFieldsModelSelector } from "./MenuItemsAggregateFieldsModel.base"
import { MenuItemsModel, MenuItemsModelType } from "./MenuItemsModel"
import { MenuItemsModelSelector } from "./MenuItemsModel.base"
import { RootStoreType } from "./index"


/**
 * MenuItemsAggregateBase
 * auto generated base class for the model MenuItemsAggregateModel.
 *
 * aggregated selection of "menu_items"
 */
export const MenuItemsAggregateModelBase = ModelBase
  .named('MenuItemsAggregate')
  .props({
    __typename: types.optional(types.literal("menu_items_aggregate"), "menu_items_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => MenuItemsAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => MenuItemsModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | MenuItemsAggregateFieldsModelSelector | ((selector: MenuItemsAggregateFieldsModelSelector) => MenuItemsAggregateFieldsModelSelector)) { return this.__child(`aggregate`, MenuItemsAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`nodes`, MenuItemsModelSelector, builder) }
}
export function selectFromMenuItemsAggregate() {
  return new MenuItemsAggregateModelSelector()
}

export const menuItemsAggregateModelPrimitives = selectFromMenuItemsAggregate()
