import { Instance } from "mobx-state-tree"
import { IdTestAggregateFieldsModelBase } from "./IdTestAggregateFieldsModel.base"

/* The TypeScript type of an instance of IdTestAggregateFieldsModel */
export interface IdTestAggregateFieldsModelType extends Instance<typeof IdTestAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestAggregateFieldsModel */
export { selectFromIdTestAggregateFields, idTestAggregateFieldsModelPrimitives, IdTestAggregateFieldsModelSelector } from "./IdTestAggregateFieldsModel.base"

/**
 * IdTestAggregateFieldsModel
 *
 * aggregate fields of "id_test"
 */
export const IdTestAggregateFieldsModel = IdTestAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
