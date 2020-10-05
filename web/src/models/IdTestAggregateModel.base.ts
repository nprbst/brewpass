/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { IdTestAggregateFieldsModel, IdTestAggregateFieldsModelType } from "./IdTestAggregateFieldsModel"
import { IdTestAggregateFieldsModelSelector } from "./IdTestAggregateFieldsModel.base"
import { IdTestModel, IdTestModelType } from "./IdTestModel"
import { IdTestModelSelector } from "./IdTestModel.base"
import { RootStoreType } from "./index"


/**
 * IdTestAggregateBase
 * auto generated base class for the model IdTestAggregateModel.
 *
 * aggregated selection of "id_test"
 */
export const IdTestAggregateModelBase = ModelBase
  .named('IdTestAggregate')
  .props({
    __typename: types.optional(types.literal("id_test_aggregate"), "id_test_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => IdTestAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => IdTestModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | IdTestAggregateFieldsModelSelector | ((selector: IdTestAggregateFieldsModelSelector) => IdTestAggregateFieldsModelSelector)) { return this.__child(`aggregate`, IdTestAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | IdTestModelSelector | ((selector: IdTestModelSelector) => IdTestModelSelector)) { return this.__child(`nodes`, IdTestModelSelector, builder) }
}
export function selectFromIdTestAggregate() {
  return new IdTestAggregateModelSelector()
}

export const idTestAggregateModelPrimitives = selectFromIdTestAggregate()
