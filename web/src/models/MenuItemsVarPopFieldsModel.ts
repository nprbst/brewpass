import { Instance } from "mobx-state-tree"
import { MenuItemsVarPopFieldsModelBase } from "./MenuItemsVarPopFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsVarPopFieldsModel */
export interface MenuItemsVarPopFieldsModelType extends Instance<typeof MenuItemsVarPopFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsVarPopFieldsModel */
export { selectFromMenuItemsVarPopFields, menuItemsVarPopFieldsModelPrimitives, MenuItemsVarPopFieldsModelSelector } from "./MenuItemsVarPopFieldsModel.base"

/**
 * MenuItemsVarPopFieldsModel
 *
 * aggregate var_pop on columns
 */
export const MenuItemsVarPopFieldsModel = MenuItemsVarPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
