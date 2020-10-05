import { Instance } from "mobx-state-tree"
import { IdTestStddevSampFieldsModelBase } from "./IdTestStddevSampFieldsModel.base"

/* The TypeScript type of an instance of IdTestStddevSampFieldsModel */
export interface IdTestStddevSampFieldsModelType extends Instance<typeof IdTestStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for IdTestStddevSampFieldsModel */
export { selectFromIdTestStddevSampFields, idTestStddevSampFieldsModelPrimitives, IdTestStddevSampFieldsModelSelector } from "./IdTestStddevSampFieldsModel.base"

/**
 * IdTestStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const IdTestStddevSampFieldsModel = IdTestStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
