/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { MenuItemsAggregateModel, MenuItemsAggregateModelType } from "./MenuItemsAggregateModel"
import { MenuItemsAggregateModelSelector } from "./MenuItemsAggregateModel.base"
import { MenuItemsModel, MenuItemsModelType } from "./MenuItemsModel"
import { MenuItemsModelSelector } from "./MenuItemsModel.base"
import { NearbyVenuesAggregateModel, NearbyVenuesAggregateModelType } from "./NearbyVenuesAggregateModel"
import { NearbyVenuesAggregateModelSelector } from "./NearbyVenuesAggregateModel.base"
import { NearbyVenuesModel, NearbyVenuesModelType } from "./NearbyVenuesModel"
import { NearbyVenuesModelSelector } from "./NearbyVenuesModel.base"
import { OrderItemsAggregateModel, OrderItemsAggregateModelType } from "./OrderItemsAggregateModel"
import { OrderItemsAggregateModelSelector } from "./OrderItemsAggregateModel.base"
import { OrderItemsByHourAggregateModel, OrderItemsByHourAggregateModelType } from "./OrderItemsByHourAggregateModel"
import { OrderItemsByHourAggregateModelSelector } from "./OrderItemsByHourAggregateModel.base"
import { OrderItemsByHourModel, OrderItemsByHourModelType } from "./OrderItemsByHourModel"
import { OrderItemsByHourModelSelector } from "./OrderItemsByHourModel.base"
import { OrderItemsModel, OrderItemsModelType } from "./OrderItemsModel"
import { OrderItemsModelSelector } from "./OrderItemsModel.base"
import { OrdersAggregateModel, OrdersAggregateModelType } from "./OrdersAggregateModel"
import { OrdersAggregateModelSelector } from "./OrdersAggregateModel.base"
import { OrdersModel, OrdersModelType } from "./OrdersModel"
import { OrdersModelSelector } from "./OrdersModel.base"
import { VenuesAggregateModel, VenuesAggregateModelType } from "./VenuesAggregateModel"
import { VenuesAggregateModelSelector } from "./VenuesAggregateModel.base"
import { VenuesModel, VenuesModelType } from "./VenuesModel"
import { VenuesModelSelector } from "./VenuesModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  order_items_by_hour: IObservableArray<OrderItemsByHourModelType>;
}

/**
 * SubscriptionRootBase
 * auto generated base class for the model SubscriptionRootModel.
 *
 * subscription root
 */
export const SubscriptionRootModelBase = withTypedRefs<Refs>()(ModelBase
  .named('SubscriptionRoot')
  .props({
    __typename: types.optional(types.literal("subscription_root"), "subscription_root"),
    /** execute function "get_nearby_venues" which returns "nearby_venues" */
    get_nearby_venues: types.union(types.undefined, types.array(types.late((): any => NearbyVenuesModel))),
    /** execute function "get_nearby_venues" and query aggregates on result of table type "nearby_venues" */
    get_nearby_venues_aggregate: types.union(types.undefined, types.late((): any => NearbyVenuesAggregateModel)),
    /** fetch data from the table: "menu_items" */
    menu_items: types.union(types.undefined, types.array(types.late((): any => MenuItemsModel))),
    /** fetch aggregated fields from the table: "menu_items" */
    menu_items_aggregate: types.union(types.undefined, types.late((): any => MenuItemsAggregateModel)),
    /** fetch data from the table: "menu_items" using primary key columns */
    menu_items_by_pk: types.union(types.undefined, types.null, types.late((): any => MenuItemsModel)),
    /** fetch data from the table: "nearby_venues" */
    nearby_venues: types.union(types.undefined, types.array(types.late((): any => NearbyVenuesModel))),
    /** fetch aggregated fields from the table: "nearby_venues" */
    nearby_venues_aggregate: types.union(types.undefined, types.late((): any => NearbyVenuesAggregateModel)),
    /** fetch data from the table: "nearby_venues" using primary key columns */
    nearby_venues_by_pk: types.union(types.undefined, types.null, types.late((): any => NearbyVenuesModel)),
    /** fetch data from the table: "order_items" */
    order_items: types.union(types.undefined, types.array(types.late((): any => OrderItemsModel))),
    /** fetch aggregated fields from the table: "order_items" */
    order_items_aggregate: types.union(types.undefined, types.late((): any => OrderItemsAggregateModel)),
    /** fetch data from the table: "order_items_by_hour" */
    order_items_by_hour: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => OrderItemsByHourModel)))),
    /** fetch aggregated fields from the table: "order_items_by_hour" */
    order_items_by_hour_aggregate: types.union(types.undefined, types.late((): any => OrderItemsByHourAggregateModel)),
    /** fetch data from the table: "order_items" using primary key columns */
    order_items_by_pk: types.union(types.undefined, types.null, types.late((): any => OrderItemsModel)),
    /** fetch data from the table: "orders" */
    orders: types.union(types.undefined, types.array(types.late((): any => OrdersModel))),
    /** fetch aggregated fields from the table: "orders" */
    orders_aggregate: types.union(types.undefined, types.late((): any => OrdersAggregateModel)),
    /** fetch data from the table: "orders" using primary key columns */
    orders_by_pk: types.union(types.undefined, types.null, types.late((): any => OrdersModel)),
    /** fetch data from the table: "venues" */
    venues: types.union(types.undefined, types.array(types.late((): any => VenuesModel))),
    /** fetch aggregated fields from the table: "venues" */
    venues_aggregate: types.union(types.undefined, types.late((): any => VenuesAggregateModel)),
    /** fetch data from the table: "venues" using primary key columns */
    venues_by_pk: types.union(types.undefined, types.null, types.late((): any => VenuesModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SubscriptionRootModelSelector extends QueryBuilder {
  get_nearby_venues(builder?: string | NearbyVenuesModelSelector | ((selector: NearbyVenuesModelSelector) => NearbyVenuesModelSelector)) { return this.__child(`get_nearby_venues`, NearbyVenuesModelSelector, builder) }
  get_nearby_venues_aggregate(builder?: string | NearbyVenuesAggregateModelSelector | ((selector: NearbyVenuesAggregateModelSelector) => NearbyVenuesAggregateModelSelector)) { return this.__child(`get_nearby_venues_aggregate`, NearbyVenuesAggregateModelSelector, builder) }
  menu_items(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`menu_items`, MenuItemsModelSelector, builder) }
  menu_items_aggregate(builder?: string | MenuItemsAggregateModelSelector | ((selector: MenuItemsAggregateModelSelector) => MenuItemsAggregateModelSelector)) { return this.__child(`menu_items_aggregate`, MenuItemsAggregateModelSelector, builder) }
  menu_items_by_pk(builder?: string | MenuItemsModelSelector | ((selector: MenuItemsModelSelector) => MenuItemsModelSelector)) { return this.__child(`menu_items_by_pk`, MenuItemsModelSelector, builder) }
  nearby_venues(builder?: string | NearbyVenuesModelSelector | ((selector: NearbyVenuesModelSelector) => NearbyVenuesModelSelector)) { return this.__child(`nearby_venues`, NearbyVenuesModelSelector, builder) }
  nearby_venues_aggregate(builder?: string | NearbyVenuesAggregateModelSelector | ((selector: NearbyVenuesAggregateModelSelector) => NearbyVenuesAggregateModelSelector)) { return this.__child(`nearby_venues_aggregate`, NearbyVenuesAggregateModelSelector, builder) }
  nearby_venues_by_pk(builder?: string | NearbyVenuesModelSelector | ((selector: NearbyVenuesModelSelector) => NearbyVenuesModelSelector)) { return this.__child(`nearby_venues_by_pk`, NearbyVenuesModelSelector, builder) }
  order_items(builder?: string | OrderItemsModelSelector | ((selector: OrderItemsModelSelector) => OrderItemsModelSelector)) { return this.__child(`order_items`, OrderItemsModelSelector, builder) }
  order_items_aggregate(builder?: string | OrderItemsAggregateModelSelector | ((selector: OrderItemsAggregateModelSelector) => OrderItemsAggregateModelSelector)) { return this.__child(`order_items_aggregate`, OrderItemsAggregateModelSelector, builder) }
  order_items_by_hour(builder?: string | OrderItemsByHourModelSelector | ((selector: OrderItemsByHourModelSelector) => OrderItemsByHourModelSelector)) { return this.__child(`order_items_by_hour`, OrderItemsByHourModelSelector, builder) }
  order_items_by_hour_aggregate(builder?: string | OrderItemsByHourAggregateModelSelector | ((selector: OrderItemsByHourAggregateModelSelector) => OrderItemsByHourAggregateModelSelector)) { return this.__child(`order_items_by_hour_aggregate`, OrderItemsByHourAggregateModelSelector, builder) }
  order_items_by_pk(builder?: string | OrderItemsModelSelector | ((selector: OrderItemsModelSelector) => OrderItemsModelSelector)) { return this.__child(`order_items_by_pk`, OrderItemsModelSelector, builder) }
  orders(builder?: string | OrdersModelSelector | ((selector: OrdersModelSelector) => OrdersModelSelector)) { return this.__child(`orders`, OrdersModelSelector, builder) }
  orders_aggregate(builder?: string | OrdersAggregateModelSelector | ((selector: OrdersAggregateModelSelector) => OrdersAggregateModelSelector)) { return this.__child(`orders_aggregate`, OrdersAggregateModelSelector, builder) }
  orders_by_pk(builder?: string | OrdersModelSelector | ((selector: OrdersModelSelector) => OrdersModelSelector)) { return this.__child(`orders_by_pk`, OrdersModelSelector, builder) }
  venues(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`venues`, VenuesModelSelector, builder) }
  venues_aggregate(builder?: string | VenuesAggregateModelSelector | ((selector: VenuesAggregateModelSelector) => VenuesAggregateModelSelector)) { return this.__child(`venues_aggregate`, VenuesAggregateModelSelector, builder) }
  venues_by_pk(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`venues_by_pk`, VenuesModelSelector, builder) }
}
export function selectFromSubscriptionRoot() {
  return new SubscriptionRootModelSelector()
}

export const subscriptionRootModelPrimitives = selectFromSubscriptionRoot()