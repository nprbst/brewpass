/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestStddevPopFieldsBase
 * auto generated base class for the model IdTestStddevPopFieldsModel.
 *
 * aggregate stddev_pop on columns
 */
export const IdTestStddevPopFieldsModelBase = ModelBase
  .named('IdTestStddevPopFields')
  .props({
    __typename: types.optional(types.literal("id_test_stddev_pop_fields"), "id_test_stddev_pop_fields"),
    bar: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestStddevPopFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
}
export function selectFromIdTestStddevPopFields() {
  return new IdTestStddevPopFieldsModelSelector()
}

export const idTestStddevPopFieldsModelPrimitives = selectFromIdTestStddevPopFields().bar
