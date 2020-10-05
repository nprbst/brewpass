import { Instance } from "mobx-state-tree"
import { NearbyVenuesStddevFieldsModelBase } from "./NearbyVenuesStddevFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesStddevFieldsModel */
export interface NearbyVenuesStddevFieldsModelType extends Instance<typeof NearbyVenuesStddevFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesStddevFieldsModel */
export { selectFromNearbyVenuesStddevFields, nearbyVenuesStddevFieldsModelPrimitives, NearbyVenuesStddevFieldsModelSelector } from "./NearbyVenuesStddevFieldsModel.base"

/**
 * NearbyVenuesStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const NearbyVenuesStddevFieldsModel = NearbyVenuesStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
