/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestVarianceFieldsBase
 * auto generated base class for the model IdTestVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const IdTestVarianceFieldsModelBase = ModelBase
  .named('IdTestVarianceFields')
  .props({
    __typename: types.optional(types.literal("id_test_variance_fields"), "id_test_variance_fields"),
    bar: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestVarianceFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
}
export function selectFromIdTestVarianceFields() {
  return new IdTestVarianceFieldsModelSelector()
}

export const idTestVarianceFieldsModelPrimitives = selectFromIdTestVarianceFields().bar
