import { Instance } from "mobx-state-tree"
import { NearbyVenuesModelBase } from "./NearbyVenuesModel.base"

/* The TypeScript type of an instance of NearbyVenuesModel */
export interface NearbyVenuesModelType extends Instance<typeof NearbyVenuesModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesModel */
export { selectFromNearbyVenues, nearbyVenuesModelPrimitives, NearbyVenuesModelSelector } from "./NearbyVenuesModel.base"

/**
 * NearbyVenuesModel
 *
 * SETOF table for nearest venues   columns and relationships of "nearby_venues"
 */
export const NearbyVenuesModel = NearbyVenuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
