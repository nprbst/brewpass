import { Instance } from "mobx-state-tree"
import { NearbyVenuesVarSampFieldsModelBase } from "./NearbyVenuesVarSampFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesVarSampFieldsModel */
export interface NearbyVenuesVarSampFieldsModelType extends Instance<typeof NearbyVenuesVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesVarSampFieldsModel */
export { selectFromNearbyVenuesVarSampFields, nearbyVenuesVarSampFieldsModelPrimitives, NearbyVenuesVarSampFieldsModelSelector } from "./NearbyVenuesVarSampFieldsModel.base"

/**
 * NearbyVenuesVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const NearbyVenuesVarSampFieldsModel = NearbyVenuesVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
