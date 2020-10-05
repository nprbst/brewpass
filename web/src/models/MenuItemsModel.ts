import { Instance } from "mobx-state-tree"
import { MenuItemsModelBase } from "./MenuItemsModel.base"

/* The TypeScript type of an instance of MenuItemsModel */
export interface MenuItemsModelType extends Instance<typeof MenuItemsModel.Type> {}

/* A graphql query fragment builders for MenuItemsModel */
export { selectFromMenuItems, menuItemsModelPrimitives, MenuItemsModelSelector } from "./MenuItemsModel.base"

/**
 * MenuItemsModel
 *
 * columns and relationships of "menu_items"
 */
export const MenuItemsModel = MenuItemsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
