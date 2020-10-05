import { Instance } from "mobx-state-tree"
import { VenuesAvgFieldsModelBase } from "./VenuesAvgFieldsModel.base"

/* The TypeScript type of an instance of VenuesAvgFieldsModel */
export interface VenuesAvgFieldsModelType extends Instance<typeof VenuesAvgFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesAvgFieldsModel */
export { selectFromVenuesAvgFields, venuesAvgFieldsModelPrimitives, VenuesAvgFieldsModelSelector } from "./VenuesAvgFieldsModel.base"

/**
 * VenuesAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const VenuesAvgFieldsModel = VenuesAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
