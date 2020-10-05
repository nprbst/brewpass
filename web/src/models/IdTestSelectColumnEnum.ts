/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum IdTestSelectColumn {
  bar="bar",
foo="foo",
id="id"
}

/**
* IdTestSelectColumn
 *
 * select columns of table "id_test"
*/
export const IdTestSelectColumnEnumType = types.enumeration("IdTestSelectColumn", [
        "bar", // column name
  "foo", // column name
  "id", // column name
      ])
