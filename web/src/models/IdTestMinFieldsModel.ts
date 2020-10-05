import { Instance } from "mobx-state-tree"
import { IdTestMinFieldsModelBase } from "./IdTestMinFieldsModel.base"

/* The TypeScript type of an instance of IdTestMinFieldsModel */
export interface IdTestMinFieldsModelType extends Instance<typeof IdTestMinFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestMinFieldsModel */
export { selectFromIdTestMinFields, idTestMinFieldsModelPrimitives, IdTestMinFieldsModelSelector } from "./IdTestMinFieldsModel.base"

/**
 * IdTestMinFieldsModel
 *
 * aggregate min on columns
 */
export const IdTestMinFieldsModel = IdTestMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
