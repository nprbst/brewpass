/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrdersModel, OrdersModelType } from "./OrdersModel"
import { OrdersModelSelector } from "./OrdersModel.base"
import { RootStoreType } from "./index"


/**
 * OrdersMutationResponseBase
 * auto generated base class for the model OrdersMutationResponseModel.
 *
 * response of any mutation on the table "orders"
 */
export const OrdersMutationResponseModelBase = ModelBase
  .named('OrdersMutationResponse')
  .props({
    __typename: types.optional(types.literal("orders_mutation_response"), "orders_mutation_response"),
    /** number of affected rows by the mutation */
    affected_rows: types.union(types.undefined, types.integer),
    /** data of the affected rows by the mutation */
    returning: types.union(types.undefined, types.array(types.late((): any => OrdersModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersMutationResponseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | OrdersModelSelector | ((selector: OrdersModelSelector) => OrdersModelSelector)) { return this.__child(`returning`, OrdersModelSelector, builder) }
}
export function selectFromOrdersMutationResponse() {
  return new OrdersMutationResponseModelSelector()
}

export const ordersMutationResponseModelPrimitives = selectFromOrdersMutationResponse().affected_rows
