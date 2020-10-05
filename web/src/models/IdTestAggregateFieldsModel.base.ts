/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { IdTestAvgFieldsModel, IdTestAvgFieldsModelType } from "./IdTestAvgFieldsModel"
import { IdTestAvgFieldsModelSelector } from "./IdTestAvgFieldsModel.base"
import { IdTestMaxFieldsModel, IdTestMaxFieldsModelType } from "./IdTestMaxFieldsModel"
import { IdTestMaxFieldsModelSelector } from "./IdTestMaxFieldsModel.base"
import { IdTestMinFieldsModel, IdTestMinFieldsModelType } from "./IdTestMinFieldsModel"
import { IdTestMinFieldsModelSelector } from "./IdTestMinFieldsModel.base"
import { IdTestStddevFieldsModel, IdTestStddevFieldsModelType } from "./IdTestStddevFieldsModel"
import { IdTestStddevFieldsModelSelector } from "./IdTestStddevFieldsModel.base"
import { IdTestStddevPopFieldsModel, IdTestStddevPopFieldsModelType } from "./IdTestStddevPopFieldsModel"
import { IdTestStddevPopFieldsModelSelector } from "./IdTestStddevPopFieldsModel.base"
import { IdTestStddevSampFieldsModel, IdTestStddevSampFieldsModelType } from "./IdTestStddevSampFieldsModel"
import { IdTestStddevSampFieldsModelSelector } from "./IdTestStddevSampFieldsModel.base"
import { IdTestSumFieldsModel, IdTestSumFieldsModelType } from "./IdTestSumFieldsModel"
import { IdTestSumFieldsModelSelector } from "./IdTestSumFieldsModel.base"
import { IdTestVarPopFieldsModel, IdTestVarPopFieldsModelType } from "./IdTestVarPopFieldsModel"
import { IdTestVarPopFieldsModelSelector } from "./IdTestVarPopFieldsModel.base"
import { IdTestVarSampFieldsModel, IdTestVarSampFieldsModelType } from "./IdTestVarSampFieldsModel"
import { IdTestVarSampFieldsModelSelector } from "./IdTestVarSampFieldsModel.base"
import { IdTestVarianceFieldsModel, IdTestVarianceFieldsModelType } from "./IdTestVarianceFieldsModel"
import { IdTestVarianceFieldsModelSelector } from "./IdTestVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * IdTestAggregateFieldsBase
 * auto generated base class for the model IdTestAggregateFieldsModel.
 *
 * aggregate fields of "id_test"
 */
export const IdTestAggregateFieldsModelBase = ModelBase
  .named('IdTestAggregateFields')
  .props({
    __typename: types.optional(types.literal("id_test_aggregate_fields"), "id_test_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => IdTestAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => IdTestMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => IdTestMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => IdTestStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => IdTestStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => IdTestStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => IdTestSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => IdTestVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => IdTestVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => IdTestVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | IdTestAvgFieldsModelSelector | ((selector: IdTestAvgFieldsModelSelector) => IdTestAvgFieldsModelSelector)) { return this.__child(`avg`, IdTestAvgFieldsModelSelector, builder) }
  max(builder?: string | IdTestMaxFieldsModelSelector | ((selector: IdTestMaxFieldsModelSelector) => IdTestMaxFieldsModelSelector)) { return this.__child(`max`, IdTestMaxFieldsModelSelector, builder) }
  min(builder?: string | IdTestMinFieldsModelSelector | ((selector: IdTestMinFieldsModelSelector) => IdTestMinFieldsModelSelector)) { return this.__child(`min`, IdTestMinFieldsModelSelector, builder) }
  stddev(builder?: string | IdTestStddevFieldsModelSelector | ((selector: IdTestStddevFieldsModelSelector) => IdTestStddevFieldsModelSelector)) { return this.__child(`stddev`, IdTestStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | IdTestStddevPopFieldsModelSelector | ((selector: IdTestStddevPopFieldsModelSelector) => IdTestStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, IdTestStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | IdTestStddevSampFieldsModelSelector | ((selector: IdTestStddevSampFieldsModelSelector) => IdTestStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, IdTestStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | IdTestSumFieldsModelSelector | ((selector: IdTestSumFieldsModelSelector) => IdTestSumFieldsModelSelector)) { return this.__child(`sum`, IdTestSumFieldsModelSelector, builder) }
  var_pop(builder?: string | IdTestVarPopFieldsModelSelector | ((selector: IdTestVarPopFieldsModelSelector) => IdTestVarPopFieldsModelSelector)) { return this.__child(`var_pop`, IdTestVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | IdTestVarSampFieldsModelSelector | ((selector: IdTestVarSampFieldsModelSelector) => IdTestVarSampFieldsModelSelector)) { return this.__child(`var_samp`, IdTestVarSampFieldsModelSelector, builder) }
  variance(builder?: string | IdTestVarianceFieldsModelSelector | ((selector: IdTestVarianceFieldsModelSelector) => IdTestVarianceFieldsModelSelector)) { return this.__child(`variance`, IdTestVarianceFieldsModelSelector, builder) }
}
export function selectFromIdTestAggregateFields() {
  return new IdTestAggregateFieldsModelSelector()
}

export const idTestAggregateFieldsModelPrimitives = selectFromIdTestAggregateFields().count
