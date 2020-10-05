import { Instance } from "mobx-state-tree"
import { NearbyVenuesVarPopFieldsModelBase } from "./NearbyVenuesVarPopFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesVarPopFieldsModel */
export interface NearbyVenuesVarPopFieldsModelType extends Instance<typeof NearbyVenuesVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesVarPopFieldsModel */
export { selectFromNearbyVenuesVarPopFields, nearbyVenuesVarPopFieldsModelPrimitives, NearbyVenuesVarPopFieldsModelSelector } from "./NearbyVenuesVarPopFieldsModel.base"

/**
 * NearbyVenuesVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const NearbyVenuesVarPopFieldsModel = NearbyVenuesVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
