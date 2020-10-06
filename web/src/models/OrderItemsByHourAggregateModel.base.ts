/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { OrderItemsByHourAggregateFieldsModel, OrderItemsByHourAggregateFieldsModelType } from "./OrderItemsByHourAggregateFieldsModel"
import { OrderItemsByHourAggregateFieldsModelSelector } from "./OrderItemsByHourAggregateFieldsModel.base"
import { OrderItemsByHourModel, OrderItemsByHourModelType } from "./OrderItemsByHourModel"
import { OrderItemsByHourModelSelector } from "./OrderItemsByHourModel.base"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  nodes: IObservableArray<OrderItemsByHourModelType>;
}

/**
 * OrderItemsByHourAggregateBase
 * auto generated base class for the model OrderItemsByHourAggregateModel.
 *
 * aggregated selection of "order_items_by_hour"
 */
export const OrderItemsByHourAggregateModelBase = withTypedRefs<Refs>()(ModelBase
  .named('OrderItemsByHourAggregate')
  .props({
    __typename: types.optional(types.literal("order_items_by_hour_aggregate"), "order_items_by_hour_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => OrderItemsByHourAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => OrderItemsByHourModel)))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class OrderItemsByHourAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | OrderItemsByHourAggregateFieldsModelSelector | ((selector: OrderItemsByHourAggregateFieldsModelSelector) => OrderItemsByHourAggregateFieldsModelSelector)) { return this.__child(`aggregate`, OrderItemsByHourAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | OrderItemsByHourModelSelector | ((selector: OrderItemsByHourModelSelector) => OrderItemsByHourModelSelector)) { return this.__child(`nodes`, OrderItemsByHourModelSelector, builder) }
}
export function selectFromOrderItemsByHourAggregate() {
  return new OrderItemsByHourAggregateModelSelector()
}

export const orderItemsByHourAggregateModelPrimitives = selectFromOrderItemsByHourAggregate()
