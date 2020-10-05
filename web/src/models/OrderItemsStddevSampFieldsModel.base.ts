/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsStddevSampFieldsBase
 * auto generated base class for the model OrderItemsStddevSampFieldsModel.
 *
 * aggregate stddev_samp on columns
 */
export const OrderItemsStddevSampFieldsModelBase = ModelBase
  .named('OrderItemsStddevSampFields')
  .props({
    __typename: types.optional(types.literal("order_items_stddev_samp_fields"), "order_items_stddev_samp_fields"),
    id: types.union(types.undefined, types.null, types.number),
    menu_item_id: types.union(types.undefined, types.null, types.number),
    order_id: types.union(types.undefined, types.null, types.number),
    venue_id: types.union(types.undefined, types.null, types.number),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsStddevSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get order_id() { return this.__attr(`order_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsStddevSampFields() {
  return new OrderItemsStddevSampFieldsModelSelector()
}

export const orderItemsStddevSampFieldsModelPrimitives = selectFromOrderItemsStddevSampFields().menu_item_id.order_id.venue_id
