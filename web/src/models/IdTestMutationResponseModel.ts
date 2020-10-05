import { Instance } from "mobx-state-tree"
import { IdTestMutationResponseModelBase } from "./IdTestMutationResponseModel.base"

/* The TypeScript type of an instance of IdTestMutationResponseModel */
export interface IdTestMutationResponseModelType extends Instance<typeof IdTestMutationResponseModel.Type> {}

/* A graphql query fragment builders for IdTestMutationResponseModel */
export { selectFromIdTestMutationResponse, idTestMutationResponseModelPrimitives, IdTestMutationResponseModelSelector } from "./IdTestMutationResponseModel.base"

/**
 * IdTestMutationResponseModel
 *
 * response of any mutation on the table "id_test"
 */
export const IdTestMutationResponseModel = IdTestMutationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
