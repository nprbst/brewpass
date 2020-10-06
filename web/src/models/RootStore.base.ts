/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"

import { MenuItemsModel, MenuItemsModelType } from "./MenuItemsModel"
import { menuItemsModelPrimitives, MenuItemsModelSelector } from "./MenuItemsModel.base"
import { MenuItemsAggregateModel, MenuItemsAggregateModelType } from "./MenuItemsAggregateModel"
import { menuItemsAggregateModelPrimitives, MenuItemsAggregateModelSelector } from "./MenuItemsAggregateModel.base"
import { MenuItemsAggregateFieldsModel, MenuItemsAggregateFieldsModelType } from "./MenuItemsAggregateFieldsModel"
import { menuItemsAggregateFieldsModelPrimitives, MenuItemsAggregateFieldsModelSelector } from "./MenuItemsAggregateFieldsModel.base"
import { MenuItemsAvgFieldsModel, MenuItemsAvgFieldsModelType } from "./MenuItemsAvgFieldsModel"
import { menuItemsAvgFieldsModelPrimitives, MenuItemsAvgFieldsModelSelector } from "./MenuItemsAvgFieldsModel.base"
import { MenuItemsMaxFieldsModel, MenuItemsMaxFieldsModelType } from "./MenuItemsMaxFieldsModel"
import { menuItemsMaxFieldsModelPrimitives, MenuItemsMaxFieldsModelSelector } from "./MenuItemsMaxFieldsModel.base"
import { MenuItemsMinFieldsModel, MenuItemsMinFieldsModelType } from "./MenuItemsMinFieldsModel"
import { menuItemsMinFieldsModelPrimitives, MenuItemsMinFieldsModelSelector } from "./MenuItemsMinFieldsModel.base"
import { MenuItemsMutationResponseModel, MenuItemsMutationResponseModelType } from "./MenuItemsMutationResponseModel"
import { menuItemsMutationResponseModelPrimitives, MenuItemsMutationResponseModelSelector } from "./MenuItemsMutationResponseModel.base"
import { MenuItemsStddevFieldsModel, MenuItemsStddevFieldsModelType } from "./MenuItemsStddevFieldsModel"
import { menuItemsStddevFieldsModelPrimitives, MenuItemsStddevFieldsModelSelector } from "./MenuItemsStddevFieldsModel.base"
import { MenuItemsStddevPopFieldsModel, MenuItemsStddevPopFieldsModelType } from "./MenuItemsStddevPopFieldsModel"
import { menuItemsStddevPopFieldsModelPrimitives, MenuItemsStddevPopFieldsModelSelector } from "./MenuItemsStddevPopFieldsModel.base"
import { MenuItemsStddevSampFieldsModel, MenuItemsStddevSampFieldsModelType } from "./MenuItemsStddevSampFieldsModel"
import { menuItemsStddevSampFieldsModelPrimitives, MenuItemsStddevSampFieldsModelSelector } from "./MenuItemsStddevSampFieldsModel.base"
import { MenuItemsSumFieldsModel, MenuItemsSumFieldsModelType } from "./MenuItemsSumFieldsModel"
import { menuItemsSumFieldsModelPrimitives, MenuItemsSumFieldsModelSelector } from "./MenuItemsSumFieldsModel.base"
import { MenuItemsVarPopFieldsModel, MenuItemsVarPopFieldsModelType } from "./MenuItemsVarPopFieldsModel"
import { menuItemsVarPopFieldsModelPrimitives, MenuItemsVarPopFieldsModelSelector } from "./MenuItemsVarPopFieldsModel.base"
import { MenuItemsVarSampFieldsModel, MenuItemsVarSampFieldsModelType } from "./MenuItemsVarSampFieldsModel"
import { menuItemsVarSampFieldsModelPrimitives, MenuItemsVarSampFieldsModelSelector } from "./MenuItemsVarSampFieldsModel.base"
import { MenuItemsVarianceFieldsModel, MenuItemsVarianceFieldsModelType } from "./MenuItemsVarianceFieldsModel"
import { menuItemsVarianceFieldsModelPrimitives, MenuItemsVarianceFieldsModelSelector } from "./MenuItemsVarianceFieldsModel.base"
import { MutationRootModel, MutationRootModelType } from "./MutationRootModel"
import { mutationRootModelPrimitives, MutationRootModelSelector } from "./MutationRootModel.base"
import { NearbyVenuesModel, NearbyVenuesModelType } from "./NearbyVenuesModel"
import { nearbyVenuesModelPrimitives, NearbyVenuesModelSelector } from "./NearbyVenuesModel.base"
import { NearbyVenuesAggregateModel, NearbyVenuesAggregateModelType } from "./NearbyVenuesAggregateModel"
import { nearbyVenuesAggregateModelPrimitives, NearbyVenuesAggregateModelSelector } from "./NearbyVenuesAggregateModel.base"
import { NearbyVenuesAggregateFieldsModel, NearbyVenuesAggregateFieldsModelType } from "./NearbyVenuesAggregateFieldsModel"
import { nearbyVenuesAggregateFieldsModelPrimitives, NearbyVenuesAggregateFieldsModelSelector } from "./NearbyVenuesAggregateFieldsModel.base"
import { NearbyVenuesAvgFieldsModel, NearbyVenuesAvgFieldsModelType } from "./NearbyVenuesAvgFieldsModel"
import { nearbyVenuesAvgFieldsModelPrimitives, NearbyVenuesAvgFieldsModelSelector } from "./NearbyVenuesAvgFieldsModel.base"
import { NearbyVenuesMaxFieldsModel, NearbyVenuesMaxFieldsModelType } from "./NearbyVenuesMaxFieldsModel"
import { nearbyVenuesMaxFieldsModelPrimitives, NearbyVenuesMaxFieldsModelSelector } from "./NearbyVenuesMaxFieldsModel.base"
import { NearbyVenuesMinFieldsModel, NearbyVenuesMinFieldsModelType } from "./NearbyVenuesMinFieldsModel"
import { nearbyVenuesMinFieldsModelPrimitives, NearbyVenuesMinFieldsModelSelector } from "./NearbyVenuesMinFieldsModel.base"
import { NearbyVenuesMutationResponseModel, NearbyVenuesMutationResponseModelType } from "./NearbyVenuesMutationResponseModel"
import { nearbyVenuesMutationResponseModelPrimitives, NearbyVenuesMutationResponseModelSelector } from "./NearbyVenuesMutationResponseModel.base"
import { NearbyVenuesStddevFieldsModel, NearbyVenuesStddevFieldsModelType } from "./NearbyVenuesStddevFieldsModel"
import { nearbyVenuesStddevFieldsModelPrimitives, NearbyVenuesStddevFieldsModelSelector } from "./NearbyVenuesStddevFieldsModel.base"
import { NearbyVenuesStddevPopFieldsModel, NearbyVenuesStddevPopFieldsModelType } from "./NearbyVenuesStddevPopFieldsModel"
import { nearbyVenuesStddevPopFieldsModelPrimitives, NearbyVenuesStddevPopFieldsModelSelector } from "./NearbyVenuesStddevPopFieldsModel.base"
import { NearbyVenuesStddevSampFieldsModel, NearbyVenuesStddevSampFieldsModelType } from "./NearbyVenuesStddevSampFieldsModel"
import { nearbyVenuesStddevSampFieldsModelPrimitives, NearbyVenuesStddevSampFieldsModelSelector } from "./NearbyVenuesStddevSampFieldsModel.base"
import { NearbyVenuesSumFieldsModel, NearbyVenuesSumFieldsModelType } from "./NearbyVenuesSumFieldsModel"
import { nearbyVenuesSumFieldsModelPrimitives, NearbyVenuesSumFieldsModelSelector } from "./NearbyVenuesSumFieldsModel.base"
import { NearbyVenuesVarPopFieldsModel, NearbyVenuesVarPopFieldsModelType } from "./NearbyVenuesVarPopFieldsModel"
import { nearbyVenuesVarPopFieldsModelPrimitives, NearbyVenuesVarPopFieldsModelSelector } from "./NearbyVenuesVarPopFieldsModel.base"
import { NearbyVenuesVarSampFieldsModel, NearbyVenuesVarSampFieldsModelType } from "./NearbyVenuesVarSampFieldsModel"
import { nearbyVenuesVarSampFieldsModelPrimitives, NearbyVenuesVarSampFieldsModelSelector } from "./NearbyVenuesVarSampFieldsModel.base"
import { NearbyVenuesVarianceFieldsModel, NearbyVenuesVarianceFieldsModelType } from "./NearbyVenuesVarianceFieldsModel"
import { nearbyVenuesVarianceFieldsModelPrimitives, NearbyVenuesVarianceFieldsModelSelector } from "./NearbyVenuesVarianceFieldsModel.base"
import { OrderItemsModel, OrderItemsModelType } from "./OrderItemsModel"
import { orderItemsModelPrimitives, OrderItemsModelSelector } from "./OrderItemsModel.base"
import { OrderItemsAggregateModel, OrderItemsAggregateModelType } from "./OrderItemsAggregateModel"
import { orderItemsAggregateModelPrimitives, OrderItemsAggregateModelSelector } from "./OrderItemsAggregateModel.base"
import { OrderItemsAggregateFieldsModel, OrderItemsAggregateFieldsModelType } from "./OrderItemsAggregateFieldsModel"
import { orderItemsAggregateFieldsModelPrimitives, OrderItemsAggregateFieldsModelSelector } from "./OrderItemsAggregateFieldsModel.base"
import { OrderItemsAvgFieldsModel, OrderItemsAvgFieldsModelType } from "./OrderItemsAvgFieldsModel"
import { orderItemsAvgFieldsModelPrimitives, OrderItemsAvgFieldsModelSelector } from "./OrderItemsAvgFieldsModel.base"
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
import { OrderItemsMaxFieldsModel, OrderItemsMaxFieldsModelType } from "./OrderItemsMaxFieldsModel"
import { orderItemsMaxFieldsModelPrimitives, OrderItemsMaxFieldsModelSelector } from "./OrderItemsMaxFieldsModel.base"
import { OrderItemsMinFieldsModel, OrderItemsMinFieldsModelType } from "./OrderItemsMinFieldsModel"
import { orderItemsMinFieldsModelPrimitives, OrderItemsMinFieldsModelSelector } from "./OrderItemsMinFieldsModel.base"
import { OrderItemsMutationResponseModel, OrderItemsMutationResponseModelType } from "./OrderItemsMutationResponseModel"
import { orderItemsMutationResponseModelPrimitives, OrderItemsMutationResponseModelSelector } from "./OrderItemsMutationResponseModel.base"
import { OrderItemsStddevFieldsModel, OrderItemsStddevFieldsModelType } from "./OrderItemsStddevFieldsModel"
import { orderItemsStddevFieldsModelPrimitives, OrderItemsStddevFieldsModelSelector } from "./OrderItemsStddevFieldsModel.base"
import { OrderItemsStddevPopFieldsModel, OrderItemsStddevPopFieldsModelType } from "./OrderItemsStddevPopFieldsModel"
import { orderItemsStddevPopFieldsModelPrimitives, OrderItemsStddevPopFieldsModelSelector } from "./OrderItemsStddevPopFieldsModel.base"
import { OrderItemsStddevSampFieldsModel, OrderItemsStddevSampFieldsModelType } from "./OrderItemsStddevSampFieldsModel"
import { orderItemsStddevSampFieldsModelPrimitives, OrderItemsStddevSampFieldsModelSelector } from "./OrderItemsStddevSampFieldsModel.base"
import { OrderItemsSumFieldsModel, OrderItemsSumFieldsModelType } from "./OrderItemsSumFieldsModel"
import { orderItemsSumFieldsModelPrimitives, OrderItemsSumFieldsModelSelector } from "./OrderItemsSumFieldsModel.base"
import { OrderItemsVarPopFieldsModel, OrderItemsVarPopFieldsModelType } from "./OrderItemsVarPopFieldsModel"
import { orderItemsVarPopFieldsModelPrimitives, OrderItemsVarPopFieldsModelSelector } from "./OrderItemsVarPopFieldsModel.base"
import { OrderItemsVarSampFieldsModel, OrderItemsVarSampFieldsModelType } from "./OrderItemsVarSampFieldsModel"
import { orderItemsVarSampFieldsModelPrimitives, OrderItemsVarSampFieldsModelSelector } from "./OrderItemsVarSampFieldsModel.base"
import { OrderItemsVarianceFieldsModel, OrderItemsVarianceFieldsModelType } from "./OrderItemsVarianceFieldsModel"
import { orderItemsVarianceFieldsModelPrimitives, OrderItemsVarianceFieldsModelSelector } from "./OrderItemsVarianceFieldsModel.base"
import { OrdersModel, OrdersModelType } from "./OrdersModel"
import { ordersModelPrimitives, OrdersModelSelector } from "./OrdersModel.base"
import { OrdersAggregateModel, OrdersAggregateModelType } from "./OrdersAggregateModel"
import { ordersAggregateModelPrimitives, OrdersAggregateModelSelector } from "./OrdersAggregateModel.base"
import { OrdersAggregateFieldsModel, OrdersAggregateFieldsModelType } from "./OrdersAggregateFieldsModel"
import { ordersAggregateFieldsModelPrimitives, OrdersAggregateFieldsModelSelector } from "./OrdersAggregateFieldsModel.base"
import { OrdersAvgFieldsModel, OrdersAvgFieldsModelType } from "./OrdersAvgFieldsModel"
import { ordersAvgFieldsModelPrimitives, OrdersAvgFieldsModelSelector } from "./OrdersAvgFieldsModel.base"
import { OrdersMaxFieldsModel, OrdersMaxFieldsModelType } from "./OrdersMaxFieldsModel"
import { ordersMaxFieldsModelPrimitives, OrdersMaxFieldsModelSelector } from "./OrdersMaxFieldsModel.base"
import { OrdersMinFieldsModel, OrdersMinFieldsModelType } from "./OrdersMinFieldsModel"
import { ordersMinFieldsModelPrimitives, OrdersMinFieldsModelSelector } from "./OrdersMinFieldsModel.base"
import { OrdersMutationResponseModel, OrdersMutationResponseModelType } from "./OrdersMutationResponseModel"
import { ordersMutationResponseModelPrimitives, OrdersMutationResponseModelSelector } from "./OrdersMutationResponseModel.base"
import { OrdersStddevFieldsModel, OrdersStddevFieldsModelType } from "./OrdersStddevFieldsModel"
import { ordersStddevFieldsModelPrimitives, OrdersStddevFieldsModelSelector } from "./OrdersStddevFieldsModel.base"
import { OrdersStddevPopFieldsModel, OrdersStddevPopFieldsModelType } from "./OrdersStddevPopFieldsModel"
import { ordersStddevPopFieldsModelPrimitives, OrdersStddevPopFieldsModelSelector } from "./OrdersStddevPopFieldsModel.base"
import { OrdersStddevSampFieldsModel, OrdersStddevSampFieldsModelType } from "./OrdersStddevSampFieldsModel"
import { ordersStddevSampFieldsModelPrimitives, OrdersStddevSampFieldsModelSelector } from "./OrdersStddevSampFieldsModel.base"
import { OrdersSumFieldsModel, OrdersSumFieldsModelType } from "./OrdersSumFieldsModel"
import { ordersSumFieldsModelPrimitives, OrdersSumFieldsModelSelector } from "./OrdersSumFieldsModel.base"
import { OrdersVarPopFieldsModel, OrdersVarPopFieldsModelType } from "./OrdersVarPopFieldsModel"
import { ordersVarPopFieldsModelPrimitives, OrdersVarPopFieldsModelSelector } from "./OrdersVarPopFieldsModel.base"
import { OrdersVarSampFieldsModel, OrdersVarSampFieldsModelType } from "./OrdersVarSampFieldsModel"
import { ordersVarSampFieldsModelPrimitives, OrdersVarSampFieldsModelSelector } from "./OrdersVarSampFieldsModel.base"
import { OrdersVarianceFieldsModel, OrdersVarianceFieldsModelType } from "./OrdersVarianceFieldsModel"
import { ordersVarianceFieldsModelPrimitives, OrdersVarianceFieldsModelSelector } from "./OrdersVarianceFieldsModel.base"
import { QueryRootModel, QueryRootModelType } from "./QueryRootModel"
import { queryRootModelPrimitives, QueryRootModelSelector } from "./QueryRootModel.base"
import { SubscriptionRootModel, SubscriptionRootModelType } from "./SubscriptionRootModel"
import { subscriptionRootModelPrimitives, SubscriptionRootModelSelector } from "./SubscriptionRootModel.base"
import { VenuesModel, VenuesModelType } from "./VenuesModel"
import { venuesModelPrimitives, VenuesModelSelector } from "./VenuesModel.base"
import { VenuesAggregateModel, VenuesAggregateModelType } from "./VenuesAggregateModel"
import { venuesAggregateModelPrimitives, VenuesAggregateModelSelector } from "./VenuesAggregateModel.base"
import { VenuesAggregateFieldsModel, VenuesAggregateFieldsModelType } from "./VenuesAggregateFieldsModel"
import { venuesAggregateFieldsModelPrimitives, VenuesAggregateFieldsModelSelector } from "./VenuesAggregateFieldsModel.base"
import { VenuesAvgFieldsModel, VenuesAvgFieldsModelType } from "./VenuesAvgFieldsModel"
import { venuesAvgFieldsModelPrimitives, VenuesAvgFieldsModelSelector } from "./VenuesAvgFieldsModel.base"
import { VenuesMaxFieldsModel, VenuesMaxFieldsModelType } from "./VenuesMaxFieldsModel"
import { venuesMaxFieldsModelPrimitives, VenuesMaxFieldsModelSelector } from "./VenuesMaxFieldsModel.base"
import { VenuesMinFieldsModel, VenuesMinFieldsModelType } from "./VenuesMinFieldsModel"
import { venuesMinFieldsModelPrimitives, VenuesMinFieldsModelSelector } from "./VenuesMinFieldsModel.base"
import { VenuesMutationResponseModel, VenuesMutationResponseModelType } from "./VenuesMutationResponseModel"
import { venuesMutationResponseModelPrimitives, VenuesMutationResponseModelSelector } from "./VenuesMutationResponseModel.base"
import { VenuesStddevFieldsModel, VenuesStddevFieldsModelType } from "./VenuesStddevFieldsModel"
import { venuesStddevFieldsModelPrimitives, VenuesStddevFieldsModelSelector } from "./VenuesStddevFieldsModel.base"
import { VenuesStddevPopFieldsModel, VenuesStddevPopFieldsModelType } from "./VenuesStddevPopFieldsModel"
import { venuesStddevPopFieldsModelPrimitives, VenuesStddevPopFieldsModelSelector } from "./VenuesStddevPopFieldsModel.base"
import { VenuesStddevSampFieldsModel, VenuesStddevSampFieldsModelType } from "./VenuesStddevSampFieldsModel"
import { venuesStddevSampFieldsModelPrimitives, VenuesStddevSampFieldsModelSelector } from "./VenuesStddevSampFieldsModel.base"
import { VenuesSumFieldsModel, VenuesSumFieldsModelType } from "./VenuesSumFieldsModel"
import { venuesSumFieldsModelPrimitives, VenuesSumFieldsModelSelector } from "./VenuesSumFieldsModel.base"
import { VenuesVarPopFieldsModel, VenuesVarPopFieldsModelType } from "./VenuesVarPopFieldsModel"
import { venuesVarPopFieldsModelPrimitives, VenuesVarPopFieldsModelSelector } from "./VenuesVarPopFieldsModel.base"
import { VenuesVarSampFieldsModel, VenuesVarSampFieldsModelType } from "./VenuesVarSampFieldsModel"
import { venuesVarSampFieldsModelPrimitives, VenuesVarSampFieldsModelSelector } from "./VenuesVarSampFieldsModel.base"
import { VenuesVarianceFieldsModel, VenuesVarianceFieldsModelType } from "./VenuesVarianceFieldsModel"
import { venuesVarianceFieldsModelPrimitives, VenuesVarianceFieldsModelSelector } from "./VenuesVarianceFieldsModel.base"


import { MenuItemsConstraint } from "./MenuItemsConstraintEnum"
import { MenuItemsSelectColumn } from "./MenuItemsSelectColumnEnum"
import { MenuItemsUpdateColumn } from "./MenuItemsUpdateColumnEnum"
import { NearbyVenuesConstraint } from "./NearbyVenuesConstraintEnum"
import { NearbyVenuesSelectColumn } from "./NearbyVenuesSelectColumnEnum"
import { NearbyVenuesUpdateColumn } from "./NearbyVenuesUpdateColumnEnum"
import { OrderBy } from "./OrderByEnum"
import { OrderItemsByHourSelectColumn } from "./OrderItemsByHourSelectColumnEnum"
import { OrderItemsConstraint } from "./OrderItemsConstraintEnum"
import { OrderItemsSelectColumn } from "./OrderItemsSelectColumnEnum"
import { OrderItemsUpdateColumn } from "./OrderItemsUpdateColumnEnum"
import { OrdersConstraint } from "./OrdersConstraintEnum"
import { OrdersSelectColumn } from "./OrdersSelectColumnEnum"
import { OrdersUpdateColumn } from "./OrdersUpdateColumnEnum"
import { VenuesConstraint } from "./VenuesConstraintEnum"
import { VenuesSelectColumn } from "./VenuesSelectColumnEnum"
import { VenuesUpdateColumn } from "./VenuesUpdateColumnEnum"

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
export type GetNearbyVenuesArgs = {
  bound?: number
  lat?: any
  long?: any
}
export type JsonbComparisonExp = {
  _contained_in?: any
  _contains?: any
  _eq?: any
  _gt?: any
  _gte?: any
  _has_key?: string
  _has_keys_all?: string[]
  _has_keys_any?: string[]
  _in?: any[]
  _is_null?: boolean
  _lt?: any
  _lte?: any
  _neq?: any
  _nin?: any[]
}
export type MenuItemTypeComparisonExp = {
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
export type MenuItemsAggregateOrderBy = {
  avg?: MenuItemsAvgOrderBy
  count?: OrderBy
  max?: MenuItemsMaxOrderBy
  min?: MenuItemsMinOrderBy
  stddev?: MenuItemsStddevOrderBy
  stddev_pop?: MenuItemsStddevPopOrderBy
  stddev_samp?: MenuItemsStddevSampOrderBy
  sum?: MenuItemsSumOrderBy
  var_pop?: MenuItemsVarPopOrderBy
  var_samp?: MenuItemsVarSampOrderBy
  variance?: MenuItemsVarianceOrderBy
}
export type MenuItemsArrRelInsertInput = {
  data: MenuItemsInsertInput[]
  on_conflict?: MenuItemsOnConflict
}
export type MenuItemsAvgOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsBoolExp = {
  _and?: MenuItemsBoolExp[]
  _not?: MenuItemsBoolExp
  _or?: MenuItemsBoolExp[]
  created_at?: TimestampComparisonExp
  deleted_at?: TimestampComparisonExp
  id?: BigintComparisonExp
  item_type?: MenuItemTypeComparisonExp
  name?: StringComparisonExp
  order_items?: OrderItemsBoolExp
  updated_at?: TimestampComparisonExp
  venue?: VenuesBoolExp
  venue_id?: BigintComparisonExp
}
export type MenuItemsIncInput = {
  id?: any
  venue_id?: any
}
export type MenuItemsInsertInput = {
  created_at?: any
  deleted_at?: any
  id?: any
  item_type?: any
  name?: string
  order_items?: OrderItemsArrRelInsertInput
  updated_at?: any
  venue?: VenuesObjRelInsertInput
  venue_id?: any
}
export type MenuItemsMaxOrderBy = {
  created_at?: OrderBy
  deleted_at?: OrderBy
  id?: OrderBy
  name?: OrderBy
  updated_at?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsMinOrderBy = {
  created_at?: OrderBy
  deleted_at?: OrderBy
  id?: OrderBy
  name?: OrderBy
  updated_at?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsObjRelInsertInput = {
  data: MenuItemsInsertInput
  on_conflict?: MenuItemsOnConflict
}
export type MenuItemsOnConflict = {
  constraint: MenuItemsConstraint
  update_columns: MenuItemsUpdateColumn[]
  where?: MenuItemsBoolExp
}
export type MenuItemsOrderBy = {
  created_at?: OrderBy
  deleted_at?: OrderBy
  id?: OrderBy
  item_type?: OrderBy
  name?: OrderBy
  order_items_aggregate?: OrderItemsAggregateOrderBy
  updated_at?: OrderBy
  venue?: VenuesOrderBy
  venue_id?: OrderBy
}
export type MenuItemsPkColumnsInput = {
  id: any
}
export type MenuItemsSetInput = {
  created_at?: any
  deleted_at?: any
  id?: any
  item_type?: any
  name?: string
  updated_at?: any
  venue_id?: any
}
export type MenuItemsStddevOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsStddevPopOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsStddevSampOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsSumOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsVarPopOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsVarSampOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type MenuItemsVarianceOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type NearbyVenuesAggregateOrderBy = {
  avg?: NearbyVenuesAvgOrderBy
  count?: OrderBy
  max?: NearbyVenuesMaxOrderBy
  min?: NearbyVenuesMinOrderBy
  stddev?: NearbyVenuesStddevOrderBy
  stddev_pop?: NearbyVenuesStddevPopOrderBy
  stddev_samp?: NearbyVenuesStddevSampOrderBy
  sum?: NearbyVenuesSumOrderBy
  var_pop?: NearbyVenuesVarPopOrderBy
  var_samp?: NearbyVenuesVarSampOrderBy
  variance?: NearbyVenuesVarianceOrderBy
}
export type NearbyVenuesArrRelInsertInput = {
  data: NearbyVenuesInsertInput[]
  on_conflict?: NearbyVenuesOnConflict
}
export type NearbyVenuesAvgOrderBy = {
  lat?: OrderBy
  long?: OrderBy
}
export type NearbyVenuesBoolExp = {
  _and?: NearbyVenuesBoolExp[]
  _not?: NearbyVenuesBoolExp
  _or?: NearbyVenuesBoolExp[]
  lat?: Float8ComparisonExp
  long?: Float8ComparisonExp
  name?: StringComparisonExp
}
export type NearbyVenuesIncInput = {
  lat?: any
  long?: any
}
export type NearbyVenuesInsertInput = {
  lat?: any
  long?: any
  name?: string
}
export type NearbyVenuesMaxOrderBy = {
  lat?: OrderBy
  long?: OrderBy
  name?: OrderBy
}
export type NearbyVenuesMinOrderBy = {
  lat?: OrderBy
  long?: OrderBy
  name?: OrderBy
}
export type NearbyVenuesObjRelInsertInput = {
  data: NearbyVenuesInsertInput
  on_conflict?: NearbyVenuesOnConflict
}
export type NearbyVenuesOnConflict = {
  constraint: NearbyVenuesConstraint
  update_columns: NearbyVenuesUpdateColumn[]
  where?: NearbyVenuesBoolExp
}
export type NearbyVenuesOrderBy = {
  lat?: OrderBy
  long?: OrderBy
  name?: OrderBy
}
export type NearbyVenuesPkColumnsInput = {
  lat: any
  long: any
  name: string
}
export type NearbyVenuesSetInput = {
  lat?: any
  long?: any
  name?: string
}
export type NearbyVenuesStddevOrderBy = {
  lat?: OrderBy
  long?: OrderBy
}
export type NearbyVenuesStddevPopOrderBy = {
  lat?: OrderBy
  long?: OrderBy
}
export type NearbyVenuesStddevSampOrderBy = {
  lat?: OrderBy
  long?: OrderBy
}
export type NearbyVenuesSumOrderBy = {
  lat?: OrderBy
  long?: OrderBy
}
export type NearbyVenuesVarPopOrderBy = {
  lat?: OrderBy
  long?: OrderBy
}
export type NearbyVenuesVarSampOrderBy = {
  lat?: OrderBy
  long?: OrderBy
}
export type NearbyVenuesVarianceOrderBy = {
  lat?: OrderBy
  long?: OrderBy
}
export type OrderItemsAggregateOrderBy = {
  avg?: OrderItemsAvgOrderBy
  count?: OrderBy
  max?: OrderItemsMaxOrderBy
  min?: OrderItemsMinOrderBy
  stddev?: OrderItemsStddevOrderBy
  stddev_pop?: OrderItemsStddevPopOrderBy
  stddev_samp?: OrderItemsStddevSampOrderBy
  sum?: OrderItemsSumOrderBy
  var_pop?: OrderItemsVarPopOrderBy
  var_samp?: OrderItemsVarSampOrderBy
  variance?: OrderItemsVarianceOrderBy
}
export type OrderItemsArrRelInsertInput = {
  data: OrderItemsInsertInput[]
  on_conflict?: OrderItemsOnConflict
}
export type OrderItemsAvgOrderBy = {
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsBoolExp = {
  _and?: OrderItemsBoolExp[]
  _not?: OrderItemsBoolExp
  _or?: OrderItemsBoolExp[]
  created_at?: TimestampComparisonExp
  id?: BigintComparisonExp
  menu_item?: MenuItemsBoolExp
  menu_item_id?: BigintComparisonExp
  order_id?: BigintComparisonExp
  ordered_at?: TimestampComparisonExp
  venue?: VenuesBoolExp
  venue_id?: BigintComparisonExp
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
export type OrderItemsIncInput = {
  id?: any
  menu_item_id?: any
  order_id?: any
  venue_id?: any
}
export type OrderItemsInsertInput = {
  created_at?: any
  id?: any
  menu_item?: MenuItemsObjRelInsertInput
  menu_item_id?: any
  order_id?: any
  ordered_at?: any
  venue?: VenuesObjRelInsertInput
  venue_id?: any
}
export type OrderItemsMaxOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  ordered_at?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsMinOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  ordered_at?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsObjRelInsertInput = {
  data: OrderItemsInsertInput
  on_conflict?: OrderItemsOnConflict
}
export type OrderItemsOnConflict = {
  constraint: OrderItemsConstraint
  update_columns: OrderItemsUpdateColumn[]
  where?: OrderItemsBoolExp
}
export type OrderItemsOrderBy = {
  created_at?: OrderBy
  id?: OrderBy
  menu_item?: MenuItemsOrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  ordered_at?: OrderBy
  venue?: VenuesOrderBy
  venue_id?: OrderBy
}
export type OrderItemsPkColumnsInput = {
  id: any
  ordered_at: any
}
export type OrderItemsSetInput = {
  created_at?: any
  id?: any
  menu_item_id?: any
  order_id?: any
  ordered_at?: any
  venue_id?: any
}
export type OrderItemsStddevOrderBy = {
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsStddevPopOrderBy = {
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsStddevSampOrderBy = {
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsSumOrderBy = {
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsVarPopOrderBy = {
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsVarSampOrderBy = {
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  venue_id?: OrderBy
}
export type OrderItemsVarianceOrderBy = {
  id?: OrderBy
  menu_item_id?: OrderBy
  order_id?: OrderBy
  venue_id?: OrderBy
}
export type OrdersAggregateOrderBy = {
  avg?: OrdersAvgOrderBy
  count?: OrderBy
  max?: OrdersMaxOrderBy
  min?: OrdersMinOrderBy
  stddev?: OrdersStddevOrderBy
  stddev_pop?: OrdersStddevPopOrderBy
  stddev_samp?: OrdersStddevSampOrderBy
  sum?: OrdersSumOrderBy
  var_pop?: OrdersVarPopOrderBy
  var_samp?: OrdersVarSampOrderBy
  variance?: OrdersVarianceOrderBy
}
export type OrdersArrRelInsertInput = {
  data: OrdersInsertInput[]
  on_conflict?: OrdersOnConflict
}
export type OrdersAvgOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type OrdersBoolExp = {
  _and?: OrdersBoolExp[]
  _not?: OrdersBoolExp
  _or?: OrdersBoolExp[]
  created_at?: TimestampComparisonExp
  display?: StringComparisonExp
  id?: BigintComparisonExp
  ordered_at?: TimestampComparisonExp
  venue?: VenuesBoolExp
  venue_id?: BigintComparisonExp
}
export type OrdersIncInput = {
  id?: any
  venue_id?: any
}
export type OrdersInsertInput = {
  created_at?: any
  display?: string
  id?: any
  ordered_at?: any
  venue?: VenuesObjRelInsertInput
  venue_id?: any
}
export type OrdersMaxOrderBy = {
  created_at?: OrderBy
  display?: OrderBy
  id?: OrderBy
  ordered_at?: OrderBy
  venue_id?: OrderBy
}
export type OrdersMinOrderBy = {
  created_at?: OrderBy
  display?: OrderBy
  id?: OrderBy
  ordered_at?: OrderBy
  venue_id?: OrderBy
}
export type OrdersObjRelInsertInput = {
  data: OrdersInsertInput
  on_conflict?: OrdersOnConflict
}
export type OrdersOnConflict = {
  constraint: OrdersConstraint
  update_columns: OrdersUpdateColumn[]
  where?: OrdersBoolExp
}
export type OrdersOrderBy = {
  created_at?: OrderBy
  display?: OrderBy
  id?: OrderBy
  ordered_at?: OrderBy
  venue?: VenuesOrderBy
  venue_id?: OrderBy
}
export type OrdersPkColumnsInput = {
  id: any
}
export type OrdersSetInput = {
  created_at?: any
  display?: string
  id?: any
  ordered_at?: any
  venue_id?: any
}
export type OrdersStddevOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type OrdersStddevPopOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type OrdersStddevSampOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type OrdersSumOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type OrdersVarPopOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type OrdersVarSampOrderBy = {
  id?: OrderBy
  venue_id?: OrderBy
}
export type OrdersVarianceOrderBy = {
  id?: OrderBy
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
export type VenuesAggregateOrderBy = {
  avg?: VenuesAvgOrderBy
  count?: OrderBy
  max?: VenuesMaxOrderBy
  min?: VenuesMinOrderBy
  stddev?: VenuesStddevOrderBy
  stddev_pop?: VenuesStddevPopOrderBy
  stddev_samp?: VenuesStddevSampOrderBy
  sum?: VenuesSumOrderBy
  var_pop?: VenuesVarPopOrderBy
  var_samp?: VenuesVarSampOrderBy
  variance?: VenuesVarianceOrderBy
}
export type VenuesAppendInput = {
  tags?: any
}
export type VenuesArrRelInsertInput = {
  data: VenuesInsertInput[]
  on_conflict?: VenuesOnConflict
}
export type VenuesAvgOrderBy = {
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
}
export type VenuesBoolExp = {
  _and?: VenuesBoolExp[]
  _not?: VenuesBoolExp
  _or?: VenuesBoolExp[]
  created_at?: TimestampComparisonExp
  deleted_at?: TimestampComparisonExp
  id?: BigintComparisonExp
  lat?: Float8ComparisonExp
  long?: Float8ComparisonExp
  menu_items?: MenuItemsBoolExp
  name?: StringComparisonExp
  osm_id?: StringComparisonExp
  tags?: JsonbComparisonExp
  updated_at?: TimestampComparisonExp
}
export type VenuesDeleteAtPathInput = {
  tags?: string[]
}
export type VenuesDeleteElemInput = {
  tags?: number
}
export type VenuesDeleteKeyInput = {
  tags?: string
}
export type VenuesIncInput = {
  id?: any
  lat?: any
  long?: any
}
export type VenuesInsertInput = {
  created_at?: any
  deleted_at?: any
  id?: any
  lat?: any
  long?: any
  menu_items?: MenuItemsArrRelInsertInput
  name?: string
  osm_id?: string
  tags?: any
  updated_at?: any
}
export type VenuesMaxOrderBy = {
  created_at?: OrderBy
  deleted_at?: OrderBy
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
  name?: OrderBy
  osm_id?: OrderBy
  updated_at?: OrderBy
}
export type VenuesMinOrderBy = {
  created_at?: OrderBy
  deleted_at?: OrderBy
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
  name?: OrderBy
  osm_id?: OrderBy
  updated_at?: OrderBy
}
export type VenuesObjRelInsertInput = {
  data: VenuesInsertInput
  on_conflict?: VenuesOnConflict
}
export type VenuesOnConflict = {
  constraint: VenuesConstraint
  update_columns: VenuesUpdateColumn[]
  where?: VenuesBoolExp
}
export type VenuesOrderBy = {
  created_at?: OrderBy
  deleted_at?: OrderBy
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
  menu_items_aggregate?: MenuItemsAggregateOrderBy
  name?: OrderBy
  osm_id?: OrderBy
  tags?: OrderBy
  updated_at?: OrderBy
}
export type VenuesPkColumnsInput = {
  id: any
}
export type VenuesPrependInput = {
  tags?: any
}
export type VenuesSetInput = {
  created_at?: any
  deleted_at?: any
  id?: any
  lat?: any
  long?: any
  name?: string
  osm_id?: string
  tags?: any
  updated_at?: any
}
export type VenuesStddevOrderBy = {
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
}
export type VenuesStddevPopOrderBy = {
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
}
export type VenuesStddevSampOrderBy = {
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
}
export type VenuesSumOrderBy = {
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
}
export type VenuesVarPopOrderBy = {
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
}
export type VenuesVarSampOrderBy = {
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
}
export type VenuesVarianceOrderBy = {
  id?: OrderBy
  lat?: OrderBy
  long?: OrderBy
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
  .extend(configureStoreMixin([['menu_items', () => MenuItemsModel], ['menu_items_aggregate', () => MenuItemsAggregateModel], ['menu_items_aggregate_fields', () => MenuItemsAggregateFieldsModel], ['menu_items_avg_fields', () => MenuItemsAvgFieldsModel], ['menu_items_max_fields', () => MenuItemsMaxFieldsModel], ['menu_items_min_fields', () => MenuItemsMinFieldsModel], ['menu_items_mutation_response', () => MenuItemsMutationResponseModel], ['menu_items_stddev_fields', () => MenuItemsStddevFieldsModel], ['menu_items_stddev_pop_fields', () => MenuItemsStddevPopFieldsModel], ['menu_items_stddev_samp_fields', () => MenuItemsStddevSampFieldsModel], ['menu_items_sum_fields', () => MenuItemsSumFieldsModel], ['menu_items_var_pop_fields', () => MenuItemsVarPopFieldsModel], ['menu_items_var_samp_fields', () => MenuItemsVarSampFieldsModel], ['menu_items_variance_fields', () => MenuItemsVarianceFieldsModel], ['mutation_root', () => MutationRootModel], ['nearby_venues', () => NearbyVenuesModel], ['nearby_venues_aggregate', () => NearbyVenuesAggregateModel], ['nearby_venues_aggregate_fields', () => NearbyVenuesAggregateFieldsModel], ['nearby_venues_avg_fields', () => NearbyVenuesAvgFieldsModel], ['nearby_venues_max_fields', () => NearbyVenuesMaxFieldsModel], ['nearby_venues_min_fields', () => NearbyVenuesMinFieldsModel], ['nearby_venues_mutation_response', () => NearbyVenuesMutationResponseModel], ['nearby_venues_stddev_fields', () => NearbyVenuesStddevFieldsModel], ['nearby_venues_stddev_pop_fields', () => NearbyVenuesStddevPopFieldsModel], ['nearby_venues_stddev_samp_fields', () => NearbyVenuesStddevSampFieldsModel], ['nearby_venues_sum_fields', () => NearbyVenuesSumFieldsModel], ['nearby_venues_var_pop_fields', () => NearbyVenuesVarPopFieldsModel], ['nearby_venues_var_samp_fields', () => NearbyVenuesVarSampFieldsModel], ['nearby_venues_variance_fields', () => NearbyVenuesVarianceFieldsModel], ['order_items', () => OrderItemsModel], ['order_items_aggregate', () => OrderItemsAggregateModel], ['order_items_aggregate_fields', () => OrderItemsAggregateFieldsModel], ['order_items_avg_fields', () => OrderItemsAvgFieldsModel], ['order_items_by_hour', () => OrderItemsByHourModel], ['order_items_by_hour_aggregate', () => OrderItemsByHourAggregateModel], ['order_items_by_hour_aggregate_fields', () => OrderItemsByHourAggregateFieldsModel], ['order_items_by_hour_avg_fields', () => OrderItemsByHourAvgFieldsModel], ['order_items_by_hour_max_fields', () => OrderItemsByHourMaxFieldsModel], ['order_items_by_hour_min_fields', () => OrderItemsByHourMinFieldsModel], ['order_items_by_hour_stddev_fields', () => OrderItemsByHourStddevFieldsModel], ['order_items_by_hour_stddev_pop_fields', () => OrderItemsByHourStddevPopFieldsModel], ['order_items_by_hour_stddev_samp_fields', () => OrderItemsByHourStddevSampFieldsModel], ['order_items_by_hour_sum_fields', () => OrderItemsByHourSumFieldsModel], ['order_items_by_hour_var_pop_fields', () => OrderItemsByHourVarPopFieldsModel], ['order_items_by_hour_var_samp_fields', () => OrderItemsByHourVarSampFieldsModel], ['order_items_by_hour_variance_fields', () => OrderItemsByHourVarianceFieldsModel], ['order_items_max_fields', () => OrderItemsMaxFieldsModel], ['order_items_min_fields', () => OrderItemsMinFieldsModel], ['order_items_mutation_response', () => OrderItemsMutationResponseModel], ['order_items_stddev_fields', () => OrderItemsStddevFieldsModel], ['order_items_stddev_pop_fields', () => OrderItemsStddevPopFieldsModel], ['order_items_stddev_samp_fields', () => OrderItemsStddevSampFieldsModel], ['order_items_sum_fields', () => OrderItemsSumFieldsModel], ['order_items_var_pop_fields', () => OrderItemsVarPopFieldsModel], ['order_items_var_samp_fields', () => OrderItemsVarSampFieldsModel], ['order_items_variance_fields', () => OrderItemsVarianceFieldsModel], ['orders', () => OrdersModel], ['orders_aggregate', () => OrdersAggregateModel], ['orders_aggregate_fields', () => OrdersAggregateFieldsModel], ['orders_avg_fields', () => OrdersAvgFieldsModel], ['orders_max_fields', () => OrdersMaxFieldsModel], ['orders_min_fields', () => OrdersMinFieldsModel], ['orders_mutation_response', () => OrdersMutationResponseModel], ['orders_stddev_fields', () => OrdersStddevFieldsModel], ['orders_stddev_pop_fields', () => OrdersStddevPopFieldsModel], ['orders_stddev_samp_fields', () => OrdersStddevSampFieldsModel], ['orders_sum_fields', () => OrdersSumFieldsModel], ['orders_var_pop_fields', () => OrdersVarPopFieldsModel], ['orders_var_samp_fields', () => OrdersVarSampFieldsModel], ['orders_variance_fields', () => OrdersVarianceFieldsModel], ['query_root', () => QueryRootModel], ['subscription_root', () => SubscriptionRootModel], ['venues', () => VenuesModel], ['venues_aggregate', () => VenuesAggregateModel], ['venues_aggregate_fields', () => VenuesAggregateFieldsModel], ['venues_avg_fields', () => VenuesAvgFieldsModel], ['venues_max_fields', () => VenuesMaxFieldsModel], ['venues_min_fields', () => VenuesMinFieldsModel], ['venues_mutation_response', () => VenuesMutationResponseModel], ['venues_stddev_fields', () => VenuesStddevFieldsModel], ['venues_stddev_pop_fields', () => VenuesStddevPopFieldsModel], ['venues_stddev_samp_fields', () => VenuesStddevSampFieldsModel], ['venues_sum_fields', () => VenuesSumFieldsModel], ['venues_var_pop_fields', () => VenuesVarPopFieldsModel], ['venues_var_samp_fields', () => VenuesVarSampFieldsModel], ['venues_variance_fields', () => VenuesVarianceFieldsModel]], ['order_items_by_hour'], "js"))
  .props({
    orderItemsByHours: types.optional(types.map(types.late((): any => OrderItemsByHourModel)), {})
  })
  .actions(self => ({
    // execute function "get_nearby_venues" which returns "nearby_venues"
    queryGet_nearby_venues(variables: { args: GetNearbyVenuesArgs, distinctOn?: NearbyVenuesSelectColumn[], limit?: number, offset?: number, orderBy?: NearbyVenuesOrderBy[], where?: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ get_nearby_venues: NearbyVenuesModelType[]}>(`query get_nearby_venues($args: get_nearby_venues_args!, $distinctOn: [nearby_venues_select_column!], $limit: Int, $offset: Int, $orderBy: [nearby_venues_order_by!], $where: nearby_venues_bool_exp) { get_nearby_venues(args: $args, distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // execute function "get_nearby_venues" and query aggregates on result of table type "nearby_venues"
    queryGet_nearby_venues_aggregate(variables: { args: GetNearbyVenuesArgs, distinctOn?: NearbyVenuesSelectColumn[], limit?: number, offset?: number, orderBy?: NearbyVenuesOrderBy[], where?: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesAggregateModelSelector) => NearbyVenuesAggregateModelSelector) = nearbyVenuesAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ get_nearby_venues_aggregate: NearbyVenuesAggregateModelType}>(`query get_nearby_venues_aggregate($args: get_nearby_venues_args!, $distinctOn: [nearby_venues_select_column!], $limit: Int, $offset: Int, $orderBy: [nearby_venues_order_by!], $where: nearby_venues_bool_exp) { get_nearby_venues_aggregate(args: $args, distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "menu_items"
    queryMenu_items(variables: { distinctOn?: MenuItemsSelectColumn[], limit?: number, offset?: number, orderBy?: MenuItemsOrderBy[], where?: MenuItemsBoolExp }, resultSelector: string | ((qb: MenuItemsModelSelector) => MenuItemsModelSelector) = menuItemsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ menu_items: MenuItemsModelType[]}>(`query menu_items($distinctOn: [menu_items_select_column!], $limit: Int, $offset: Int, $orderBy: [menu_items_order_by!], $where: menu_items_bool_exp) { menu_items(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch aggregated fields from the table: "menu_items"
    queryMenu_items_aggregate(variables: { distinctOn?: MenuItemsSelectColumn[], limit?: number, offset?: number, orderBy?: MenuItemsOrderBy[], where?: MenuItemsBoolExp }, resultSelector: string | ((qb: MenuItemsAggregateModelSelector) => MenuItemsAggregateModelSelector) = menuItemsAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ menu_items_aggregate: MenuItemsAggregateModelType}>(`query menu_items_aggregate($distinctOn: [menu_items_select_column!], $limit: Int, $offset: Int, $orderBy: [menu_items_order_by!], $where: menu_items_bool_exp) { menu_items_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "menu_items" using primary key columns
    queryMenu_items_by_pk(variables: { id: any }, resultSelector: string | ((qb: MenuItemsModelSelector) => MenuItemsModelSelector) = menuItemsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ menu_items_by_pk: MenuItemsModelType}>(`query menu_items_by_pk($id: bigint!) { menu_items_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "nearby_venues"
    queryNearby_venues(variables: { distinctOn?: NearbyVenuesSelectColumn[], limit?: number, offset?: number, orderBy?: NearbyVenuesOrderBy[], where?: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ nearby_venues: NearbyVenuesModelType[]}>(`query nearby_venues($distinctOn: [nearby_venues_select_column!], $limit: Int, $offset: Int, $orderBy: [nearby_venues_order_by!], $where: nearby_venues_bool_exp) { nearby_venues(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch aggregated fields from the table: "nearby_venues"
    queryNearby_venues_aggregate(variables: { distinctOn?: NearbyVenuesSelectColumn[], limit?: number, offset?: number, orderBy?: NearbyVenuesOrderBy[], where?: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesAggregateModelSelector) => NearbyVenuesAggregateModelSelector) = nearbyVenuesAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ nearby_venues_aggregate: NearbyVenuesAggregateModelType}>(`query nearby_venues_aggregate($distinctOn: [nearby_venues_select_column!], $limit: Int, $offset: Int, $orderBy: [nearby_venues_order_by!], $where: nearby_venues_bool_exp) { nearby_venues_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "nearby_venues" using primary key columns
    queryNearby_venues_by_pk(variables: { lat: any, long: any, name: string }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ nearby_venues_by_pk: NearbyVenuesModelType}>(`query nearby_venues_by_pk($lat: float8!, $long: float8!, $name: String!) { nearby_venues_by_pk(lat: $lat, long: $long, name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "order_items"
    queryOrder_items(variables: { distinctOn?: OrderItemsSelectColumn[], limit?: number, offset?: number, orderBy?: OrderItemsOrderBy[], where?: OrderItemsBoolExp }, resultSelector: string | ((qb: OrderItemsModelSelector) => OrderItemsModelSelector) = orderItemsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ order_items: OrderItemsModelType[]}>(`query order_items($distinctOn: [order_items_select_column!], $limit: Int, $offset: Int, $orderBy: [order_items_order_by!], $where: order_items_bool_exp) { order_items(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch aggregated fields from the table: "order_items"
    queryOrder_items_aggregate(variables: { distinctOn?: OrderItemsSelectColumn[], limit?: number, offset?: number, orderBy?: OrderItemsOrderBy[], where?: OrderItemsBoolExp }, resultSelector: string | ((qb: OrderItemsAggregateModelSelector) => OrderItemsAggregateModelSelector) = orderItemsAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ order_items_aggregate: OrderItemsAggregateModelType}>(`query order_items_aggregate($distinctOn: [order_items_select_column!], $limit: Int, $offset: Int, $orderBy: [order_items_order_by!], $where: order_items_bool_exp) { order_items_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
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
    // fetch data from the table: "order_items" using primary key columns
    queryOrder_items_by_pk(variables: { id: any, orderedAt: any }, resultSelector: string | ((qb: OrderItemsModelSelector) => OrderItemsModelSelector) = orderItemsModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ order_items_by_pk: OrderItemsModelType}>(`query order_items_by_pk($id: bigint!, $orderedAt: timestamp!) { order_items_by_pk(id: $id, ordered_at: $orderedAt) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "orders"
    queryOrders(variables: { distinctOn?: OrdersSelectColumn[], limit?: number, offset?: number, orderBy?: OrdersOrderBy[], where?: OrdersBoolExp }, resultSelector: string | ((qb: OrdersModelSelector) => OrdersModelSelector) = ordersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ orders: OrdersModelType[]}>(`query orders($distinctOn: [orders_select_column!], $limit: Int, $offset: Int, $orderBy: [orders_order_by!], $where: orders_bool_exp) { orders(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch aggregated fields from the table: "orders"
    queryOrders_aggregate(variables: { distinctOn?: OrdersSelectColumn[], limit?: number, offset?: number, orderBy?: OrdersOrderBy[], where?: OrdersBoolExp }, resultSelector: string | ((qb: OrdersAggregateModelSelector) => OrdersAggregateModelSelector) = ordersAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ orders_aggregate: OrdersAggregateModelType}>(`query orders_aggregate($distinctOn: [orders_select_column!], $limit: Int, $offset: Int, $orderBy: [orders_order_by!], $where: orders_bool_exp) { orders_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "orders" using primary key columns
    queryOrders_by_pk(variables: { id: any }, resultSelector: string | ((qb: OrdersModelSelector) => OrdersModelSelector) = ordersModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ orders_by_pk: OrdersModelType}>(`query orders_by_pk($id: bigint!) { orders_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "venues"
    queryVenues(variables: { distinctOn?: VenuesSelectColumn[], limit?: number, offset?: number, orderBy?: VenuesOrderBy[], where?: VenuesBoolExp }, resultSelector: string | ((qb: VenuesModelSelector) => VenuesModelSelector) = venuesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ venues: VenuesModelType[]}>(`query venues($distinctOn: [venues_select_column!], $limit: Int, $offset: Int, $orderBy: [venues_order_by!], $where: venues_bool_exp) { venues(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch aggregated fields from the table: "venues"
    queryVenues_aggregate(variables: { distinctOn?: VenuesSelectColumn[], limit?: number, offset?: number, orderBy?: VenuesOrderBy[], where?: VenuesBoolExp }, resultSelector: string | ((qb: VenuesAggregateModelSelector) => VenuesAggregateModelSelector) = venuesAggregateModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ venues_aggregate: VenuesAggregateModelType}>(`query venues_aggregate($distinctOn: [venues_select_column!], $limit: Int, $offset: Int, $orderBy: [venues_order_by!], $where: venues_bool_exp) { venues_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // fetch data from the table: "venues" using primary key columns
    queryVenues_by_pk(variables: { id: any }, resultSelector: string | ((qb: VenuesModelSelector) => VenuesModelSelector) = venuesModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ venues_by_pk: VenuesModelType}>(`query venues_by_pk($id: bigint!) { venues_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    // delete data from the table: "menu_items"
    mutateDelete_menu_items(variables: { where: MenuItemsBoolExp }, resultSelector: string | ((qb: MenuItemsMutationResponseModelSelector) => MenuItemsMutationResponseModelSelector) = menuItemsMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_menu_items: MenuItemsMutationResponseModelType}>(`mutation delete_menu_items($where: menu_items_bool_exp!) { delete_menu_items(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete single row from the table: "menu_items"
    mutateDelete_menu_items_by_pk(variables: { id: any }, resultSelector: string | ((qb: MenuItemsModelSelector) => MenuItemsModelSelector) = menuItemsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_menu_items_by_pk: MenuItemsModelType}>(`mutation delete_menu_items_by_pk($id: bigint!) { delete_menu_items_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete data from the table: "nearby_venues"
    mutateDelete_nearby_venues(variables: { where: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesMutationResponseModelSelector) => NearbyVenuesMutationResponseModelSelector) = nearbyVenuesMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_nearby_venues: NearbyVenuesMutationResponseModelType}>(`mutation delete_nearby_venues($where: nearby_venues_bool_exp!) { delete_nearby_venues(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete single row from the table: "nearby_venues"
    mutateDelete_nearby_venues_by_pk(variables: { lat: any, long: any, name: string }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_nearby_venues_by_pk: NearbyVenuesModelType}>(`mutation delete_nearby_venues_by_pk($lat: float8!, $long: float8!, $name: String!) { delete_nearby_venues_by_pk(lat: $lat, long: $long, name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete data from the table: "order_items"
    mutateDelete_order_items(variables: { where: OrderItemsBoolExp }, resultSelector: string | ((qb: OrderItemsMutationResponseModelSelector) => OrderItemsMutationResponseModelSelector) = orderItemsMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_order_items: OrderItemsMutationResponseModelType}>(`mutation delete_order_items($where: order_items_bool_exp!) { delete_order_items(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete single row from the table: "order_items"
    mutateDelete_order_items_by_pk(variables: { id: any, orderedAt: any }, resultSelector: string | ((qb: OrderItemsModelSelector) => OrderItemsModelSelector) = orderItemsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_order_items_by_pk: OrderItemsModelType}>(`mutation delete_order_items_by_pk($id: bigint!, $orderedAt: timestamp!) { delete_order_items_by_pk(id: $id, ordered_at: $orderedAt) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete data from the table: "orders"
    mutateDelete_orders(variables: { where: OrdersBoolExp }, resultSelector: string | ((qb: OrdersMutationResponseModelSelector) => OrdersMutationResponseModelSelector) = ordersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_orders: OrdersMutationResponseModelType}>(`mutation delete_orders($where: orders_bool_exp!) { delete_orders(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete single row from the table: "orders"
    mutateDelete_orders_by_pk(variables: { id: any }, resultSelector: string | ((qb: OrdersModelSelector) => OrdersModelSelector) = ordersModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_orders_by_pk: OrdersModelType}>(`mutation delete_orders_by_pk($id: bigint!) { delete_orders_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete data from the table: "venues"
    mutateDelete_venues(variables: { where: VenuesBoolExp }, resultSelector: string | ((qb: VenuesMutationResponseModelSelector) => VenuesMutationResponseModelSelector) = venuesMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_venues: VenuesMutationResponseModelType}>(`mutation delete_venues($where: venues_bool_exp!) { delete_venues(where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // delete single row from the table: "venues"
    mutateDelete_venues_by_pk(variables: { id: any }, resultSelector: string | ((qb: VenuesModelSelector) => VenuesModelSelector) = venuesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ delete_venues_by_pk: VenuesModelType}>(`mutation delete_venues_by_pk($id: bigint!) { delete_venues_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert data into the table: "menu_items"
    mutateInsert_menu_items(variables: { objects: MenuItemsInsertInput[], onConflict?: MenuItemsOnConflict }, resultSelector: string | ((qb: MenuItemsMutationResponseModelSelector) => MenuItemsMutationResponseModelSelector) = menuItemsMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_menu_items: MenuItemsMutationResponseModelType}>(`mutation insert_menu_items($objects: [menu_items_insert_input!]!, $onConflict: menu_items_on_conflict) { insert_menu_items(objects: $objects, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert a single row into the table: "menu_items"
    mutateInsert_menu_items_one(variables: { object: MenuItemsInsertInput, onConflict?: MenuItemsOnConflict }, resultSelector: string | ((qb: MenuItemsModelSelector) => MenuItemsModelSelector) = menuItemsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_menu_items_one: MenuItemsModelType}>(`mutation insert_menu_items_one($object: menu_items_insert_input!, $onConflict: menu_items_on_conflict) { insert_menu_items_one(object: $object, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert data into the table: "nearby_venues"
    mutateInsert_nearby_venues(variables: { objects: NearbyVenuesInsertInput[], onConflict?: NearbyVenuesOnConflict }, resultSelector: string | ((qb: NearbyVenuesMutationResponseModelSelector) => NearbyVenuesMutationResponseModelSelector) = nearbyVenuesMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_nearby_venues: NearbyVenuesMutationResponseModelType}>(`mutation insert_nearby_venues($objects: [nearby_venues_insert_input!]!, $onConflict: nearby_venues_on_conflict) { insert_nearby_venues(objects: $objects, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert a single row into the table: "nearby_venues"
    mutateInsert_nearby_venues_one(variables: { object: NearbyVenuesInsertInput, onConflict?: NearbyVenuesOnConflict }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_nearby_venues_one: NearbyVenuesModelType}>(`mutation insert_nearby_venues_one($object: nearby_venues_insert_input!, $onConflict: nearby_venues_on_conflict) { insert_nearby_venues_one(object: $object, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert data into the table: "order_items"
    mutateInsert_order_items(variables: { objects: OrderItemsInsertInput[], onConflict?: OrderItemsOnConflict }, resultSelector: string | ((qb: OrderItemsMutationResponseModelSelector) => OrderItemsMutationResponseModelSelector) = orderItemsMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_order_items: OrderItemsMutationResponseModelType}>(`mutation insert_order_items($objects: [order_items_insert_input!]!, $onConflict: order_items_on_conflict) { insert_order_items(objects: $objects, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert a single row into the table: "order_items"
    mutateInsert_order_items_one(variables: { object: OrderItemsInsertInput, onConflict?: OrderItemsOnConflict }, resultSelector: string | ((qb: OrderItemsModelSelector) => OrderItemsModelSelector) = orderItemsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_order_items_one: OrderItemsModelType}>(`mutation insert_order_items_one($object: order_items_insert_input!, $onConflict: order_items_on_conflict) { insert_order_items_one(object: $object, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert data into the table: "orders"
    mutateInsert_orders(variables: { objects: OrdersInsertInput[], onConflict?: OrdersOnConflict }, resultSelector: string | ((qb: OrdersMutationResponseModelSelector) => OrdersMutationResponseModelSelector) = ordersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_orders: OrdersMutationResponseModelType}>(`mutation insert_orders($objects: [orders_insert_input!]!, $onConflict: orders_on_conflict) { insert_orders(objects: $objects, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert a single row into the table: "orders"
    mutateInsert_orders_one(variables: { object: OrdersInsertInput, onConflict?: OrdersOnConflict }, resultSelector: string | ((qb: OrdersModelSelector) => OrdersModelSelector) = ordersModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_orders_one: OrdersModelType}>(`mutation insert_orders_one($object: orders_insert_input!, $onConflict: orders_on_conflict) { insert_orders_one(object: $object, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert data into the table: "venues"
    mutateInsert_venues(variables: { objects: VenuesInsertInput[], onConflict?: VenuesOnConflict }, resultSelector: string | ((qb: VenuesMutationResponseModelSelector) => VenuesMutationResponseModelSelector) = venuesMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_venues: VenuesMutationResponseModelType}>(`mutation insert_venues($objects: [venues_insert_input!]!, $onConflict: venues_on_conflict) { insert_venues(objects: $objects, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // insert a single row into the table: "venues"
    mutateInsert_venues_one(variables: { object: VenuesInsertInput, onConflict?: VenuesOnConflict }, resultSelector: string | ((qb: VenuesModelSelector) => VenuesModelSelector) = venuesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ insert_venues_one: VenuesModelType}>(`mutation insert_venues_one($object: venues_insert_input!, $onConflict: venues_on_conflict) { insert_venues_one(object: $object, on_conflict: $onConflict) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update data of the table: "menu_items"
    mutateUpdate_menu_items(variables: { inc?: MenuItemsIncInput, set?: MenuItemsSetInput, where: MenuItemsBoolExp }, resultSelector: string | ((qb: MenuItemsMutationResponseModelSelector) => MenuItemsMutationResponseModelSelector) = menuItemsMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_menu_items: MenuItemsMutationResponseModelType}>(`mutation update_menu_items($inc: menu_items_inc_input, $set: menu_items_set_input, $where: menu_items_bool_exp!) { update_menu_items(_inc: $inc, _set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update single row of the table: "menu_items"
    mutateUpdate_menu_items_by_pk(variables: { inc?: MenuItemsIncInput, set?: MenuItemsSetInput, pkColumns: MenuItemsPkColumnsInput }, resultSelector: string | ((qb: MenuItemsModelSelector) => MenuItemsModelSelector) = menuItemsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_menu_items_by_pk: MenuItemsModelType}>(`mutation update_menu_items_by_pk($inc: menu_items_inc_input, $set: menu_items_set_input, $pkColumns: menu_items_pk_columns_input!) { update_menu_items_by_pk(_inc: $inc, _set: $set, pk_columns: $pkColumns) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update data of the table: "nearby_venues"
    mutateUpdate_nearby_venues(variables: { inc?: NearbyVenuesIncInput, set?: NearbyVenuesSetInput, where: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesMutationResponseModelSelector) => NearbyVenuesMutationResponseModelSelector) = nearbyVenuesMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_nearby_venues: NearbyVenuesMutationResponseModelType}>(`mutation update_nearby_venues($inc: nearby_venues_inc_input, $set: nearby_venues_set_input, $where: nearby_venues_bool_exp!) { update_nearby_venues(_inc: $inc, _set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update single row of the table: "nearby_venues"
    mutateUpdate_nearby_venues_by_pk(variables: { inc?: NearbyVenuesIncInput, set?: NearbyVenuesSetInput, pkColumns: NearbyVenuesPkColumnsInput }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_nearby_venues_by_pk: NearbyVenuesModelType}>(`mutation update_nearby_venues_by_pk($inc: nearby_venues_inc_input, $set: nearby_venues_set_input, $pkColumns: nearby_venues_pk_columns_input!) { update_nearby_venues_by_pk(_inc: $inc, _set: $set, pk_columns: $pkColumns) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update data of the table: "order_items"
    mutateUpdate_order_items(variables: { inc?: OrderItemsIncInput, set?: OrderItemsSetInput, where: OrderItemsBoolExp }, resultSelector: string | ((qb: OrderItemsMutationResponseModelSelector) => OrderItemsMutationResponseModelSelector) = orderItemsMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_order_items: OrderItemsMutationResponseModelType}>(`mutation update_order_items($inc: order_items_inc_input, $set: order_items_set_input, $where: order_items_bool_exp!) { update_order_items(_inc: $inc, _set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update single row of the table: "order_items"
    mutateUpdate_order_items_by_pk(variables: { inc?: OrderItemsIncInput, set?: OrderItemsSetInput, pkColumns: OrderItemsPkColumnsInput }, resultSelector: string | ((qb: OrderItemsModelSelector) => OrderItemsModelSelector) = orderItemsModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_order_items_by_pk: OrderItemsModelType}>(`mutation update_order_items_by_pk($inc: order_items_inc_input, $set: order_items_set_input, $pkColumns: order_items_pk_columns_input!) { update_order_items_by_pk(_inc: $inc, _set: $set, pk_columns: $pkColumns) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update data of the table: "orders"
    mutateUpdate_orders(variables: { inc?: OrdersIncInput, set?: OrdersSetInput, where: OrdersBoolExp }, resultSelector: string | ((qb: OrdersMutationResponseModelSelector) => OrdersMutationResponseModelSelector) = ordersMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_orders: OrdersMutationResponseModelType}>(`mutation update_orders($inc: orders_inc_input, $set: orders_set_input, $where: orders_bool_exp!) { update_orders(_inc: $inc, _set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update single row of the table: "orders"
    mutateUpdate_orders_by_pk(variables: { inc?: OrdersIncInput, set?: OrdersSetInput, pkColumns: OrdersPkColumnsInput }, resultSelector: string | ((qb: OrdersModelSelector) => OrdersModelSelector) = ordersModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_orders_by_pk: OrdersModelType}>(`mutation update_orders_by_pk($inc: orders_inc_input, $set: orders_set_input, $pkColumns: orders_pk_columns_input!) { update_orders_by_pk(_inc: $inc, _set: $set, pk_columns: $pkColumns) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update data of the table: "venues"
    mutateUpdate_venues(variables: { append?: VenuesAppendInput, deleteAtPath?: VenuesDeleteAtPathInput, deleteElem?: VenuesDeleteElemInput, deleteKey?: VenuesDeleteKeyInput, inc?: VenuesIncInput, prepend?: VenuesPrependInput, set?: VenuesSetInput, where: VenuesBoolExp }, resultSelector: string | ((qb: VenuesMutationResponseModelSelector) => VenuesMutationResponseModelSelector) = venuesMutationResponseModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_venues: VenuesMutationResponseModelType}>(`mutation update_venues($append: venues_append_input, $deleteAtPath: venues_delete_at_path_input, $deleteElem: venues_delete_elem_input, $deleteKey: venues_delete_key_input, $inc: venues_inc_input, $prepend: venues_prepend_input, $set: venues_set_input, $where: venues_bool_exp!) { update_venues(_append: $append, _delete_at_path: $deleteAtPath, _delete_elem: $deleteElem, _delete_key: $deleteKey, _inc: $inc, _prepend: $prepend, _set: $set, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesMutationResponseModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // update single row of the table: "venues"
    mutateUpdate_venues_by_pk(variables: { append?: VenuesAppendInput, deleteAtPath?: VenuesDeleteAtPathInput, deleteElem?: VenuesDeleteElemInput, deleteKey?: VenuesDeleteKeyInput, inc?: VenuesIncInput, prepend?: VenuesPrependInput, set?: VenuesSetInput, pkColumns: VenuesPkColumnsInput }, resultSelector: string | ((qb: VenuesModelSelector) => VenuesModelSelector) = venuesModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ update_venues_by_pk: VenuesModelType}>(`mutation update_venues_by_pk($append: venues_append_input, $deleteAtPath: venues_delete_at_path_input, $deleteElem: venues_delete_elem_input, $deleteKey: venues_delete_key_input, $inc: venues_inc_input, $prepend: venues_prepend_input, $set: venues_set_input, $pkColumns: venues_pk_columns_input!) { update_venues_by_pk(_append: $append, _delete_at_path: $deleteAtPath, _delete_elem: $deleteElem, _delete_key: $deleteKey, _inc: $inc, _prepend: $prepend, _set: $set, pk_columns: $pkColumns) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
    // execute function "get_nearby_venues" which returns "nearby_venues"
    subscribeGet_nearby_venues(variables: { args: GetNearbyVenuesArgs, distinctOn?: NearbyVenuesSelectColumn[], limit?: number, offset?: number, orderBy?: NearbyVenuesOrderBy[], where?: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ get_nearby_venues: NearbyVenuesModelType[]}>(`subscription get_nearby_venues($args: get_nearby_venues_args!, $distinctOn: [nearby_venues_select_column!], $limit: Int, $offset: Int, $orderBy: [nearby_venues_order_by!], $where: nearby_venues_bool_exp) { get_nearby_venues(args: $args, distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // execute function "get_nearby_venues" and query aggregates on result of table type "nearby_venues"
    subscribeGet_nearby_venues_aggregate(variables: { args: GetNearbyVenuesArgs, distinctOn?: NearbyVenuesSelectColumn[], limit?: number, offset?: number, orderBy?: NearbyVenuesOrderBy[], where?: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesAggregateModelSelector) => NearbyVenuesAggregateModelSelector) = nearbyVenuesAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ get_nearby_venues_aggregate: NearbyVenuesAggregateModelType}>(`subscription get_nearby_venues_aggregate($args: get_nearby_venues_args!, $distinctOn: [nearby_venues_select_column!], $limit: Int, $offset: Int, $orderBy: [nearby_venues_order_by!], $where: nearby_venues_bool_exp) { get_nearby_venues_aggregate(args: $args, distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "menu_items"
    subscribeMenu_items(variables: { distinctOn?: MenuItemsSelectColumn[], limit?: number, offset?: number, orderBy?: MenuItemsOrderBy[], where?: MenuItemsBoolExp }, resultSelector: string | ((qb: MenuItemsModelSelector) => MenuItemsModelSelector) = menuItemsModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ menu_items: MenuItemsModelType[]}>(`subscription menu_items($distinctOn: [menu_items_select_column!], $limit: Int, $offset: Int, $orderBy: [menu_items_order_by!], $where: menu_items_bool_exp) { menu_items(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch aggregated fields from the table: "menu_items"
    subscribeMenu_items_aggregate(variables: { distinctOn?: MenuItemsSelectColumn[], limit?: number, offset?: number, orderBy?: MenuItemsOrderBy[], where?: MenuItemsBoolExp }, resultSelector: string | ((qb: MenuItemsAggregateModelSelector) => MenuItemsAggregateModelSelector) = menuItemsAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ menu_items_aggregate: MenuItemsAggregateModelType}>(`subscription menu_items_aggregate($distinctOn: [menu_items_select_column!], $limit: Int, $offset: Int, $orderBy: [menu_items_order_by!], $where: menu_items_bool_exp) { menu_items_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "menu_items" using primary key columns
    subscribeMenu_items_by_pk(variables: { id: any }, resultSelector: string | ((qb: MenuItemsModelSelector) => MenuItemsModelSelector) = menuItemsModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ menu_items_by_pk: MenuItemsModelType}>(`subscription menu_items_by_pk($id: bigint!) { menu_items_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new MenuItemsModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "nearby_venues"
    subscribeNearby_venues(variables: { distinctOn?: NearbyVenuesSelectColumn[], limit?: number, offset?: number, orderBy?: NearbyVenuesOrderBy[], where?: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ nearby_venues: NearbyVenuesModelType[]}>(`subscription nearby_venues($distinctOn: [nearby_venues_select_column!], $limit: Int, $offset: Int, $orderBy: [nearby_venues_order_by!], $where: nearby_venues_bool_exp) { nearby_venues(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch aggregated fields from the table: "nearby_venues"
    subscribeNearby_venues_aggregate(variables: { distinctOn?: NearbyVenuesSelectColumn[], limit?: number, offset?: number, orderBy?: NearbyVenuesOrderBy[], where?: NearbyVenuesBoolExp }, resultSelector: string | ((qb: NearbyVenuesAggregateModelSelector) => NearbyVenuesAggregateModelSelector) = nearbyVenuesAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ nearby_venues_aggregate: NearbyVenuesAggregateModelType}>(`subscription nearby_venues_aggregate($distinctOn: [nearby_venues_select_column!], $limit: Int, $offset: Int, $orderBy: [nearby_venues_order_by!], $where: nearby_venues_bool_exp) { nearby_venues_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "nearby_venues" using primary key columns
    subscribeNearby_venues_by_pk(variables: { lat: any, long: any, name: string }, resultSelector: string | ((qb: NearbyVenuesModelSelector) => NearbyVenuesModelSelector) = nearbyVenuesModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ nearby_venues_by_pk: NearbyVenuesModelType}>(`subscription nearby_venues_by_pk($lat: float8!, $long: float8!, $name: String!) { nearby_venues_by_pk(lat: $lat, long: $long, name: $name) {
        ${typeof resultSelector === "function" ? resultSelector(new NearbyVenuesModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "order_items"
    subscribeOrder_items(variables: { distinctOn?: OrderItemsSelectColumn[], limit?: number, offset?: number, orderBy?: OrderItemsOrderBy[], where?: OrderItemsBoolExp }, resultSelector: string | ((qb: OrderItemsModelSelector) => OrderItemsModelSelector) = orderItemsModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ order_items: OrderItemsModelType[]}>(`subscription order_items($distinctOn: [order_items_select_column!], $limit: Int, $offset: Int, $orderBy: [order_items_order_by!], $where: order_items_bool_exp) { order_items(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch aggregated fields from the table: "order_items"
    subscribeOrder_items_aggregate(variables: { distinctOn?: OrderItemsSelectColumn[], limit?: number, offset?: number, orderBy?: OrderItemsOrderBy[], where?: OrderItemsBoolExp }, resultSelector: string | ((qb: OrderItemsAggregateModelSelector) => OrderItemsAggregateModelSelector) = orderItemsAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ order_items_aggregate: OrderItemsAggregateModelType}>(`subscription order_items_aggregate($distinctOn: [order_items_select_column!], $limit: Int, $offset: Int, $orderBy: [order_items_order_by!], $where: order_items_bool_exp) { order_items_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
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
    // fetch data from the table: "order_items" using primary key columns
    subscribeOrder_items_by_pk(variables: { id: any, orderedAt: any }, resultSelector: string | ((qb: OrderItemsModelSelector) => OrderItemsModelSelector) = orderItemsModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ order_items_by_pk: OrderItemsModelType}>(`subscription order_items_by_pk($id: bigint!, $orderedAt: timestamp!) { order_items_by_pk(id: $id, ordered_at: $orderedAt) {
        ${typeof resultSelector === "function" ? resultSelector(new OrderItemsModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "orders"
    subscribeOrders(variables: { distinctOn?: OrdersSelectColumn[], limit?: number, offset?: number, orderBy?: OrdersOrderBy[], where?: OrdersBoolExp }, resultSelector: string | ((qb: OrdersModelSelector) => OrdersModelSelector) = ordersModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ orders: OrdersModelType[]}>(`subscription orders($distinctOn: [orders_select_column!], $limit: Int, $offset: Int, $orderBy: [orders_order_by!], $where: orders_bool_exp) { orders(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch aggregated fields from the table: "orders"
    subscribeOrders_aggregate(variables: { distinctOn?: OrdersSelectColumn[], limit?: number, offset?: number, orderBy?: OrdersOrderBy[], where?: OrdersBoolExp }, resultSelector: string | ((qb: OrdersAggregateModelSelector) => OrdersAggregateModelSelector) = ordersAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ orders_aggregate: OrdersAggregateModelType}>(`subscription orders_aggregate($distinctOn: [orders_select_column!], $limit: Int, $offset: Int, $orderBy: [orders_order_by!], $where: orders_bool_exp) { orders_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "orders" using primary key columns
    subscribeOrders_by_pk(variables: { id: any }, resultSelector: string | ((qb: OrdersModelSelector) => OrdersModelSelector) = ordersModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ orders_by_pk: OrdersModelType}>(`subscription orders_by_pk($id: bigint!) { orders_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new OrdersModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "venues"
    subscribeVenues(variables: { distinctOn?: VenuesSelectColumn[], limit?: number, offset?: number, orderBy?: VenuesOrderBy[], where?: VenuesBoolExp }, resultSelector: string | ((qb: VenuesModelSelector) => VenuesModelSelector) = venuesModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ venues: VenuesModelType[]}>(`subscription venues($distinctOn: [venues_select_column!], $limit: Int, $offset: Int, $orderBy: [venues_order_by!], $where: venues_bool_exp) { venues(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch aggregated fields from the table: "venues"
    subscribeVenues_aggregate(variables: { distinctOn?: VenuesSelectColumn[], limit?: number, offset?: number, orderBy?: VenuesOrderBy[], where?: VenuesBoolExp }, resultSelector: string | ((qb: VenuesAggregateModelSelector) => VenuesAggregateModelSelector) = venuesAggregateModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ venues_aggregate: VenuesAggregateModelType}>(`subscription venues_aggregate($distinctOn: [venues_select_column!], $limit: Int, $offset: Int, $orderBy: [venues_order_by!], $where: venues_bool_exp) { venues_aggregate(distinct_on: $distinctOn, limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesAggregateModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
    // fetch data from the table: "venues" using primary key columns
    subscribeVenues_by_pk(variables: { id: any }, resultSelector: string | ((qb: VenuesModelSelector) => VenuesModelSelector) = venuesModelPrimitives.toString(), onData?: (item: any) => void, onError?: (error: Error) => void) {
      return self.subscribe<{ venues_by_pk: VenuesModelType}>(`subscription venues_by_pk($id: bigint!) { venues_by_pk(id: $id) {
        ${typeof resultSelector === "function" ? resultSelector(new VenuesModelSelector()).toString() : resultSelector}
      } }`, variables, onData, onError)
    },
  })))
