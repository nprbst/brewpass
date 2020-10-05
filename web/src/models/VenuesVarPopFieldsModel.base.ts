/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VenuesVarPopFieldsBase
 * auto generated base class for the model VenuesVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const VenuesVarPopFieldsModelBase = ModelBase
  .named('VenuesVarPopFields')
  .props({
    __typename: types.optional(types.literal("venues_var_pop_fields"), "venues_var_pop_fields"),
    id: types.union(types.undefined, types.null, types.number),
    lat: types.union(types.undefined, types.null, types.number),
    long: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesVarPopFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
}
export function selectFromVenuesVarPopFields() {
  return new VenuesVarPopFieldsModelSelector()
}

export const venuesVarPopFieldsModelPrimitives = selectFromVenuesVarPopFields().lat.long
