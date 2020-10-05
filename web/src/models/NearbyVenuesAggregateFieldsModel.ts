import { Instance } from "mobx-state-tree"
import { NearbyVenuesAggregateFieldsModelBase } from "./NearbyVenuesAggregateFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesAggregateFieldsModel */
export interface NearbyVenuesAggregateFieldsModelType extends Instance<typeof NearbyVenuesAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesAggregateFieldsModel */
export { selectFromNearbyVenuesAggregateFields, nearbyVenuesAggregateFieldsModelPrimitives, NearbyVenuesAggregateFieldsModelSelector } from "./NearbyVenuesAggregateFieldsModel.base"

/**
 * NearbyVenuesAggregateFieldsModel
 *
 * aggregate fields of "nearby_venues"
 */
export const NearbyVenuesAggregateFieldsModel = NearbyVenuesAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
