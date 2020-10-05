import { Instance } from "mobx-state-tree"
import { IdTestMaxFieldsModelBase } from "./IdTestMaxFieldsModel.base"

/* The TypeScript type of an instance of IdTestMaxFieldsModel */
export interface IdTestMaxFieldsModelType extends Instance<typeof IdTestMaxFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestMaxFieldsModel */
export { selectFromIdTestMaxFields, idTestMaxFieldsModelPrimitives, IdTestMaxFieldsModelSelector } from "./IdTestMaxFieldsModel.base"

/**
 * IdTestMaxFieldsModel
 *
 * aggregate max on columns
 */
export const IdTestMaxFieldsModel = IdTestMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
