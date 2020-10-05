import { Instance } from "mobx-state-tree"
import { MenuItemsAggregateModelBase } from "./MenuItemsAggregateModel.base"

/* The TypeScript type of an instance of MenuItemsAggregateModel */
export interface MenuItemsAggregateModelType extends Instance<typeof MenuItemsAggregateModel.Type> {}

/* A graphql query fragment builders for MenuItemsAggregateModel */
export { selectFromMenuItemsAggregate, menuItemsAggregateModelPrimitives, MenuItemsAggregateModelSelector } from "./MenuItemsAggregateModel.base"

/**
 * MenuItemsAggregateModel
 *
 * aggregated selection of "menu_items"
 */
export const MenuItemsAggregateModel = MenuItemsAggregateModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
