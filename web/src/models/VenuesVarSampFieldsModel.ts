import { Instance } from "mobx-state-tree"
import { VenuesVarSampFieldsModelBase } from "./VenuesVarSampFieldsModel.base"

/* The TypeScript type of an instance of VenuesVarSampFieldsModel */
export interface VenuesVarSampFieldsModelType extends Instance<typeof VenuesVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesVarSampFieldsModel */
export { selectFromVenuesVarSampFields, venuesVarSampFieldsModelPrimitives, VenuesVarSampFieldsModelSelector } from "./VenuesVarSampFieldsModel.base"

/**
 * VenuesVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const VenuesVarSampFieldsModel = VenuesVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
