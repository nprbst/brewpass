/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsAggregateFieldsModel, OrderItemsAggregateFieldsModelType } from "./OrderItemsAggregateFieldsModel"
import { OrderItemsAggregateFieldsModelSelector } from "./OrderItemsAggregateFieldsModel.base"
import { OrderItemsModel, OrderItemsModelType } from "./OrderItemsModel"
import { OrderItemsModelSelector } from "./OrderItemsModel.base"
import { RootStoreType } from "./index"


/**
 * OrderItemsAggregateBase
 * auto generated base class for the model OrderItemsAggregateModel.
 *
 * aggregated selection of "order_items"
 */
export const OrderItemsAggregateModelBase = ModelBase
  .named('OrderItemsAggregate')
  .props({
    __typename: types.optional(types.literal("order_items_aggregate"), "order_items_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => OrderItemsAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => OrderItemsModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrderItemsAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | OrderItemsAggregateFieldsModelSelector | ((selector: OrderItemsAggregateFieldsModelSelector) => OrderItemsAggregateFieldsModelSelector)) { return this.__child(`aggregate`, OrderItemsAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | OrderItemsModelSelector | ((selector: OrderItemsModelSelector) => OrderItemsModelSelector)) { return this.__child(`nodes`, OrderItemsModelSelector, builder) }
}
export function selectFromOrderItemsAggregate() {
  return new OrderItemsAggregateModelSelector()
}

export const orderItemsAggregateModelPrimitives = selectFromOrderItemsAggregate()
