import { Instance } from "mobx-state-tree"
import { MenuItemsVarSampFieldsModelBase } from "./MenuItemsVarSampFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsVarSampFieldsModel */
export interface MenuItemsVarSampFieldsModelType extends Instance<typeof MenuItemsVarSampFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsVarSampFieldsModel */
export { selectFromMenuItemsVarSampFields, menuItemsVarSampFieldsModelPrimitives, MenuItemsVarSampFieldsModelSelector } from "./MenuItemsVarSampFieldsModel.base"

/**
 * MenuItemsVarSampFieldsModel
 *
 * aggregate var_samp on columns
 */
export const MenuItemsVarSampFieldsModel = MenuItemsVarSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
