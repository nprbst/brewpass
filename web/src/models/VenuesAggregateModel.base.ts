/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { types } from "mobx-state-tree"
import { QueryBuilder } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { VenuesAggregateFieldsModel, VenuesAggregateFieldsModelType } from "./VenuesAggregateFieldsModel"
import { VenuesAggregateFieldsModelSelector } from "./VenuesAggregateFieldsModel.base"
import { VenuesModel, VenuesModelType } from "./VenuesModel"
import { VenuesModelSelector } from "./VenuesModel.base"
import { RootStoreType } from "./index"


/**
 * VenuesAggregateBase
 * auto generated base class for the model VenuesAggregateModel.
 *
 * aggregated selection of "venues"
 */
export const VenuesAggregateModelBase = ModelBase
  .named('VenuesAggregate')
  .props({
    __typename: types.optional(types.literal("venues_aggregate"), "venues_aggregate"),
    aggregate: types.union(types.undefined, types.null, types.late((): any => VenuesAggregateFieldsModel)),
    nodes: types.union(types.undefined, types.array(types.late((): any => VenuesModel))),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  }))

export class VenuesAggregateModelSelector extends QueryBuilder {
  aggregate(builder?: string | VenuesAggregateFieldsModelSelector | ((selector: VenuesAggregateFieldsModelSelector) => VenuesAggregateFieldsModelSelector)) { return this.__child(`aggregate`, VenuesAggregateFieldsModelSelector, builder) }
  nodes(builder?: string | VenuesModelSelector | ((selector: VenuesModelSelector) => VenuesModelSelector)) { return this.__child(`nodes`, VenuesModelSelector, builder) }
}
export function selectFromVenuesAggregate() {
  return new VenuesAggregateModelSelector()
}

export const venuesAggregateModelPrimitives = selectFromVenuesAggregate()
