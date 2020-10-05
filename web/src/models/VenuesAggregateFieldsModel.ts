import { Instance } from "mobx-state-tree"
import { VenuesAggregateFieldsModelBase } from "./VenuesAggregateFieldsModel.base"

/* The TypeScript type of an instance of VenuesAggregateFieldsModel */
export interface VenuesAggregateFieldsModelType extends Instance<typeof VenuesAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for VenuesAggregateFieldsModel */
export { selectFromVenuesAggregateFields, venuesAggregateFieldsModelPrimitives, VenuesAggregateFieldsModelSelector } from "./VenuesAggregateFieldsModel.base"

/**
 * VenuesAggregateFieldsModel
 *
 * aggregate fields of "venues"
 */
export const VenuesAggregateFieldsModel = VenuesAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
