import { RefetchOptions, fetcher } from "@common/stook-graphql";
import { Column, Member, Row, Table, Version, View, Team, User, QueryColumnsArgs, QueryMembersArgs, QueryRowsArgs, QueryTableArgs, QueryVersionsArgs, QueryViewsArgs, QuerySearchUsersArgs } from "@generated/types";
import { COLUMNS, MEMBERS, ROWS, TABLE, VERSIONS, VIEWS, OWNED_TEAMS, SEARCH_USERS } from "@generated/gql";

class RefetcherService {
  async refetchColumns(args: QueryColumnsArgs = {} as QueryColumnsArgs, opt: RefetchOptions = {}): Promise<Column[]> {

    const key = opt.key ? opt.key : COLUMNS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchMembers(args: QueryMembersArgs = {} as QueryMembersArgs, opt: RefetchOptions = {}): Promise<Member[]> {

    const key = opt.key ? opt.key : MEMBERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchRows(args: QueryRowsArgs = {} as QueryRowsArgs, opt: RefetchOptions = {}): Promise<Row[]> {

    const key = opt.key ? opt.key : ROWS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchTable(args: QueryTableArgs = {} as QueryTableArgs, opt: RefetchOptions = {}): Promise<Table> {

    const key = opt.key ? opt.key : TABLE
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchVersions(args: QueryVersionsArgs = {} as QueryVersionsArgs, opt: RefetchOptions = {}): Promise<Version[]> {

    const key = opt.key ? opt.key : VERSIONS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchViews(args: QueryViewsArgs = {} as QueryViewsArgs, opt: RefetchOptions = {}): Promise<View[]> {

    const key = opt.key ? opt.key : VIEWS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchOwnedTeams(args: any = {} as any, opt: RefetchOptions = {}): Promise<Team[]> {

    const key = opt.key ? opt.key : OWNED_TEAMS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }

  async refetchSearchUsers(args: QuerySearchUsersArgs = {} as QuerySearchUsersArgs, opt: RefetchOptions = {}): Promise<User[]> {

    const key = opt.key ? opt.key : SEARCH_USERS
    if (!fetcher.get(key)) {
      return console.warn('fetcher找不到' + key) as any
    }
    if (Object.keys(args).length) opt.variables = args
    if (!opt.showLoading) opt.showLoading = false
    return await fetcher.get(key).refetch(opt)

  }
}

export const Refetcher = new RefetcherService();
