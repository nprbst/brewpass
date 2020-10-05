import { Instance } from "mobx-state-tree"
import { NearbyVenuesStddevSampFieldsModelBase } from "./NearbyVenuesStddevSampFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesStddevSampFieldsModel */
export interface NearbyVenuesStddevSampFieldsModelType extends Instance<typeof NearbyVenuesStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesStddevSampFieldsModel */
export { selectFromNearbyVenuesStddevSampFields, nearbyVenuesStddevSampFieldsModelPrimitives, NearbyVenuesStddevSampFieldsModelSelector } from "./NearbyVenuesStddevSampFieldsModel.base"

/**
 * NearbyVenuesStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const NearbyVenuesStddevSampFieldsModel = NearbyVenuesStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
