import { Instance } from "mobx-state-tree"
import { IdTestAvgFieldsModelBase } from "./IdTestAvgFieldsModel.base"

/* The TypeScript type of an instance of IdTestAvgFieldsModel */
export interface IdTestAvgFieldsModelType extends Instance<typeof IdTestAvgFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestAvgFieldsModel */
export { selectFromIdTestAvgFields, idTestAvgFieldsModelPrimitives, IdTestAvgFieldsModelSelector } from "./IdTestAvgFieldsModel.base"

/**
 * IdTestAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const IdTestAvgFieldsModel = IdTestAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
