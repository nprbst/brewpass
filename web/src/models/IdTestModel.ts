import { Instance } from "mobx-state-tree"
import { IdTestModelBase } from "./IdTestModel.base"

/* The TypeScript type of an instance of IdTestModel */
export interface IdTestModelType extends Instance<typeof IdTestModel.Type> {}

/* A graphql query fragment builders for IdTestModel */
export { selectFromIdTest, idTestModelPrimitives, IdTestModelSelector } from "./IdTestModel.base"

/**
 * IdTestModel
 *
 * columns and relationships of "id_test"
 */
export const IdTestModel = IdTestModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
