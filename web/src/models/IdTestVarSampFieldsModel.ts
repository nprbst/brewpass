import { Instance } from "mobx-state-tree"
import { IdTestVarSampFieldsModelBase } from "./IdTestVarSampFieldsModel.base"

/* The TypeScript type of an instance of IdTestVarSampFieldsModel */
export interface IdTestVarSampFieldsModelType extends Instance<typeof IdTestVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestVarSampFieldsModel */
export { selectFromIdTestVarSampFields, idTestVarSampFieldsModelPrimitives, IdTestVarSampFieldsModelSelector } from "./IdTestVarSampFieldsModel.base"

/**
 * IdTestVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const IdTestVarSampFieldsModel = IdTestVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
