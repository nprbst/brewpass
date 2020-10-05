/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersSumFieldsBase
 * auto generated base class for the model OrdersSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const OrdersSumFieldsModelBase = ModelBase
  .named('OrdersSumFields')
  .props({
    __typename: types.optional(types.literal("orders_sum_fields"), "orders_sum_fields"),
    id: types.union(types.undefined, types.null, types.frozen()),
    venue_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersSumFields() {
  return new OrdersSumFieldsModelSelector()
}

export const ordersSumFieldsModelPrimitives = selectFromOrdersSumFields().venue_id
