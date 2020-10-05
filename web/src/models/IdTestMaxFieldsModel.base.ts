/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * IdTestMaxFieldsBase
 * auto generated base class for the model IdTestMaxFieldsModel.
 *
 * aggregate max on columns
 */
export const IdTestMaxFieldsModelBase = ModelBase
  .named('IdTestMaxFields')
  .props({
    __typename: types.optional(types.literal("id_test_max_fields"), "id_test_max_fields"),
    bar: types.union(types.undefined, types.null, types.frozen()),
    foo: types.union(types.undefined, types.null, types.string),
    id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class IdTestMaxFieldsModelSelector extends QueryBuilder {
  get bar() { return this.__attr(`bar`) }
  get foo() { return this.__attr(`foo`) }
  get id() { return this.__attr(`id`) }
}
export function selectFromIdTestMaxFields() {
  return new IdTestMaxFieldsModelSelector()
}

export const idTestMaxFieldsModelPrimitives = selectFromIdTestMaxFields().bar.foo
