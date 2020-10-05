/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItems10MinsAggregateFieldsModel, OrderItems10MinsAggregateFieldsModelType } from "./OrderItems10MinsAggregateFieldsModel"
import { OrderItems10MinsAggregateFieldsModelSelector } from "./OrderItems10MinsAggregateFieldsModel.base"
import { OrderItems10MinsModel, OrderItems10MinsModelType } from "./OrderItems10MinsModel"
import { OrderItems10MinsModelSelector } from "./OrderItems10MinsModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItems10MinsAggregateBase
 * auto generated base class for the model OrderItems10MinsAggregateModel.
 *
 * aggregated selection of "order_items_10_mins"
 */
export const OrderItems10MinsAggregateModelBase = ModelBase
  .named('OrderItems10MinsAggregate')
  .props({
    __typename: types.optional(types.literal("order_items_10_mins_aggregate"), "order_items_10_mins_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => OrderItems10MinsAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => OrderItems10MinsModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItems10MinsAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | OrderItems10MinsAggregateFieldsModelSelector | ((selector: OrderItems10MinsAggregateFieldsModelSelector) => OrderItems10MinsAggregateFieldsModelSelector)) { return this.__child(`aggregate`, OrderItems10MinsAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | OrderItems10MinsModelSelector | ((selector: OrderItems10MinsModelSelector) => OrderItems10MinsModelSelector)) { return this.__child(`nodes`, OrderItems10MinsModelSelector, builder) }
}
export function selectFromOrderItems10MinsAggregate() {
  return new OrderItems10MinsAggregateModelSelector()
}

export const orderItems10MinsAggregateModelPrimitives = selectFromOrderItems10MinsAggregate()
