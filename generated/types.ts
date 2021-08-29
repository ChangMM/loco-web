export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** 单元格数据，类型为 string|number|boolean|array|null */
  CellData: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

/** 权限操作类型 */
export enum Action {
  Create = 'Create',
  Read = 'Read',
  Update = 'Update',
  Delete = 'Delete',
  Manage = 'Manage'
}

/** 创建Table列 */
export type AddColumnInput = {
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 字段类型 */
  fieldType: FieldType;
  /** 列的名字 */
  name: Scalars['String'];
  /** 配置 */
  config?: Maybe<ColumnConfigInput>;
};

/** 添加成员 */
export type AddMemberInput = {
  /** 团队ID */
  teamId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
  /** 角色类型 */
  roleType: RoleType;
};

/** 创建Table行 */
export type AddRowInput = {
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
};

/** 添加一行 with data */
export type AddRowWithDataInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 单元格数据 */
  cells: Array<CellWithDataInput>;
};

/** 新建表格 */
export type AddTableInput = {
  /** ID */
  id: Scalars['String'];
  /** 团队ID */
  teamId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
  /** 名字 */
  name: Scalars['String'];
};

/** 添加团队 */
export type AddTeamInput = {
  /** 名字 */
  name: Scalars['String'];
};

/** 创建 */
export type AddVersionInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
};

/** 创建视图 */
export type AddViewInput = {
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 类型 */
  type: ViewType;
  /** 看板基准列 */
  stackedColumnId?: Maybe<Scalars['String']>;
};

/** 一个单元格 */
export type Cell = {
  __typename?: 'Cell';
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 行ID */
  rowId: Scalars['String'];
  /** 字段类型 */
  fieldType: FieldType;
  /** 单元格数据 */
  data?: Maybe<Scalars['CellData']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** 该单元格的选项 */
  options?: Maybe<Array<Option>>;
};

/** 聚合查询 */
export type CellAggregate = {
  __typename?: 'CellAggregate';
  /** 总数 */
  count: Scalars['Int'];
};


/** 筛选条件 */
export type CellWhereInput = {
  /** 列ID */
  columnId: Scalars['String'];
  /** 行ID */
  rowId?: Maybe<Scalars['String']>;
  /** 字段类型 */
  fieldType?: Maybe<FieldType>;
};

/** 新增Cell */
export type CellWithDataInput = {
  /** 列ID */
  columnId: Scalars['String'];
  /** 字段类型 */
  fieldType: FieldType;
  /** 单元格数据 */
  data?: Maybe<Scalars['CellData']>;
};

/** connection */
export type CellsConnection = {
  __typename?: 'CellsConnection';
  items: Array<Cell>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 表格协作者 */
export type Collaborator = {
  __typename?: 'Collaborator';
  id: Scalars['Int'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
  /** 角色ID */
  roleId: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** user */
  user: User;
};

/** 聚合查询 */
export type CollaboratorAggregate = {
  __typename?: 'CollaboratorAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type CollaboratorWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** 表格ID */
  tableId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type CollaboratorsConnection = {
  __typename?: 'CollaboratorsConnection';
  items: Array<Collaborator>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 列数据 */
export type Column = {
  __typename?: 'Column';
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 字段类型 */
  fieldType: FieldType;
  /** 是否是主列 */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** 配置 */
  config?: Maybe<ColumnConfig>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** option */
  options: Array<Option>;
};

/** 聚合查询 */
export type ColumnAggregate = {
  __typename?: 'ColumnAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 列配置 */
export type ColumnConfig = {
  __typename?: 'ColumnConfig';
  /** @LongText, 是否开启富文本 */
  useRichText?: Maybe<Scalars['Boolean']>;
  /** @Collaborator, 是否可以多个 */
  multiCollaborator?: Maybe<Scalars['Boolean']>;
  /** @Collaborator, 是否需要通知 */
  shouldNotify?: Maybe<Scalars['Boolean']>;
  /** @Date, 日期格式 */
  dateFormat?: Maybe<DateFormat>;
  /** @Date, 时间格式 */
  timeFormat?: Maybe<TimeFormat>;
  /** @Date, 包含时间 */
  includeTime?: Maybe<Scalars['Boolean']>;
};

/** 列配置 */
export type ColumnConfigInput = {
  /** @LongText, 是否开启富文本 */
  useRichText?: Maybe<Scalars['Boolean']>;
  /** @Collaborator, 是否可以多个 */
  multiCollaborator?: Maybe<Scalars['Boolean']>;
  /** @Collaborator, 是否需要通知 */
  shouldNotify?: Maybe<Scalars['Boolean']>;
  /** @Date, 日期格式 */
  dateFormat?: Maybe<DateFormat>;
  /** @Date, 时间格式 */
  timeFormat?: Maybe<TimeFormat>;
  /** @Date, 包含时间 */
  includeTime?: Maybe<Scalars['Boolean']>;
};

/** 筛选条件 */
export type ColumnWhereInput = {
  /** 表格ID */
  tableId: Scalars['String'];
};

/** connection */
export type ColumnsConnection = {
  __typename?: 'ColumnsConnection';
  items: Array<Column>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 评论表 */
export type Comment = {
  __typename?: 'Comment';
  id?: Maybe<Scalars['Int']>;
  /** 用户id */
  userId?: Maybe<Scalars['Int']>;
  /** 根评论id */
  rootId?: Maybe<Scalars['Int']>;
  /** 父级id */
  parentId?: Maybe<Scalars['Int']>;
  /** 内容 */
  content?: Maybe<Scalars['String']>;
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
  /** 状态 */
  status?: Maybe<CommentStatus>;
  /** 点赞数 */
  likeCount?: Maybe<Scalars['Int']>;
  /** 图片,多url用逗号分隔,eg：url1,url2,url3 */
  images?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  parentComment?: Maybe<Comment>;
};

/** 聚合查询 */
export type CommentAggregate = {
  __typename?: 'CommentAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 评论状态 */
export enum CommentStatus {
  IsNull = 'isNull',
  NotAudited = 'notAudited',
  AuditSuccess = 'auditSuccess',
  AuditFail = 'auditFail',
  Nonsense = 'nonsense'
}

/** 筛选条件 */
export type CommentWhereInput = {
  /** 用户ID */
  id?: Maybe<Scalars['Int']>;
  /** 状态 */
  status?: Maybe<CommentStatus>;
  /** 用户id */
  userId?: Maybe<Scalars['Int']>;
  /** 在状态中筛选 */
  status_in?: Maybe<Array<CommentStatus>>;
  /** 根评论id */
  rootId?: Maybe<Scalars['Int']>;
};

/** connection */
export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  items: Array<Comment>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 筛选连接类型 */
export enum ConjunctionType {
  Or = 'Or',
  And = 'And'
}

/** 创建 */
export type CreateCellInput = {
  /** 列ID */
  columnId: Scalars['String'];
  /** 行ID */
  rowId: Scalars['String'];
  /** 字段类型 */
  fieldType: FieldType;
  /** 单元格数据 */
  data?: Maybe<Scalars['String']>;
};

/** 创建 */
export type CreateCollaboratorInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreateColumnInput = {
  /** 名字 */
  name: Scalars['String'];
  /** 字段类型 */
  fieldType: FieldType;
  /** 是否是主列 */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** 是否可见 */
  visible?: Maybe<Scalars['Boolean']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 排序 */
  sort?: Maybe<Scalars['Int']>;
};

/** 创建 */
export type CreateCommentInput = {
  /** 剧本id */
  scriptId?: Maybe<Scalars['Int']>;
  /** 用户id */
  userId?: Maybe<Scalars['Int']>;
  /** 父级id */
  parentId?: Maybe<Scalars['Int']>;
  /** 根评论id */
  rootId?: Maybe<Scalars['Int']>;
  /** 内容 */
  content?: Maybe<Scalars['String']>;
  /** 图片,多url用逗号分隔,eg：url1,url2,url3 */
  images?: Maybe<Scalars['String']>;
};

/** 创建 */
export type CreateFeedbackInput = {
  /** id */
  userId?: Maybe<Scalars['Int']>;
  /** 标题 */
  title: Scalars['String'];
  /** 反馈内容 */
  content?: Maybe<Scalars['String']>;
  /** 联系方式 */
  contact: Scalars['String'];
  /** 图片,多url用逗号分隔,eg：url1,url2,url3 */
  images?: Maybe<Scalars['String']>;
};

/** 创建筛选 */
export type CreateFilterInput = {
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 视图ID */
  viewId: Scalars['String'];
  /** 筛选连接类型 */
  conjunction: ConjunctionType;
  /** 操作类型 */
  operator: OperatorType;
  /** 字段类型 */
  fieldType: FieldType;
};

/** 创建 */
export type CreateGroupInput = {
  /** 列ID */
  columnId: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 视图ID */
  viewId: Scalars['String'];
  /** 是否升序 */
  ascending: Scalars['Boolean'];
  /** ID */
  id: Scalars['String'];
};

/** 创建 */
export type CreateInvitationTokenInput = {
  /** 团队ID */
  teamId: Scalars['String'];
};

/** 创建 */
export type CreateMemberInput = {
  /** 团队ID */
  teamId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建选项 */
export type CreateOptionInput = {
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 颜色 */
  color: Scalars['String'];
};

/** 创建 */
export type CreateOrgInput = {
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 头像 */
  avatar: Scalars['String'];
};

/** 创建 */
export type CreateOrgUserInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 创建 */
export type CreatePermissionInput = {
  /** 权限名称 */
  name?: Maybe<Scalars['String']>;
  /** 权限码 */
  code?: Maybe<Scalars['String']>;
};

/** 创建 */
export type CreateRoleInput = {
  /** 角色名 */
  name: RoleType;
};

/** 创建 */
export type CreateRolePermissionInput = {
  /** 权限ID */
  permissionId?: Maybe<Scalars['Int']>;
  /** 角色ID */
  roleId?: Maybe<Scalars['Int']>;
};

/** 创建 */
export type CreateRowInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 排序 */
  sortBaseTable?: Maybe<Scalars['Int']>;
};

/** 创建 */
export type CreateSortInput = {
  /** 列ID */
  columnId: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 视图ID */
  viewId: Scalars['String'];
  /** 是否升序 */
  ascending: Scalars['Boolean'];
  /** ID */
  id: Scalars['String'];
};

/** 创建 */
export type CreateTableInput = {
  /** ID */
  id: Scalars['String'];
  /** 团队ID */
  teamId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
};

/** 创建 */
export type CreateTeamInput = {
  /** 创建者用户ID */
  creatorId: Scalars['Int'];
  /** 所有者ID */
  ownerId: Scalars['Int'];
  /** 唯一用户名 */
  login: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 头像 */
  avatar: Scalars['String'];
  /** 是否公开 */
  public: Scalars['Boolean'];
};

/** 创建 */
export type CreateUserInput = {
  username: Scalars['String'];
  nickname: Scalars['String'];
};

/** 创建 */
export type CreateVersionInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
};

/** 创建 */
export type CreateVersionedCellInput = {
  /** 列ID */
  columnId: Scalars['String'];
  /** 行ID */
  rowId: Scalars['String'];
  /** 字段类型 */
  fieldType: FieldType;
  /** 单元格数据 */
  data?: Maybe<Scalars['String']>;
};

/** 创建 */
export type CreateVersionedColumnInput = {
  /** 名字 */
  name: Scalars['String'];
  /** 字段类型 */
  fieldType: FieldType;
  /** 是否是主列 */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** 是否可见 */
  visible?: Maybe<Scalars['Boolean']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 排序 */
  sort?: Maybe<Scalars['Int']>;
};

/** 创建选项 */
export type CreateVersionedOptionInput = {
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 颜色 */
  color: Scalars['String'];
};

/** 创建 */
export type CreateVersionedRowInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 排序 */
  sortBaseTable?: Maybe<Scalars['Int']>;
};

/** 创建 */
export type CreateViewColumnInput = {
  /** 列ID */
  columnId?: Maybe<Scalars['String']>;
  /** 表格ID */
  tableId: Scalars['String'];
  /** 视图ID */
  viewId: Scalars['String'];
  /** 宽度 */
  width?: Maybe<Scalars['Int']>;
  /** 是否可见 */
  visible?: Maybe<Scalars['Boolean']>;
};

/** 创建 */
export type CreateViewInput = {
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 类型 */
  type: ViewType;
};

/** 创建 */
export type CreateVisitInput = {
  /** 最近访问的 teamId */
  teamId: Scalars['String'];
  /** 最近访问的 tableId */
  tableId: Scalars['String'];
  /** 最近访问的viewId */
  viewId: Scalars['String'];
  /** 视图类型 */
  viewType?: Maybe<ViewType>;
};

export enum DateFormat {
  Slash = 'Slash',
  Line = 'Line',
  Friendly = 'Friendly',
  Us = 'Us'
}


/** 删除 */
export type DeleteCellInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteCollaboratorInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteColumnInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteCommentInput = {
  /** 剧本id */
  scriptId?: Maybe<Scalars['Int']>;
  /** 用户id */
  userId?: Maybe<Scalars['Int']>;
  /** 父级id */
  parentId?: Maybe<Scalars['Int']>;
  /** 根评论id */
  rootId?: Maybe<Scalars['Int']>;
  /** 内容 */
  content?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteFeedbackInput = {
  /** id */
  userId?: Maybe<Scalars['Int']>;
  /** 标题 */
  title: Scalars['String'];
  /** 反馈内容 */
  content?: Maybe<Scalars['String']>;
  /** 联系方式 */
  contact: Scalars['String'];
  /** 图片,多url用逗号分隔,eg：url1,url2,url3 */
  images?: Maybe<Scalars['String']>;
  /** id */
  id?: Maybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteFilterInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteGroupInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除成员 */
export type DeleteInvitationTokenInput = {
  /** ID */
  id: Scalars['Float'];
};

/** 删除成员 */
export type DeleteMemberInput = {
  /** member ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteOptionInput = {
  /** 名字 */
  name?: Maybe<Scalars['String']>;
  /** 颜色 */
  color?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteOrgInput = {
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 头像 */
  avatar: Scalars['String'];
  /** ID */
  id: Scalars['String'];
};

/** 删除成员 */
export type DeleteOrgUserInput = {
  /** member ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeletePermissionInput = {
  /** 权限名称 */
  name?: Maybe<Scalars['String']>;
  /** 权限码 */
  code?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteRoleInput = {
  /** 角色名 */
  name: RoleType;
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteRolePermissionInput = {
  /** 权限ID */
  permissionId?: Maybe<Scalars['Int']>;
  /** 角色ID */
  roleId?: Maybe<Scalars['Int']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteRowInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 排序 */
  sortBaseTable?: Maybe<Scalars['Int']>;
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteSortInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteTableInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteTeamInput = {
  /** 创建者用户ID */
  creatorId: Scalars['Int'];
  /** 所有者ID */
  ownerId: Scalars['Int'];
  /** 唯一用户名 */
  login: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 头像 */
  avatar: Scalars['String'];
  /** 是否公开 */
  public: Scalars['Boolean'];
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteUserInput = {
  username: Scalars['String'];
  nickname: Scalars['String'];
  /** id */
  id?: Maybe<Scalars['Int']>;
};

/** 删除 */
export type DeleteVersionInput = {
  /** ID */
  id: Scalars['Float'];
};

/** 删除 */
export type DeleteVersionedCellInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteVersionedColumnInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteVersionedOptionInput = {
  /** 名字 */
  name?: Maybe<Scalars['String']>;
  /** 颜色 */
  color?: Maybe<Scalars['String']>;
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteVersionedRowInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 排序 */
  sortBaseTable?: Maybe<Scalars['Int']>;
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteViewColumnInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteViewInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type DeleteVisitInput = {
  /** ID */
  id: Scalars['Float'];
};

/** 退出团队 */
export type ExitTeamInput = {
  /** member ID */
  id: Scalars['String'];
};

/** 反馈 */
export type Feedback = {
  __typename?: 'Feedback';
  id: Scalars['Int'];
  /** id */
  userId?: Maybe<Scalars['Int']>;
  /** 标题 */
  title: Scalars['String'];
  /** 反馈内容 */
  content?: Maybe<Scalars['String']>;
  /** 联系方式 */
  contact: Scalars['String'];
  /** 图片,多url用逗号分隔,eg：url1,url2,url3 */
  images?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
};

/** 聚合查询 */
export type FeedbackAggregate = {
  __typename?: 'FeedbackAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type FeedbackWhereInput = {
  /** id */
  id?: Maybe<Scalars['Int']>;
};

/** connection */
export type FeedbacksConnection = {
  __typename?: 'FeedbacksConnection';
  items: Array<Feedback>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 字段类型 */
export enum FieldType {
  Locale = 'Locale',
  Key = 'Key',
  Namespace = 'Namespace',
  SingleLineText = 'SingleLineText',
  LongText = 'LongText',
  Collaborator = 'Collaborator',
  SingleSelect = 'SingleSelect',
  CreatedAt = 'CreatedAt',
  UpdatedAt = 'UpdatedAt',
  CreatedBy = 'CreatedBy',
  LastUpdatedBy = 'LastUpdatedBy'
}

/** 筛选 */
export type Filter = {
  __typename?: 'Filter';
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 视图ID */
  viewId: Scalars['String'];
  /** 筛选连接类型 */
  conjunction: ConjunctionType;
  /** 操作类型 */
  operator: OperatorType;
  /** 字段类型 */
  fieldType: FieldType;
  /** 值 */
  value: Scalars['String'];
  /** 排序 */
  sortBaseView?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type FilterAggregate = {
  __typename?: 'FilterAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type FilterWhereInput = {
  /** 视图ID */
  viewId: Scalars['String'];
};

/** connection */
export type FiltersConnection = {
  __typename?: 'FiltersConnection';
  items: Array<Filter>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 分组 */
export type Group = {
  __typename?: 'Group';
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 视图ID */
  viewId: Scalars['String'];
  /** 是否升序 */
  ascending: Scalars['Boolean'];
  /** 是否显示空分组 */
  showEmptyGroup: Scalars['Boolean'];
  /** 排序 */
  sortBaseView?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type GroupAggregate = {
  __typename?: 'GroupAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type GroupWhereInput = {
  /** 视图ID */
  viewId: Scalars['String'];
};

/** connection */
export type GroupsConnection = {
  __typename?: 'GroupsConnection';
  items: Array<Group>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 邀请链接Token */
export type InvitationToken = {
  __typename?: 'InvitationToken';
  /** ID */
  id: Scalars['Float'];
  /** 团队ID */
  teamId: Scalars['String'];
  /** 角色类型 */
  roleType: RoleType;
  /** token */
  token: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type InvitationTokenAggregate = {
  __typename?: 'InvitationTokenAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type InvitationTokenWhereInput = {
  /** 团队 */
  teamId: Scalars['String'];
};

/** connection */
export type InvitationTokensConnection = {
  __typename?: 'InvitationTokensConnection';
  items: Array<InvitationToken>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 行高类型 */
export enum LeadingType {
  Short = 'Short',
  Medium = 'Medium',
  Tall = 'Tall',
  ExtraTall = 'ExtraTall'
}

/** 邮箱登录 */
export type LoginByEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 登录成功返回给客户端的数据 */
export type LoginSuccessPayload = {
  __typename?: 'LoginSuccessPayload';
  token: Scalars['String'];
  userId: Scalars['Int'];
  username?: Maybe<Scalars['String']>;
  user: User;
  visit: Visit;
};

/** 成员 */
export type Member = {
  __typename?: 'Member';
  /** ID */
  id: Scalars['String'];
  /** 团队ID */
  teamId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
  /** 角色ID */
  roleId: Scalars['Int'];
  /** 在团队中显示的昵称 */
  nickname: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** user */
  user: User;
  /** role */
  role: Role;
};

/** 聚合查询 */
export type MemberAggregate = {
  __typename?: 'MemberAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type MemberWhereInput = {
  /** 团队 */
  teamId?: Maybe<Scalars['String']>;
  /** 用户ID */
  userId?: Maybe<Scalars['Int']>;
};

/** connection */
export type MembersConnection = {
  __typename?: 'MembersConnection';
  items: Array<Member>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 更新Cell */
export type ModifyCellInput = {
  /** 列ID */
  columnId: Scalars['String'];
  /** 行ID */
  rowId: Scalars['String'];
  /** 单元格数据 */
  data?: Maybe<Scalars['CellData']>;
};

/** 修改列 */
export type ModifyColumnInput = {
  /** ID */
  id: Scalars['String'];
  /** 字段类型 */
  fieldType?: Maybe<FieldType>;
  /** 列的名字 */
  name?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 配置 */
  config?: Maybe<ColumnConfigInput>;
};

/** 修改成员角色类型 */
export type ModifyMemberRoleTypeInput = {
  /** member ID */
  id: Scalars['String'];
  /** 角色类型 */
  roleType: RoleType;
};

/** 修改秘密 */
export type ModifyPasswordInput = {
  /** 旧密码 */
  oldPassword: Scalars['String'];
  /** 新密码 */
  newPassword: Scalars['String'];
};

/** 修改行数据 */
export type ModifyRowInput = {
  /** 单元格数据 */
  cells: Array<ModifyCellInput>;
};

/** 修改visit数据 */
export type ModifyVisitInput = {
  /** 最近访问的 teamId */
  teamId: Scalars['String'];
  /** 最近访问的 tableId */
  tableId: Scalars['String'];
  /** 最近访问的viewId */
  viewId: Scalars['String'];
  /** 视图类型 */
  viewType?: Maybe<ViewType>;
  /** ID */
  id: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 创建 */
  createCell: Cell;
  /** 更新单个 */
  updateCell: Cell;
  /** 批量更新 */
  updateManyCells: Scalars['Boolean'];
  /** 更新或创建 */
  upsertCell: Cell;
  /** 删除单个 */
  deleteCell: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyCell: Scalars['Boolean'];
  /** 创建 */
  createCollaborator: Collaborator;
  /** 更新单个 */
  updateCollaborator: Collaborator;
  /** 批量更新 */
  updateManyCollaborators: Scalars['Boolean'];
  /** 更新或创建 */
  upsertCollaborator: Collaborator;
  /** 删除单个 */
  deleteCollaborator: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyCollaborator: Scalars['Boolean'];
  /** 创建 */
  createColumn: Column;
  /** 更新单个 */
  updateColumn: Column;
  /** 批量更新 */
  updateManyColumns: Scalars['Boolean'];
  /** 更新或创建 */
  upsertColumn: Column;
  /** 删除单个 */
  deleteColumn: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyColumn: Scalars['Boolean'];
  /** 创建 */
  createComment: Comment;
  /** 更新单个 */
  updateComment: Comment;
  /** 批量更新 */
  updateManyComments: Scalars['Boolean'];
  /** 更新或创建 */
  upsertComment: Comment;
  /** 删除单个 */
  deleteComment: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyComment: Scalars['Boolean'];
  /** 创建 */
  createFeedback: Feedback;
  /** 更新单个 */
  updateFeedback: Feedback;
  /** 批量更新 */
  updateManyFeedbacks: Scalars['Boolean'];
  /** 更新或创建 */
  upsertFeedback: Feedback;
  /** 删除单个 */
  deleteFeedback: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyFeedback: Scalars['Boolean'];
  /** 创建 */
  createFilter: Filter;
  /** 更新单个 */
  updateFilter: Filter;
  /** 批量更新 */
  updateManyFilters: Scalars['Boolean'];
  /** 更新或创建 */
  upsertFilter: Filter;
  /** 删除单个 */
  deleteFilter: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyFilter: Scalars['Boolean'];
  /** 排序 */
  sortFilters: Scalars['Boolean'];
  /** 创建 */
  createGroup: Group;
  /** 更新单个 */
  updateGroup: Group;
  /** 批量更新 */
  updateManyGroups: Scalars['Boolean'];
  /** 更新或创建 */
  upsertGroup: Group;
  /** 删除单个 */
  deleteGroup: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyGroup: Scalars['Boolean'];
  /** 排序 */
  sortGroups: Scalars['Boolean'];
  /** 创建 */
  createInvitationToken: InvitationToken;
  /** 更新单个 */
  updateInvitationToken: InvitationToken;
  /** 批量更新 */
  updateManyInvitationTokens: Scalars['Boolean'];
  /** 更新或创建 */
  upsertInvitationToken: InvitationToken;
  /** 删除单个 */
  deleteInvitationToken: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyInvitationToken: Scalars['Boolean'];
  /** 创建 */
  createMember: Member;
  /** 更新单个 */
  updateMember: Member;
  /** 批量更新 */
  updateManyMembers: Scalars['Boolean'];
  /** 更新或创建 */
  upsertMember: Member;
  /** 删除单个 */
  deleteMember: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyMember: Scalars['Boolean'];
  /** 创建 */
  createOption: Option;
  /** 更新单个 */
  updateOption: Option;
  /** 批量更新 */
  updateManyOptions: Scalars['Boolean'];
  /** 更新或创建 */
  upsertOption: Option;
  /** 删除单个 */
  deleteOption: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyOption: Scalars['Boolean'];
  /** 排序 */
  sortOptions: Scalars['Boolean'];
  /** 创建 */
  createOrg: Org;
  /** 更新单个 */
  updateOrg: Org;
  /** 批量更新 */
  updateManyOrgs: Scalars['Boolean'];
  /** 更新或创建 */
  upsertOrg: Org;
  /** 删除单个 */
  deleteOrg: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyOrg: Scalars['Boolean'];
  /** 创建 */
  createOrgUser: OrgUser;
  /** 更新单个 */
  updateOrgUser: OrgUser;
  /** 批量更新 */
  updateManyOrgUsers: Scalars['Boolean'];
  /** 更新或创建 */
  upsertOrgUser: OrgUser;
  /** 删除单个 */
  deleteOrgUser: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyOrgUser: Scalars['Boolean'];
  /** 创建 */
  createPermission: Permission;
  /** 更新单个 */
  updatePermission: Permission;
  /** 批量更新 */
  updateManyPermissions: Scalars['Boolean'];
  /** 更新或创建 */
  upsertPermission: Permission;
  /** 删除单个 */
  deletePermission: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyPermission: Scalars['Boolean'];
  /** 创建 */
  createRole: Role;
  /** 更新单个 */
  updateRole: Role;
  /** 批量更新 */
  updateManyRoles: Scalars['Boolean'];
  /** 更新或创建 */
  upsertRole: Role;
  /** 删除单个 */
  deleteRole: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyRole: Scalars['Boolean'];
  /** 创建 */
  createRolePermission: RolePermission;
  /** 更新单个 */
  updateRolePermission: RolePermission;
  /** 批量更新 */
  updateManyRolePermissions: Scalars['Boolean'];
  /** 更新或创建 */
  upsertRolePermission: RolePermission;
  /** 删除单个 */
  deleteRolePermission: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyRolePermission: Scalars['Boolean'];
  /** 创建 */
  createRow: Row;
  /** 更新单个 */
  updateRow: Row;
  /** 批量更新 */
  updateManyRows: Scalars['Boolean'];
  /** 更新或创建 */
  upsertRow: Row;
  /** 删除单个 */
  deleteRow: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyRow: Scalars['Boolean'];
  /** 排序 */
  sortRows: Scalars['Boolean'];
  /** 创建 */
  createSort: Sort;
  /** 更新单个 */
  updateSort: Sort;
  /** 批量更新 */
  updateManySorts: Scalars['Boolean'];
  /** 更新或创建 */
  upsertSort: Sort;
  /** 删除单个 */
  deleteSort: Scalars['Boolean'];
  /** 批量删除 */
  deleteManySort: Scalars['Boolean'];
  /** 排序 */
  sortSorts: Scalars['Boolean'];
  /** 创建 */
  createTable: Table;
  /** 更新单个 */
  updateTable: Table;
  /** 批量更新 */
  updateManyTables: Scalars['Boolean'];
  /** 更新或创建 */
  upsertTable: Table;
  /** 删除单个 */
  deleteTable: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyTable: Scalars['Boolean'];
  /** 排序 */
  sortTables: Scalars['Boolean'];
  /** 创建 */
  createTeam: Team;
  /** 更新单个 */
  updateTeam: Team;
  /** 批量更新 */
  updateManyTeams: Scalars['Boolean'];
  /** 更新或创建 */
  upsertTeam: Team;
  /** 删除单个 */
  deleteTeam: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyTeam: Scalars['Boolean'];
  /** 创建 */
  createUser: User;
  /** 更新单个 */
  updateUser: User;
  /** 批量更新 */
  updateManyUsers: Scalars['Boolean'];
  /** 更新或创建 */
  upsertUser: User;
  /** 删除单个 */
  deleteUser: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyUser: Scalars['Boolean'];
  /** 创建 */
  createVersion: Version;
  /** 更新单个 */
  updateVersion: Version;
  /** 批量更新 */
  updateManyVersions: Scalars['Boolean'];
  /** 更新或创建 */
  upsertVersion: Version;
  /** 删除单个 */
  deleteVersion: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyVersion: Scalars['Boolean'];
  /** 排序 */
  sortVersions: Scalars['Boolean'];
  /** 创建 */
  createVersionedCell: VersionedCell;
  /** 更新单个 */
  updateVersionedCell: VersionedCell;
  /** 批量更新 */
  updateManyVersionedCells: Scalars['Boolean'];
  /** 更新或创建 */
  upsertVersionedCell: VersionedCell;
  /** 删除单个 */
  deleteVersionedCell: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyVersionedCell: Scalars['Boolean'];
  /** 创建 */
  createVersionedColumn: VersionedColumn;
  /** 更新单个 */
  updateVersionedColumn: VersionedColumn;
  /** 批量更新 */
  updateManyVersionedColumns: Scalars['Boolean'];
  /** 更新或创建 */
  upsertVersionedColumn: VersionedColumn;
  /** 删除单个 */
  deleteVersionedColumn: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyVersionedColumn: Scalars['Boolean'];
  /** 创建 */
  createVersionedOption: VersionedOption;
  /** 更新单个 */
  updateVersionedOption: VersionedOption;
  /** 批量更新 */
  updateManyVersionedOptions: Scalars['Boolean'];
  /** 更新或创建 */
  upsertVersionedOption: VersionedOption;
  /** 删除单个 */
  deleteVersionedOption: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyVersionedOption: Scalars['Boolean'];
  /** 创建 */
  createVersionedRow: VersionedRow;
  /** 更新单个 */
  updateVersionedRow: VersionedRow;
  /** 批量更新 */
  updateManyVersionedRows: Scalars['Boolean'];
  /** 更新或创建 */
  upsertVersionedRow: VersionedRow;
  /** 删除单个 */
  deleteVersionedRow: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyVersionedRow: Scalars['Boolean'];
  /** 排序 */
  sortVersionedRows: Scalars['Boolean'];
  /** 创建 */
  createView: View;
  /** 更新单个 */
  updateView: View;
  /** 批量更新 */
  updateManyViews: Scalars['Boolean'];
  /** 更新或创建 */
  upsertView: View;
  /** 删除单个 */
  deleteView: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyView: Scalars['Boolean'];
  /** 排序 */
  sortViews: Scalars['Boolean'];
  /** 创建 */
  createViewColumn: ViewColumn;
  /** 更新单个 */
  updateViewColumn: ViewColumn;
  /** 批量更新 */
  updateManyViewColumns: Scalars['Boolean'];
  /** 更新或创建 */
  upsertViewColumn: ViewColumn;
  /** 删除单个 */
  deleteViewColumn: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyViewColumn: Scalars['Boolean'];
  /** 排序 */
  sortViewColumns: Scalars['Boolean'];
  /** 创建 */
  createVisit: Visit;
  /** 更新单个 */
  updateVisit: Visit;
  /** 批量更新 */
  updateManyVisits: Scalars['Boolean'];
  /** 更新或创建 */
  upsertVisit: Visit;
  /** 删除单个 */
  deleteVisit: Scalars['Boolean'];
  /** 批量删除 */
  deleteManyVisit: Scalars['Boolean'];
  /** 使用Github登录 */
  loginByGithub: LoginSuccessPayload;
  /** 邮箱注册 */
  registerByEmail: LoginSuccessPayload;
  /** 邮箱登录 */
  loginByEmail: LoginSuccessPayload;
  /** 更新单元格 */
  modifyCell: Scalars['Boolean'];
  /** 新增Table列 */
  addColumn: Column;
  /** 删除Table列 */
  removeColumn: Scalars['Boolean'];
  /** 修改列 */
  modifyColumn: Scalars['Boolean'];
  /** 手动初始化 invitation token，不在实际业务中使用 */
  genInvitationToken: Scalars['Boolean'];
  /** 添加成员 */
  addMember: Member;
  /** 修改角色类型 */
  modifyMemberRoleType: Scalars['Boolean'];
  /** 删除成员，只有管理员以上才能操作 */
  removeMember: Scalars['Boolean'];
  /** 退出团队 */
  exitTeam: Scalars['Boolean'];
  /** 新增Table行 */
  addRow: Row;
  /** 新增带有数据的行 */
  addRowWithData: Row;
  /** 新增Table行 */
  modifyRow: Scalars['Boolean'];
  /** 删除Table行 */
  removeRow: Scalars['Boolean'];
  /** 创建Table */
  addTable: Table;
  /** 删除Table */
  removeTable: Scalars['Boolean'];
  /** 最近访问 */
  setAsLastVisited: Scalars['Boolean'];
  /** 新增团队 */
  addTeam: Team;
  /** 修改密码 */
  modifyPassword: Scalars['Boolean'];
  /** 新增版本 */
  addVersion: Version;
  /** 新增视图 */
  addView: View;
  /** 删除视图 */
  removeView: Scalars['Boolean'];
  /** 修改visit */
  modifyVisit: Scalars['Boolean'];
};


export type MutationCreateCellArgs = {
  input: CreateCellInput;
};


export type MutationUpdateCellArgs = {
  input: UpdateCellInput;
};


export type MutationUpdateManyCellsArgs = {
  input: UpdateManyCellInput;
};


export type MutationUpsertCellArgs = {
  input: UpsertCellInput;
};


export type MutationDeleteCellArgs = {
  input: DeleteCellInput;
};


export type MutationDeleteManyCellArgs = {
  input: DeleteCellInput;
};


export type MutationCreateCollaboratorArgs = {
  input: CreateCollaboratorInput;
};


export type MutationUpdateCollaboratorArgs = {
  input: UpdateCollaboratorInput;
};


export type MutationUpdateManyCollaboratorsArgs = {
  input: UpdateManyCollaboratorInput;
};


export type MutationUpsertCollaboratorArgs = {
  input: UpsertCollaboratorInput;
};


export type MutationDeleteCollaboratorArgs = {
  input: DeleteCollaboratorInput;
};


export type MutationDeleteManyCollaboratorArgs = {
  input: DeleteCollaboratorInput;
};


export type MutationCreateColumnArgs = {
  input: CreateColumnInput;
};


export type MutationUpdateColumnArgs = {
  input: UpdateColumnInput;
};


export type MutationUpdateManyColumnsArgs = {
  input: UpdateManyColumnInput;
};


export type MutationUpsertColumnArgs = {
  input: UpsertColumnInput;
};


export type MutationDeleteColumnArgs = {
  input: DeleteColumnInput;
};


export type MutationDeleteManyColumnArgs = {
  input: DeleteColumnInput;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateManyCommentsArgs = {
  input: UpdateManyCommentInput;
};


export type MutationUpsertCommentArgs = {
  input: UpsertCommentInput;
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationDeleteManyCommentArgs = {
  input: DeleteCommentInput;
};


export type MutationCreateFeedbackArgs = {
  input: CreateFeedbackInput;
};


export type MutationUpdateFeedbackArgs = {
  input: UpdateFeedbackInput;
};


export type MutationUpdateManyFeedbacksArgs = {
  input: UpdateManyFeedbackInput;
};


export type MutationUpsertFeedbackArgs = {
  input: UpsertFeedbackInput;
};


export type MutationDeleteFeedbackArgs = {
  input: DeleteFeedbackInput;
};


export type MutationDeleteManyFeedbackArgs = {
  input: DeleteFeedbackInput;
};


export type MutationCreateFilterArgs = {
  input: CreateFilterInput;
};


export type MutationUpdateFilterArgs = {
  input: UpdateFilterInput;
};


export type MutationUpdateManyFiltersArgs = {
  input: UpdateManyFilterInput;
};


export type MutationUpsertFilterArgs = {
  input: UpsertFilterInput;
};


export type MutationDeleteFilterArgs = {
  input: DeleteFilterInput;
};


export type MutationDeleteManyFilterArgs = {
  input: DeleteFilterInput;
};


export type MutationSortFiltersArgs = {
  input: SortFiltersInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationUpdateGroupArgs = {
  input: UpdateGroupInput;
};


export type MutationUpdateManyGroupsArgs = {
  input: UpdateManyGroupInput;
};


export type MutationUpsertGroupArgs = {
  input: UpsertGroupInput;
};


export type MutationDeleteGroupArgs = {
  input: DeleteGroupInput;
};


export type MutationDeleteManyGroupArgs = {
  input: DeleteGroupInput;
};


export type MutationSortGroupsArgs = {
  input: SortGroupsInput;
};


export type MutationCreateInvitationTokenArgs = {
  input: CreateInvitationTokenInput;
};


export type MutationUpdateInvitationTokenArgs = {
  input: UpdateInvitationTokenInput;
};


export type MutationUpdateManyInvitationTokensArgs = {
  input: UpdateManyInvitationTokenInput;
};


export type MutationUpsertInvitationTokenArgs = {
  input: UpsertInvitationTokenInput;
};


export type MutationDeleteInvitationTokenArgs = {
  input: DeleteInvitationTokenInput;
};


export type MutationDeleteManyInvitationTokenArgs = {
  input: DeleteInvitationTokenInput;
};


export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
};


export type MutationUpdateMemberArgs = {
  input: UpdateMemberInput;
};


export type MutationUpdateManyMembersArgs = {
  input: UpdateManyMemberInput;
};


export type MutationUpsertMemberArgs = {
  input: UpsertMemberInput;
};


export type MutationDeleteMemberArgs = {
  input: DeleteMemberInput;
};


export type MutationDeleteManyMemberArgs = {
  input: DeleteMemberInput;
};


export type MutationCreateOptionArgs = {
  input: CreateOptionInput;
};


export type MutationUpdateOptionArgs = {
  input: UpdateOptionInput;
};


export type MutationUpdateManyOptionsArgs = {
  input: UpdateManyOptionInput;
};


export type MutationUpsertOptionArgs = {
  input: UpsertOptionInput;
};


export type MutationDeleteOptionArgs = {
  input: DeleteOptionInput;
};


export type MutationDeleteManyOptionArgs = {
  input: DeleteOptionInput;
};


export type MutationSortOptionsArgs = {
  input: SortOptionsInput;
};


export type MutationCreateOrgArgs = {
  input: CreateOrgInput;
};


export type MutationUpdateOrgArgs = {
  input: UpdateOrgInput;
};


export type MutationUpdateManyOrgsArgs = {
  input: UpdateManyOrgInput;
};


export type MutationUpsertOrgArgs = {
  input: UpsertOrgInput;
};


export type MutationDeleteOrgArgs = {
  input: DeleteOrgInput;
};


export type MutationDeleteManyOrgArgs = {
  input: DeleteOrgInput;
};


export type MutationCreateOrgUserArgs = {
  input: CreateOrgUserInput;
};


export type MutationUpdateOrgUserArgs = {
  input: UpdateOrgUserInput;
};


export type MutationUpdateManyOrgUsersArgs = {
  input: UpdateManyOrgUserInput;
};


export type MutationUpsertOrgUserArgs = {
  input: UpsertOrgUserInput;
};


export type MutationDeleteOrgUserArgs = {
  input: DeleteOrgUserInput;
};


export type MutationDeleteManyOrgUserArgs = {
  input: DeleteOrgUserInput;
};


export type MutationCreatePermissionArgs = {
  input: CreatePermissionInput;
};


export type MutationUpdatePermissionArgs = {
  input: UpdatePermissionInput;
};


export type MutationUpdateManyPermissionsArgs = {
  input: UpdateManyPermissionInput;
};


export type MutationUpsertPermissionArgs = {
  input: UpsertPermissionInput;
};


export type MutationDeletePermissionArgs = {
  input: DeletePermissionInput;
};


export type MutationDeleteManyPermissionArgs = {
  input: DeletePermissionInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


export type MutationUpdateManyRolesArgs = {
  input: UpdateManyRoleInput;
};


export type MutationUpsertRoleArgs = {
  input: UpsertRoleInput;
};


export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationDeleteManyRoleArgs = {
  input: DeleteRoleInput;
};


export type MutationCreateRolePermissionArgs = {
  input: CreateRolePermissionInput;
};


export type MutationUpdateRolePermissionArgs = {
  input: UpdateRolePermissionInput;
};


export type MutationUpdateManyRolePermissionsArgs = {
  input: UpdateManyRolePermissionInput;
};


export type MutationUpsertRolePermissionArgs = {
  input: UpsertRolePermissionInput;
};


export type MutationDeleteRolePermissionArgs = {
  input: DeleteRolePermissionInput;
};


export type MutationDeleteManyRolePermissionArgs = {
  input: DeleteRolePermissionInput;
};


export type MutationCreateRowArgs = {
  input: CreateRowInput;
};


export type MutationUpdateRowArgs = {
  input: UpdateRowInput;
};


export type MutationUpdateManyRowsArgs = {
  input: UpdateManyRowInput;
};


export type MutationUpsertRowArgs = {
  input: UpsertRowInput;
};


export type MutationDeleteRowArgs = {
  input: DeleteRowInput;
};


export type MutationDeleteManyRowArgs = {
  input: DeleteRowInput;
};


export type MutationSortRowsArgs = {
  input: SortRowsInput;
};


export type MutationCreateSortArgs = {
  input: CreateSortInput;
};


export type MutationUpdateSortArgs = {
  input: UpdateSortInput;
};


export type MutationUpdateManySortsArgs = {
  input: UpdateManySortInput;
};


export type MutationUpsertSortArgs = {
  input: UpsertSortInput;
};


export type MutationDeleteSortArgs = {
  input: DeleteSortInput;
};


export type MutationDeleteManySortArgs = {
  input: DeleteSortInput;
};


export type MutationSortSortsArgs = {
  input: SortSortsInput;
};


export type MutationCreateTableArgs = {
  input: CreateTableInput;
};


export type MutationUpdateTableArgs = {
  input: UpdateTableInput;
};


export type MutationUpdateManyTablesArgs = {
  input: UpdateManyTableInput;
};


export type MutationUpsertTableArgs = {
  input: UpsertTableInput;
};


export type MutationDeleteTableArgs = {
  input: DeleteTableInput;
};


export type MutationDeleteManyTableArgs = {
  input: DeleteTableInput;
};


export type MutationSortTablesArgs = {
  input: SortTablesInput;
};


export type MutationCreateTeamArgs = {
  input: CreateTeamInput;
};


export type MutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


export type MutationUpdateManyTeamsArgs = {
  input: UpdateManyTeamInput;
};


export type MutationUpsertTeamArgs = {
  input: UpsertTeamInput;
};


export type MutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


export type MutationDeleteManyTeamArgs = {
  input: DeleteTeamInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUserInput;
};


export type MutationUpsertUserArgs = {
  input: UpsertUserInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteManyUserArgs = {
  input: DeleteUserInput;
};


export type MutationCreateVersionArgs = {
  input: CreateVersionInput;
};


export type MutationUpdateVersionArgs = {
  input: UpdateVersionInput;
};


export type MutationUpdateManyVersionsArgs = {
  input: UpdateManyVersionInput;
};


export type MutationUpsertVersionArgs = {
  input: UpsertVersionInput;
};


export type MutationDeleteVersionArgs = {
  input: DeleteVersionInput;
};


export type MutationDeleteManyVersionArgs = {
  input: DeleteVersionInput;
};


export type MutationSortVersionsArgs = {
  input: SortVersionsInput;
};


export type MutationCreateVersionedCellArgs = {
  input: CreateVersionedCellInput;
};


export type MutationUpdateVersionedCellArgs = {
  input: UpdateVersionedCellInput;
};


export type MutationUpdateManyVersionedCellsArgs = {
  input: UpdateManyVersionedCellInput;
};


export type MutationUpsertVersionedCellArgs = {
  input: UpsertVersionedCellInput;
};


export type MutationDeleteVersionedCellArgs = {
  input: DeleteVersionedCellInput;
};


export type MutationDeleteManyVersionedCellArgs = {
  input: DeleteVersionedCellInput;
};


export type MutationCreateVersionedColumnArgs = {
  input: CreateVersionedColumnInput;
};


export type MutationUpdateVersionedColumnArgs = {
  input: UpdateVersionedColumnInput;
};


export type MutationUpdateManyVersionedColumnsArgs = {
  input: UpdateManyVersionedColumnInput;
};


export type MutationUpsertVersionedColumnArgs = {
  input: UpsertVersionedColumnInput;
};


export type MutationDeleteVersionedColumnArgs = {
  input: DeleteVersionedColumnInput;
};


export type MutationDeleteManyVersionedColumnArgs = {
  input: DeleteVersionedColumnInput;
};


export type MutationCreateVersionedOptionArgs = {
  input: CreateVersionedOptionInput;
};


export type MutationUpdateVersionedOptionArgs = {
  input: UpdateVersionedOptionInput;
};


export type MutationUpdateManyVersionedOptionsArgs = {
  input: UpdateManyVersionedOptionInput;
};


export type MutationUpsertVersionedOptionArgs = {
  input: UpsertVersionedOptionInput;
};


export type MutationDeleteVersionedOptionArgs = {
  input: DeleteVersionedOptionInput;
};


export type MutationDeleteManyVersionedOptionArgs = {
  input: DeleteVersionedOptionInput;
};


export type MutationCreateVersionedRowArgs = {
  input: CreateVersionedRowInput;
};


export type MutationUpdateVersionedRowArgs = {
  input: UpdateVersionedRowInput;
};


export type MutationUpdateManyVersionedRowsArgs = {
  input: UpdateManyVersionedRowInput;
};


export type MutationUpsertVersionedRowArgs = {
  input: UpsertVersionedRowInput;
};


export type MutationDeleteVersionedRowArgs = {
  input: DeleteVersionedRowInput;
};


export type MutationDeleteManyVersionedRowArgs = {
  input: DeleteVersionedRowInput;
};


export type MutationSortVersionedRowsArgs = {
  input: SortVersionedRowsInput;
};


export type MutationCreateViewArgs = {
  input: CreateViewInput;
};


export type MutationUpdateViewArgs = {
  input: UpdateViewInput;
};


export type MutationUpdateManyViewsArgs = {
  input: UpdateManyViewInput;
};


export type MutationUpsertViewArgs = {
  input: UpsertViewInput;
};


export type MutationDeleteViewArgs = {
  input: DeleteViewInput;
};


export type MutationDeleteManyViewArgs = {
  input: DeleteViewInput;
};


export type MutationSortViewsArgs = {
  input: SortViewsInput;
};


export type MutationCreateViewColumnArgs = {
  input: CreateViewColumnInput;
};


export type MutationUpdateViewColumnArgs = {
  input: UpdateViewColumnInput;
};


export type MutationUpdateManyViewColumnsArgs = {
  input: UpdateManyViewColumnInput;
};


export type MutationUpsertViewColumnArgs = {
  input: UpsertViewColumnInput;
};


export type MutationDeleteViewColumnArgs = {
  input: DeleteViewColumnInput;
};


export type MutationDeleteManyViewColumnArgs = {
  input: DeleteViewColumnInput;
};


export type MutationSortViewColumnsArgs = {
  input: SortViewColumnsInput;
};


export type MutationCreateVisitArgs = {
  input: CreateVisitInput;
};


export type MutationUpdateVisitArgs = {
  input: UpdateVisitInput;
};


export type MutationUpdateManyVisitsArgs = {
  input: UpdateManyVisitInput;
};


export type MutationUpsertVisitArgs = {
  input: UpsertVisitInput;
};


export type MutationDeleteVisitArgs = {
  input: DeleteVisitInput;
};


export type MutationDeleteManyVisitArgs = {
  input: DeleteVisitInput;
};


export type MutationLoginByGithubArgs = {
  code: Scalars['String'];
};


export type MutationRegisterByEmailArgs = {
  input: RegisterByEmailInput;
};


export type MutationLoginByEmailArgs = {
  input: LoginByEmailInput;
};


export type MutationModifyCellArgs = {
  input: ModifyCellInput;
};


export type MutationAddColumnArgs = {
  input: AddColumnInput;
};


export type MutationRemoveColumnArgs = {
  input: RemoveColumnInput;
};


export type MutationModifyColumnArgs = {
  input: ModifyColumnInput;
};


export type MutationGenInvitationTokenArgs = {
  teamId: Scalars['String'];
};


export type MutationAddMemberArgs = {
  input: AddMemberInput;
};


export type MutationModifyMemberRoleTypeArgs = {
  input: ModifyMemberRoleTypeInput;
};


export type MutationRemoveMemberArgs = {
  input: RemoveMemberInput;
};


export type MutationExitTeamArgs = {
  input: ExitTeamInput;
};


export type MutationAddRowArgs = {
  input: AddRowInput;
};


export type MutationAddRowWithDataArgs = {
  input: AddRowWithDataInput;
};


export type MutationModifyRowArgs = {
  input: ModifyRowInput;
};


export type MutationRemoveRowArgs = {
  input: RemoveRowInput;
};


export type MutationAddTableArgs = {
  input: AddTableInput;
};


export type MutationRemoveTableArgs = {
  input: RemoveTableInput;
};


export type MutationSetAsLastVisitedArgs = {
  input: SetAsLastVisitedInput;
};


export type MutationAddTeamArgs = {
  input: AddTeamInput;
};


export type MutationModifyPasswordArgs = {
  input: ModifyPasswordInput;
};


export type MutationAddVersionArgs = {
  input: AddVersionInput;
};


export type MutationAddViewArgs = {
  input: AddViewInput;
};


export type MutationRemoveViewArgs = {
  input: RemoveViewInput;
};


export type MutationModifyVisitArgs = {
  input: ModifyVisitInput;
};

/** 操作类型 */
export enum OperatorType {
  IsEmpty = 'IsEmpty',
  IsNotEmpt = 'IsNotEmpt',
  Contains = 'Contains',
  DoesNotContain = 'DoesNotContain',
  Is = 'Is',
  IsNot = 'IsNot',
  Equal = 'Equal',
  NotEqual = 'NotEqual',
  LessThan = 'LessThan',
  MoreThan = 'MoreThan',
  LessThanOrEqual = 'LessThanOrEqual',
  MoreThanOrEqual = 'MoreThanOrEqual',
  Filename = 'Filename',
  Filetype = 'Filetype'
}

/** 选项 */
export type Option = {
  __typename?: 'Option';
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 颜色 */
  color: Scalars['String'];
  /** 基于列排序 */
  sortBaseColumn?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type OptionAggregate = {
  __typename?: 'OptionAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type OptionWhereInput = {
  /** id */
  id?: Maybe<Scalars['Int']>;
};

/** connection */
export type OptionsConnection = {
  __typename?: 'OptionsConnection';
  items: Array<Option>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 组织 */
export type Org = {
  __typename?: 'Org';
  /** ID */
  id: Scalars['String'];
  /** 创建者用户ID */
  creatorId: Scalars['Int'];
  /** 所有者ID */
  ownerId: Scalars['Int'];
  /** 短网址 */
  slug: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 头像 */
  avatar: Scalars['String'];
  /** quarterly, year... */
  billing: Scalars['String'];
  googleSsoOnly: Scalars['Boolean'];
  samlSsoOnly: Scalars['Boolean'];
  /** 逾期时间 */
  accountTypeChangedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type OrgAggregate = {
  __typename?: 'OrgAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 组织用户表 */
export type OrgUser = {
  __typename?: 'OrgUser';
  /** ID */
  id: Scalars['String'];
  /** 团队ID */
  orgId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
  /** 账户类型 */
  accountType: Scalars['String'];
  /** 账户类型变化时间 */
  accountTypeChangedAt?: Maybe<Scalars['DateTime']>;
  /** 账户权限，admin,member,readonly... */
  permission: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type OrgUserAggregate = {
  __typename?: 'OrgUserAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type OrgUserWhereInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** connection */
export type OrgUsersConnection = {
  __typename?: 'OrgUsersConnection';
  items: Array<OrgUser>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 筛选条件 */
export type OrgWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** connection */
export type OrgsConnection = {
  __typename?: 'OrgsConnection';
  items: Array<Org>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 权限表 */
export type Permission = {
  __typename?: 'Permission';
  id: Scalars['Int'];
  /** 权限名称 */
  name?: Maybe<Scalars['String']>;
  /** 权限码 */
  code?: Maybe<Scalars['String']>;
  /** 权限描述 */
  desc?: Maybe<Scalars['String']>;
  /** 权限操作类型 */
  action?: Maybe<Action>;
  /** 主题 */
  subject?: Maybe<Scalars['String']>;
  /** 条件 */
  conditions?: Maybe<Scalars['String']>;
  /** 属性 */
  fields?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type PermissionAggregate = {
  __typename?: 'PermissionAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type PermissionWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** connection */
export type PermissionsConnection = {
  __typename?: 'PermissionsConnection';
  items: Array<Permission>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  /** 获取单个 */
  cell: Cell;
  /** 获取列表 */
  cells: Array<Cell>;
  /** 获取分页列表 */
  cellsConnection: CellsConnection;
  /** 聚合查询 */
  cellAggregate: CellAggregate;
  /** 获取单个 */
  collaborator: Collaborator;
  /** 获取列表 */
  collaborators: Array<Collaborator>;
  /** 获取分页列表 */
  collaboratorsConnection: CollaboratorsConnection;
  /** 聚合查询 */
  collaboratorAggregate: CollaboratorAggregate;
  /** 获取单个 */
  column: Column;
  /** 获取列表 */
  columns: Array<Column>;
  /** 获取分页列表 */
  columnsConnection: ColumnsConnection;
  /** 聚合查询 */
  columnAggregate: ColumnAggregate;
  /** 获取单个 */
  comment: Comment;
  /** 获取列表 */
  comments: Array<Comment>;
  /** 获取分页列表 */
  commentsConnection: CommentsConnection;
  /** 聚合查询 */
  commentAggregate: CommentAggregate;
  /** 获取单个 */
  feedback: Feedback;
  /** 获取列表 */
  feedbacks: Array<Feedback>;
  /** 获取分页列表 */
  feedbacksConnection: FeedbacksConnection;
  /** 聚合查询 */
  feedbackAggregate: FeedbackAggregate;
  /** 获取单个 */
  filter: Filter;
  /** 获取列表 */
  filters: Array<Filter>;
  /** 获取分页列表 */
  filtersConnection: FiltersConnection;
  /** 聚合查询 */
  filterAggregate: FilterAggregate;
  /** 获取单个 */
  group: Group;
  /** 获取列表 */
  groups: Array<Group>;
  /** 获取分页列表 */
  groupsConnection: GroupsConnection;
  /** 聚合查询 */
  groupAggregate: GroupAggregate;
  /** 获取单个 */
  invitationToken: InvitationToken;
  /** 获取列表 */
  invitationTokens: Array<InvitationToken>;
  /** 获取分页列表 */
  invitationTokensConnection: InvitationTokensConnection;
  /** 聚合查询 */
  invitationTokenAggregate: InvitationTokenAggregate;
  /** 获取单个 */
  member: Member;
  /** 获取列表 */
  members: Array<Member>;
  /** 获取分页列表 */
  membersConnection: MembersConnection;
  /** 聚合查询 */
  memberAggregate: MemberAggregate;
  /** 获取单个 */
  option: Option;
  /** 获取列表 */
  options: Array<Option>;
  /** 获取分页列表 */
  optionsConnection: OptionsConnection;
  /** 聚合查询 */
  optionAggregate: OptionAggregate;
  /** 获取单个 */
  org: Org;
  /** 获取列表 */
  orgs: Array<Org>;
  /** 获取分页列表 */
  orgsConnection: OrgsConnection;
  /** 聚合查询 */
  orgAggregate: OrgAggregate;
  /** 获取单个 */
  orgUser: OrgUser;
  /** 获取列表 */
  orgUsers: Array<OrgUser>;
  /** 获取分页列表 */
  orgUsersConnection: OrgUsersConnection;
  /** 聚合查询 */
  orgUserAggregate: OrgUserAggregate;
  /** 获取单个 */
  permission: Permission;
  /** 获取列表 */
  permissions: Array<Permission>;
  /** 获取分页列表 */
  permissionsConnection: PermissionsConnection;
  /** 聚合查询 */
  permissionAggregate: PermissionAggregate;
  /** 获取单个 */
  role: Role;
  /** 获取列表 */
  roles: Array<Role>;
  /** 获取分页列表 */
  rolesConnection: RolesConnection;
  /** 聚合查询 */
  roleAggregate: RoleAggregate;
  /** 获取单个 */
  rolePermission: RolePermission;
  /** 获取列表 */
  rolePermissions: Array<RolePermission>;
  /** 获取分页列表 */
  rolePermissionsConnection: RolePermissionsConnection;
  /** 聚合查询 */
  rolePermissionAggregate: RolePermissionAggregate;
  /** 获取单个 */
  row: Row;
  /** 获取列表 */
  rows: Array<Row>;
  /** 获取分页列表 */
  rowsConnection: RowsConnection;
  /** 聚合查询 */
  rowAggregate: RowAggregate;
  /** 获取单个 */
  sort: Sort;
  /** 获取列表 */
  sorts: Array<Sort>;
  /** 获取分页列表 */
  sortsConnection: SortsConnection;
  /** 聚合查询 */
  sortAggregate: SortAggregate;
  /** 获取单个 */
  table: Table;
  /** 获取列表 */
  tables: Array<Table>;
  /** 获取分页列表 */
  tablesConnection: TablesConnection;
  /** 聚合查询 */
  tableAggregate: TableAggregate;
  /** 获取单个 */
  team: Team;
  /** 获取列表 */
  teams: Array<Team>;
  /** 获取分页列表 */
  teamsConnection: TeamsConnection;
  /** 聚合查询 */
  teamAggregate: TeamAggregate;
  /** 获取单个 */
  user: User;
  /** 获取列表 */
  users: Array<User>;
  /** 获取分页列表 */
  usersConnection: UsersConnection;
  /** 聚合查询 */
  userAggregate: UserAggregate;
  /** 获取单个 */
  version: Version;
  /** 获取列表 */
  versions: Array<Version>;
  /** 获取分页列表 */
  versionsConnection: VersionsConnection;
  /** 聚合查询 */
  versionAggregate: VersionAggregate;
  /** 获取单个 */
  versionedCell: VersionedCell;
  /** 获取列表 */
  versionedCells: Array<VersionedCell>;
  /** 获取分页列表 */
  versionedCellsConnection: VersionedCellsConnection;
  /** 聚合查询 */
  versionedCellAggregate: VersionedCellAggregate;
  /** 获取单个 */
  versionedColumn: VersionedColumn;
  /** 获取列表 */
  versionedColumns: Array<VersionedColumn>;
  /** 获取分页列表 */
  versionedColumnsConnection: VersionedColumnsConnection;
  /** 聚合查询 */
  versionedColumnAggregate: VersionedColumnAggregate;
  /** 获取单个 */
  versionedOption: VersionedOption;
  /** 获取列表 */
  versionedOptions: Array<VersionedOption>;
  /** 获取分页列表 */
  versionedOptionsConnection: VersionedOptionsConnection;
  /** 聚合查询 */
  versionedOptionAggregate: VersionedOptionAggregate;
  /** 获取单个 */
  versionedRow: VersionedRow;
  /** 获取列表 */
  versionedRows: Array<VersionedRow>;
  /** 获取分页列表 */
  versionedRowsConnection: VersionedRowsConnection;
  /** 聚合查询 */
  versionedRowAggregate: VersionedRowAggregate;
  /** 获取单个 */
  view: View;
  /** 获取列表 */
  views: Array<View>;
  /** 获取分页列表 */
  viewsConnection: ViewsConnection;
  /** 聚合查询 */
  viewAggregate: ViewAggregate;
  /** 获取单个 */
  viewColumn: ViewColumn;
  /** 获取列表 */
  viewColumns: Array<ViewColumn>;
  /** 获取分页列表 */
  viewColumnsConnection: ViewColumnsConnection;
  /** 聚合查询 */
  viewColumnAggregate: ViewColumnAggregate;
  /** 获取单个 */
  visit: Visit;
  /** 获取列表 */
  visits: Array<Visit>;
  /** 获取分页列表 */
  visitsConnection: VisitsConnection;
  /** 聚合查询 */
  visitAggregate: VisitAggregate;
  /** 最大行index */
  maxRowSort: Scalars['Float'];
  /** 最大的行 */
  maxRow: Row;
  /** 获取自己拥有的团队 */
  ownedTeams: Array<Team>;
  /** 搜索用户 */
  searchUsers: Array<User>;
  /** 最大行index */
  maxViewColumnSort: Scalars['Float'];
};


export type QueryCellArgs = {
  id: Scalars['String'];
};


export type QueryCellsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<CellWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryCellsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<CellWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryCellAggregateArgs = {
  where?: Maybe<CellWhereInput>;
};


export type QueryCollaboratorArgs = {
  id: Scalars['Int'];
};


export type QueryCollaboratorsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<CollaboratorWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryCollaboratorsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<CollaboratorWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryCollaboratorAggregateArgs = {
  where?: Maybe<CollaboratorWhereInput>;
};


export type QueryColumnArgs = {
  id: Scalars['String'];
};


export type QueryColumnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<ColumnWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryColumnsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<ColumnWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryColumnAggregateArgs = {
  where?: Maybe<ColumnWhereInput>;
};


export type QueryCommentArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryCommentsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryCommentsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<CommentWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryCommentAggregateArgs = {
  where?: Maybe<CommentWhereInput>;
};


export type QueryFeedbackArgs = {
  id: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  contact: Scalars['String'];
  images?: Maybe<Scalars['String']>;
};


export type QueryFeedbacksArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<FeedbackWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryFeedbacksConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<FeedbackWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryFeedbackAggregateArgs = {
  where?: Maybe<FeedbackWhereInput>;
};


export type QueryFilterArgs = {
  id: Scalars['String'];
};


export type QueryFiltersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<FilterWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryFiltersConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<FilterWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryFilterAggregateArgs = {
  where?: Maybe<FilterWhereInput>;
};


export type QueryGroupArgs = {
  id: Scalars['String'];
};


export type QueryGroupsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryGroupsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<GroupWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryGroupAggregateArgs = {
  where?: Maybe<GroupWhereInput>;
};


export type QueryInvitationTokenArgs = {
  id: Scalars['Float'];
};


export type QueryInvitationTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<InvitationTokenWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryInvitationTokensConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<InvitationTokenWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryInvitationTokenAggregateArgs = {
  where?: Maybe<InvitationTokenWhereInput>;
};


export type QueryMemberArgs = {
  id: Scalars['String'];
};


export type QueryMembersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryMembersConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryMemberAggregateArgs = {
  where?: Maybe<MemberWhereInput>;
};


export type QueryOptionArgs = {
  columnId: Scalars['String'];
};


export type QueryOptionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<OptionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryOptionsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<OptionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryOptionAggregateArgs = {
  where?: Maybe<OptionWhereInput>;
};


export type QueryOrgArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryOrgsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<OrgWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryOrgsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<OrgWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryOrgAggregateArgs = {
  where?: Maybe<OrgWhereInput>;
};


export type QueryOrgUserArgs = {
  id: Scalars['String'];
};


export type QueryOrgUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<OrgUserWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryOrgUsersConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<OrgUserWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryOrgUserAggregateArgs = {
  where?: Maybe<OrgUserWhereInput>;
};


export type QueryPermissionArgs = {
  id: Scalars['Int'];
};


export type QueryPermissionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryPermissionsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryPermissionAggregateArgs = {
  where?: Maybe<PermissionWhereInput>;
};


export type QueryRoleArgs = {
  id: Scalars['Int'];
};


export type QueryRolesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryRolesConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryRoleAggregateArgs = {
  where?: Maybe<RoleWhereInput>;
};


export type QueryRolePermissionArgs = {
  id: Scalars['Int'];
};


export type QueryRolePermissionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<RolePermissionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryRolePermissionsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<RolePermissionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryRolePermissionAggregateArgs = {
  where?: Maybe<RolePermissionWhereInput>;
};


export type QueryRowArgs = {
  id: Scalars['String'];
};


export type QueryRowsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<RowWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryRowsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<RowWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryRowAggregateArgs = {
  where?: Maybe<RowWhereInput>;
};


export type QuerySortArgs = {
  id: Scalars['String'];
};


export type QuerySortsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<SortWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QuerySortsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<SortWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QuerySortAggregateArgs = {
  where?: Maybe<SortWhereInput>;
};


export type QueryTableArgs = {
  id: Scalars['String'];
};


export type QueryTablesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryTablesConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<TableWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryTableAggregateArgs = {
  where?: Maybe<TableWhereInput>;
};


export type QueryTeamArgs = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryTeamsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryTeamsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<TeamWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryTeamAggregateArgs = {
  where?: Maybe<TeamWhereInput>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryUsersConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryUserAggregateArgs = {
  where?: Maybe<UserWhereInput>;
};


export type QueryVersionArgs = {
  id: Scalars['Float'];
};


export type QueryVersionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionAggregateArgs = {
  where?: Maybe<VersionWhereInput>;
};


export type QueryVersionedCellArgs = {
  id: Scalars['String'];
};


export type QueryVersionedCellsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionedCellWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionedCellsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionedCellWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionedCellAggregateArgs = {
  where?: Maybe<VersionedCellWhereInput>;
};


export type QueryVersionedColumnArgs = {
  id: Scalars['String'];
};


export type QueryVersionedColumnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionedColumnWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionedColumnsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionedColumnWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionedColumnAggregateArgs = {
  where?: Maybe<VersionedColumnWhereInput>;
};


export type QueryVersionedOptionArgs = {
  versionedColumnId: Scalars['String'];
};


export type QueryVersionedOptionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionedOptionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionedOptionsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionedOptionWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionedOptionAggregateArgs = {
  where?: Maybe<VersionedOptionWhereInput>;
};


export type QueryVersionedRowArgs = {
  id: Scalars['String'];
};


export type QueryVersionedRowsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionedRowWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionedRowsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VersionedRowWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVersionedRowAggregateArgs = {
  where?: Maybe<VersionedRowWhereInput>;
};


export type QueryViewArgs = {
  id: Scalars['String'];
};


export type QueryViewsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<ViewWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryViewsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<ViewWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryViewAggregateArgs = {
  where?: Maybe<ViewWhereInput>;
};


export type QueryViewColumnArgs = {
  id: Scalars['String'];
};


export type QueryViewColumnsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<ViewColumnWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryViewColumnsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<ViewColumnWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryViewColumnAggregateArgs = {
  where?: Maybe<ViewColumnWhereInput>;
};


export type QueryVisitArgs = {
  id: Scalars['Float'];
};


export type QueryVisitsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VisitWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVisitsConnectionArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  where?: Maybe<VisitWhereInput>;
  orderBy?: Maybe<Scalars['String']>;
};


export type QueryVisitAggregateArgs = {
  where?: Maybe<VisitWhereInput>;
};


export type QueryMaxRowSortArgs = {
  tableId: Scalars['String'];
};


export type QueryMaxRowArgs = {
  tableId: Scalars['String'];
};


export type QuerySearchUsersArgs = {
  q: Scalars['String'];
};


export type QueryMaxViewColumnSortArgs = {
  viewId: Scalars['String'];
};

/** 邮箱注册 */
export type RegisterByEmailInput = {
  /** 邮箱 */
  email: Scalars['String'];
  /** 密码 */
  password: Scalars['String'];
};

/** 删除列 */
export type RemoveColumnInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除成员 */
export type RemoveMemberInput = {
  /** member ID */
  id: Scalars['String'];
};

/** 删除Table行 */
export type RemoveRowInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除表格 */
export type RemoveTableInput = {
  /** ID */
  id: Scalars['String'];
};

/** 删除 */
export type RemoveViewInput = {
  /** ID */
  id: Scalars['String'];
};

/** 权限角色表 */
export type Role = {
  __typename?: 'Role';
  id: Scalars['Int'];
  /** 角色名 */
  name: RoleType;
  /** 中文名 */
  alias: Scalars['String'];
  /** 描述 */
  desc: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** role-permission */
  rolePermissions: Array<RolePermission>;
  /** 该角色的权限 */
  permissions: Array<Permission>;
};

/** 聚合查询 */
export type RoleAggregate = {
  __typename?: 'RoleAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 角色权限表 */
export type RolePermission = {
  __typename?: 'RolePermission';
  id: Scalars['Int'];
  /** 权限ID */
  permissionId?: Maybe<Scalars['Int']>;
  /** 角色ID */
  roleId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** permission */
  permission: Permission;
};

/** 聚合查询 */
export type RolePermissionAggregate = {
  __typename?: 'RolePermissionAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type RolePermissionWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** connection */
export type RolePermissionsConnection = {
  __typename?: 'RolePermissionsConnection';
  items: Array<RolePermission>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 角色类型 */
export enum RoleType {
  Owner = 'Owner',
  Admin = 'Admin',
  Editor = 'Editor',
  Commenter = 'Commenter',
  Reader = 'Reader'
}

/** 筛选条件 */
export type RoleWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** connection */
export type RolesConnection = {
  __typename?: 'RolesConnection';
  items: Array<Role>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 行数据 */
export type Row = {
  __typename?: 'Row';
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 排序 */
  sortBaseTable: Scalars['Int'];
  /** 是否disabled */
  disabled: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** cell */
  cells: Array<Cell>;
};

/** 聚合查询 */
export type RowAggregate = {
  __typename?: 'RowAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type RowWhereInput = {
  /** 表格ID */
  tableId: Scalars['String'];
};

/** connection */
export type RowsConnection = {
  __typename?: 'RowsConnection';
  items: Array<Row>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 最近访问 */
export type SetAsLastVisitedInput = {
  /** 表格ID */
  tableId?: Maybe<Scalars['String']>;
  /** 视图ID */
  viewId: Scalars['String'];
};

/** 排序 */
export type Sort = {
  __typename?: 'Sort';
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 视图ID */
  viewId: Scalars['String'];
  /** 是否升序 */
  ascending: Scalars['Boolean'];
  /** 排序 */
  sortBaseView?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type SortAggregate = {
  __typename?: 'SortAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 排序 */
export type SortFiltersInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortGroupsInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortOptionsInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortRowsInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortSortsInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortTablesInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortVersionedRowsInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortVersionsInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortViewColumnsInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 排序 */
export type SortViewsInput = {
  /** 原始sort值 */
  origin: Scalars['Int'];
  /** 目标sort值 */
  target: Scalars['Int'];
  /** 基于什么排序, 比如 flow_100 */
  baseOn?: Maybe<Scalars['String']>;
};

/** 筛选条件 */
export type SortWhereInput = {
  /** 视图ID */
  viewId: Scalars['String'];
};

/** connection */
export type SortsConnection = {
  __typename?: 'SortsConnection';
  items: Array<Sort>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 一张表格 */
export type Table = {
  __typename?: 'Table';
  /** ID */
  id: Scalars['String'];
  /** 团队ID */
  teamId: Scalars['String'];
  /** 用户ID */
  creatorId: Scalars['Int'];
  /** 最近访问的viewId */
  lastVisitedViewId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 对外权限,private/public */
  permissionLevel?: Maybe<Scalars['String']>;
  /** 基于Team排序 */
  sortBaseTeam?: Maybe<Scalars['Int']>;
  /** 是否在编辑中, 给前端用用的 */
  editing?: Maybe<Scalars['Boolean']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** team */
  team: Team;
  /** view */
  views: Array<View>;
  /** view-column */
  viewColumns: Array<ViewColumn>;
  /** row */
  rows: Array<Row>;
  /** versioned-row */
  versionedRows: Array<VersionedRow>;
  /** column */
  columns: Array<Column>;
  /** versioned-column */
  versionedColumns: Array<VersionedColumn>;
};

/** 聚合查询 */
export type TableAggregate = {
  __typename?: 'TableAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type TableWhereInput = {
  /** 团队ID */
  teamId?: Maybe<Scalars['String']>;
};

/** connection */
export type TablesConnection = {
  __typename?: 'TablesConnection';
  items: Array<Table>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 团队 */
export type Team = {
  __typename?: 'Team';
  /** ID */
  id: Scalars['String'];
  /** 创建者用户ID */
  creatorId: Scalars['Int'];
  /** 所有者ID */
  ownerId: Scalars['Int'];
  /** 删除者Id */
  deletedById?: Maybe<Scalars['Int']>;
  /** 短网址 */
  slug: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 头像 */
  avatar: Scalars['String'];
  /** 访问类型, public,private... */
  access: Scalars['String'];
  /** 是否是个人的 */
  isPersonal: Scalars['Boolean'];
  isPaid: Scalars['Boolean'];
  isStudentTeam: Scalars['Boolean'];
  /** table数量 */
  tableCount: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** member */
  members: Array<Member>;
  /** table */
  tables: Array<Table>;
  /** invitation-token */
  invitationTokens: Array<InvitationToken>;
};

/** 聚合查询 */
export type TeamAggregate = {
  __typename?: 'TeamAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type TeamWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** connection */
export type TeamsConnection = {
  __typename?: 'TeamsConnection';
  items: Array<Team>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

export enum TimeFormat {
  TwelveHour = 'TwelveHour',
  TwentyFourHour = 'TwentyFourHour'
}

/** 更新data */
export type UpdateCellDataInput = {
  /** 列ID */
  data: Scalars['String'];
};

/** 更新单个 */
export type UpdateCellInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCellWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateCellDataInput>;
};

/** 更新条件 */
export type UpdateCellWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateCollaboratorDataInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateCollaboratorInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCollaboratorWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateCollaboratorDataInput>;
};

/** 更新条件 */
export type UpdateCollaboratorWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateColumnDataInput = {
  /** 字段类型 */
  fieldType?: Maybe<FieldType>;
  /** 名字 */
  name?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateColumnWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateColumnDataInput>;
};

/** 更新条件 */
export type UpdateColumnWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateCommentDataInput = {
  /** 剧本id */
  scriptId?: Maybe<Scalars['Int']>;
  /** 用户id */
  userId?: Maybe<Scalars['Int']>;
  /** 父级id */
  parentId?: Maybe<Scalars['Int']>;
  /** 根评论id */
  rootId?: Maybe<Scalars['Int']>;
  /** 内容 */
  content?: Maybe<Scalars['String']>;
  /** 是否剧透 */
  leaked?: Maybe<Scalars['Boolean']>;
  /** 状态 */
  status?: Maybe<CommentStatus>;
  /** 备注 */
  remark?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateCommentInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCommentWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateCommentDataInput>;
};

/** 更新条件 */
export type UpdateCommentWhereInput = {
  /** 剧本id */
  scriptId?: Maybe<Scalars['Int']>;
  /** 用户id */
  userId?: Maybe<Scalars['Int']>;
  /** 父级id */
  parentId?: Maybe<Scalars['Int']>;
  /** 根评论id */
  rootId?: Maybe<Scalars['Int']>;
  /** 内容 */
  content?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateFeedbackDataInput = {
  /** id */
  userId?: Maybe<Scalars['Int']>;
  /** 标题 */
  title: Scalars['String'];
  /** 反馈内容 */
  content?: Maybe<Scalars['String']>;
  /** 联系方式 */
  contact: Scalars['String'];
  /** 图片,多url用逗号分隔,eg：url1,url2,url3 */
  images?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateFeedbackInput = {
  /** 更新条件 */
  where?: Maybe<UpdateFeedbackWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateFeedbackDataInput>;
};

/** 更新条件 */
export type UpdateFeedbackWhereInput = {
  /** id */
  userId?: Maybe<Scalars['Int']>;
  /** 标题 */
  title: Scalars['String'];
  /** 反馈内容 */
  content?: Maybe<Scalars['String']>;
  /** 联系方式 */
  contact: Scalars['String'];
  /** 图片,多url用逗号分隔,eg：url1,url2,url3 */
  images?: Maybe<Scalars['String']>;
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateFilterDataInput = {
  /** 列ID */
  columnId?: Maybe<Scalars['String']>;
  /** 筛选连接类型 */
  conjunction?: Maybe<ConjunctionType>;
  /** 操作类型 */
  operator?: Maybe<OperatorType>;
  /** 字段类型 */
  fieldType?: Maybe<FieldType>;
};

/** 更新单个 */
export type UpdateFilterInput = {
  /** 更新条件 */
  where?: Maybe<UpdateFilterWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateFilterDataInput>;
};

/** 更新条件 */
export type UpdateFilterWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateGroupDataInput = {
  /** 列ID */
  columnId?: Maybe<Scalars['String']>;
  /** 是否升序 */
  ascending?: Maybe<Scalars['Boolean']>;
};

/** 更新单个 */
export type UpdateGroupInput = {
  /** 更新条件 */
  where?: Maybe<UpdateGroupWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateGroupDataInput>;
};

/** 更新条件 */
export type UpdateGroupWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateInvitationTokenDataInput = {
  /** 团队ID */
  teamId: Scalars['String'];
};

/** 更新单个 */
export type UpdateInvitationTokenInput = {
  /** 更新条件 */
  where?: Maybe<UpdateInvitationTokenWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateInvitationTokenDataInput>;
};

/** 更新条件 */
export type UpdateInvitationTokenWhereInput = {
  /** ID */
  id: Scalars['Float'];
};

/** 批量更新 */
export type UpdateManyCellInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCellWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateCellDataInput>;
};

/** 批量更新 */
export type UpdateManyCollaboratorInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCollaboratorWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateCollaboratorDataInput>;
};

/** 批量更新 */
export type UpdateManyColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateColumnWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateColumnDataInput>;
};

/** 批量更新 */
export type UpdateManyCommentInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCommentWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateCommentDataInput>;
};

/** 批量更新 */
export type UpdateManyFeedbackInput = {
  /** 更新条件 */
  where?: Maybe<UpdateFeedbackWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateFeedbackDataInput>;
};

/** 批量更新 */
export type UpdateManyFilterInput = {
  /** 更新条件 */
  where?: Maybe<UpdateFilterWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateFilterDataInput>;
};

/** 批量更新 */
export type UpdateManyGroupInput = {
  /** 更新条件 */
  where?: Maybe<UpdateGroupWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateGroupDataInput>;
};

/** 批量更新 */
export type UpdateManyInvitationTokenInput = {
  /** 更新条件 */
  where?: Maybe<UpdateInvitationTokenWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateInvitationTokenDataInput>;
};

/** 批量更新 */
export type UpdateManyMemberInput = {
  /** 更新条件 */
  where?: Maybe<UpdateMemberWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateMemberDataInput>;
};

/** 批量更新 */
export type UpdateManyOptionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOptionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateOptionDataInput>;
};

/** 批量更新 */
export type UpdateManyOrgInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOrgWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateOrgDataInput>;
};

/** 批量更新 */
export type UpdateManyOrgUserInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOrgUserWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateOrgUserDataInput>;
};

/** 批量更新 */
export type UpdateManyPermissionInput = {
  /** 更新条件 */
  where?: Maybe<UpdatePermissionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdatePermissionDataInput>;
};

/** 批量更新 */
export type UpdateManyRoleInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRoleWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateRoleDataInput>;
};

/** 批量更新 */
export type UpdateManyRolePermissionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRolePermissionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateRolePermissionDataInput>;
};

/** 批量更新 */
export type UpdateManyRowInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRowWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateRowDataInput>;
};

/** 批量更新 */
export type UpdateManySortInput = {
  /** 更新条件 */
  where?: Maybe<UpdateSortWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateSortDataInput>;
};

/** 批量更新 */
export type UpdateManyTableInput = {
  /** 更新条件 */
  where?: Maybe<UpdateTableWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateTableDataInput>;
};

/** 批量更新 */
export type UpdateManyTeamInput = {
  /** 更新条件 */
  where?: Maybe<UpdateTeamWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateTeamDataInput>;
};

/** 批量更新 */
export type UpdateManyUserInput = {
  /** 更新条件 */
  where?: Maybe<UpdateUserWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateUserDataInput>;
};

/** 批量更新 */
export type UpdateManyVersionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionDataInput>;
};

/** 批量更新 */
export type UpdateManyVersionedCellInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedCellWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionedCellDataInput>;
};

/** 批量更新 */
export type UpdateManyVersionedColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedColumnWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionedColumnDataInput>;
};

/** 批量更新 */
export type UpdateManyVersionedOptionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedOptionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionedOptionDataInput>;
};

/** 批量更新 */
export type UpdateManyVersionedRowInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedRowWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionedRowDataInput>;
};

/** 批量更新 */
export type UpdateManyViewColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateViewColumnWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateViewColumnDataInput>;
};

/** 批量更新 */
export type UpdateManyViewInput = {
  /** 更新条件 */
  where?: Maybe<UpdateViewWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateViewDataInput>;
};

/** 批量更新 */
export type UpdateManyVisitInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVisitWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVisitDataInput>;
};

/** 更新data */
export type UpdateMemberDataInput = {
  /** 团队ID */
  teamId: Scalars['String'];
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateMemberInput = {
  /** 更新条件 */
  where?: Maybe<UpdateMemberWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateMemberDataInput>;
};

/** 更新条件 */
export type UpdateMemberWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateOptionDataInput = {
  /** 名字 */
  name?: Maybe<Scalars['String']>;
  /** 颜色 */
  color?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateOptionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOptionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateOptionDataInput>;
};

/** 更新条件 */
export type UpdateOptionWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateOrgDataInput = {
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 头像 */
  avatar: Scalars['String'];
};

/** 更新单个 */
export type UpdateOrgInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOrgWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateOrgDataInput>;
};

/** 更新data */
export type UpdateOrgUserDataInput = {
  /** 用户ID */
  userId: Scalars['Int'];
};

/** 更新单个 */
export type UpdateOrgUserInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOrgUserWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateOrgUserDataInput>;
};

/** 更新条件 */
export type UpdateOrgUserWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新条件 */
export type UpdateOrgWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdatePermissionDataInput = {
  /** 权限名称 */
  name?: Maybe<Scalars['String']>;
  /** 权限码 */
  code?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdatePermissionInput = {
  /** 更新条件 */
  where?: Maybe<UpdatePermissionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdatePermissionDataInput>;
};

/** 更新条件 */
export type UpdatePermissionWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateRoleDataInput = {
  /** 角色名 */
  name: RoleType;
};

/** 更新单个 */
export type UpdateRoleInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRoleWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateRoleDataInput>;
};

/** 更新data */
export type UpdateRolePermissionDataInput = {
  /** 权限ID */
  permissionId?: Maybe<Scalars['Int']>;
  /** 角色ID */
  roleId?: Maybe<Scalars['Int']>;
};

/** 更新单个 */
export type UpdateRolePermissionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRolePermissionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateRolePermissionDataInput>;
};

/** 更新条件 */
export type UpdateRolePermissionWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 更新条件 */
export type UpdateRoleWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateRowDataInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 排序 */
  sortBaseTable?: Maybe<Scalars['Int']>;
};

/** 更新单个 */
export type UpdateRowInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRowWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateRowDataInput>;
};

/** 更新条件 */
export type UpdateRowWhereInput = {
  /** ID */
  id?: Maybe<Scalars['String']>;
};

/** 更新data */
export type UpdateSortDataInput = {
  /** 列ID */
  columnId?: Maybe<Scalars['String']>;
  /** 是否升序 */
  ascending?: Maybe<Scalars['Boolean']>;
};

/** 更新单个 */
export type UpdateSortInput = {
  /** 更新条件 */
  where?: Maybe<UpdateSortWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateSortDataInput>;
};

/** 更新条件 */
export type UpdateSortWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateTableDataInput = {
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 行距 */
  leading?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateTableInput = {
  /** 更新条件 */
  where?: Maybe<UpdateTableWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateTableDataInput>;
};

/** 更新条件 */
export type UpdateTableWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateTeamDataInput = {
  /** 创建者用户ID */
  creatorId: Scalars['Int'];
  /** 所有者ID */
  ownerId: Scalars['Int'];
  /** 唯一用户名 */
  login: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 头像 */
  avatar: Scalars['String'];
  /** 是否公开 */
  public: Scalars['Boolean'];
};

/** 更新单个 */
export type UpdateTeamInput = {
  /** 更新条件 */
  where?: Maybe<UpdateTeamWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateTeamDataInput>;
};

/** 更新条件 */
export type UpdateTeamWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateUserDataInput = {
  /** 唯一标识 */
  login?: Maybe<Scalars['String']>;
  /** 用户名 */
  username?: Maybe<Scalars['String']>;
  /** 昵称 */
  nickname?: Maybe<Scalars['String']>;
  /** 个人简介 */
  bio?: Maybe<Scalars['String']>;
  /** 邮箱 */
  email?: Maybe<Scalars['String']>;
  /** 职业 */
  jobTitle?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateUserInput = {
  /** 更新条件 */
  where?: Maybe<UpdateUserWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateUserDataInput>;
};

/** 更新条件 */
export type UpdateUserWhereInput = {
  /** ID */
  id?: Maybe<Scalars['Int']>;
};

/** 更新data */
export type UpdateVersionDataInput = {
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateVersionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionDataInput>;
};

/** 更新条件 */
export type UpdateVersionWhereInput = {
  /** ID */
  id: Scalars['Float'];
};

/** 更新data */
export type UpdateVersionedCellDataInput = {
  /** 列ID */
  data: Scalars['String'];
};

/** 更新单个 */
export type UpdateVersionedCellInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedCellWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionedCellDataInput>;
};

/** 更新条件 */
export type UpdateVersionedCellWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateVersionedColumnDataInput = {
  /** 字段类型 */
  fieldType?: Maybe<FieldType>;
  /** 名字 */
  name?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateVersionedColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedColumnWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionedColumnDataInput>;
};

/** 更新条件 */
export type UpdateVersionedColumnWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateVersionedOptionDataInput = {
  /** 名字 */
  name?: Maybe<Scalars['String']>;
  /** 颜色 */
  color?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateVersionedOptionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedOptionWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionedOptionDataInput>;
};

/** 更新条件 */
export type UpdateVersionedOptionWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateVersionedRowDataInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 排序 */
  sortBaseTable?: Maybe<Scalars['Int']>;
};

/** 更新单个 */
export type UpdateVersionedRowInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedRowWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVersionedRowDataInput>;
};

/** 更新条件 */
export type UpdateVersionedRowWhereInput = {
  /** ID */
  id?: Maybe<Scalars['String']>;
};

/** 更新data */
export type UpdateViewColumnDataInput = {
  /** 宽度 */
  width?: Maybe<Scalars['Int']>;
  /** 是否可见 */
  visible?: Maybe<Scalars['Boolean']>;
};

/** 更新单个 */
export type UpdateViewColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateViewColumnWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateViewColumnDataInput>;
};

/** 更新条件 */
export type UpdateViewColumnWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateViewDataInput = {
  /** 名字 */
  name?: Maybe<Scalars['String']>;
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 行距 */
  leading?: Maybe<Scalars['String']>;
};

/** 更新单个 */
export type UpdateViewInput = {
  /** 更新条件 */
  where?: Maybe<UpdateViewWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateViewDataInput>;
};

/** 更新条件 */
export type UpdateViewWhereInput = {
  /** ID */
  id: Scalars['String'];
};

/** 更新data */
export type UpdateVisitDataInput = {
  /** 最近访问的 teamId */
  teamId: Scalars['String'];
  /** 最近访问的 tableId */
  tableId: Scalars['String'];
  /** 最近访问的viewId */
  viewId: Scalars['String'];
  /** 视图类型 */
  viewType?: Maybe<ViewType>;
};

/** 更新单个 */
export type UpdateVisitInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVisitWhereInput>;
  /** 更新的数据 */
  data?: Maybe<UpdateVisitDataInput>;
};

/** 更新条件 */
export type UpdateVisitWhereInput = {
  /** ID */
  id: Scalars['Float'];
};

/** 更新或创建 */
export type UpsertCellInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCellWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateCellDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateCellInput>;
};

/** 更新或创建 */
export type UpsertCollaboratorInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCollaboratorWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateCollaboratorDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateCollaboratorInput>;
};

/** 更新或创建 */
export type UpsertColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateColumnWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateColumnDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateColumnInput>;
};

/** 更新或创建 */
export type UpsertCommentInput = {
  /** 更新条件 */
  where?: Maybe<UpdateCommentWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateCommentDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateCommentInput>;
};

/** 更新或创建 */
export type UpsertFeedbackInput = {
  /** 更新条件 */
  where?: Maybe<UpdateFeedbackWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateFeedbackDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateFeedbackInput>;
};

/** 更新或创建 */
export type UpsertFilterInput = {
  /** 更新条件 */
  where?: Maybe<UpdateFilterWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateFilterDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateFilterInput>;
};

/** 更新或创建 */
export type UpsertGroupInput = {
  /** 更新条件 */
  where?: Maybe<UpdateGroupWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateGroupDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateGroupInput>;
};

/** 更新或创建 */
export type UpsertInvitationTokenInput = {
  /** 更新条件 */
  where?: Maybe<UpdateInvitationTokenWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateInvitationTokenDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateInvitationTokenInput>;
};

/** 更新或创建 */
export type UpsertMemberInput = {
  /** 更新条件 */
  where?: Maybe<UpdateMemberWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateMemberDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateMemberInput>;
};

/** 更新或创建 */
export type UpsertOptionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOptionWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateOptionDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateOptionInput>;
};

/** 更新或创建 */
export type UpsertOrgInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOrgWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateOrgDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateOrgInput>;
};

/** 更新或创建 */
export type UpsertOrgUserInput = {
  /** 更新条件 */
  where?: Maybe<UpdateOrgUserWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateOrgUserDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateOrgUserInput>;
};

/** 更新或创建 */
export type UpsertPermissionInput = {
  /** 更新条件 */
  where?: Maybe<UpdatePermissionWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdatePermissionDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreatePermissionInput>;
};

/** 更新或创建 */
export type UpsertRoleInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRoleWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateRoleDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateRoleInput>;
};

/** 更新或创建 */
export type UpsertRolePermissionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRolePermissionWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateRolePermissionDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateRolePermissionInput>;
};

/** 更新或创建 */
export type UpsertRowInput = {
  /** 更新条件 */
  where?: Maybe<UpdateRowWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateRowDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateRowInput>;
};

/** 更新或创建 */
export type UpsertSortInput = {
  /** 更新条件 */
  where?: Maybe<UpdateSortWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateSortDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateSortInput>;
};

/** 更新或创建 */
export type UpsertTableInput = {
  /** 更新条件 */
  where?: Maybe<UpdateTableWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateTableDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateTableInput>;
};

/** 更新或创建 */
export type UpsertTeamInput = {
  /** 更新条件 */
  where?: Maybe<UpdateTeamWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateTeamDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateTeamInput>;
};

/** 更新或创建 */
export type UpsertUserInput = {
  /** 更新条件 */
  where?: Maybe<UpdateUserWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateUserDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateUserInput>;
};

/** 更新或创建 */
export type UpsertVersionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateVersionDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateVersionInput>;
};

/** 更新或创建 */
export type UpsertVersionedCellInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedCellWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateVersionedCellDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateVersionedCellInput>;
};

/** 更新或创建 */
export type UpsertVersionedColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedColumnWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateVersionedColumnDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateVersionedColumnInput>;
};

/** 更新或创建 */
export type UpsertVersionedOptionInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedOptionWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateVersionedOptionDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateVersionedOptionInput>;
};

/** 更新或创建 */
export type UpsertVersionedRowInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVersionedRowWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateVersionedRowDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateVersionedRowInput>;
};

/** 更新或创建 */
export type UpsertViewColumnInput = {
  /** 更新条件 */
  where?: Maybe<UpdateViewColumnWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateViewColumnDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateViewColumnInput>;
};

/** 更新或创建 */
export type UpsertViewInput = {
  /** 更新条件 */
  where?: Maybe<UpdateViewWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateViewDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateViewInput>;
};

/** 更新或创建 */
export type UpsertVisitInput = {
  /** 更新条件 */
  where?: Maybe<UpdateVisitWhereInput>;
  /** 更新的数据 */
  update?: Maybe<UpdateVisitDataInput>;
  /** 创建的数据 */
  create?: Maybe<CreateVisitInput>;
};

/** user */
export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  /** 唯一标识 */
  login: Scalars['String'];
  /** Github ID */
  githubId?: Maybe<Scalars['Float']>;
  /** 用户名 */
  username: Scalars['String'];
  /** 全名/昵称 */
  nickname: Scalars['String'];
  /** 个人简介 */
  bio: Scalars['String'];
  /** 头像 */
  avatar: Scalars['String'];
  /** 邮箱 */
  email: Scalars['String'];
  /** 邮箱校验时间 */
  emailValidatedAt?: Maybe<Scalars['DateTime']>;
  /** 手机 */
  phone: Scalars['String'];
  /** 职业 */
  jobTitle: Scalars['String'];
  googleSsoOnly: Scalars['Boolean'];
  samlSsoOnly: Scalars['Boolean'];
};

/** 聚合查询 */
export type UserAggregate = {
  __typename?: 'UserAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type UserWhereInput = {
  /** 昵称 */
  nickname?: Maybe<Scalars['String']>;
  /** 搜索用户 */
  q?: Maybe<Scalars['String']>;
};

/** connection */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  items: Array<User>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 版本 */
export type Version = {
  __typename?: 'Version';
  id: Scalars['Float'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 索引ID */
  index: Scalars['Int'];
  /** 排序 */
  sortBaseTable: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type VersionAggregate = {
  __typename?: 'VersionAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type VersionWhereInput = {
  /** 表格ID */
  tableId?: Maybe<Scalars['String']>;
};

/** 一个单元格 */
export type VersionedCell = {
  __typename?: 'VersionedCell';
  primaryId: Scalars['Float'];
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 行ID */
  rowId: Scalars['String'];
  /** 版本ID */
  versionId: Scalars['Float'];
  /** 字段类型 */
  fieldType: FieldType;
  /** 单元格数据 */
  data?: Maybe<Scalars['CellData']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type VersionedCellAggregate = {
  __typename?: 'VersionedCellAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type VersionedCellWhereInput = {
  /** 列ID */
  columnId: Scalars['String'];
  /** 行ID */
  rowId?: Maybe<Scalars['String']>;
  /** 字段类型 */
  fieldType?: Maybe<FieldType>;
};

/** connection */
export type VersionedCellsConnection = {
  __typename?: 'VersionedCellsConnection';
  items: Array<VersionedCell>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 列数据 */
export type VersionedColumn = {
  __typename?: 'VersionedColumn';
  primaryId: Scalars['Float'];
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 版本ID */
  versionId: Scalars['Float'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 字段类型 */
  fieldType: FieldType;
  /** 是否是主列 */
  isPrimary?: Maybe<Scalars['Boolean']>;
  /** 配置 */
  config?: Maybe<VersionedColumnConfig>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type VersionedColumnAggregate = {
  __typename?: 'VersionedColumnAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 列配置 */
export type VersionedColumnConfig = {
  __typename?: 'VersionedColumnConfig';
  /** @LongText, 是否开启富文本 */
  useRichText?: Maybe<Scalars['Boolean']>;
  /** @Collaborator, 是否可以多个 */
  multiCollaborator?: Maybe<Scalars['Boolean']>;
  /** @Collaborator, 是否需要通知 */
  shouldNotify?: Maybe<Scalars['Boolean']>;
  /** @Date, 日期格式 */
  dateFormat?: Maybe<DateFormat>;
  /** @Date, 时间格式 */
  timeFormat?: Maybe<TimeFormat>;
  /** @Date, 包含时间 */
  includeTime?: Maybe<Scalars['Boolean']>;
};

/** 筛选条件 */
export type VersionedColumnWhereInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 版本ID */
  versionId: Scalars['Float'];
};

/** connection */
export type VersionedColumnsConnection = {
  __typename?: 'VersionedColumnsConnection';
  items: Array<VersionedColumn>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 选项 */
export type VersionedOption = {
  __typename?: 'VersionedOption';
  primaryId: Scalars['Float'];
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  versionedColumnId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 颜色 */
  color: Scalars['String'];
  /** 基于列排序 */
  sortBaseVersionedColumn?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

/** 聚合查询 */
export type VersionedOptionAggregate = {
  __typename?: 'VersionedOptionAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type VersionedOptionWhereInput = {
  /** id */
  id?: Maybe<Scalars['Int']>;
};

/** connection */
export type VersionedOptionsConnection = {
  __typename?: 'VersionedOptionsConnection';
  items: Array<VersionedOption>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 行数据 */
export type VersionedRow = {
  __typename?: 'VersionedRow';
  primaryId: Scalars['Float'];
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 版本ID */
  versionId: Scalars['Float'];
  /** 排序 */
  sortBaseTable: Scalars['Int'];
  /** 是否disabled */
  disabled: Scalars['Boolean'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** versioned-cell */
  cells: Array<VersionedCell>;
};

/** 聚合查询 */
export type VersionedRowAggregate = {
  __typename?: 'VersionedRowAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type VersionedRowWhereInput = {
  /** 表格ID */
  tableId: Scalars['String'];
  /** 版本ID */
  versionId: Scalars['Float'];
};

/** connection */
export type VersionedRowsConnection = {
  __typename?: 'VersionedRowsConnection';
  items: Array<VersionedRow>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** connection */
export type VersionsConnection = {
  __typename?: 'VersionsConnection';
  items: Array<Version>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 视图类型 */
export type View = {
  __typename?: 'View';
  /** ID */
  id: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 名字 */
  name: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 是否公开给成员 */
  public: Scalars['Boolean'];
  /** 类型 */
  type: ViewType;
  /** 看板基准列 */
  stackedColumnId?: Maybe<Scalars['String']>;
  /** 行距 */
  leading: LeadingType;
  /** 排序 */
  sortBaseTable?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** view-column */
  viewColumns: Array<ViewColumn>;
  /** sort */
  sorts: Array<Sort>;
  /** group */
  groups: Array<Group>;
  /** filter */
  filters: Array<Filter>;
};

/** 聚合查询 */
export type ViewAggregate = {
  __typename?: 'ViewAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 视图类型-列 */
export type ViewColumn = {
  __typename?: 'ViewColumn';
  /** ID */
  id: Scalars['String'];
  /** 列ID */
  columnId: Scalars['String'];
  /** 表格ID */
  tableId: Scalars['String'];
  /** 视图ID */
  viewId: Scalars['String'];
  /** 宽度 */
  width: Scalars['Int'];
  /** 是否可见 */
  visible: Scalars['Boolean'];
  /** 排序 */
  sortBaseView: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** column */
  column: Column;
};

/** 聚合查询 */
export type ViewColumnAggregate = {
  __typename?: 'ViewColumnAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type ViewColumnWhereInput = {
  /** 视图ID */
  viewId?: Maybe<Scalars['String']>;
  /** 表格ID */
  tableId?: Maybe<Scalars['String']>;
};

/** connection */
export type ViewColumnsConnection = {
  __typename?: 'ViewColumnsConnection';
  items: Array<ViewColumn>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 视图类型 */
export enum ViewType {
  Grid = 'Grid',
  Form = 'Form',
  Calendar = 'Calendar',
  Gallery = 'Gallery',
  Kanban = 'Kanban'
}

/** 筛选条件 */
export type ViewWhereInput = {
  /** 表格ID */
  tableId: Scalars['String'];
};

/** connection */
export type ViewsConnection = {
  __typename?: 'ViewsConnection';
  items: Array<View>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};

/** 用户访问信息，给前端用的 */
export type Visit = {
  __typename?: 'Visit';
  id: Scalars['Float'];
  /** 用户ID */
  userId: Scalars['Int'];
  /** 最近访问的 teamId */
  teamId: Scalars['String'];
  /** 最近访问的 tableId */
  tableId: Scalars['String'];
  /** 最近访问的viewId */
  viewId: Scalars['String'];
  /** 视图类型 */
  viewType: ViewType;
};

/** 聚合查询 */
export type VisitAggregate = {
  __typename?: 'VisitAggregate';
  /** 总数 */
  count: Scalars['Int'];
};

/** 筛选条件 */
export type VisitWhereInput = {
  /** 表格ID */
  tableId?: Maybe<Scalars['String']>;
};

/** connection */
export type VisitsConnection = {
  __typename?: 'VisitsConnection';
  items: Array<Visit>;
  totalCount: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
};
