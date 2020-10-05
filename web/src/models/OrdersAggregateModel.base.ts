/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrdersAggregateFieldsModel, OrdersAggregateFieldsModelType } from "./OrdersAggregateFieldsModel"
import { OrdersAggregateFieldsModelSelector } from "./OrdersAggregateFieldsModel.base"
import { OrdersModel, OrdersModelType } from "./OrdersModel"
import { OrdersModelSelector } from "./OrdersModel.base"
import { RootStoreType } from "./index"


/**
 * OrdersAggregateBase
 * auto generated base class for the model OrdersAggregateModel.
 *
 * aggregated selection of "orders"
 */
export const OrdersAggregateModelBase = ModelBase
  .named('OrdersAggregate')
  .props({
    __typename: types.optional(types.literal("orders_aggregate"), "orders_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => OrdersAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => OrdersModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class OrdersAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | OrdersAggregateFieldsModelSelector | ((selector: OrdersAggregateFieldsModelSelector) => OrdersAggregateFieldsModelSelector)) { return this.__child(`aggregate`, OrdersAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | OrdersModelSelector | ((selector: OrdersModelSelector) => OrdersModelSelector)) { return this.__child(`nodes`, OrdersModelSelector, builder) }
}
export function selectFromOrdersAggregate() {
  return new OrdersAggregateModelSelector()
}

export const ordersAggregateModelPrimitives = selectFromOrdersAggregate()
