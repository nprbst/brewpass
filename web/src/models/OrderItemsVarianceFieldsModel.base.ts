/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsVarianceFieldsBase
 * auto generated base class for the model OrderItemsVarianceFieldsModel.
 *
 * aggregate variance on columns
 */
export const OrderItemsVarianceFieldsModelBase = ModelBase
  .named('OrderItemsVarianceFields')
  .props({
    __typename: types.optional(types.literal("order_items_variance_fields"), "order_items_variance_fields"),
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

export class OrderItemsVarianceFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get order_id() { return this.__attr(`order_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsVarianceFields() {
  return new OrderItemsVarianceFieldsModelSelector()
}

export const orderItemsVarianceFieldsModelPrimitives = selectFromOrderItemsVarianceFields().menu_item_id.order_id.venue_id
