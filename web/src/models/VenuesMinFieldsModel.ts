import { Instance } from "mobx-state-tree"
import { VenuesMinFieldsModelBase } from "./VenuesMinFieldsModel.base"

/* The TypeScript type of an instance of VenuesMinFieldsModel */
export interface VenuesMinFieldsModelType extends Instance<typeof VenuesMinFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesMinFieldsModel */
export { selectFromVenuesMinFields, venuesMinFieldsModelPrimitives, VenuesMinFieldsModelSelector } from "./VenuesMinFieldsModel.base"

/**
 * VenuesMinFieldsModel
 *
 * aggregate min on columns
 */
export const VenuesMinFieldsModel = VenuesMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
