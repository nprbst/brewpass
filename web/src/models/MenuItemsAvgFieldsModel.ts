import { Instance } from "mobx-state-tree"
import { MenuItemsAvgFieldsModelBase } from "./MenuItemsAvgFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsAvgFieldsModel */
export interface MenuItemsAvgFieldsModelType extends Instance<typeof MenuItemsAvgFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsAvgFieldsModel */
export { selectFromMenuItemsAvgFields, menuItemsAvgFieldsModelPrimitives, MenuItemsAvgFieldsModelSelector } from "./MenuItemsAvgFieldsModel.base"

/**
 * MenuItemsAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const MenuItemsAvgFieldsModel = MenuItemsAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
