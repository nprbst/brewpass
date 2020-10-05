import { Instance } from "mobx-state-tree"
import { IdTestStddevFieldsModelBase } from "./IdTestStddevFieldsModel.base"

/* The TypeScript type of an instance of IdTestStddevFieldsModel */
export interface IdTestStddevFieldsModelType extends Instance<typeof IdTestStddevFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestStddevFieldsModel */
export { selectFromIdTestStddevFields, idTestStddevFieldsModelPrimitives, IdTestStddevFieldsModelSelector } from "./IdTestStddevFieldsModel.base"

/**
 * IdTestStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const IdTestStddevFieldsModel = IdTestStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
