/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsVarSampFieldsBase
 * auto generated base class for the model OrderItemsVarSampFieldsModel.
 *
 * aggregate var_samp on columns
 */
export const OrderItemsVarSampFieldsModelBase = ModelBase
  .named('OrderItemsVarSampFields')
  .props({
    __typename: types.optional(types.literal("order_items_var_samp_fields"), "order_items_var_samp_fields"),
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

export class OrderItemsVarSampFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get order_id() { return this.__attr(`order_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsVarSampFields() {
  return new OrderItemsVarSampFieldsModelSelector()
}

export const orderItemsVarSampFieldsModelPrimitives = selectFromOrderItemsVarSampFields().menu_item_id.order_id.venue_id
