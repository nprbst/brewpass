/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum IdTestUpdateColumn {
  bar="bar",
foo="foo",
id="id"
}

/**
* IdTestUpdateColumn
 *
 * update columns of table "id_test"
*/
export const IdTestUpdateColumnEnumType = types.enumeration("IdTestUpdateColumn", [
        "bar", // column name
  "foo", // column name
  "id", // column name
      ])
