import { Instance } from "mobx-state-tree"
import { IdTestSumFieldsModelBase } from "./IdTestSumFieldsModel.base"

/* The TypeScript type of an instance of IdTestSumFieldsModel */
export interface IdTestSumFieldsModelType extends Instance<typeof IdTestSumFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestSumFieldsModel */
export { selectFromIdTestSumFields, idTestSumFieldsModelPrimitives, IdTestSumFieldsModelSelector } from "./IdTestSumFieldsModel.base"

/**
 * IdTestSumFieldsModel
 *
 * aggregate sum on columns
 */
export const IdTestSumFieldsModel = IdTestSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
