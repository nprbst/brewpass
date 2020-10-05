import { Instance } from "mobx-state-tree"
import { IdTestAggregateModelBase } from "./IdTestAggregateModel.base"

/* The TypeScript type of an instance of IdTestAggregateModel */
export interface IdTestAggregateModelType extends Instance<typeof IdTestAggregateModel.Type> {}

/* A graphql query fragment builders for IdTestAggregateModel */
export { selectFromIdTestAggregate, idTestAggregateModelPrimitives, IdTestAggregateModelSelector } from "./IdTestAggregateModel.base"

/**
 * IdTestAggregateModel
 *
 * aggregated selection of "id_test"
 */
export const IdTestAggregateModel = IdTestAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
