/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsByHourAggregateModel, OrderItemsByHourAggregateModelType } from "./OrderItemsByHourAggregateModel"
import { OrderItemsByHourAggregateModelSelector } from "./OrderItemsByHourAggregateModel.base"
import { OrderItemsByHourModel, OrderItemsByHourModelType } from "./OrderItemsByHourModel"
import { OrderItemsByHourModelSelector } from "./OrderItemsByHourModel.base"
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
    /** fetch data from the table: "order_items_by_hour" */
    order_items_by_hour: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => OrderItemsByHourModel)))),
    /** fetch aggregated fields from the table: "order_items_by_hour" */
    order_items_by_hour_aggregate: types.union(types.undefined, types.late((): any => OrderItemsByHourAggregateModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class SubscriptionRootModelSelector extends QueryBuilder {
  order_items_by_hour(builder?: string | OrderItemsByHourModelSelector | ((selector: OrderItemsByHourModelSelector) => OrderItemsByHourModelSelector)) { return this.__child(`order_items_by_hour`, OrderItemsByHourModelSelector, builder) }
  order_items_by_hour_aggregate(builder?: string | OrderItemsByHourAggregateModelSelector | ((selector: OrderItemsByHourAggregateModelSelector) => OrderItemsByHourAggregateModelSelector)) { return this.__child(`order_items_by_hour_aggregate`, OrderItemsByHourAggregateModelSelector, builder) }
}
export function selectFromSubscriptionRoot() {
  return new SubscriptionRootModelSelector()
}

export const subscriptionRootModelPrimitives = selectFromSubscriptionRoot()
