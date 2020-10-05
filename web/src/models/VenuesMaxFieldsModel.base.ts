/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * VenuesMaxFieldsBase
 * auto generated base class for the model VenuesMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const VenuesMaxFieldsModelBase = ModelBase
  .named('VenuesMaxFields')
  .props({
    __typename: types.optional(types.literal("venues_max_fields"), "venues_max_fields"),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    deleted_at: types.union(types.undefined, types.null, types.frozen()),
    id: types.union(types.undefined, types.null, types.frozen()),
    lat: types.union(types.undefined, types.null, types.frozen()),
    long: types.union(types.undefined, types.null, types.frozen()),
    name: types.union(types.undefined, types.null, types.string),
    osm_id: types.union(types.undefined, types.null, types.string),
    updated_at: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesMaxFieldsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get deleted_at() { return this.__attr(`deleted_at`) }
  get id() { return this.__attr(`id`) }
  get lat() { return this.__attr(`lat`) }
  get long() { return this.__attr(`long`) }
  get name() { return this.__attr(`name`) }
  get osm_id() { return this.__attr(`osm_id`) }
  get updated_at() { return this.__attr(`updated_at`) }
}
export function selectFromVenuesMaxFields() {
  return new VenuesMaxFieldsModelSelector()
}

export const venuesMaxFieldsModelPrimitives = selectFromVenuesMaxFields().created_at.deleted_at.lat.long.name.osm_id.updated_at
