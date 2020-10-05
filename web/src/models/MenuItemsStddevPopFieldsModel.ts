import { Instance } from "mobx-state-tree"
import { MenuItemsStddevPopFieldsModelBase } from "./MenuItemsStddevPopFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsStddevPopFieldsModel */
export interface MenuItemsStddevPopFieldsModelType extends Instance<typeof MenuItemsStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsStddevPopFieldsModel */
export { selectFromMenuItemsStddevPopFields, menuItemsStddevPopFieldsModelPrimitives, MenuItemsStddevPopFieldsModelSelector } from "./MenuItemsStddevPopFieldsModel.base"

/**
 * MenuItemsStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const MenuItemsStddevPopFieldsModel = MenuItemsStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
