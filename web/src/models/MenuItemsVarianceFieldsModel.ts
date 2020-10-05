import { Instance } from "mobx-state-tree"
import { MenuItemsVarianceFieldsModelBase } from "./MenuItemsVarianceFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsVarianceFieldsModel */
export interface MenuItemsVarianceFieldsModelType extends Instance<typeof MenuItemsVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsVarianceFieldsModel */
export { selectFromMenuItemsVarianceFields, menuItemsVarianceFieldsModelPrimitives, MenuItemsVarianceFieldsModelSelector } from "./MenuItemsVarianceFieldsModel.base"

/**
 * MenuItemsVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const MenuItemsVarianceFieldsModel = MenuItemsVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
