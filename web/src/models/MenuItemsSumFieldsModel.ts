import { Instance } from "mobx-state-tree"
import { MenuItemsSumFieldsModelBase } from "./MenuItemsSumFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsSumFieldsModel */
export interface MenuItemsSumFieldsModelType extends Instance<typeof MenuItemsSumFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsSumFieldsModel */
export { selectFromMenuItemsSumFields, menuItemsSumFieldsModelPrimitives, MenuItemsSumFieldsModelSelector } from "./MenuItemsSumFieldsModel.base"

/**
 * MenuItemsSumFieldsModel
 *
 * aggregate sum on columns
 */
export const MenuItemsSumFieldsModel = MenuItemsSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
