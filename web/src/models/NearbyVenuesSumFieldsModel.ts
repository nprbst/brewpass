import { Instance } from "mobx-state-tree"
import { NearbyVenuesSumFieldsModelBase } from "./NearbyVenuesSumFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesSumFieldsModel */
export interface NearbyVenuesSumFieldsModelType extends Instance<typeof NearbyVenuesSumFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesSumFieldsModel */
export { selectFromNearbyVenuesSumFields, nearbyVenuesSumFieldsModelPrimitives, NearbyVenuesSumFieldsModelSelector } from "./NearbyVenuesSumFieldsModel.base"

/**
 * NearbyVenuesSumFieldsModel
 *
 * aggregate sum on columns
 */
export const NearbyVenuesSumFieldsModel = NearbyVenuesSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
