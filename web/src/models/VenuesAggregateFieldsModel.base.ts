/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { VenuesAvgFieldsModel, VenuesAvgFieldsModelType } from "./VenuesAvgFieldsModel"
import { VenuesAvgFieldsModelSelector } from "./VenuesAvgFieldsModel.base"
import { VenuesMaxFieldsModel, VenuesMaxFieldsModelType } from "./VenuesMaxFieldsModel"
import { VenuesMaxFieldsModelSelector } from "./VenuesMaxFieldsModel.base"
import { VenuesMinFieldsModel, VenuesMinFieldsModelType } from "./VenuesMinFieldsModel"
import { VenuesMinFieldsModelSelector } from "./VenuesMinFieldsModel.base"
import { VenuesStddevFieldsModel, VenuesStddevFieldsModelType } from "./VenuesStddevFieldsModel"
import { VenuesStddevFieldsModelSelector } from "./VenuesStddevFieldsModel.base"
import { VenuesStddevPopFieldsModel, VenuesStddevPopFieldsModelType } from "./VenuesStddevPopFieldsModel"
import { VenuesStddevPopFieldsModelSelector } from "./VenuesStddevPopFieldsModel.base"
import { VenuesStddevSampFieldsModel, VenuesStddevSampFieldsModelType } from "./VenuesStddevSampFieldsModel"
import { VenuesStddevSampFieldsModelSelector } from "./VenuesStddevSampFieldsModel.base"
import { VenuesSumFieldsModel, VenuesSumFieldsModelType } from "./VenuesSumFieldsModel"
import { VenuesSumFieldsModelSelector } from "./VenuesSumFieldsModel.base"
import { VenuesVarPopFieldsModel, VenuesVarPopFieldsModelType } from "./VenuesVarPopFieldsModel"
import { VenuesVarPopFieldsModelSelector } from "./VenuesVarPopFieldsModel.base"
import { VenuesVarSampFieldsModel, VenuesVarSampFieldsModelType } from "./VenuesVarSampFieldsModel"
import { VenuesVarSampFieldsModelSelector } from "./VenuesVarSampFieldsModel.base"
import { VenuesVarianceFieldsModel, VenuesVarianceFieldsModelType } from "./VenuesVarianceFieldsModel"
import { VenuesVarianceFieldsModelSelector } from "./VenuesVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * VenuesAggregateFieldsBase
 * auto generated base class for the model VenuesAggregateFieldsModel.
 *
 * aggregate fields of "venues"
 */
export const VenuesAggregateFieldsModelBase = ModelBase
  .named('VenuesAggregateFields')
  .props({
    __typename: types.optional(types.literal("venues_aggregate_fields"), "venues_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => VenuesAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => VenuesMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => VenuesMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => VenuesStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => VenuesStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => VenuesStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => VenuesSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => VenuesVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => VenuesVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => VenuesVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | VenuesAvgFieldsModelSelector | ((selector: VenuesAvgFieldsModelSelector) => VenuesAvgFieldsModelSelector)) { return this.__child(`avg`, VenuesAvgFieldsModelSelector, builder) }
  max(builder?: string | VenuesMaxFieldsModelSelector | ((selector: VenuesMaxFieldsModelSelector) => VenuesMaxFieldsModelSelector)) { return this.__child(`max`, VenuesMaxFieldsModelSelector, builder) }
  min(builder?: string | VenuesMinFieldsModelSelector | ((selector: VenuesMinFieldsModelSelector) => VenuesMinFieldsModelSelector)) { return this.__child(`min`, VenuesMinFieldsModelSelector, builder) }
  stddev(builder?: string | VenuesStddevFieldsModelSelector | ((selector: VenuesStddevFieldsModelSelector) => VenuesStddevFieldsModelSelector)) { return this.__child(`stddev`, VenuesStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | VenuesStddevPopFieldsModelSelector | ((selector: VenuesStddevPopFieldsModelSelector) => VenuesStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, VenuesStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | VenuesStddevSampFieldsModelSelector | ((selector: VenuesStddevSampFieldsModelSelector) => VenuesStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, VenuesStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | VenuesSumFieldsModelSelector | ((selector: VenuesSumFieldsModelSelector) => VenuesSumFieldsModelSelector)) { return this.__child(`sum`, VenuesSumFieldsModelSelector, builder) }
  var_pop(builder?: string | VenuesVarPopFieldsModelSelector | ((selector: VenuesVarPopFieldsModelSelector) => VenuesVarPopFieldsModelSelector)) { return this.__child(`var_pop`, VenuesVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | VenuesVarSampFieldsModelSelector | ((selector: VenuesVarSampFieldsModelSelector) => VenuesVarSampFieldsModelSelector)) { return this.__child(`var_samp`, VenuesVarSampFieldsModelSelector, builder) }
  variance(builder?: string | VenuesVarianceFieldsModelSelector | ((selector: VenuesVarianceFieldsModelSelector) => VenuesVarianceFieldsModelSelector)) { return this.__child(`variance`, VenuesVarianceFieldsModelSelector, builder) }
}
export function selectFromVenuesAggregateFields() {
  return new VenuesAggregateFieldsModelSelector()
}

export const venuesAggregateFieldsModelPrimitives = selectFromVenuesAggregateFields().count
