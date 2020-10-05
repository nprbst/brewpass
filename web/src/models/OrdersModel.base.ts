/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { VenuesModel, VenuesModelType } from "./VenuesModel"
import { VenuesModelSelector } from "./VenuesModel.base"
import { RootStoreType } from "./index"


/**
 * OrdersBase
 * auto generated base class for the model OrdersModel.
 *
 * columns and relationships of "orders"
 */
export const OrdersModelBase = ModelBase
  .named('Orders')
  .props({
    __typename: types.optional(types.literal("orders"), "orders"),
    created_at: types.union(types.undefined, types.frozen()),
    display: types.union(types.undefined, types.string),
    id: types.union(types.undefined, types.frozen()),
    ordered_at: types.union(types.undefined, types.frozen()),
    /** An object relationship */
    venue: types.union(types.undefined, types.late((): any => VenuesModel)),
    venue_id: types.union(types.undefined, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get display() { return this.__attr(`display`) }
  get id() { return this.__attr(`id`) }
  get ordered_at() { return this.__attr(`ordered_at`) }
  get venue_id() { return this.__attr(`venue_id`) }
  venue(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`venue`, VenuesModelSelector, builder) }
}
export function selectFromOrders() {
  return new OrdersModelSelector()
}

export const ordersModelPrimitives = selectFromOrders().created_at.display.ordered_at.venue_id
