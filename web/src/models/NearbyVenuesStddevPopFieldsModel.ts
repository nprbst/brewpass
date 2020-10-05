import { Instance } from "mobx-state-tree"
import { NearbyVenuesStddevPopFieldsModelBase } from "./NearbyVenuesStddevPopFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesStddevPopFieldsModel */
export interface NearbyVenuesStddevPopFieldsModelType extends Instance<typeof NearbyVenuesStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesStddevPopFieldsModel */
export { selectFromNearbyVenuesStddevPopFields, nearbyVenuesStddevPopFieldsModelPrimitives, NearbyVenuesStddevPopFieldsModelSelector } from "./NearbyVenuesStddevPopFieldsModel.base"

/**
 * NearbyVenuesStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const NearbyVenuesStddevPopFieldsModel = NearbyVenuesStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
