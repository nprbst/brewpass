/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { VenuesModel, VenuesModelType } from "./VenuesModel"
import { VenuesModelSelector } from "./VenuesModel.base"
import { RootStoreType } from "./index"


/**
 * VenuesMutationResponseBase
 * auto generated base class for the model VenuesMutationResponseModel.
 *
 * response of any mutation on the table "venues"
 */
export const VenuesMutationResponseModelBase = ModelBase
  .named('VenuesMutationResponse')
  .props({
    __typename: types.optional(types.literal("venues_mutation_response"), "venues_mutation_response"),
    /** number of affected rows by the mutation */
    affected_rows: types.union(types.undefined, types.integer),
    /** data of the affected rows by the mutation */
    returning: types.union(types.undefined, types.array(types.late((): any => VenuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesMutationResponseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`returning`, VenuesModelSelector, builder) }
}
export function selectFromVenuesMutationResponse() {
  return new VenuesMutationResponseModelSelector()
}

export const venuesMutationResponseModelPrimitives = selectFromVenuesMutationResponse().affected_rows
