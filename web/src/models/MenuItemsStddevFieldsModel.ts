import { Instance } from "mobx-state-tree"
import { MenuItemsStddevFieldsModelBase } from "./MenuItemsStddevFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsStddevFieldsModel */
export interface MenuItemsStddevFieldsModelType extends Instance<typeof MenuItemsStddevFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsStddevFieldsModel */
export { selectFromMenuItemsStddevFields, menuItemsStddevFieldsModelPrimitives, MenuItemsStddevFieldsModelSelector } from "./MenuItemsStddevFieldsModel.base"

/**
 * MenuItemsStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const MenuItemsStddevFieldsModel = MenuItemsStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
