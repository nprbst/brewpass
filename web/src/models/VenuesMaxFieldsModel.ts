import { Instance } from "mobx-state-tree"
import { VenuesMaxFieldsModelBase } from "./VenuesMaxFieldsModel.base"

/* The TypeScript type of an instance of VenuesMaxFieldsModel */
export interface VenuesMaxFieldsModelType extends Instance<typeof VenuesMaxFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesMaxFieldsModel */
export { selectFromVenuesMaxFields, venuesMaxFieldsModelPrimitives, VenuesMaxFieldsModelSelector } from "./VenuesMaxFieldsModel.base"

/**
 * VenuesMaxFieldsModel
 *
 * aggregate max on columns
 */
export const VenuesMaxFieldsModel = VenuesMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
