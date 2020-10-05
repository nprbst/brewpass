import { Instance } from "mobx-state-tree"
import { NearbyVenuesAvgFieldsModelBase } from "./NearbyVenuesAvgFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesAvgFieldsModel */
export interface NearbyVenuesAvgFieldsModelType extends Instance<typeof NearbyVenuesAvgFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesAvgFieldsModel */
export { selectFromNearbyVenuesAvgFields, nearbyVenuesAvgFieldsModelPrimitives, NearbyVenuesAvgFieldsModelSelector } from "./NearbyVenuesAvgFieldsModel.base"

/**
 * NearbyVenuesAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const NearbyVenuesAvgFieldsModel = NearbyVenuesAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
