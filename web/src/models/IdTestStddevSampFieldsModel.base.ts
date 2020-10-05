/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestStddevSampFieldsBase
 * auto generated base class for the model IdTestStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const IdTestStddevSampFieldsModelBase = ModelBase
  .named('IdTestStddevSampFields')
  .props({
    __typename: types.optional(types.literal("id_test_stddev_samp_fields"), "id_test_stddev_samp_fields"),
    bar: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestStddevSampFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
}
export function selectFromIdTestStddevSampFields() {
  return new IdTestStddevSampFieldsModelSelector()
}

export const idTestStddevSampFieldsModelPrimitives = selectFromIdTestStddevSampFields().bar
