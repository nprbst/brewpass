import { Instance } from "mobx-state-tree"
import { IdTestVarianceFieldsModelBase } from "./IdTestVarianceFieldsModel.base"

/* The TypeScript type of an instance of IdTestVarianceFieldsModel */
export interface IdTestVarianceFieldsModelType extends Instance<typeof IdTestVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestVarianceFieldsModel */
export { selectFromIdTestVarianceFields, idTestVarianceFieldsModelPrimitives, IdTestVarianceFieldsModelSelector } from "./IdTestVarianceFieldsModel.base"

/**
 * IdTestVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const IdTestVarianceFieldsModel = IdTestVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
