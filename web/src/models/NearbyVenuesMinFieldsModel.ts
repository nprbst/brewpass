import { Instance } from "mobx-state-tree"
import { NearbyVenuesMinFieldsModelBase } from "./NearbyVenuesMinFieldsModel.base"

/* The TypeScript type of an instance of NearbyVenuesMinFieldsModel */
export interface NearbyVenuesMinFieldsModelType extends Instance<typeof NearbyVenuesMinFieldsModel.Type> {}

/* A graphql query fragment builders for NearbyVenuesMinFieldsModel */
export { selectFromNearbyVenuesMinFields, nearbyVenuesMinFieldsModelPrimitives, NearbyVenuesMinFieldsModelSelector } from "./NearbyVenuesMinFieldsModel.base"

/**
 * NearbyVenuesMinFieldsModel
 *
 * aggregate min on columns
 */
export const NearbyVenuesMinFieldsModel = NearbyVenuesMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
