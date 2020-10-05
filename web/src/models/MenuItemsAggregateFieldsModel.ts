import { Instance } from "mobx-state-tree"
import { MenuItemsAggregateFieldsModelBase } from "./MenuItemsAggregateFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsAggregateFieldsModel */
export interface MenuItemsAggregateFieldsModelType extends Instance<typeof MenuItemsAggregateFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsAggregateFieldsModel */
export { selectFromMenuItemsAggregateFields, menuItemsAggregateFieldsModelPrimitives, MenuItemsAggregateFieldsModelSelector } from "./MenuItemsAggregateFieldsModel.base"

/**
 * MenuItemsAggregateFieldsModel
 *
 * aggregate fields of "menu_items"
 */
export const MenuItemsAggregateFieldsModel = MenuItemsAggregateFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
