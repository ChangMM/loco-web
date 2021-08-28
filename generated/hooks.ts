import { Options, useQuery, useMutation } from "@common/stook-graphql";
import { Team, Visit, Column, Member, Row, Table, Version, View, User, UpdateTeamInput, MutationUpdateTeamArgs, UpdateVisitInput, MutationUpdateVisitArgs, AddColumnInput, MutationAddColumnArgs, RemoveColumnInput, MutationRemoveColumnArgs, RemoveRowInput, MutationRemoveRowArgs, ModifyVisitInput, MutationModifyVisitArgs, QueryColumnsArgs, QueryMembersArgs, QueryRowsArgs, QueryTableArgs, QueryTablesArgs, QueryTeamArgs, QueryVersionsArgs, QueryViewArgs, QueryViewsArgs, QuerySearchUsersArgs } from "@generated/types";
import { UPDATE_TEAM, UPDATE_VISIT, ADD_COLUMN, REMOVE_COLUMN, REMOVE_ROW, MODIFY_VISIT, COLUMNS, MEMBERS, ROWS, TABLE, TABLES, TEAM, VERSIONS, VIEW, VIEWS, OWNED_TEAMS, SEARCH_USERS } from "@generated/gql";

class HooksService {
  useUpdateTeam(args?: UpdateTeamInput | (() => UpdateTeamInput), opt: Options = {}) {

    return useMutation<Team, MutationUpdateTeamArgs>(UPDATE_TEAM, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useUpdateVisit(args?: UpdateVisitInput | (() => UpdateVisitInput), opt: Options = {}) {

    return useMutation<Visit, MutationUpdateVisitArgs>(UPDATE_VISIT, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useAddColumn(args?: AddColumnInput | (() => AddColumnInput), opt: Options = {}) {

    return useMutation<Column, MutationAddColumnArgs>(ADD_COLUMN, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useRemoveColumn(args?: RemoveColumnInput | (() => RemoveColumnInput), opt: Options = {}) {

    return useMutation<boolean, MutationRemoveColumnArgs>(REMOVE_COLUMN, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useRemoveRow(args?: RemoveRowInput | (() => RemoveRowInput), opt: Options = {}) {

    return useMutation<boolean, MutationRemoveRowArgs>(REMOVE_ROW, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useModifyVisit(args?: ModifyVisitInput | (() => ModifyVisitInput), opt: Options = {}) {

    return useMutation<boolean, MutationModifyVisitArgs>(MODIFY_VISIT, {
      ...opt, variables: () => {
        const params = typeof args === 'function' ? args() : args
        return { input: params } as any
      }
    })

  }

  useColumns(args?: QueryColumnsArgs | (() => QueryColumnsArgs), opt: Options = {}) {
    return useQuery<Column[], QueryColumnsArgs>(COLUMNS, { ...opt, variables: args })
  }

  useMembers(args?: QueryMembersArgs | (() => QueryMembersArgs), opt: Options = {}) {
    return useQuery<Member[], QueryMembersArgs>(MEMBERS, { ...opt, variables: args })
  }

  useRows(args?: QueryRowsArgs | (() => QueryRowsArgs), opt: Options = {}) {
    return useQuery<Row[], QueryRowsArgs>(ROWS, { ...opt, variables: args })
  }

  useTable(args?: QueryTableArgs | (() => QueryTableArgs), opt: Options = {}) {
    return useQuery<Table, QueryTableArgs>(TABLE, { ...opt, variables: args })
  }

  useTables(args?: QueryTablesArgs | (() => QueryTablesArgs), opt: Options = {}) {
    return useQuery<Table[], QueryTablesArgs>(TABLES, { ...opt, variables: args })
  }

  useTeam(args?: QueryTeamArgs | (() => QueryTeamArgs), opt: Options = {}) {
    return useQuery<Team, QueryTeamArgs>(TEAM, { ...opt, variables: args })
  }

  useVersions(args?: QueryVersionsArgs | (() => QueryVersionsArgs), opt: Options = {}) {
    return useQuery<Version[], QueryVersionsArgs>(VERSIONS, { ...opt, variables: args })
  }

  useView(args?: QueryViewArgs | (() => QueryViewArgs), opt: Options = {}) {
    return useQuery<View, QueryViewArgs>(VIEW, { ...opt, variables: args })
  }

  useViews(args?: QueryViewsArgs | (() => QueryViewsArgs), opt: Options = {}) {
    return useQuery<View[], QueryViewsArgs>(VIEWS, { ...opt, variables: args })
  }

  useOwnedTeams(args?: any | (() => any), opt: Options = {}) {
    return useQuery<Team[], any>(OWNED_TEAMS, { ...opt, variables: args })
  }

  useSearchUsers(args?: QuerySearchUsersArgs | (() => QuerySearchUsersArgs), opt: Options = {}) {
    return useQuery<User[], QuerySearchUsersArgs>(SEARCH_USERS, { ...opt, variables: args })
  }
}

export const Hooks = new HooksService();
