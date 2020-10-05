/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrdersStddevSampFieldsBase
 * auto generated base class for the model OrdersStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const OrdersStddevSampFieldsModelBase = ModelBase
  .named('OrdersStddevSampFields')
  .props({
    __typename: types.optional(types.literal("orders_stddev_samp_fields"), "orders_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrdersStddevSampFields() {
  return new OrdersStddevSampFieldsModelSelector()
}

export const ordersStddevSampFieldsModelPrimitives = selectFromOrdersStddevSampFields().venue_id
