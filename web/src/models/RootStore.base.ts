/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { OrderItemsByHourModel, OrderItemsByHourModelType } from "./OrderItemsByHourModel"
import { orderItemsByHourModelPrimitives, OrderItemsByHourModelSelector } from "./OrderItemsByHourModel.base"
import { OrderItemsByHourAggregateModel, OrderItemsByHourAggregateModelType } from "./OrderItemsByHourAggregateModel"
import { orderItemsByHourAggregateModelPrimitives, OrderItemsByHourAggregateModelSelector } from "./OrderItemsByHourAggregateModel.base"
import { OrderItemsByHourAggregateFieldsModel, OrderItemsByHourAggregateFieldsModelType } from "./OrderItemsByHourAggregateFieldsModel"
import { orderItemsByHourAggregateFieldsModelPrimitives, OrderItemsByHourAggregateFieldsModelSelector } from "./OrderItemsByHourAggregateFieldsModel.base"
import { OrderItemsByHourAvgFieldsModel, OrderItemsByHourAvgFieldsModelType } from "./OrderItemsByHourAvgFieldsModel"
import { orderItemsByHourAvgFieldsModelPrimitives, OrderItemsByHourAvgFieldsModelSelector } from "./OrderItemsByHourAvgFieldsModel.base"
import { OrderItemsByHourMaxFieldsModel, OrderItemsByHourMaxFieldsModelType } from "./OrderItemsByHourMaxFieldsModel"
import { orderItemsByHourMaxFieldsModelPrimitives, OrderItemsByHourMaxFieldsModelSelector } from "./OrderItemsByHourMaxFieldsModel.base"
import { OrderItemsByHourMinFieldsModel, OrderItemsByHourMinFieldsModelType } from "./OrderItemsByHourMinFieldsModel"
import { orderItemsByHourMinFieldsModelPrimitives, OrderItemsByHourMinFieldsModelSelector } from "./OrderItemsByHourMinFieldsModel.base"
import { OrderItemsByHourStddevFieldsModel, OrderItemsByHourStddevFieldsModelType } from "./OrderItemsByHourStddevFieldsModel"
import { orderItemsByHourStddevFieldsModelPrimitives, OrderItemsByHourStddevFieldsModelSelector } from "./OrderItemsByHourStddevFieldsModel.base"
import { OrderItemsByHourStddevPopFieldsModel, OrderItemsByHourStddevPopFieldsModelType } from "./OrderItemsByHourStddevPopFieldsModel"
import { orderItemsByHourStddevPopFieldsModelPrimitives, OrderItemsByHourStddevPopFieldsModelSelector } from "./OrderItemsByHourStddevPopFieldsModel.base"
import { OrderItemsByHourStddevSampFieldsModel, OrderItemsByHourStddevSampFieldsModelType } from "./OrderItemsByHourStddevSampFieldsModel"
import { orderItemsByHourStddevSampFieldsModelPrimitives, OrderItemsByHourStddevSampFieldsModelSelector } from "./OrderItemsByHourStddevSampFieldsModel.base"
import { OrderItemsByHourSumFieldsModel, OrderItemsByHourSumFieldsModelType } from "./OrderItemsByHourSumFieldsModel"
import { orderItemsByHourSumFieldsModelPrimitives, OrderItemsByHourSumFieldsModelSelector } from "./OrderItemsByHourSumFieldsModel.base"
import { OrderItemsByHourVarPopFieldsModel, OrderItemsByHourVarPopFieldsModelType } from "./OrderItemsByHourVarPopFieldsModel"
import { orderItemsByHourVarPopFieldsModelPrimitives, OrderItemsByHourVarPopFieldsModelSelector } from "./OrderItemsByHourVarPopFieldsModel.base"
import { OrderItemsByHourVarSampFieldsModel, OrderItemsByHourVarSampFieldsModelType } from "./OrderItemsByHourVarSampFieldsModel"
import { orderItemsByHourVarSampFieldsModelPrimitives, OrderItemsByHourVarSampFieldsModelSelector } from "./OrderItemsByHourVarSampFieldsModel.base"
import { OrderItemsByHourVarianceFieldsModel, OrderItemsByHourVarianceFieldsModelType } from "./OrderItemsByHourVarianceFieldsModel"
import { orderItemsByHourVarianceFieldsModelPrimitives, OrderItemsByHourVarianceFieldsModelSelector } from "./OrderItemsByHourVarianceFieldsModel.base"
import { QueryRootModel, QueryRootModelType } from "./QueryRootModel"
import { queryRootModelPrimitives, QueryRootModelSelector } from "./QueryRootModel.base"
import { SubscriptionRootModel, SubscriptionRootModelType } from "./SubscriptionRootModel"
import { subscriptionRootModelPrimitives, SubscriptionRootModelSelector } from "./SubscriptionRootModel.base"


import { OrderBy } from "./OrderByEnum"
import { OrderItemsByHourSelectColumn } from "./OrderItemsByHourSelectColumnEnum"

export type StringComparisonExp = {
  _eq?: string
  _gt?: string
  _gte?: string
  _ilike?: string
  _in?: string[]
  _is_null?: boolean
  _like?: string
  _lt?: string
  _lte?: string
  _neq?: string
  _nilike?: string
  _nin?: string[]
  _nlike?: string
  _nsimilar?: string
  _similar?: string
}
export type BigintComparisonExp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
export type Float8ComparisonExp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
export type OrderItemsByHourAggregateOrderBy = {
  avg?: OrderItemsByHourAvgOrderBy
  count?: OrderBy
  max?: OrderItemsByHourMaxOrderBy
  min?: OrderItemsByHourMinOrderBy
  stddev?: OrderItemsByHourStddevOrderBy
  stddev_pop?: OrderItemsByHourStddevPopOrderBy
  stddev_samp?: OrderItemsByHourStddevSampOrderBy
  sum?: OrderItemsByHourSumOrderBy
  var_pop?: OrderItemsByHourVarPopOrderBy
  var_samp?: OrderItemsByHourVarSampOrderBy
  variance?: OrderItemsByHourVarianceOrderBy
}
export type OrderItemsByHourAvgOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  menu_item_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourBoolExp = {
  _and?: OrderItemsByHourBoolExp[]
  _not?: OrderItemsByHourBoolExp
  _or?: OrderItemsByHourBoolExp[]
  count?: BigintComparisonExp
  hour_of_day?: Float8ComparisonExp
  id?: StringComparisonExp
  last_order?: TimestampComparisonExp
  menu_item?: StringComparisonExp
  menu_item_id?: BigintComparisonExp
  venue?: StringComparisonExp
  venue_id?: BigintComparisonExp
}
export type OrderItemsByHourMaxOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  id?: OrderBy
  last_order?: OrderBy
  menu_item?: OrderBy
  menu_item_id?: OrderBy
  venue?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourMinOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  id?: OrderBy
  last_order?: OrderBy
  menu_item?: OrderBy
  menu_item_id?: OrderBy
  venue?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  id?: OrderBy
  last_order?: OrderBy
  menu_item?: OrderBy
  menu_item_id?: OrderBy
  venue?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourStddevOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  menu_item_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourStddevPopOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  menu_item_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourStddevSampOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  menu_item_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourSumOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  menu_item_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourVarPopOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  menu_item_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourVarSampOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  menu_item_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsByHourVarianceOrderBy = {
  count?: OrderBy
  hour_of_day?: OrderBy
  menu_item_id?: OrderBy
  venue_id?: OrderBy
}
export type TimestampComparisonExp = {
  _eq?: any
  _gt?: any
  _gte?: any
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  orderItemsByHours: ObservableMap<string, OrderItemsByHourModelType>
}


/**
* Enums for the names of base graphql actions
*/



/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([['order_items_by_hour', () => OrderItemsByHourModel], ['order_items_by_hour_aggregate', () => OrderItemsByHourAggregateModel], ['order_items_by_hour_aggregate_fields', () => OrderItemsByHourAggregateFieldsModel], ['order_items_by_hour_avg_fields', () => OrderItemsByHourAvgFieldsModel], ['order_items_by_hour_max_fields', () => OrderItemsByHourMaxFieldsModel], ['order_items_by_hour_min_fields', () => OrderItemsByHourMinFieldsModel], ['order_items_by_hour_stddev_fields', () => OrderItemsByHourStddevFieldsModel], ['order_items_by_hour_stddev_pop_fields', () => OrderItemsByHourStddevPopFieldsModel], ['order_items_by_hour_stddev_samp_fields', () => OrderItemsByHourStddevSampFieldsModel], ['order_items_by_hour_sum_fields', () => OrderItemsByHourSumFieldsModel], ['order_items_by_hour_var_pop_fields', () => OrderItemsByHourVarPopFieldsModel], ['order_items_by_hour_var_samp_fields', () => OrderItemsByHourVarSampFieldsModel], ['order_items_by_hour_variance_fields', () => OrderItemsByHourVarianceFieldsModel], ['query_root', () => QueryRootModel], ['subscription_root', () => SubscriptionRootModel]], ['order_items_by_hour'], "js"))
  .props({
    orderItemsByHours: types.optional(types.map(types.late((): any => OrderItemsByHourModel)), {})
  })
  .actions(self => ({
    // fetch data from the table: "order_items_by_hour"
    queryOrder_items_by_hour(variables: { distinctOn?: OrderItemsByHourSelectColumn[], limit?: number, offset?: number, orderBy?: OrderItemsByHourOrderBy[], where?: OrderItemsByHourBoolExp }, resultSelector: string | ((qb: OrderItemsByHourModelSelector) => OrderItemsByHourModelSelector) = orderItemsByHourModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ order_items_by_hour: OrderItemsByHourModelType[]}>(`query order_items_by_hour($distinctOn: [order_items_by_hour_select_column!], $limit: Int, $offset: Int, $orderBy: [order_items_by_hour_order_by!], $where: order_items_by_hour_bool_exp) { order_items_by_hour(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsByHourModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch aggregated fields from the table: "order_items_by_hour"
    queryOrder_items_by_hour_aggregate(variables: { distinctOn?: OrderItemsByHourSelectColumn[], limit?: number, offset?: number, orderBy?: OrderItemsByHourOrderBy[], where?: OrderItemsByHourBoolExp }, resultSelector: string | ((qb: OrderItemsByHourAggregateModelSelector) => OrderItemsByHourAggregateModelSelector) = orderItemsByHourAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ order_items_by_hour_aggregate: OrderItemsByHourAggregateModelType}>(`query order_items_by_hour_aggregate($distinctOn: [order_items_by_hour_select_column!], $limit: Int, $offset: Int, $orderBy: [order_items_by_hour_order_by!], $where: order_items_by_hour_bool_exp) { order_items_by_hour_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsByHourAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "order_items_by_hour"
    subscribeOrder_items_by_hour(variables: { distinctOn?: OrderItemsByHourSelectColumn[], limit?: number, offset?: number, orderBy?: OrderItemsByHourOrderBy[], where?: OrderItemsByHourBoolExp }, resultSelector: string | ((qb: OrderItemsByHourModelSelector) => OrderItemsByHourModelSelector) = orderItemsByHourModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ order_items_by_hour: OrderItemsByHourModelType[]}>(`subscription order_items_by_hour($distinctOn: [order_items_by_hour_select_column!], $limit: Int, $offset: Int, $orderBy: [order_items_by_hour_order_by!], $where: order_items_by_hour_bool_exp) { order_items_by_hour(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsByHourModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch aggregated fields from the table: "order_items_by_hour"
    subscribeOrder_items_by_hour_aggregate(variables: { distinctOn?: OrderItemsByHourSelectColumn[], limit?: number, offset?: number, orderBy?: OrderItemsByHourOrderBy[], where?: OrderItemsByHourBoolExp }, resultSelector: string | ((qb: OrderItemsByHourAggregateModelSelector) => OrderItemsByHourAggregateModelSelector) = orderItemsByHourAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ order_items_by_hour_aggregate: OrderItemsByHourAggregateModelType}>(`subscription order_items_by_hour_aggregate($distinctOn: [order_items_by_hour_select_column!], $limit: Int, $offset: Int, $orderBy: [order_items_by_hour_order_by!], $where: order_items_by_hour_bool_exp) { order_items_by_hour_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsByHourAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
  })))
