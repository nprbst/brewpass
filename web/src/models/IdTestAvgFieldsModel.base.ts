/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestAvgFieldsBase
 * auto generated base class for the model IdTestAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const IdTestAvgFieldsModelBase = ModelBase
  .named('IdTestAvgFields')
  .props({
    __typename: types.optional(types.literal("id_test_avg_fields"), "id_test_avg_fields"),
    bar: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestAvgFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
}
export function selectFromIdTestAvgFields() {
  return new IdTestAvgFieldsModelSelector()
}

export const idTestAvgFieldsModelPrimitives = selectFromIdTestAvgFields().bar
