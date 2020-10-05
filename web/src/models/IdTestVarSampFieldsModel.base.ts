/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestVarSampFieldsBase
 * auto generated base class for the model IdTestVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const IdTestVarSampFieldsModelBase = ModelBase
  .named('IdTestVarSampFields')
  .props({
    __typename: types.optional(types.literal("id_test_var_samp_fields"), "id_test_var_samp_fields"),
    bar: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestVarSampFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
}
export function selectFromIdTestVarSampFields() {
  return new IdTestVarSampFieldsModelSelector()
}

export const idTestVarSampFieldsModelPrimitives = selectFromIdTestVarSampFields().bar
