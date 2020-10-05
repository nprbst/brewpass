import { Instance } from "mobx-state-tree"
import { MenuItemsMaxFieldsModelBase } from "./MenuItemsMaxFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsMaxFieldsModel */
export interface MenuItemsMaxFieldsModelType extends Instance<typeof MenuItemsMaxFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsMaxFieldsModel */
export { selectFromMenuItemsMaxFields, menuItemsMaxFieldsModelPrimitives, MenuItemsMaxFieldsModelSelector } from "./MenuItemsMaxFieldsModel.base"

/**
 * MenuItemsMaxFieldsModel
 *
 * aggregate max on columns
 */
export const MenuItemsMaxFieldsModel = MenuItemsMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
