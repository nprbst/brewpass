/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsByHourAvgFieldsModel, OrderItemsByHourAvgFieldsModelType } from "./OrderItemsByHourAvgFieldsModel"
import { OrderItemsByHourAvgFieldsModelSelector } from "./OrderItemsByHourAvgFieldsModel.base"
import { OrderItemsByHourMaxFieldsModel, OrderItemsByHourMaxFieldsModelType } from "./OrderItemsByHourMaxFieldsModel"
import { OrderItemsByHourMaxFieldsModelSelector } from "./OrderItemsByHourMaxFieldsModel.base"
import { OrderItemsByHourMinFieldsModel, OrderItemsByHourMinFieldsModelType } from "./OrderItemsByHourMinFieldsModel"
import { OrderItemsByHourMinFieldsModelSelector } from "./OrderItemsByHourMinFieldsModel.base"
import { OrderItemsByHourStddevFieldsModel, OrderItemsByHourStddevFieldsModelType } from "./OrderItemsByHourStddevFieldsModel"
import { OrderItemsByHourStddevFieldsModelSelector } from "./OrderItemsByHourStddevFieldsModel.base"
import { OrderItemsByHourStddevPopFieldsModel, OrderItemsByHourStddevPopFieldsModelType } from "./OrderItemsByHourStddevPopFieldsModel"
import { OrderItemsByHourStddevPopFieldsModelSelector } from "./OrderItemsByHourStddevPopFieldsModel.base"
import { OrderItemsByHourStddevSampFieldsModel, OrderItemsByHourStddevSampFieldsModelType } from "./OrderItemsByHourStddevSampFieldsModel"
import { OrderItemsByHourStddevSampFieldsModelSelector } from "./OrderItemsByHourStddevSampFieldsModel.base"
import { OrderItemsByHourSumFieldsModel, OrderItemsByHourSumFieldsModelType } from "./OrderItemsByHourSumFieldsModel"
import { OrderItemsByHourSumFieldsModelSelector } from "./OrderItemsByHourSumFieldsModel.base"
import { OrderItemsByHourVarPopFieldsModel, OrderItemsByHourVarPopFieldsModelType } from "./OrderItemsByHourVarPopFieldsModel"
import { OrderItemsByHourVarPopFieldsModelSelector } from "./OrderItemsByHourVarPopFieldsModel.base"
import { OrderItemsByHourVarSampFieldsModel, OrderItemsByHourVarSampFieldsModelType } from "./OrderItemsByHourVarSampFieldsModel"
import { OrderItemsByHourVarSampFieldsModelSelector } from "./OrderItemsByHourVarSampFieldsModel.base"
import { OrderItemsByHourVarianceFieldsModel, OrderItemsByHourVarianceFieldsModelType } from "./OrderItemsByHourVarianceFieldsModel"
import { OrderItemsByHourVarianceFieldsModelSelector } from "./OrderItemsByHourVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItemsByHourAggregateFieldsBase
 * auto generated base class for the model OrderItemsByHourAggregateFieldsModel.
 *
 * aggregate fields of "order_items_by_hour"
 */
export const OrderItemsByHourAggregateFieldsModelBase = ModelBase
  .named('OrderItemsByHourAggregateFields')
  .props({
    __typename: types.optional(types.literal("order_items_by_hour_aggregate_fields"), "order_items_by_hour_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsByHourAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | OrderItemsByHourAvgFieldsModelSelector | ((selector: OrderItemsByHourAvgFieldsModelSelector) => OrderItemsByHourAvgFieldsModelSelector)) { return this.__child(`avg`, OrderItemsByHourAvgFieldsModelSelector, builder) }
  max(builder?: string | OrderItemsByHourMaxFieldsModelSelector | ((selector: OrderItemsByHourMaxFieldsModelSelector) => OrderItemsByHourMaxFieldsModelSelector)) { return this.__child(`max`, OrderItemsByHourMaxFieldsModelSelector, builder) }
  min(builder?: string | OrderItemsByHourMinFieldsModelSelector | ((selector: OrderItemsByHourMinFieldsModelSelector) => OrderItemsByHourMinFieldsModelSelector)) { return this.__child(`min`, OrderItemsByHourMinFieldsModelSelector, builder) }
  stddev(builder?: string | OrderItemsByHourStddevFieldsModelSelector | ((selector: OrderItemsByHourStddevFieldsModelSelector) => OrderItemsByHourStddevFieldsModelSelector)) { return this.__child(`stddev`, OrderItemsByHourStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | OrderItemsByHourStddevPopFieldsModelSelector | ((selector: OrderItemsByHourStddevPopFieldsModelSelector) => OrderItemsByHourStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, OrderItemsByHourStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | OrderItemsByHourStddevSampFieldsModelSelector | ((selector: OrderItemsByHourStddevSampFieldsModelSelector) => OrderItemsByHourStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, OrderItemsByHourStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | OrderItemsByHourSumFieldsModelSelector | ((selector: OrderItemsByHourSumFieldsModelSelector) => OrderItemsByHourSumFieldsModelSelector)) { return this.__child(`sum`, OrderItemsByHourSumFieldsModelSelector, builder) }
  var_pop(builder?: string | OrderItemsByHourVarPopFieldsModelSelector | ((selector: OrderItemsByHourVarPopFieldsModelSelector) => OrderItemsByHourVarPopFieldsModelSelector)) { return this.__child(`var_pop`, OrderItemsByHourVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | OrderItemsByHourVarSampFieldsModelSelector | ((selector: OrderItemsByHourVarSampFieldsModelSelector) => OrderItemsByHourVarSampFieldsModelSelector)) { return this.__child(`var_samp`, OrderItemsByHourVarSampFieldsModelSelector, builder) }
  variance(builder?: string | OrderItemsByHourVarianceFieldsModelSelector | ((selector: OrderItemsByHourVarianceFieldsModelSelector) => OrderItemsByHourVarianceFieldsModelSelector)) { return this.__child(`variance`, OrderItemsByHourVarianceFieldsModelSelector, builder) }
}
export function selectFromOrderItemsByHourAggregateFields() {
  return new OrderItemsByHourAggregateFieldsModelSelector()
}

export const orderItemsByHourAggregateFieldsModelPrimitives = selectFromOrderItemsByHourAggregateFields().count
