import { Instance } from "mobx-state-tree"
import { IdTestVarPopFieldsModelBase } from "./IdTestVarPopFieldsModel.base"

/* The TypeScript type of an instance of IdTestVarPopFieldsModel */
export interface IdTestVarPopFieldsModelType extends Instance<typeof IdTestVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestVarPopFieldsModel */
export { selectFromIdTestVarPopFields, idTestVarPopFieldsModelPrimitives, IdTestVarPopFieldsModelSelector } from "./IdTestVarPopFieldsModel.base"

/**
 * IdTestVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const IdTestVarPopFieldsModel = IdTestVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
