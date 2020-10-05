/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrdersAvgFieldsModel, OrdersAvgFieldsModelType } from "./OrdersAvgFieldsModel"
import { OrdersAvgFieldsModelSelector } from "./OrdersAvgFieldsModel.base"
import { OrdersMaxFieldsModel, OrdersMaxFieldsModelType } from "./OrdersMaxFieldsModel"
import { OrdersMaxFieldsModelSelector } from "./OrdersMaxFieldsModel.base"
import { OrdersMinFieldsModel, OrdersMinFieldsModelType } from "./OrdersMinFieldsModel"
import { OrdersMinFieldsModelSelector } from "./OrdersMinFieldsModel.base"
import { OrdersStddevFieldsModel, OrdersStddevFieldsModelType } from "./OrdersStddevFieldsModel"
import { OrdersStddevFieldsModelSelector } from "./OrdersStddevFieldsModel.base"
import { OrdersStddevPopFieldsModel, OrdersStddevPopFieldsModelType } from "./OrdersStddevPopFieldsModel"
import { OrdersStddevPopFieldsModelSelector } from "./OrdersStddevPopFieldsModel.base"
import { OrdersStddevSampFieldsModel, OrdersStddevSampFieldsModelType } from "./OrdersStddevSampFieldsModel"
import { OrdersStddevSampFieldsModelSelector } from "./OrdersStddevSampFieldsModel.base"
import { OrdersSumFieldsModel, OrdersSumFieldsModelType } from "./OrdersSumFieldsModel"
import { OrdersSumFieldsModelSelector } from "./OrdersSumFieldsModel.base"
import { OrdersVarPopFieldsModel, OrdersVarPopFieldsModelType } from "./OrdersVarPopFieldsModel"
import { OrdersVarPopFieldsModelSelector } from "./OrdersVarPopFieldsModel.base"
import { OrdersVarSampFieldsModel, OrdersVarSampFieldsModelType } from "./OrdersVarSampFieldsModel"
import { OrdersVarSampFieldsModelSelector } from "./OrdersVarSampFieldsModel.base"
import { OrdersVarianceFieldsModel, OrdersVarianceFieldsModelType } from "./OrdersVarianceFieldsModel"
import { OrdersVarianceFieldsModelSelector } from "./OrdersVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * OrdersAggregateFieldsBase
 * auto generated base class for the model OrdersAggregateFieldsModel.
 *
 * aggregate fields of "orders"
 */
export const OrdersAggregateFieldsModelBase = ModelBase
  .named('OrdersAggregateFields')
  .props({
    __typename: types.optional(types.literal("orders_aggregate_fields"), "orders_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => OrdersAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => OrdersMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => OrdersMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => OrdersStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => OrdersStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => OrdersStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => OrdersSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => OrdersVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => OrdersVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => OrdersVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | OrdersAvgFieldsModelSelector | ((selector: OrdersAvgFieldsModelSelector) => OrdersAvgFieldsModelSelector)) { return this.__child(`avg`, OrdersAvgFieldsModelSelector, builder) }
  max(builder?: string | OrdersMaxFieldsModelSelector | ((selector: OrdersMaxFieldsModelSelector) => OrdersMaxFieldsModelSelector)) { return this.__child(`max`, OrdersMaxFieldsModelSelector, builder) }
  min(builder?: string | OrdersMinFieldsModelSelector | ((selector: OrdersMinFieldsModelSelector) => OrdersMinFieldsModelSelector)) { return this.__child(`min`, OrdersMinFieldsModelSelector, builder) }
  stddev(builder?: string | OrdersStddevFieldsModelSelector | ((selector: OrdersStddevFieldsModelSelector) => OrdersStddevFieldsModelSelector)) { return this.__child(`stddev`, OrdersStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | OrdersStddevPopFieldsModelSelector | ((selector: OrdersStddevPopFieldsModelSelector) => OrdersStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, OrdersStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | OrdersStddevSampFieldsModelSelector | ((selector: OrdersStddevSampFieldsModelSelector) => OrdersStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, OrdersStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | OrdersSumFieldsModelSelector | ((selector: OrdersSumFieldsModelSelector) => OrdersSumFieldsModelSelector)) { return this.__child(`sum`, OrdersSumFieldsModelSelector, builder) }
  var_pop(builder?: string | OrdersVarPopFieldsModelSelector | ((selector: OrdersVarPopFieldsModelSelector) => OrdersVarPopFieldsModelSelector)) { return this.__child(`var_pop`, OrdersVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | OrdersVarSampFieldsModelSelector | ((selector: OrdersVarSampFieldsModelSelector) => OrdersVarSampFieldsModelSelector)) { return this.__child(`var_samp`, OrdersVarSampFieldsModelSelector, builder) }
  variance(builder?: string | OrdersVarianceFieldsModelSelector | ((selector: OrdersVarianceFieldsModelSelector) => OrdersVarianceFieldsModelSelector)) { return this.__child(`variance`, OrdersVarianceFieldsModelSelector, builder) }
}
export function selectFromOrdersAggregateFields() {
  return new OrdersAggregateFieldsModelSelector()
}

export const ordersAggregateFieldsModelPrimitives = selectFromOrdersAggregateFields().count
