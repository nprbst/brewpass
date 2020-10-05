/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { NearbyVenuesAvgFieldsModel, NearbyVenuesAvgFieldsModelType } from "./NearbyVenuesAvgFieldsModel"
import { NearbyVenuesAvgFieldsModelSelector } from "./NearbyVenuesAvgFieldsModel.base"
import { NearbyVenuesMaxFieldsModel, NearbyVenuesMaxFieldsModelType } from "./NearbyVenuesMaxFieldsModel"
import { NearbyVenuesMaxFieldsModelSelector } from "./NearbyVenuesMaxFieldsModel.base"
import { NearbyVenuesMinFieldsModel, NearbyVenuesMinFieldsModelType } from "./NearbyVenuesMinFieldsModel"
import { NearbyVenuesMinFieldsModelSelector } from "./NearbyVenuesMinFieldsModel.base"
import { NearbyVenuesStddevFieldsModel, NearbyVenuesStddevFieldsModelType } from "./NearbyVenuesStddevFieldsModel"
import { NearbyVenuesStddevFieldsModelSelector } from "./NearbyVenuesStddevFieldsModel.base"
import { NearbyVenuesStddevPopFieldsModel, NearbyVenuesStddevPopFieldsModelType } from "./NearbyVenuesStddevPopFieldsModel"
import { NearbyVenuesStddevPopFieldsModelSelector } from "./NearbyVenuesStddevPopFieldsModel.base"
import { NearbyVenuesStddevSampFieldsModel, NearbyVenuesStddevSampFieldsModelType } from "./NearbyVenuesStddevSampFieldsModel"
import { NearbyVenuesStddevSampFieldsModelSelector } from "./NearbyVenuesStddevSampFieldsModel.base"
import { NearbyVenuesSumFieldsModel, NearbyVenuesSumFieldsModelType } from "./NearbyVenuesSumFieldsModel"
import { NearbyVenuesSumFieldsModelSelector } from "./NearbyVenuesSumFieldsModel.base"
import { NearbyVenuesVarPopFieldsModel, NearbyVenuesVarPopFieldsModelType } from "./NearbyVenuesVarPopFieldsModel"
import { NearbyVenuesVarPopFieldsModelSelector } from "./NearbyVenuesVarPopFieldsModel.base"
import { NearbyVenuesVarSampFieldsModel, NearbyVenuesVarSampFieldsModelType } from "./NearbyVenuesVarSampFieldsModel"
import { NearbyVenuesVarSampFieldsModelSelector } from "./NearbyVenuesVarSampFieldsModel.base"
import { NearbyVenuesVarianceFieldsModel, NearbyVenuesVarianceFieldsModelType } from "./NearbyVenuesVarianceFieldsModel"
import { NearbyVenuesVarianceFieldsModelSelector } from "./NearbyVenuesVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * NearbyVenuesAggregateFieldsBase
 * auto generated base class for the model NearbyVenuesAggregateFieldsModel.
 *
 * aggregate fields of "nearby_venues"
 */
export const NearbyVenuesAggregateFieldsModelBase = ModelBase
  .named('NearbyVenuesAggregateFields')
  .props({
    __typename: types.optional(types.literal("nearby_venues_aggregate_fields"), "nearby_venues_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class NearbyVenuesAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | NearbyVenuesAvgFieldsModelSelector | ((selector: NearbyVenuesAvgFieldsModelSelector) => NearbyVenuesAvgFieldsModelSelector)) { return this.__child(`avg`, NearbyVenuesAvgFieldsModelSelector, builder) }
  max(builder?: string | NearbyVenuesMaxFieldsModelSelector | ((selector: NearbyVenuesMaxFieldsModelSelector) => NearbyVenuesMaxFieldsModelSelector)) { return this.__child(`max`, NearbyVenuesMaxFieldsModelSelector, builder) }
  min(builder?: string | NearbyVenuesMinFieldsModelSelector | ((selector: NearbyVenuesMinFieldsModelSelector) => NearbyVenuesMinFieldsModelSelector)) { return this.__child(`min`, NearbyVenuesMinFieldsModelSelector, builder) }
  stddev(builder?: string | NearbyVenuesStddevFieldsModelSelector | ((selector: NearbyVenuesStddevFieldsModelSelector) => NearbyVenuesStddevFieldsModelSelector)) { return this.__child(`stddev`, NearbyVenuesStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | NearbyVenuesStddevPopFieldsModelSelector | ((selector: NearbyVenuesStddevPopFieldsModelSelector) => NearbyVenuesStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, NearbyVenuesStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | NearbyVenuesStddevSampFieldsModelSelector | ((selector: NearbyVenuesStddevSampFieldsModelSelector) => NearbyVenuesStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, NearbyVenuesStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | NearbyVenuesSumFieldsModelSelector | ((selector: NearbyVenuesSumFieldsModelSelector) => NearbyVenuesSumFieldsModelSelector)) { return this.__child(`sum`, NearbyVenuesSumFieldsModelSelector, builder) }
  var_pop(builder?: string | NearbyVenuesVarPopFieldsModelSelector | ((selector: NearbyVenuesVarPopFieldsModelSelector) => NearbyVenuesVarPopFieldsModelSelector)) { return this.__child(`var_pop`, NearbyVenuesVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | NearbyVenuesVarSampFieldsModelSelector | ((selector: NearbyVenuesVarSampFieldsModelSelector) => NearbyVenuesVarSampFieldsModelSelector)) { return this.__child(`var_samp`, NearbyVenuesVarSampFieldsModelSelector, builder) }
  variance(builder?: string | NearbyVenuesVarianceFieldsModelSelector | ((selector: NearbyVenuesVarianceFieldsModelSelector) => NearbyVenuesVarianceFieldsModelSelector)) { return this.__child(`variance`, NearbyVenuesVarianceFieldsModelSelector, builder) }
}
export function selectFromNearbyVenuesAggregateFields() {
  return new NearbyVenuesAggregateFieldsModelSelector()
}

export const nearbyVenuesAggregateFieldsModelPrimitives = selectFromNearbyVenuesAggregateFields().count
