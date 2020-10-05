import { Instance } from "mobx-state-tree"
import { NearbyVenuesMutationResponseModelBase } from "./NearbyVenuesMutationResponseModel.base"

/* The TypeScript type of an instance of NearbyVenuesMutationResponseModel */
export interface NearbyVenuesMutationResponseModelType extends Instance<typeof NearbyVenuesMutationResponseModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesMutationResponseModel */
export { selectFromNearbyVenuesMutationResponse, nearbyVenuesMutationResponseModelPrimitives, NearbyVenuesMutationResponseModelSelector } from "./NearbyVenuesMutationResponseModel.base"

/**
 * NearbyVenuesMutationResponseModel
 *
 * response of any mutation on the table "nearby_venues"
 */
export const NearbyVenuesMutationResponseModel = NearbyVenuesMutationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
