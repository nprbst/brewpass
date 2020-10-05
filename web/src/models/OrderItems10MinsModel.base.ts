/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsBase
 * auto generated base class for the model OrderItems10MinsModel.
 *
 * columns and relationships of "order_items_10_mins"
 */
export const OrderItems10MinsModelBase = ModelBase
  .named('OrderItems10Mins')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins"), "order_items_10_mins"),
    bucket: types.union(types.undefined, types.null, types.frozen()),
    count: types.union(types.undefined, types.null, types.frozen()),
    last_order: types.union(types.undefined, types.null, types.frozen()),
    menu_item: types.union(types.undefined, types.null, types.string),
    venue: types.union(types.undefined, types.null, types.string),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsModelSelector extends QueryBuilder {
  get bucket() { return this.__attr(`bucket`) }
  get count() { return this.__attr(`count`) }
  get last_order() { return this.__attr(`last_order`) }
  get menu_item() { return this.__attr(`menu_item`) }
  get venue() { return this.__attr(`venue`) }
}
export function selectFromOrderItems10Mins() {
  return new OrderItems10MinsModelSelector()
}

export const orderItems10MinsModelPrimitives = selectFromOrderItems10Mins().bucket.count.last_order.menu_item.venue
