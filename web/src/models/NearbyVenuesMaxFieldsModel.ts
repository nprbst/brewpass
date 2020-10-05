import { Instance } from "mobx-state-tree"
import { NearbyVenuesMaxFieldsModelBase } from "./NearbyVenuesMaxFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesMaxFieldsModel */
export interface NearbyVenuesMaxFieldsModelType extends Instance<typeof NearbyVenuesMaxFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesMaxFieldsModel */
export { selectFromNearbyVenuesMaxFields, nearbyVenuesMaxFieldsModelPrimitives, NearbyVenuesMaxFieldsModelSelector } from "./NearbyVenuesMaxFieldsModel.base"

/**
 * NearbyVenuesMaxFieldsModel
 *
 * aggregate max on columns
 */
export const NearbyVenuesMaxFieldsModel = NearbyVenuesMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
