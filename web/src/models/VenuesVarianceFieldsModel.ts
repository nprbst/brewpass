import { Instance } from "mobx-state-tree"
import { VenuesVarianceFieldsModelBase } from "./VenuesVarianceFieldsModel.base"

/* The TypeScript type of an instance of VenuesVarianceFieldsModel */
export interface VenuesVarianceFieldsModelType extends Instance<typeof VenuesVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesVarianceFieldsModel */
export { selectFromVenuesVarianceFields, venuesVarianceFieldsModelPrimitives, VenuesVarianceFieldsModelSelector } from "./VenuesVarianceFieldsModel.base"

/**
 * VenuesVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const VenuesVarianceFieldsModel = VenuesVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
