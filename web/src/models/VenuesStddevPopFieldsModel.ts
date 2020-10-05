import { Instance } from "mobx-state-tree"
import { VenuesStddevPopFieldsModelBase } from "./VenuesStddevPopFieldsModel.base"

/* The TypeScript type of an instance of VenuesStddevPopFieldsModel */
export interface VenuesStddevPopFieldsModelType extends Instance<typeof VenuesStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesStddevPopFieldsModel */
export { selectFromVenuesStddevPopFields, venuesStddevPopFieldsModelPrimitives, VenuesStddevPopFieldsModelSelector } from "./VenuesStddevPopFieldsModel.base"

/**
 * VenuesStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const VenuesStddevPopFieldsModel = VenuesStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
