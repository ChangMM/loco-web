import { Result } from "@common/stook-graphql";
import { mutate } from "stook";
import { COLUMNS, ROWS, TABLE, VIEWS } from "@generated/gql";
import { Column, Row, Table, View } from "@generated/types";

class MutatorService {
  mutateColumns(fn: (state: Column[]) => void): void {
    mutate(COLUMNS, (state: Result<Column[]>) => {
      fn(state.data)
    })
  }

  mutateRows(fn: (state: Row[]) => void): void {
    mutate(ROWS, (state: Result<Row[]>) => {
      fn(state.data)
    })
  }

  mutateTable(fn: (state: Table) => void): void {
    mutate(TABLE, (state: Result<Table>) => {
      fn(state.data)
    })
  }

  mutateViews(fn: (state: View[]) => void): void {
    mutate(VIEWS, (state: Result<View[]>) => {
      fn(state.data)
    })
  }
}

export const Mutator = new MutatorService();
