import { Instance } from "mobx-state-tree"
import { MenuItemsMutationResponseModelBase } from "./MenuItemsMutationResponseModel.base"

/* The TypeScript type of an instance of MenuItemsMutationResponseModel */
export interface MenuItemsMutationResponseModelType extends Instance<typeof MenuItemsMutationResponseModel.Type> {}

/* A graphql query fragment builders for MenuItemsMutationResponseModel */
export { selectFromMenuItemsMutationResponse, menuItemsMutationResponseModelPrimitives, MenuItemsMutationResponseModelSelector } from "./MenuItemsMutationResponseModel.base"

/**
 * MenuItemsMutationResponseModel
 *
 * response of any mutation on the table "menu_items"
 */
export const MenuItemsMutationResponseModel = MenuItemsMutationResponseModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
