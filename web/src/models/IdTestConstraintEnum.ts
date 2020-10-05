/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { types } from "mobx-state-tree"

/**
 * Typescript enum
 */

export enum IdTestConstraint {
  id_test_pkey="id_test_pkey"
}

/**
* IdTestConstraint
 *
 * unique or primary key constraints on table "id_test"
*/
export const IdTestConstraintEnumType = types.enumeration("IdTestConstraint", [
        "id_test_pkey", // unique or primary key constraint
      ])
