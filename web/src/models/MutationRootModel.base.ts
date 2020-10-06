/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MenuItemsModel, MenuItemsModelType } from "./MenuItemsModel"
import { MenuItemsModelSelector } from "./MenuItemsModel.base"
import { MenuItemsMutationResponseModel, MenuItemsMutationResponseModelType } from "./MenuItemsMutationResponseModel"
import { MenuItemsMutationResponseModelSelector } from "./MenuItemsMutationResponseModel.base"
import { NearbyVenuesModel, NearbyVenuesModelType } from "./NearbyVenuesModel"
import { NearbyVenuesModelSelector } from "./NearbyVenuesModel.base"
import { NearbyVenuesMutationResponseModel, NearbyVenuesMutationResponseModelType } from "./NearbyVenuesMutationResponseModel"
import { NearbyVenuesMutationResponseModelSelector } from "./NearbyVenuesMutationResponseModel.base"
import { OrderItemsModel, OrderItemsModelType } from "./OrderItemsModel"
import { OrderItemsModelSelector } from "./OrderItemsModel.base"
import { OrderItemsMutationResponseModel, OrderItemsMutationResponseModelType } from "./OrderItemsMutationResponseModel"
import { OrderItemsMutationResponseModelSelector } from "./OrderItemsMutationResponseModel.base"
import { OrdersModel, OrdersModelType } from "./OrdersModel"
import { OrdersModelSelector } from "./OrdersModel.base"
import { OrdersMutationResponseModel, OrdersMutationResponseModelType } from "./OrdersMutationResponseModel"
import { OrdersMutationResponseModelSelector } from "./OrdersMutationResponseModel.base"
import { VenuesModel, VenuesModelType } from "./VenuesModel"
import { VenuesModelSelector } from "./VenuesModel.base"
import { VenuesMutationResponseModel, VenuesMutationResponseModelType } from "./VenuesMutationResponseModel"
import { VenuesMutationResponseModelSelector } from "./VenuesMutationResponseModel.base"
import { RootStoreType } from "./index"


/**
 * MutationRootBase
 * auto generated base class for the model MutationRootModel.
 *
 * mutation root
 */
export const MutationRootModelBase = ModelBase
  .named('MutationRoot')
  .props({
    __typename: types.optional(types.literal("mutation_root"), "mutation_root"),
    /** delete data from the table: "menu_items" */
    delete_menu_items: types.union(types.undefined, types.null, types.late((): any => MenuItemsMutationResponseModel)),
    /** delete single row from the table: "menu_items" */
    delete_menu_items_by_pk: types.union(types.undefined, types.null, types.late((): any => MenuItemsModel)),
    /** delete data from the table: "nearby_venues" */
    delete_nearby_venues: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesMutationResponseModel)),
    /** delete single row from the table: "nearby_venues" */
    delete_nearby_venues_by_pk: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesModel)),
    /** delete data from the table: "order_items" */
    delete_order_items: types.union(types.undefined, types.null, types.late((): any => OrderItemsMutationResponseModel)),
    /** delete single row from the table: "order_items" */
    delete_order_items_by_pk: types.union(types.undefined, types.null, types.late((): any => OrderItemsModel)),
    /** delete data from the table: "orders" */
    delete_orders: types.union(types.undefined, types.null, types.late((): any => OrdersMutationResponseModel)),
    /** delete single row from the table: "orders" */
    delete_orders_by_pk: types.union(types.undefined, types.null, types.late((): any => OrdersModel)),
    /** delete data from the table: "venues" */
    delete_venues: types.union(types.undefined, types.null, types.late((): any => VenuesMutationResponseModel)),
    /** delete single row from the table: "venues" */
    delete_venues_by_pk: types.union(types.undefined, types.null, types.late((): any => VenuesModel)),
    /** insert data into the table: "menu_items" */
    insert_menu_items: types.union(types.undefined, types.null, types.late((): any => MenuItemsMutationResponseModel)),
    /** insert a single row into the table: "menu_items" */
    insert_menu_items_one: types.union(types.undefined, types.null, types.late((): any => MenuItemsModel)),
    /** insert data into the table: "nearby_venues" */
    insert_nearby_venues: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesMutationResponseModel)),
    /** insert a single row into the table: "nearby_venues" */
    insert_nearby_venues_one: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesModel)),
    /** insert data into the table: "order_items" */
    insert_order_items: types.union(types.undefined, types.null, types.late((): any => OrderItemsMutationResponseModel)),
    /** insert a single row into the table: "order_items" */
    insert_order_items_one: types.union(types.undefined, types.null, types.late((): any => OrderItemsModel)),
    /** insert data into the table: "orders" */
    insert_orders: types.union(types.undefined, types.null, types.late((): any => OrdersMutationResponseModel)),
    /** insert a single row into the table: "orders" */
    insert_orders_one: types.union(types.undefined, types.null, types.late((): any => OrdersModel)),
    /** insert data into the table: "venues" */
    insert_venues: types.union(types.undefined, types.null, types.late((): any => VenuesMutationResponseModel)),
    /** insert a single row into the table: "venues" */
    insert_venues_one: types.union(types.undefined, types.null, types.late((): any => VenuesModel)),
    /** update data of the table: "menu_items" */
    update_menu_items: types.union(types.undefined, types.null, types.late((): any => MenuItemsMutationResponseModel)),
    /** update single row of the table: "menu_items" */
    update_menu_items_by_pk: types.union(types.undefined, types.null, types.late((): any => MenuItemsModel)),
    /** update data of the table: "nearby_venues" */
    update_nearby_venues: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesMutationResponseModel)),
    /** update single row of the table: "nearby_venues" */
    update_nearby_venues_by_pk: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesModel)),
    /** update data of the table: "order_items" */
    update_order_items: types.union(types.undefined, types.null, types.late((): any => OrderItemsMutationResponseModel)),
    /** update single row of the table: "order_items" */
    update_order_items_by_pk: types.union(types.undefined, types.null, types.late((): any => OrderItemsModel)),
    /** update data of the table: "orders" */
    update_orders: types.union(types.undefined, types.null, types.late((): any => OrdersMutationResponseModel)),
    /** update single row of the table: "orders" */
    update_orders_by_pk: types.union(types.undefined, types.null, types.late((): any => OrdersModel)),
    /** update data of the table: "venues" */
    update_venues: types.union(types.undefined, types.null, types.late((): any => VenuesMutationResponseModel)),
    /** update single row of the table: "venues" */
    update_venues_by_pk: types.union(types.undefined, types.null, types.late((): any => VenuesModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class MutationRootModelSelector extends QueryBuilder {
  delete_menu_items(builder?: string | MenuItemsMutationResponseModelSelector | ((selector: MenuItemsMutationResponseModelSelector) => MenuItemsMutationResponseModelSelector)) { return this.__child(`delete_menu_items`, MenuItemsMutationResponseModelSelector, builder) }
  delete_menu_items_by_pk(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`delete_menu_items_by_pk`, MenuItemsModelSelector, builder) }
  delete_nearby_venues(builder?: string | NearbyVenuesMutationResponseModelSelector | ((selector: NearbyVenuesMutationResponseModelSelector) => NearbyVenuesMutationResponseModelSelector)) { return this.__child(`delete_nearby_venues`, NearbyVenuesMutationResponseModelSelector, builder) }
  delete_nearby_venues_by_pk(builder?: string | NearbyVenuesModelSelector | ((selector: NearbyVenuesModelSelector) => NearbyVenuesModelSelector)) { return this.__child(`delete_nearby_venues_by_pk`, NearbyVenuesModelSelector, builder) }
  delete_order_items(builder?: string | OrderItemsMutationResponseModelSelector | ((selector: OrderItemsMutationResponseModelSelector) => OrderItemsMutationResponseModelSelector)) { return this.__child(`delete_order_items`, OrderItemsMutationResponseModelSelector, builder) }
  delete_order_items_by_pk(builder?: string | OrderItemsModelSelector | ((selector: OrderItemsModelSelector) => OrderItemsModelSelector)) { return this.__child(`delete_order_items_by_pk`, OrderItemsModelSelector, builder) }
  delete_orders(builder?: string | OrdersMutationResponseModelSelector | ((selector: OrdersMutationResponseModelSelector) => OrdersMutationResponseModelSelector)) { return this.__child(`delete_orders`, OrdersMutationResponseModelSelector, builder) }
  delete_orders_by_pk(builder?: string | OrdersModelSelector | ((selector: OrdersModelSelector) => OrdersModelSelector)) { return this.__child(`delete_orders_by_pk`, OrdersModelSelector, builder) }
  delete_venues(builder?: string | VenuesMutationResponseModelSelector | ((selector: VenuesMutationResponseModelSelector) => VenuesMutationResponseModelSelector)) { return this.__child(`delete_venues`, VenuesMutationResponseModelSelector, builder) }
  delete_venues_by_pk(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`delete_venues_by_pk`, VenuesModelSelector, builder) }
  insert_menu_items(builder?: string | MenuItemsMutationResponseModelSelector | ((selector: MenuItemsMutationResponseModelSelector) => MenuItemsMutationResponseModelSelector)) { return this.__child(`insert_menu_items`, MenuItemsMutationResponseModelSelector, builder) }
  insert_menu_items_one(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`insert_menu_items_one`, MenuItemsModelSelector, builder) }
  insert_nearby_venues(builder?: string | NearbyVenuesMutationResponseModelSelector | ((selector: NearbyVenuesMutationResponseModelSelector) => NearbyVenuesMutationResponseModelSelector)) { return this.__child(`insert_nearby_venues`, NearbyVenuesMutationResponseModelSelector, builder) }
  insert_nearby_venues_one(builder?: string | NearbyVenuesModelSelector | ((selector: NearbyVenuesModelSelector) => NearbyVenuesModelSelector)) { return this.__child(`insert_nearby_venues_one`, NearbyVenuesModelSelector, builder) }
  insert_order_items(builder?: string | OrderItemsMutationResponseModelSelector | ((selector: OrderItemsMutationResponseModelSelector) => OrderItemsMutationResponseModelSelector)) { return this.__child(`insert_order_items`, OrderItemsMutationResponseModelSelector, builder) }
  insert_order_items_one(builder?: string | OrderItemsModelSelector | ((selector: OrderItemsModelSelector) => OrderItemsModelSelector)) { return this.__child(`insert_order_items_one`, OrderItemsModelSelector, builder) }
  insert_orders(builder?: string | OrdersMutationResponseModelSelector | ((selector: OrdersMutationResponseModelSelector) => OrdersMutationResponseModelSelector)) { return this.__child(`insert_orders`, OrdersMutationResponseModelSelector, builder) }
  insert_orders_one(builder?: string | OrdersModelSelector | ((selector: OrdersModelSelector) => OrdersModelSelector)) { return this.__child(`insert_orders_one`, OrdersModelSelector, builder) }
  insert_venues(builder?: string | VenuesMutationResponseModelSelector | ((selector: VenuesMutationResponseModelSelector) => VenuesMutationResponseModelSelector)) { return this.__child(`insert_venues`, VenuesMutationResponseModelSelector, builder) }
  insert_venues_one(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`insert_venues_one`, VenuesModelSelector, builder) }
  update_menu_items(builder?: string | MenuItemsMutationResponseModelSelector | ((selector: MenuItemsMutationResponseModelSelector) => MenuItemsMutationResponseModelSelector)) { return this.__child(`update_menu_items`, MenuItemsMutationResponseModelSelector, builder) }
  update_menu_items_by_pk(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`update_menu_items_by_pk`, MenuItemsModelSelector, builder) }
  update_nearby_venues(builder?: string | NearbyVenuesMutationResponseModelSelector | ((selector: NearbyVenuesMutationResponseModelSelector) => NearbyVenuesMutationResponseModelSelector)) { return this.__child(`update_nearby_venues`, NearbyVenuesMutationResponseModelSelector, builder) }
  update_nearby_venues_by_pk(builder?: string | NearbyVenuesModelSelector | ((selector: NearbyVenuesModelSelector) => NearbyVenuesModelSelector)) { return this.__child(`update_nearby_venues_by_pk`, NearbyVenuesModelSelector, builder) }
  update_order_items(builder?: string | OrderItemsMutationResponseModelSelector | ((selector: OrderItemsMutationResponseModelSelector) => OrderItemsMutationResponseModelSelector)) { return this.__child(`update_order_items`, OrderItemsMutationResponseModelSelector, builder) }
  update_order_items_by_pk(builder?: string | OrderItemsModelSelector | ((selector: OrderItemsModelSelector) => OrderItemsModelSelector)) { return this.__child(`update_order_items_by_pk`, OrderItemsModelSelector, builder) }
  update_orders(builder?: string | OrdersMutationResponseModelSelector | ((selector: OrdersMutationResponseModelSelector) => OrdersMutationResponseModelSelector)) { return this.__child(`update_orders`, OrdersMutationResponseModelSelector, builder) }
  update_orders_by_pk(builder?: string | OrdersModelSelector | ((selector: OrdersModelSelector) => OrdersModelSelector)) { return this.__child(`update_orders_by_pk`, OrdersModelSelector, builder) }
  update_venues(builder?: string | VenuesMutationResponseModelSelector | ((selector: VenuesMutationResponseModelSelector) => VenuesMutationResponseModelSelector)) { return this.__child(`update_venues`, VenuesMutationResponseModelSelector, builder) }
  update_venues_by_pk(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`update_venues_by_pk`, VenuesModelSelector, builder) }
}
export function selectFromMutationRoot() {
  return new MutationRootModelSelector()
}

export const mutationRootModelPrimitives = selectFromMutationRoot()
