/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestStddevFieldsBase
 * auto generated base class for the model IdTestStddevFieldsModel.
 *
 * aggregate stddev on columns
 */
export const IdTestStddevFieldsModelBase = ModelBase
  .named('IdTestStddevFields')
  .props({
    __typename: types.optional(types.literal("id_test_stddev_fields"), "id_test_stddev_fields"),
    bar: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestStddevFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
}
export function selectFromIdTestStddevFields() {
  return new IdTestStddevFieldsModelSelector()
}

export const idTestStddevFieldsModelPrimitives = selectFromIdTestStddevFields().bar
