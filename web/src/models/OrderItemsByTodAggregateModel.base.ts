/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsByTodAggregateFieldsModel, OrderItemsByTodAggregateFieldsModelType } from "./OrderItemsByTodAggregateFieldsModel"
import { OrderItemsByTodAggregateFieldsModelSelector } from "./OrderItemsByTodAggregateFieldsModel.base"
import { OrderItemsByTodModel, OrderItemsByTodModelType } from "./OrderItemsByTodModel"
import { OrderItemsByTodModelSelector } from "./OrderItemsByTodModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItemsByTodAggregateBase
 * auto generated base class for the model OrderItemsByTodAggregateModel.
 *
 * aggregated selection of "order_items_by_tod"
 */
export const OrderItemsByTodAggregateModelBase = ModelBase
  .named('OrderItemsByTodAggregate')
  .props({
    __typename: types.optional(types.literal("order_items_by_tod_aggregate"), "order_items_by_tod_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => OrderItemsByTodAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => OrderItemsByTodModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsByTodAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | OrderItemsByTodAggregateFieldsModelSelector | ((selector: OrderItemsByTodAggregateFieldsModelSelector) => OrderItemsByTodAggregateFieldsModelSelector)) { return this.__child(`aggregate`, OrderItemsByTodAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | OrderItemsByTodModelSelector | ((selector: OrderItemsByTodModelSelector) => OrderItemsByTodModelSelector)) { return this.__child(`nodes`, OrderItemsByTodModelSelector, builder) }
}
export function selectFromOrderItemsByTodAggregate() {
  return new OrderItemsByTodAggregateModelSelector()
}

export const orderItemsByTodAggregateModelPrimitives = selectFromOrderItemsByTodAggregate()
