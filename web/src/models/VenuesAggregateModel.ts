import { Instance } from "mobx-state-tree"
import { VenuesAggregateModelBase } from "./VenuesAggregateModel.base"

/* The TypeScript type of an instance of VenuesAggregateModel */
export interface VenuesAggregateModelType extends Instance<typeof VenuesAggregateModel.Type> {}

/* A graphql query fragment builders for VenuesAggregateModel */
export { selectFromVenuesAggregate, venuesAggregateModelPrimitives, VenuesAggregateModelSelector } from "./VenuesAggregateModel.base"

/**
 * VenuesAggregateModel
 *
 * aggregated selection of "venues"
 */
export const VenuesAggregateModel = VenuesAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
