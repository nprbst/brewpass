import { Instance } from "mobx-state-tree"
import { VenuesMutationResponseModelBase } from "./VenuesMutationResponseModel.base"

/* The TypeScript type of an instance of VenuesMutationResponseModel */
export interface VenuesMutationResponseModelType extends Instance<typeof VenuesMutationResponseModel.Type> {}

/* A graphql query fragment builders for VenuesMutationResponseModel */
export { selectFromVenuesMutationResponse, venuesMutationResponseModelPrimitives, VenuesMutationResponseModelSelector } from "./VenuesMutationResponseModel.base"

/**
 * VenuesMutationResponseModel
 *
 * response of any mutation on the table "venues"
 */
export const VenuesMutationResponseModel = VenuesMutationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
