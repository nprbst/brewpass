/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestMinFieldsBase
 * auto generated base class for the model IdTestMinFieldsModel.
 *
 * aggregate min on columns
 */
export const IdTestMinFieldsModelBase = ModelBase
  .named('IdTestMinFields')
  .props({
    __typename: types.optional(types.literal("id_test_min_fields"), "id_test_min_fields"),
    bar: types.union(types.undefined, types.null, types.frozen()),
    foo: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestMinFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
  get foo() { return this.__attr(`foo`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromIdTestMinFields() {
  return new IdTestMinFieldsModelSelector()
}

export const idTestMinFieldsModelPrimitives = selectFromIdTestMinFields().bar.foo
