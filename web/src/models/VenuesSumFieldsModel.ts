import { Instance } from "mobx-state-tree"
import { VenuesSumFieldsModelBase } from "./VenuesSumFieldsModel.base"

/* The TypeScript type of an instance of VenuesSumFieldsModel */
export interface VenuesSumFieldsModelType extends Instance<typeof VenuesSumFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesSumFieldsModel */
export { selectFromVenuesSumFields, venuesSumFieldsModelPrimitives, VenuesSumFieldsModelSelector } from "./VenuesSumFieldsModel.base"

/**
 * VenuesSumFieldsModel
 *
 * aggregate sum on columns
 */
export const VenuesSumFieldsModel = VenuesSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
