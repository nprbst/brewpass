/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestSumFieldsBase
 * auto generated base class for the model IdTestSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const IdTestSumFieldsModelBase = ModelBase
  .named('IdTestSumFields')
  .props({
    __typename: types.optional(types.literal("id_test_sum_fields"), "id_test_sum_fields"),
    bar: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestSumFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
}
export function selectFromIdTestSumFields() {
  return new IdTestSumFieldsModelSelector()
}

export const idTestSumFieldsModelPrimitives = selectFromIdTestSumFields().bar
