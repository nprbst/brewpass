/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { NearbyVenuesModel, NearbyVenuesModelType } from "./NearbyVenuesModel"
import { NearbyVenuesModelSelector } from "./NearbyVenuesModel.base"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesMutationResponseBase
 * auto generated base class for the model NearbyVenuesMutationResponseModel.
 *
 * response of any mutation on the table "nearby_venues"
 */
export const NearbyVenuesMutationResponseModelBase = ModelBase
  .named('NearbyVenuesMutationResponse')
  .props({
    __typename: types.optional(types.literal("nearby_venues_mutation_response"), "nearby_venues_mutation_response"),
    /** number of affected rows by the mutation */
    affected_rows: types.union(types.undefined, types.integer),
    /** data of the affected rows by the mutation */
    returning: types.union(types.undefined, types.array(types.late((): any => NearbyVenuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesMutationResponseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | NearbyVenuesModelSelector | ((selector: NearbyVenuesModelSelector) => NearbyVenuesModelSelector)) { return this.__child(`returning`, NearbyVenuesModelSelector, builder) }
}
export function selectFromNearbyVenuesMutationResponse() {
  return new NearbyVenuesMutationResponseModelSelector()
}

export const nearbyVenuesMutationResponseModelPrimitives = selectFromNearbyVenuesMutationResponse().affected_rows
