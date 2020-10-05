/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { IdTestModel, IdTestModelType } from "./IdTestModel"
import { IdTestModelSelector } from "./IdTestModel.base"
import { RootStoreType } from "./index"


/**
 * IdTestMutationResponseBase
 * auto generated base class for the model IdTestMutationResponseModel.
 *
 * response of any mutation on the table "id_test"
 */
export const IdTestMutationResponseModelBase = ModelBase
  .named('IdTestMutationResponse')
  .props({
    __typename: types.optional(types.literal("id_test_mutation_response"), "id_test_mutation_response"),
    /** number of affected rows by the mutation */
    affected_rows: types.union(types.undefined, types.integer),
    /** data of the affected rows by the mutation */
    returning: types.union(types.undefined, types.array(types.late((): any => IdTestModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestMutationResponseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | IdTestModelSelector | ((selector: IdTestModelSelector) => IdTestModelSelector)) { return this.__child(`returning`, IdTestModelSelector, builder) }
}
export function selectFromIdTestMutationResponse() {
  return new IdTestMutationResponseModelSelector()
}

export const idTestMutationResponseModelPrimitives = selectFromIdTestMutationResponse().affected_rows
