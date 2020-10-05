/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsModel, OrderItemsModelType } from "./OrderItemsModel"
import { OrderItemsModelSelector } from "./OrderItemsModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItemsMutationResponseBase
 * auto generated base class for the model OrderItemsMutationResponseModel.
 *
 * response of any mutation on the table "order_items"
 */
export const OrderItemsMutationResponseModelBase = ModelBase
  .named('OrderItemsMutationResponse')
  .props({
    __typename: types.optional(types.literal("order_items_mutation_response"), "order_items_mutation_response"),
    /** number of affected rows by the mutation */
    affected_rows: types.union(types.undefined, types.integer),
    /** data of the affected rows by the mutation */
    returning: types.union(types.undefined, types.array(types.late((): any => OrderItemsModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsMutationResponseModelSelector extends QueryBuilder {
  get affected_rows() { return this.__attr(`affected_rows`) }
  returning(builder?: string | OrderItemsModelSelector | ((selector: OrderItemsModelSelector) => OrderItemsModelSelector)) { return this.__child(`returning`, OrderItemsModelSelector, builder) }
}
export function selectFromOrderItemsMutationResponse() {
  return new OrderItemsMutationResponseModelSelector()
}

export const orderItemsMutationResponseModelPrimitives = selectFromOrderItemsMutationResponse().affected_rows
