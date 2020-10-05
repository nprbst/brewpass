import { Instance } from "mobx-state-tree"
import { VenuesVarPopFieldsModelBase } from "./VenuesVarPopFieldsModel.base"

/* The TypeScript type of an instance of VenuesVarPopFieldsModel */
export interface VenuesVarPopFieldsModelType extends Instance<typeof VenuesVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesVarPopFieldsModel */
export { selectFromVenuesVarPopFields, venuesVarPopFieldsModelPrimitives, VenuesVarPopFieldsModelSelector } from "./VenuesVarPopFieldsModel.base"

/**
 * VenuesVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const VenuesVarPopFieldsModel = VenuesVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
