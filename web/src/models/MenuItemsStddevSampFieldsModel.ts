import { Instance } from "mobx-state-tree"
import { MenuItemsStddevSampFieldsModelBase } from "./MenuItemsStddevSampFieldsModel.base"

/* The TypeScript type of an instance of MenuItemsStddevSampFieldsModel */
export interface MenuItemsStddevSampFieldsModelType extends Instance<typeof MenuItemsStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for MenuItemsStddevSampFieldsModel */
export { selectFromMenuItemsStddevSampFields, menuItemsStddevSampFieldsModelPrimitives, MenuItemsStddevSampFieldsModelSelector } from "./MenuItemsStddevSampFieldsModel.base"

/**
 * MenuItemsStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const MenuItemsStddevSampFieldsModel = MenuItemsStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
