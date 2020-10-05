/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItemsSumFieldsBase
 * auto generated base class for the model OrderItemsSumFieldsModel.
 *
 * aggregate sum on columns
 */
export const OrderItemsSumFieldsModelBase = ModelBase
  .named('OrderItemsSumFields')
  .props({
    __typename: types.optional(types.literal("order_items_sum_fields"), "order_items_sum_fields"),
    id: types.union(types.undefined, types.null, types.frozen()),
    menu_item_id: types.union(types.undefined, types.null, types.frozen()),
    order_id: types.union(types.undefined, types.null, types.frozen()),
    venue_id: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsSumFieldsModelSelector extends QueryBuilder {
  get id() { return this.__attr(`id`) }
  get menu_item_id() { return this.__attr(`menu_item_id`) }
  get order_id() { return this.__attr(`order_id`) }
  get venue_id() { return this.__attr(`venue_id`) }
}
export function selectFromOrderItemsSumFields() {
  return new OrderItemsSumFieldsModelSelector()
}

export const orderItemsSumFieldsModelPrimitives = selectFromOrderItemsSumFields().menu_item_id.order_id.venue_id
