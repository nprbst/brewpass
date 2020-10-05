/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsAvgFieldsModel, OrderItemsAvgFieldsModelType } from "./OrderItemsAvgFieldsModel"
import { OrderItemsAvgFieldsModelSelector } from "./OrderItemsAvgFieldsModel.base"
import { OrderItemsMaxFieldsModel, OrderItemsMaxFieldsModelType } from "./OrderItemsMaxFieldsModel"
import { OrderItemsMaxFieldsModelSelector } from "./OrderItemsMaxFieldsModel.base"
import { OrderItemsMinFieldsModel, OrderItemsMinFieldsModelType } from "./OrderItemsMinFieldsModel"
import { OrderItemsMinFieldsModelSelector } from "./OrderItemsMinFieldsModel.base"
import { OrderItemsStddevFieldsModel, OrderItemsStddevFieldsModelType } from "./OrderItemsStddevFieldsModel"
import { OrderItemsStddevFieldsModelSelector } from "./OrderItemsStddevFieldsModel.base"
import { OrderItemsStddevPopFieldsModel, OrderItemsStddevPopFieldsModelType } from "./OrderItemsStddevPopFieldsModel"
import { OrderItemsStddevPopFieldsModelSelector } from "./OrderItemsStddevPopFieldsModel.base"
import { OrderItemsStddevSampFieldsModel, OrderItemsStddevSampFieldsModelType } from "./OrderItemsStddevSampFieldsModel"
import { OrderItemsStddevSampFieldsModelSelector } from "./OrderItemsStddevSampFieldsModel.base"
import { OrderItemsSumFieldsModel, OrderItemsSumFieldsModelType } from "./OrderItemsSumFieldsModel"
import { OrderItemsSumFieldsModelSelector } from "./OrderItemsSumFieldsModel.base"
import { OrderItemsVarPopFieldsModel, OrderItemsVarPopFieldsModelType } from "./OrderItemsVarPopFieldsModel"
import { OrderItemsVarPopFieldsModelSelector } from "./OrderItemsVarPopFieldsModel.base"
import { OrderItemsVarSampFieldsModel, OrderItemsVarSampFieldsModelType } from "./OrderItemsVarSampFieldsModel"
import { OrderItemsVarSampFieldsModelSelector } from "./OrderItemsVarSampFieldsModel.base"
import { OrderItemsVarianceFieldsModel, OrderItemsVarianceFieldsModelType } from "./OrderItemsVarianceFieldsModel"
import { OrderItemsVarianceFieldsModelSelector } from "./OrderItemsVarianceFieldsModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItemsAggregateFieldsBase
 * auto generated base class for the model OrderItemsAggregateFieldsModel.
 *
 * aggregate fields of "order_items"
 */
export const OrderItemsAggregateFieldsModelBase = ModelBase
  .named('OrderItemsAggregateFields')
  .props({
    __typename: types.optional(types.literal("order_items_aggregate_fields"), "order_items_aggregate_fields"),
    avg: types.union(types.undefined, types.null, types.late((): any => OrderItemsAvgFieldsModel)),
    count: types.union(types.undefined, types.null, types.integer),
    max: types.union(types.undefined, types.null, types.late((): any => OrderItemsMaxFieldsModel)),
    min: types.union(types.undefined, types.null, types.late((): any => OrderItemsMinFieldsModel)),
    stddev: types.union(types.undefined, types.null, types.late((): any => OrderItemsStddevFieldsModel)),
    stddev_pop: types.union(types.undefined, types.null, types.late((): any => OrderItemsStddevPopFieldsModel)),
    stddev_samp: types.union(types.undefined, types.null, types.late((): any => OrderItemsStddevSampFieldsModel)),
    sum: types.union(types.undefined, types.null, types.late((): any => OrderItemsSumFieldsModel)),
    var_pop: types.union(types.undefined, types.null, types.late((): any => OrderItemsVarPopFieldsModel)),
    var_samp: types.union(types.undefined, types.null, types.late((): any => OrderItemsVarSampFieldsModel)),
    variance: types.union(types.undefined, types.null, types.late((): any => OrderItemsVarianceFieldsModel)),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsAggregateFieldsModelSelector extends QueryBuilder {
  get count() { return this.__attr(`count`) }
  avg(builder?: string | OrderItemsAvgFieldsModelSelector | ((selector: OrderItemsAvgFieldsModelSelector) => OrderItemsAvgFieldsModelSelector)) { return this.__child(`avg`, OrderItemsAvgFieldsModelSelector, builder) }
  max(builder?: string | OrderItemsMaxFieldsModelSelector | ((selector: OrderItemsMaxFieldsModelSelector) => OrderItemsMaxFieldsModelSelector)) { return this.__child(`max`, OrderItemsMaxFieldsModelSelector, builder) }
  min(builder?: string | OrderItemsMinFieldsModelSelector | ((selector: OrderItemsMinFieldsModelSelector) => OrderItemsMinFieldsModelSelector)) { return this.__child(`min`, OrderItemsMinFieldsModelSelector, builder) }
  stddev(builder?: string | OrderItemsStddevFieldsModelSelector | ((selector: OrderItemsStddevFieldsModelSelector) => OrderItemsStddevFieldsModelSelector)) { return this.__child(`stddev`, OrderItemsStddevFieldsModelSelector, builder) }
  stddev_pop(builder?: string | OrderItemsStddevPopFieldsModelSelector | ((selector: OrderItemsStddevPopFieldsModelSelector) => OrderItemsStddevPopFieldsModelSelector)) { return this.__child(`stddev_pop`, OrderItemsStddevPopFieldsModelSelector, builder) }
  stddev_samp(builder?: string | OrderItemsStddevSampFieldsModelSelector | ((selector: OrderItemsStddevSampFieldsModelSelector) => OrderItemsStddevSampFieldsModelSelector)) { return this.__child(`stddev_samp`, OrderItemsStddevSampFieldsModelSelector, builder) }
  sum(builder?: string | OrderItemsSumFieldsModelSelector | ((selector: OrderItemsSumFieldsModelSelector) => OrderItemsSumFieldsModelSelector)) { return this.__child(`sum`, OrderItemsSumFieldsModelSelector, builder) }
  var_pop(builder?: string | OrderItemsVarPopFieldsModelSelector | ((selector: OrderItemsVarPopFieldsModelSelector) => OrderItemsVarPopFieldsModelSelector)) { return this.__child(`var_pop`, OrderItemsVarPopFieldsModelSelector, builder) }
  var_samp(builder?: string | OrderItemsVarSampFieldsModelSelector | ((selector: OrderItemsVarSampFieldsModelSelector) => OrderItemsVarSampFieldsModelSelector)) { return this.__child(`var_samp`, OrderItemsVarSampFieldsModelSelector, builder) }
  variance(builder?: string | OrderItemsVarianceFieldsModelSelector | ((selector: OrderItemsVarianceFieldsModelSelector) => OrderItemsVarianceFieldsModelSelector)) { return this.__child(`variance`, OrderItemsVarianceFieldsModelSelector, builder) }
}
export function selectFromOrderItemsAggregateFields() {
  return new OrderItemsAggregateFieldsModelSelector()
}

export const orderItemsAggregateFieldsModelPrimitives = selectFromOrderItemsAggregateFields().count
