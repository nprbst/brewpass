/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsAvgFieldsBase
 * auto generated base class for the model OrderItemsAvgFieldsModel.
 *
 * aggregate avg on columns
 */
export const OrderItemsAvgFieldsModelBase = ModelBase
  .named('OrderItemsAvgFields')
  .props({
    __typename: types.optional(types.literal("order_items_avg_fields"), "order_items_avg_fields"),
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

export class OrderItemsAvgFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get order_id() { return this.__attr(`order_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsAvgFields() {
  return new OrderItemsAvgFieldsModelSelector()
}

export const orderItemsAvgFieldsModelPrimitives = selectFromOrderItemsAvgFields().menu_item_id.order_id.venue_id
