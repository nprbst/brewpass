import { Instance } from "mobx-state-tree"
import { IdTestStddevPopFieldsModelBase } from "./IdTestStddevPopFieldsModel.base"

/* The TypeScript type of an instance of IdTestStddevPopFieldsModel */
export interface IdTestStddevPopFieldsModelType extends Instance<typeof IdTestStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestStddevPopFieldsModel */
export { selectFromIdTestStddevPopFields, idTestStddevPopFieldsModelPrimitives, IdTestStddevPopFieldsModelSelector } from "./IdTestStddevPopFieldsModel.base"

/**
 * IdTestStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const IdTestStddevPopFieldsModel = IdTestStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
