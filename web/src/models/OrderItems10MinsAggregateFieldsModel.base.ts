/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItems10MinsAvgFieldsModel, OrderItems10MinsAvgFieldsModelType } from "./OrderItems10MinsAvgFieldsModel"
import { OrderItems10MinsAvgFieldsModelSelector } from "./OrderItems10MinsAvgFieldsModel.base"
import { OrderItems10MinsMaxFieldsModel, OrderItems10MinsMaxFieldsModelType } from "./OrderItems10MinsMaxFieldsModel"
import { OrderItems10MinsMaxFieldsModelSelector } from "./OrderItems10MinsMaxFieldsModel.base"
import { OrderItems10MinsMinFieldsModel, OrderItems10MinsMinFieldsModelType } from "./OrderItems10MinsMinFieldsModel"
import { OrderItems10MinsMinFieldsModelSelector } from "./OrderItems10MinsMinFieldsModel.base"
import { OrderItems10MinsStddevFieldsModel, OrderItems10MinsStddevFieldsModelType } from "./OrderItems10MinsStddevFieldsModel"
import { OrderItems10MinsStddevFieldsModelSelector } from "./OrderItems10MinsStddevFieldsModel.base"
import { OrderItems10MinsStddevPopFieldsModel, OrderItems10MinsStddevPopFieldsModelType } from "./OrderItems10MinsStddevPopFieldsModel"
import { OrderItems10MinsStddevPopFieldsModelSelector } from "./OrderItems10MinsStddevPopFieldsModel.base"
import { OrderItems10MinsStddevSampFieldsModel, OrderItems10MinsStddevSampFieldsModelType } from "./OrderItems10MinsStddevSampFieldsModel"
import { OrderItems10MinsStddevSampFieldsModelSelector } from "./OrderItems10MinsStddevSampFieldsModel.base"
import { OrderItems10MinsSumFieldsModel, OrderItems10MinsSumFieldsModelType } from "./OrderItems10MinsSumFieldsModel"
import { OrderItems10MinsSumFieldsModelSelector } from "./OrderItems10MinsSumFieldsModel.base"
import { OrderItems10MinsVarPopFieldsModel, OrderItems10MinsVarPopFieldsModelType } from "./OrderItems10MinsVarPopFieldsModel"
import { OrderItems10MinsVarPopFieldsModelSelector } from "./OrderItems10MinsVarPopFieldsModel.base"
import { OrderItems10MinsVarSampFieldsModel, OrderItems10MinsVarSampFieldsModelType } from "./OrderItems10MinsVarSampFieldsModel"
import { OrderItems10MinsVarSampFieldsModelSelector } from "./OrderItems10MinsVarSampFieldsModel.base"
import { OrderItems10MinsVarianceFieldsModel, OrderItems10MinsVarianceFieldsModelType } from "./OrderItems10MinsVarianceFieldsModel"
import { OrderItems10MinsVarianceFieldsModelSelector } from "./OrderItems10MinsVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsAggregateFieldsBase
 * auto generated base class for the model OrderItems10MinsAggregateFieldsModel.
 *
 * aggregate fields of "order_items_10_mins"
 */
export const OrderItems10MinsAggregateFieldsModelBase = ModelBase
  .named('OrderItems10MinsAggregateFields')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_aggregate_fields"), "order_items_10_mins_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | OrderItems10MinsAvgFieldsModelSelector | ((selector: OrderItems10MinsAvgFieldsModelSelector) => OrderItems10MinsAvgFieldsModelSelector)) { return this.__child(`avg`, OrderItems10MinsAvgFieldsModelSelector, builder) }
  max(builder?: string | OrderItems10MinsMaxFieldsModelSelector | ((selector: OrderItems10MinsMaxFieldsModelSelector) => OrderItems10MinsMaxFieldsModelSelector)) { return this.__child(`max`, OrderItems10MinsMaxFieldsModelSelector, builder) }
  min(builder?: string | OrderItems10MinsMinFieldsModelSelector | ((selector: OrderItems10MinsMinFieldsModelSelector) => OrderItems10MinsMinFieldsModelSelector)) { return this.__child(`min`, OrderItems10MinsMinFieldsModelSelector, builder) }
  stddev(builder?: string | OrderItems10MinsStddevFieldsModelSelector | ((selector: OrderItems10MinsStddevFieldsModelSelector) => OrderItems10MinsStddevFieldsModelSelector)) { return this.__child(`stddev`, OrderItems10MinsStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | OrderItems10MinsStddevPopFieldsModelSelector | ((selector: OrderItems10MinsStddevPopFieldsModelSelector) => OrderItems10MinsStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, OrderItems10MinsStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | OrderItems10MinsStddevSampFieldsModelSelector | ((selector: OrderItems10MinsStddevSampFieldsModelSelector) => OrderItems10MinsStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, OrderItems10MinsStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | OrderItems10MinsSumFieldsModelSelector | ((selector: OrderItems10MinsSumFieldsModelSelector) => OrderItems10MinsSumFieldsModelSelector)) { return this.__child(`sum`, OrderItems10MinsSumFieldsModelSelector, builder) }
  var_pop(builder?: string | OrderItems10MinsVarPopFieldsModelSelector | ((selector: OrderItems10MinsVarPopFieldsModelSelector) => OrderItems10MinsVarPopFieldsModelSelector)) { return this.__child(`var_pop`, OrderItems10MinsVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | OrderItems10MinsVarSampFieldsModelSelector | ((selector: OrderItems10MinsVarSampFieldsModelSelector) => OrderItems10MinsVarSampFieldsModelSelector)) { return this.__child(`var_samp`, OrderItems10MinsVarSampFieldsModelSelector, builder) }
  variance(builder?: string | OrderItems10MinsVarianceFieldsModelSelector | ((selector: OrderItems10MinsVarianceFieldsModelSelector) => OrderItems10MinsVarianceFieldsModelSelector)) { return this.__child(`variance`, OrderItems10MinsVarianceFieldsModelSelector, builder) }
}
export function selectFromOrderItems10MinsAggregateFields() {
  return new OrderItems10MinsAggregateFieldsModelSelector()
}

export const orderItems10MinsAggregateFieldsModelPrimitives = selectFromOrderItems10MinsAggregateFields().count
