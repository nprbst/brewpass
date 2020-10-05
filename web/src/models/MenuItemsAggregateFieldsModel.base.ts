/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MenuItemsAvgFieldsModel, MenuItemsAvgFieldsModelType } from "./MenuItemsAvgFieldsModel"
import { MenuItemsAvgFieldsModelSelector } from "./MenuItemsAvgFieldsModel.base"
import { MenuItemsMaxFieldsModel, MenuItemsMaxFieldsModelType } from "./MenuItemsMaxFieldsModel"
import { MenuItemsMaxFieldsModelSelector } from "./MenuItemsMaxFieldsModel.base"
import { MenuItemsMinFieldsModel, MenuItemsMinFieldsModelType } from "./MenuItemsMinFieldsModel"
import { MenuItemsMinFieldsModelSelector } from "./MenuItemsMinFieldsModel.base"
import { MenuItemsStddevFieldsModel, MenuItemsStddevFieldsModelType } from "./MenuItemsStddevFieldsModel"
import { MenuItemsStddevFieldsModelSelector } from "./MenuItemsStddevFieldsModel.base"
import { MenuItemsStddevPopFieldsModel, MenuItemsStddevPopFieldsModelType } from "./MenuItemsStddevPopFieldsModel"
import { MenuItemsStddevPopFieldsModelSelector } from "./MenuItemsStddevPopFieldsModel.base"
import { MenuItemsStddevSampFieldsModel, MenuItemsStddevSampFieldsModelType } from "./MenuItemsStddevSampFieldsModel"
import { MenuItemsStddevSampFieldsModelSelector } from "./MenuItemsStddevSampFieldsModel.base"
import { MenuItemsSumFieldsModel, MenuItemsSumFieldsModelType } from "./MenuItemsSumFieldsModel"
import { MenuItemsSumFieldsModelSelector } from "./MenuItemsSumFieldsModel.base"
import { MenuItemsVarPopFieldsModel, MenuItemsVarPopFieldsModelType } from "./MenuItemsVarPopFieldsModel"
import { MenuItemsVarPopFieldsModelSelector } from "./MenuItemsVarPopFieldsModel.base"
import { MenuItemsVarSampFieldsModel, MenuItemsVarSampFieldsModelType } from "./MenuItemsVarSampFieldsModel"
import { MenuItemsVarSampFieldsModelSelector } from "./MenuItemsVarSampFieldsModel.base"
import { MenuItemsVarianceFieldsModel, MenuItemsVarianceFieldsModelType } from "./MenuItemsVarianceFieldsModel"
import { MenuItemsVarianceFieldsModelSelector } from "./MenuItemsVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * MenuItemsAggregateFieldsBase
 * auto generated base class for the model MenuItemsAggregateFieldsModel.
 *
 * aggregate fields of "menu_items"
 */
export const MenuItemsAggregateFieldsModelBase = ModelBase
  .named('MenuItemsAggregateFields')
  .props({
    __typename: types.optional(types.literal("menu_items_aggregate_fields"), "menu_items_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => MenuItemsAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => MenuItemsMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => MenuItemsMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => MenuItemsStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => MenuItemsStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => MenuItemsStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => MenuItemsSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => MenuItemsVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => MenuItemsVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => MenuItemsVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MenuItemsAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | MenuItemsAvgFieldsModelSelector | ((selector: MenuItemsAvgFieldsModelSelector) => MenuItemsAvgFieldsModelSelector)) { return this.__child(`avg`, MenuItemsAvgFieldsModelSelector, builder) }
  max(builder?: string | MenuItemsMaxFieldsModelSelector | ((selector: MenuItemsMaxFieldsModelSelector) => MenuItemsMaxFieldsModelSelector)) { return this.__child(`max`, MenuItemsMaxFieldsModelSelector, builder) }
  min(builder?: string | MenuItemsMinFieldsModelSelector | ((selector: MenuItemsMinFieldsModelSelector) => MenuItemsMinFieldsModelSelector)) { return this.__child(`min`, MenuItemsMinFieldsModelSelector, builder) }
  stddev(builder?: string | MenuItemsStddevFieldsModelSelector | ((selector: MenuItemsStddevFieldsModelSelector) => MenuItemsStddevFieldsModelSelector)) { return this.__child(`stddev`, MenuItemsStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | MenuItemsStddevPopFieldsModelSelector | ((selector: MenuItemsStddevPopFieldsModelSelector) => MenuItemsStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, MenuItemsStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | MenuItemsStddevSampFieldsModelSelector | ((selector: MenuItemsStddevSampFieldsModelSelector) => MenuItemsStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, MenuItemsStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | MenuItemsSumFieldsModelSelector | ((selector: MenuItemsSumFieldsModelSelector) => MenuItemsSumFieldsModelSelector)) { return this.__child(`sum`, MenuItemsSumFieldsModelSelector, builder) }
  var_pop(builder?: string | MenuItemsVarPopFieldsModelSelector | ((selector: MenuItemsVarPopFieldsModelSelector) => MenuItemsVarPopFieldsModelSelector)) { return this.__child(`var_pop`, MenuItemsVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | MenuItemsVarSampFieldsModelSelector | ((selector: MenuItemsVarSampFieldsModelSelector) => MenuItemsVarSampFieldsModelSelector)) { return this.__child(`var_samp`, MenuItemsVarSampFieldsModelSelector, builder) }
  variance(builder?: string | MenuItemsVarianceFieldsModelSelector | ((selector: MenuItemsVarianceFieldsModelSelector) => MenuItemsVarianceFieldsModelSelector)) { return this.__child(`variance`, MenuItemsVarianceFieldsModelSelector, builder) }
}
export function selectFromMenuItemsAggregateFields() {
  return new MenuItemsAggregateFieldsModelSelector()
}

export const menuItemsAggregateFieldsModelPrimitives = selectFromMenuItemsAggregateFields().count
