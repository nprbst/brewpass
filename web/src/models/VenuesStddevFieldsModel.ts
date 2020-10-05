import { Instance } from "mobx-state-tree"
import { VenuesStddevFieldsModelBase } from "./VenuesStddevFieldsModel.base"

/* The TypeScript type of an instance of VenuesStddevFieldsModel */
export interface VenuesStddevFieldsModelType extends Instance<typeof VenuesStddevFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesStddevFieldsModel */
export { selectFromVenuesStddevFields, venuesStddevFieldsModelPrimitives, VenuesStddevFieldsModelSelector } from "./VenuesStddevFieldsModel.base"

/**
 * VenuesStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const VenuesStddevFieldsModel = VenuesStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
