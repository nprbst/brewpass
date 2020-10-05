/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { NearbyVenuesAggregateFieldsModel, NearbyVenuesAggregateFieldsModelType } from "./NearbyVenuesAggregateFieldsModel"
import { NearbyVenuesAggregateFieldsModelSelector } from "./NearbyVenuesAggregateFieldsModel.base"
import { NearbyVenuesModel, NearbyVenuesModelType } from "./NearbyVenuesModel"
import { NearbyVenuesModelSelector } from "./NearbyVenuesModel.base"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesAggregateBase
 * auto generated base class for the model NearbyVenuesAggregateModel.
 *
 * aggregated selection of "nearby_venues"
 */
export const NearbyVenuesAggregateModelBase = ModelBase
  .named('NearbyVenuesAggregate')
  .props({
    __typename: types.optional(types.literal("nearby_venues_aggregate"), "nearby_venues_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => NearbyVenuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | NearbyVenuesAggregateFieldsModelSelector | ((selector: NearbyVenuesAggregateFieldsModelSelector) => NearbyVenuesAggregateFieldsModelSelector)) { return this.__child(`aggregate`, NearbyVenuesAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | NearbyVenuesModelSelector | ((selector: NearbyVenuesModelSelector) => NearbyVenuesModelSelector)) { return this.__child(`nodes`, NearbyVenuesModelSelector, builder) }
}
export function selectFromNearbyVenuesAggregate() {
  return new NearbyVenuesAggregateModelSelector()
}

export const nearbyVenuesAggregateModelPrimitives = selectFromNearbyVenuesAggregate()
