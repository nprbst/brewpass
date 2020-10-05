/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersVarianceFieldsBase
 * auto generated base class for the model OrdersVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const OrdersVarianceFieldsModelBase = ModelBase
  .named('OrdersVarianceFields')
  .props({
    __typename: types.optional(types.literal("orders_variance_fields"), "orders_variance_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersVarianceFields() {
  return new OrdersVarianceFieldsModelSelector()
}

export const ordersVarianceFieldsModelPrimitives = selectFromOrdersVarianceFields().venue_id
