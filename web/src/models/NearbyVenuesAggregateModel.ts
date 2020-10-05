import { Instance } from "mobx-state-tree"
import { NearbyVenuesAggregateModelBase } from "./NearbyVenuesAggregateModel.base"

/* The TypeScript type of an instance of NearbyVenuesAggregateModel */
export interface NearbyVenuesAggregateModelType extends Instance<typeof NearbyVenuesAggregateModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesAggregateModel */
export { selectFromNearbyVenuesAggregate, nearbyVenuesAggregateModelPrimitives, NearbyVenuesAggregateModelSelector } from "./NearbyVenuesAggregateModel.base"

/**
 * NearbyVenuesAggregateModel
 *
 * aggregated selection of "nearby_venues"
 */
export const NearbyVenuesAggregateModel = NearbyVenuesAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
