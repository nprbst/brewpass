import { Instance } from "mobx-state-tree"
import { NearbyVenuesVarianceFieldsModelBase } from "./NearbyVenuesVarianceFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesVarianceFieldsModel */
export interface NearbyVenuesVarianceFieldsModelType extends Instance<typeof NearbyVenuesVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesVarianceFieldsModel */
export { selectFromNearbyVenuesVarianceFields, nearbyVenuesVarianceFieldsModelPrimitives, NearbyVenuesVarianceFieldsModelSelector } from "./NearbyVenuesVarianceFieldsModel.base"

/**
 * NearbyVenuesVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const NearbyVenuesVarianceFieldsModel = NearbyVenuesVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
