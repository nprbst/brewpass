/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsByTodAvgFieldsModel, OrderItemsByTodAvgFieldsModelType } from "./OrderItemsByTodAvgFieldsModel"
import { OrderItemsByTodAvgFieldsModelSelector } from "./OrderItemsByTodAvgFieldsModel.base"
import { OrderItemsByTodMaxFieldsModel, OrderItemsByTodMaxFieldsModelType } from "./OrderItemsByTodMaxFieldsModel"
import { OrderItemsByTodMaxFieldsModelSelector } from "./OrderItemsByTodMaxFieldsModel.base"
import { OrderItemsByTodMinFieldsModel, OrderItemsByTodMinFieldsModelType } from "./OrderItemsByTodMinFieldsModel"
import { OrderItemsByTodMinFieldsModelSelector } from "./OrderItemsByTodMinFieldsModel.base"
import { OrderItemsByTodStddevFieldsModel, OrderItemsByTodStddevFieldsModelType } from "./OrderItemsByTodStddevFieldsModel"
import { OrderItemsByTodStddevFieldsModelSelector } from "./OrderItemsByTodStddevFieldsModel.base"
import { OrderItemsByTodStddevPopFieldsModel, OrderItemsByTodStddevPopFieldsModelType } from "./OrderItemsByTodStddevPopFieldsModel"
import { OrderItemsByTodStddevPopFieldsModelSelector } from "./OrderItemsByTodStddevPopFieldsModel.base"
import { OrderItemsByTodStddevSampFieldsModel, OrderItemsByTodStddevSampFieldsModelType } from "./OrderItemsByTodStddevSampFieldsModel"
import { OrderItemsByTodStddevSampFieldsModelSelector } from "./OrderItemsByTodStddevSampFieldsModel.base"
import { OrderItemsByTodSumFieldsModel, OrderItemsByTodSumFieldsModelType } from "./OrderItemsByTodSumFieldsModel"
import { OrderItemsByTodSumFieldsModelSelector } from "./OrderItemsByTodSumFieldsModel.base"
import { OrderItemsByTodVarPopFieldsModel, OrderItemsByTodVarPopFieldsModelType } from "./OrderItemsByTodVarPopFieldsModel"
import { OrderItemsByTodVarPopFieldsModelSelector } from "./OrderItemsByTodVarPopFieldsModel.base"
import { OrderItemsByTodVarSampFieldsModel, OrderItemsByTodVarSampFieldsModelType } from "./OrderItemsByTodVarSampFieldsModel"
import { OrderItemsByTodVarSampFieldsModelSelector } from "./OrderItemsByTodVarSampFieldsModel.base"
import { OrderItemsByTodVarianceFieldsModel, OrderItemsByTodVarianceFieldsModelType } from "./OrderItemsByTodVarianceFieldsModel"
import { OrderItemsByTodVarianceFieldsModelSelector } from "./OrderItemsByTodVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItemsByTodAggregateFieldsBase
 * auto generated base class for the model OrderItemsByTodAggregateFieldsModel.
 *
 * aggregate fields of "order_items_by_tod"
 */
export const OrderItemsByTodAggregateFieldsModelBase = ModelBase
  .named('OrderItemsByTodAggregateFields')
  .props({
    __typename: types.optional(types.literal("order_items_by_tod_aggregate_fields"), "order_items_by_tod_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsByTodAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | OrderItemsByTodAvgFieldsModelSelector | ((selector: OrderItemsByTodAvgFieldsModelSelector) => OrderItemsByTodAvgFieldsModelSelector)) { return this.__child(`avg`, OrderItemsByTodAvgFieldsModelSelector, builder) }
  max(builder?: string | OrderItemsByTodMaxFieldsModelSelector | ((selector: OrderItemsByTodMaxFieldsModelSelector) => OrderItemsByTodMaxFieldsModelSelector)) { return this.__child(`max`, OrderItemsByTodMaxFieldsModelSelector, builder) }
  min(builder?: string | OrderItemsByTodMinFieldsModelSelector | ((selector: OrderItemsByTodMinFieldsModelSelector) => OrderItemsByTodMinFieldsModelSelector)) { return this.__child(`min`, OrderItemsByTodMinFieldsModelSelector, builder) }
  stddev(builder?: string | OrderItemsByTodStddevFieldsModelSelector | ((selector: OrderItemsByTodStddevFieldsModelSelector) => OrderItemsByTodStddevFieldsModelSelector)) { return this.__child(`stddev`, OrderItemsByTodStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | OrderItemsByTodStddevPopFieldsModelSelector | ((selector: OrderItemsByTodStddevPopFieldsModelSelector) => OrderItemsByTodStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, OrderItemsByTodStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | OrderItemsByTodStddevSampFieldsModelSelector | ((selector: OrderItemsByTodStddevSampFieldsModelSelector) => OrderItemsByTodStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, OrderItemsByTodStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | OrderItemsByTodSumFieldsModelSelector | ((selector: OrderItemsByTodSumFieldsModelSelector) => OrderItemsByTodSumFieldsModelSelector)) { return this.__child(`sum`, OrderItemsByTodSumFieldsModelSelector, builder) }
  var_pop(builder?: string | OrderItemsByTodVarPopFieldsModelSelector | ((selector: OrderItemsByTodVarPopFieldsModelSelector) => OrderItemsByTodVarPopFieldsModelSelector)) { return this.__child(`var_pop`, OrderItemsByTodVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | OrderItemsByTodVarSampFieldsModelSelector | ((selector: OrderItemsByTodVarSampFieldsModelSelector) => OrderItemsByTodVarSampFieldsModelSelector)) { return this.__child(`var_samp`, OrderItemsByTodVarSampFieldsModelSelector, builder) }
  variance(builder?: string | OrderItemsByTodVarianceFieldsModelSelector | ((selector: OrderItemsByTodVarianceFieldsModelSelector) => OrderItemsByTodVarianceFieldsModelSelector)) { return this.__child(`variance`, OrderItemsByTodVarianceFieldsModelSelector, builder) }
}
export function selectFromOrderItemsByTodAggregateFields() {
  return new OrderItemsByTodAggregateFieldsModelSelector()
}

export const orderItemsByTodAggregateFieldsModelPrimitives = selectFromOrderItemsByTodAggregateFields().count
