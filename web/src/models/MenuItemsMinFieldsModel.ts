import { Instance } from "mobx-state-tree"
import { MenuItemsMinFieldsModelBase } from "./MenuItemsMinFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsMinFieldsModel */
export interface MenuItemsMinFieldsModelType extends Instance<typeof MenuItemsMinFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsMinFieldsModel */
export { selectFromMenuItemsMinFields, menuItemsMinFieldsModelPrimitives, MenuItemsMinFieldsModelSelector } from "./MenuItemsMinFieldsModel.base"

/**
 * MenuItemsMinFieldsModel
 *
 * aggregate min on columns
 */
export const MenuItemsMinFieldsModel = MenuItemsMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
