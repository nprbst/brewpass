/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestBase
 * auto generated base class for the model IdTestModel.
 *
 * columns and relationships of "id_test"
 */
export const IdTestModelBase = ModelBase
  .named('IdTest')
  .props({
    __typename: types.optional(types.literal("id_test"), "id_test"),
    bar: types.union(types.undefined, types.frozen()),
    foo: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
  get foo() { return this.__attr(`foo`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromIdTest() {
  return new IdTestModelSelector()
}

export const idTestModelPrimitives = selectFromIdTest().bar.foo
