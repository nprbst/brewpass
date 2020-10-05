import { Instance } from "mobx-state-tree"
import { VenuesStddevSampFieldsModelBase } from "./VenuesStddevSampFieldsModel.base"

/* The TypeScript type of an instance of VenuesStddevSampFieldsModel */
export interface VenuesStddevSampFieldsModelType extends Instance<typeof VenuesStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesStddevSampFieldsModel */
export { selectFromVenuesStddevSampFields, venuesStddevSampFieldsModelPrimitives, VenuesStddevSampFieldsModelSelector } from "./VenuesStddevSampFieldsModel.base"

/**
 * VenuesStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const VenuesStddevSampFieldsModel = VenuesStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
