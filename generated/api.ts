import { Options, query } from "@common/stook-graphql";
import { Cell, Column, Filter, Group, Option, Sort, Table, User, Version, View, ViewColumn, Visit, LoginSuccessPayload, Member, Row, Team, VersionedColumn, VersionedRow, UpdateCellInput, UpdateColumnInput, CreateFilterInput, UpdateFilterInput, DeleteFilterInput, CreateGroupInput, UpdateGroupInput, DeleteGroupInput, CreateOptionInput, UpdateOptionInput, SortRowsInput, CreateSortInput, UpdateSortInput, DeleteSortInput, UpdateTableInput, UpdateUserInput, UpdateVersionInput, UpdateViewInput, SortViewsInput, UpdateViewColumnInput, SortViewColumnsInput, UpdateVisitInput, MutationLoginByGithubArgs, RegisterByEmailInput, LoginByEmailInput, ModifyCellInput, AddColumnInput, RemoveColumnInput, ModifyColumnInput, AddMemberInput, ModifyMemberRoleTypeInput, RemoveMemberInput, ExitTeamInput, AddRowInput, AddRowWithDataInput, ModifyRowInput, RemoveRowInput, AddTableInput, RemoveTableInput, SetAsLastVisitedInput, AddTeamInput, ModifyPasswordInput, AddVersionInput, AddViewInput, RemoveViewInput, ModifyVisitInput, QueryTableArgs, QueryTablesArgs, QueryVersionsArgs, QueryVersionedColumnsArgs, QueryVersionedRowsArgs, QueryViewArgs } from "@generated/types";
import { UPDATE_CELL, UPDATE_COLUMN, CREATE_FILTER, UPDATE_FILTER, DELETE_FILTER, CREATE_GROUP, UPDATE_GROUP, DELETE_GROUP, CREATE_OPTION, UPDATE_OPTION, SORT_ROWS, CREATE_SORT, UPDATE_SORT, DELETE_SORT, UPDATE_TABLE, UPDATE_USER, UPDATE_VERSION, UPDATE_VIEW, SORT_VIEWS, UPDATE_VIEW_COLUMN, SORT_VIEW_COLUMNS, UPDATE_VISIT, LOGIN_BY_GITHUB, REGISTER_BY_EMAIL, LOGIN_BY_EMAIL, MODIFY_CELL, ADD_COLUMN, REMOVE_COLUMN, MODIFY_COLUMN, ADD_MEMBER, MODIFY_MEMBER_ROLE_TYPE, REMOVE_MEMBER, EXIT_TEAM, ADD_ROW, ADD_ROW_WITH_DATA, MODIFY_ROW, REMOVE_ROW, ADD_TABLE, REMOVE_TABLE, SET_AS_LAST_VISITED, ADD_TEAM, MODIFY_PASSWORD, ADD_VERSION, ADD_VIEW, REMOVE_VIEW, MODIFY_VISIT, TABLE, TABLES, VERSIONS, VERSIONED_COLUMNS, VERSIONED_ROWS, VIEW } from "@generated/gql";

class ApiService {
  async updateCell(args: UpdateCellInput = {} as UpdateCellInput, opt: Options = {}) {
    return await query<Cell>(UPDATE_CELL, { ...opt, variables: { input: args } })
  }

  async updateColumn(args: UpdateColumnInput = {} as UpdateColumnInput, opt: Options = {}) {
    return await query<Column>(UPDATE_COLUMN, { ...opt, variables: { input: args } })
  }

  async createFilter(args: CreateFilterInput = {} as CreateFilterInput, opt: Options = {}) {
    return await query<Filter>(CREATE_FILTER, { ...opt, variables: { input: args } })
  }

  async updateFilter(args: UpdateFilterInput = {} as UpdateFilterInput, opt: Options = {}) {
    return await query<Filter>(UPDATE_FILTER, { ...opt, variables: { input: args } })
  }

  async deleteFilter(args: DeleteFilterInput = {} as DeleteFilterInput, opt: Options = {}) {
    return await query<boolean>(DELETE_FILTER, { ...opt, variables: { input: args } })
  }

  async createGroup(args: CreateGroupInput = {} as CreateGroupInput, opt: Options = {}) {
    return await query<Group>(CREATE_GROUP, { ...opt, variables: { input: args } })
  }

  async updateGroup(args: UpdateGroupInput = {} as UpdateGroupInput, opt: Options = {}) {
    return await query<Group>(UPDATE_GROUP, { ...opt, variables: { input: args } })
  }

  async deleteGroup(args: DeleteGroupInput = {} as DeleteGroupInput, opt: Options = {}) {
    return await query<boolean>(DELETE_GROUP, { ...opt, variables: { input: args } })
  }

  async createOption(args: CreateOptionInput = {} as CreateOptionInput, opt: Options = {}) {
    return await query<Option>(CREATE_OPTION, { ...opt, variables: { input: args } })
  }

  async updateOption(args: UpdateOptionInput = {} as UpdateOptionInput, opt: Options = {}) {
    return await query<Option>(UPDATE_OPTION, { ...opt, variables: { input: args } })
  }

  async sortRows(args: SortRowsInput = {} as SortRowsInput, opt: Options = {}) {
    return await query<boolean>(SORT_ROWS, { ...opt, variables: { input: args } })
  }

  async createSort(args: CreateSortInput = {} as CreateSortInput, opt: Options = {}) {
    return await query<Sort>(CREATE_SORT, { ...opt, variables: { input: args } })
  }

  async updateSort(args: UpdateSortInput = {} as UpdateSortInput, opt: Options = {}) {
    return await query<Sort>(UPDATE_SORT, { ...opt, variables: { input: args } })
  }

  async deleteSort(args: DeleteSortInput = {} as DeleteSortInput, opt: Options = {}) {
    return await query<boolean>(DELETE_SORT, { ...opt, variables: { input: args } })
  }

  async updateTable(args: UpdateTableInput = {} as UpdateTableInput, opt: Options = {}) {
    return await query<Table>(UPDATE_TABLE, { ...opt, variables: { input: args } })
  }

  async updateUser(args: UpdateUserInput = {} as UpdateUserInput, opt: Options = {}) {
    return await query<User>(UPDATE_USER, { ...opt, variables: { input: args } })
  }

  async updateVersion(args: UpdateVersionInput = {} as UpdateVersionInput, opt: Options = {}) {
    return await query<Version>(UPDATE_VERSION, { ...opt, variables: { input: args } })
  }

  async updateView(args: UpdateViewInput = {} as UpdateViewInput, opt: Options = {}) {
    return await query<View>(UPDATE_VIEW, { ...opt, variables: { input: args } })
  }

  async sortViews(args: SortViewsInput = {} as SortViewsInput, opt: Options = {}) {
    return await query<boolean>(SORT_VIEWS, { ...opt, variables: { input: args } })
  }

  async updateViewColumn(args: UpdateViewColumnInput = {} as UpdateViewColumnInput, opt: Options = {}) {
    return await query<ViewColumn>(UPDATE_VIEW_COLUMN, { ...opt, variables: { input: args } })
  }

  async sortViewColumns(args: SortViewColumnsInput = {} as SortViewColumnsInput, opt: Options = {}) {
    return await query<boolean>(SORT_VIEW_COLUMNS, { ...opt, variables: { input: args } })
  }

  async updateVisit(args: UpdateVisitInput = {} as UpdateVisitInput, opt: Options = {}) {
    return await query<Visit>(UPDATE_VISIT, { ...opt, variables: { input: args } })
  }

  async loginByGithub(args: MutationLoginByGithubArgs = {} as MutationLoginByGithubArgs, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_GITHUB, { ...opt, variables: args })
  }

  async registerByEmail(args: RegisterByEmailInput = {} as RegisterByEmailInput, opt: Options = {}) {
    return await query<LoginSuccessPayload>(REGISTER_BY_EMAIL, { ...opt, variables: { input: args } })
  }

  async loginByEmail(args: LoginByEmailInput = {} as LoginByEmailInput, opt: Options = {}) {
    return await query<LoginSuccessPayload>(LOGIN_BY_EMAIL, { ...opt, variables: { input: args } })
  }

  async modifyCell(args: ModifyCellInput = {} as ModifyCellInput, opt: Options = {}) {
    return await query<boolean>(MODIFY_CELL, { ...opt, variables: { input: args } })
  }

  async addColumn(args: AddColumnInput = {} as AddColumnInput, opt: Options = {}) {
    return await query<Column>(ADD_COLUMN, { ...opt, variables: { input: args } })
  }

  async removeColumn(args: RemoveColumnInput = {} as RemoveColumnInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_COLUMN, { ...opt, variables: { input: args } })
  }

  async modifyColumn(args: ModifyColumnInput = {} as ModifyColumnInput, opt: Options = {}) {
    return await query<boolean>(MODIFY_COLUMN, { ...opt, variables: { input: args } })
  }

  async addMember(args: AddMemberInput = {} as AddMemberInput, opt: Options = {}) {
    return await query<Member>(ADD_MEMBER, { ...opt, variables: { input: args } })
  }

  async modifyMemberRoleType(args: ModifyMemberRoleTypeInput = {} as ModifyMemberRoleTypeInput, opt: Options = {}) {
    return await query<boolean>(MODIFY_MEMBER_ROLE_TYPE, { ...opt, variables: { input: args } })
  }

  async removeMember(args: RemoveMemberInput = {} as RemoveMemberInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_MEMBER, { ...opt, variables: { input: args } })
  }

  async exitTeam(args: ExitTeamInput = {} as ExitTeamInput, opt: Options = {}) {
    return await query<boolean>(EXIT_TEAM, { ...opt, variables: { input: args } })
  }

  async addRow(args: AddRowInput = {} as AddRowInput, opt: Options = {}) {
    return await query<Row>(ADD_ROW, { ...opt, variables: { input: args } })
  }

  async addRowWithData(args: AddRowWithDataInput = {} as AddRowWithDataInput, opt: Options = {}) {
    return await query<Row>(ADD_ROW_WITH_DATA, { ...opt, variables: { input: args } })
  }

  async modifyRow(args: ModifyRowInput = {} as ModifyRowInput, opt: Options = {}) {
    return await query<boolean>(MODIFY_ROW, { ...opt, variables: { input: args } })
  }

  async removeRow(args: RemoveRowInput = {} as RemoveRowInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_ROW, { ...opt, variables: { input: args } })
  }

  async addTable(args: AddTableInput = {} as AddTableInput, opt: Options = {}) {
    return await query<Table>(ADD_TABLE, { ...opt, variables: { input: args } })
  }

  async removeTable(args: RemoveTableInput = {} as RemoveTableInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_TABLE, { ...opt, variables: { input: args } })
  }

  async setAsLastVisited(args: SetAsLastVisitedInput = {} as SetAsLastVisitedInput, opt: Options = {}) {
    return await query<boolean>(SET_AS_LAST_VISITED, { ...opt, variables: { input: args } })
  }

  async addTeam(args: AddTeamInput = {} as AddTeamInput, opt: Options = {}) {
    return await query<Team>(ADD_TEAM, { ...opt, variables: { input: args } })
  }

  async modifyPassword(args: ModifyPasswordInput = {} as ModifyPasswordInput, opt: Options = {}) {
    return await query<boolean>(MODIFY_PASSWORD, { ...opt, variables: { input: args } })
  }

  async addVersion(args: AddVersionInput = {} as AddVersionInput, opt: Options = {}) {
    return await query<Version>(ADD_VERSION, { ...opt, variables: { input: args } })
  }

  async addView(args: AddViewInput = {} as AddViewInput, opt: Options = {}) {
    return await query<View>(ADD_VIEW, { ...opt, variables: { input: args } })
  }

  async removeView(args: RemoveViewInput = {} as RemoveViewInput, opt: Options = {}) {
    return await query<boolean>(REMOVE_VIEW, { ...opt, variables: { input: args } })
  }

  async modifyVisit(args: ModifyVisitInput = {} as ModifyVisitInput, opt: Options = {}) {
    return await query<boolean>(MODIFY_VISIT, { ...opt, variables: { input: args } })
  }

  async table(args: QueryTableArgs = {} as QueryTableArgs, opt: Options = {}) {
    return await query<Table>(TABLE, { ...opt, variables: args })
  }

  async tables(args: QueryTablesArgs = {} as QueryTablesArgs, opt: Options = {}) {
    return await query<Table[]>(TABLES, { ...opt, variables: args })
  }

  async versions(args: QueryVersionsArgs = {} as QueryVersionsArgs, opt: Options = {}) {
    return await query<Version[]>(VERSIONS, { ...opt, variables: args })
  }

  async versionedColumns(args: QueryVersionedColumnsArgs = {} as QueryVersionedColumnsArgs, opt: Options = {}) {
    return await query<VersionedColumn[]>(VERSIONED_COLUMNS, { ...opt, variables: args })
  }

  async versionedRows(args: QueryVersionedRowsArgs = {} as QueryVersionedRowsArgs, opt: Options = {}) {
    return await query<VersionedRow[]>(VERSIONED_ROWS, { ...opt, variables: args })
  }

  async view(args: QueryViewArgs = {} as QueryViewArgs, opt: Options = {}) {
    return await query<View>(VIEW, { ...opt, variables: args })
  }
}

export const apiService = new ApiService();
