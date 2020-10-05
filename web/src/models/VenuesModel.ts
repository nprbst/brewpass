import { Instance } from "mobx-state-tree"
import { VenuesModelBase } from "./VenuesModel.base"

/* The TypeScript type of an instance of VenuesModel */
export interface VenuesModelType extends Instance<typeof VenuesModel.Type> {}

/* A graphql query fragment builders for VenuesModel */
export { selectFromVenues, venuesModelPrimitives, VenuesModelSelector } from "./VenuesModel.base"

/**
 * VenuesModel
 *
 * columns and relationships of "venues"
 */
export const VenuesModel = VenuesModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
