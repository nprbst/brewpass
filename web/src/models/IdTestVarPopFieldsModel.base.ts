/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestVarPopFieldsBase
 * auto generated base class for the model IdTestVarPopFieldsModel.
 *
 * aggregate var_pop on columns
 */
export const IdTestVarPopFieldsModelBase = ModelBase
  .named('IdTestVarPopFields')
  .props({
    __typename: types.optional(types.literal("id_test_var_pop_fields"), "id_test_var_pop_fields"),
    bar: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestVarPopFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
}
export function selectFromIdTestVarPopFields() {
  return new IdTestVarPopFieldsModelSelector()
}

export const idTestVarPopFieldsModelPrimitives = selectFromIdTestVarPopFields().bar
