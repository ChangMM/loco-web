import gql from "gql-tag";

export const OWNED_TEAMS = gql`
query ownedTeams{
    ownedTeams{
        id
        creatorId
        ownerId
        deletedById
        slug
        name
        description
        avatar
        access
        isPersonal
        isPaid
        isStudentTeam
        tableCount
        createdAt
        updatedAt
        tables{
            id
            teamId
            creatorId
            lastVisitedViewId
            name
            description
            permissionLevel
            sortBaseTeam
            editing
            deletedAt
            createdAt
            updatedAt
        }
    }
}
`;
export const MEMBERS = gql`
query members($skip: Int, $first: Int, $last: Int, $before: String, $after: String, $where: MemberWhereInput, $orderBy: String){
    members(skip: $skip, first: $first, last: $last, before: $before, after: $after, where: $where, orderBy: $orderBy){
        id
        teamId
        userId
        roleId
        nickname
        createdAt
        updatedAt
        user{
            id
            login
            githubId
            username
            nickname
            bio
            avatar
            email
            emailValidatedAt
            phone
            jobTitle
            googleSsoOnly
            samlSsoOnly
        }
        role{
            id
            name
            alias
            desc
            createdAt
            updatedAt
        }
    }
}
`;
export const SEARCH_USERS = gql`
query searchUsers($q: String!){
    searchUsers(q: $q){
        id
        login
        githubId
        username
        nickname
        bio
        avatar
        email
        emailValidatedAt
        phone
        jobTitle
        googleSsoOnly
        samlSsoOnly
    }
}
`;
export const TEAM = gql`
query team($id: String, $slug: String){
    team(id: $id, slug: $slug){
        id
        creatorId
        ownerId
        deletedById
        slug
        name
        description
        avatar
        access
        isPersonal
        isPaid
        isStudentTeam
        tableCount
        createdAt
        updatedAt
        members{
            id
            teamId
            userId
            roleId
            nickname
            createdAt
            updatedAt
            user{
                id
                login
                githubId
                username
                nickname
                bio
                avatar
                email
                emailValidatedAt
                phone
                jobTitle
                googleSsoOnly
                samlSsoOnly
            }
            role{
                id
                name
                alias
                desc
                createdAt
                updatedAt
            }
        }
        tables{
            id
            teamId
            creatorId
            lastVisitedViewId
            name
            description
            permissionLevel
            sortBaseTeam
            editing
            deletedAt
            createdAt
            updatedAt
            team{
                id
                creatorId
                ownerId
                deletedById
                slug
                name
                description
                avatar
                access
                isPersonal
                isPaid
                isStudentTeam
                tableCount
                createdAt
                updatedAt
            }
            views{
                id
                tableId
                name
                description
                public
                type
                stackedColumnId
                leading
                sortBaseTable
                createdAt
                updatedAt
            }
            viewColumns{
                id
                columnId
                tableId
                viewId
                width
                visible
                sortBaseView
                createdAt
                updatedAt
            }
            rows{
                id
                tableId
                sortBaseTable
                disabled
                createdAt
                updatedAt
            }
            versionedRows{
                primaryId
                id
                tableId
                versionId
                sortBaseTable
                disabled
                createdAt
                updatedAt
            }
            columns{
                id
                tableId
                name
                description
                fieldType
                isPrimary
                createdAt
                updatedAt
            }
            versionedColumns{
                primaryId
                id
                tableId
                versionId
                name
                description
                fieldType
                isPrimary
                createdAt
                updatedAt
            }
        }
        invitationTokens{
            id
            teamId
            roleType
            token
            createdAt
            updatedAt
        }
    }
}
`;
export const TABLES = gql`
query tables($skip: Int, $first: Int, $last: Int, $before: String, $after: String, $where: TableWhereInput, $orderBy: String){
    tables(skip: $skip, first: $first, last: $last, before: $before, after: $after, where: $where, orderBy: $orderBy){
        id
        teamId
        creatorId
        lastVisitedViewId
        name
        description
        permissionLevel
        sortBaseTeam
        editing
        deletedAt
        createdAt
        updatedAt
        team{
            id
            creatorId
            ownerId
            deletedById
            slug
            name
            description
            avatar
            access
            isPersonal
            isPaid
            isStudentTeam
            tableCount
            createdAt
            updatedAt
        }
        views{
            id
            tableId
            name
            description
            public
            type
            stackedColumnId
            leading
            sortBaseTable
            createdAt
            updatedAt
        }
        viewColumns{
            id
            columnId
            tableId
            viewId
            width
            visible
            sortBaseView
            createdAt
            updatedAt
        }
        rows{
            id
            tableId
            sortBaseTable
            disabled
            createdAt
            updatedAt
        }
        versionedRows{
            primaryId
            id
            tableId
            versionId
            sortBaseTable
            disabled
            createdAt
            updatedAt
        }
        columns{
            id
            tableId
            name
            description
            fieldType
            isPrimary
            createdAt
            updatedAt
        }
        versionedColumns{
            primaryId
            id
            tableId
            versionId
            name
            description
            fieldType
            isPrimary
            createdAt
            updatedAt
        }
    }
}
`;
export const TABLE = gql`
query table($id: String!){
    table(id: $id){
        id
        teamId
        creatorId
        lastVisitedViewId
        name
        description
        permissionLevel
        sortBaseTeam
        editing
        deletedAt
        createdAt
        updatedAt
        views{
            id
            tableId
            name
            description
            public
            type
            stackedColumnId
            leading
            sortBaseTable
            createdAt
            updatedAt
            viewColumns{
                id
                columnId
                tableId
                viewId
                width
                visible
                sortBaseView
                createdAt
                updatedAt
            }
            sorts{
                id
                columnId
                tableId
                viewId
                ascending
                sortBaseView
                createdAt
                updatedAt
            }
            groups{
                id
                columnId
                tableId
                viewId
                ascending
                showEmptyGroup
                sortBaseView
                createdAt
                updatedAt
            }
            filters{
                id
                columnId
                tableId
                viewId
                conjunction
                operator
                fieldType
                value
                sortBaseView
                createdAt
                updatedAt
            }
        }
        rows{
            id
            tableId
            sortBaseTable
            disabled
            createdAt
            updatedAt
            cells{
                id
                tableId
                columnId
                rowId
                fieldType
                data
                createdAt
                updatedAt
            }
        }
        versionedRows{
            primaryId
            id
            tableId
            versionId
            sortBaseTable
            disabled
            createdAt
            updatedAt
            cells{
                primaryId
                id
                tableId
                columnId
                rowId
                versionId
                fieldType
                data
                createdAt
                updatedAt
            }
        }
        columns{
            id
            tableId
            name
            description
            fieldType
            isPrimary
            config{
                useRichText
                multiCollaborator
                shouldNotify
                dateFormat
                timeFormat
                includeTime
            }
            createdAt
            updatedAt
            options{
                id
                columnId
                name
                color
                sortBaseColumn
                createdAt
                updatedAt
            }
        }
        versionedColumns{
            primaryId
            id
            tableId
            versionId
            name
            description
            fieldType
            isPrimary
            config{
                useRichText
                multiCollaborator
                shouldNotify
                dateFormat
                timeFormat
                includeTime
            }
            createdAt
            updatedAt
        }
    }
}
`;
export const VIEW = gql`
query view($id: String!){
    view(id: $id){
        id
        tableId
        name
        description
        public
        type
        stackedColumnId
        leading
        sortBaseTable
        createdAt
        updatedAt
    }
}
`;
export const VIEWS = gql`
query views($skip: Int, $first: Int, $last: Int, $before: String, $after: String, $where: ViewWhereInput, $orderBy: String){
    views(skip: $skip, first: $first, last: $last, before: $before, after: $after, where: $where, orderBy: $orderBy){
        id
        tableId
        name
        description
        public
        type
        stackedColumnId
        leading
        sortBaseTable
        createdAt
        updatedAt
        viewColumns{
            id
            columnId
            tableId
            viewId
            width
            visible
            sortBaseView
            createdAt
            updatedAt
        }
        sorts{
            id
            columnId
            tableId
            viewId
            ascending
            sortBaseView
            createdAt
            updatedAt
        }
        groups{
            id
            columnId
            tableId
            viewId
            ascending
            showEmptyGroup
            sortBaseView
            createdAt
            updatedAt
        }
        filters{
            id
            columnId
            tableId
            viewId
            conjunction
            operator
            fieldType
            value
            sortBaseView
            createdAt
            updatedAt
        }
    }
}
`;
export const COLUMNS = gql`
query columns($skip: Int, $first: Int, $last: Int, $before: String, $after: String, $where: ColumnWhereInput, $orderBy: String){
    columns(skip: $skip, first: $first, last: $last, before: $before, after: $after, where: $where, orderBy: $orderBy){
        id
        tableId
        name
        description
        fieldType
        isPrimary
        config{
            useRichText
            multiCollaborator
            shouldNotify
            dateFormat
            timeFormat
            includeTime
        }
        createdAt
        updatedAt
        options{
            id
            columnId
            name
            color
            sortBaseColumn
            createdAt
            updatedAt
        }
    }
}
`;
export const VERSIONED_COLUMNS = gql`
query versionedColumns($skip: Int, $first: Int, $last: Int, $before: String, $after: String, $where: VersionedColumnWhereInput, $orderBy: String){
    versionedColumns(skip: $skip, first: $first, last: $last, before: $before, after: $after, where: $where, orderBy: $orderBy){
        primaryId
        id
        tableId
        versionId
        name
        description
        fieldType
        isPrimary
        config{
            useRichText
            multiCollaborator
            shouldNotify
            dateFormat
            timeFormat
            includeTime
        }
        createdAt
        updatedAt
    }
}
`;
export const ROWS = gql`
query rows($skip: Int, $first: Int, $last: Int, $before: String, $after: String, $where: RowWhereInput, $orderBy: String){
    rows(skip: $skip, first: $first, last: $last, before: $before, after: $after, where: $where, orderBy: $orderBy){
        id
        tableId
        sortBaseTable
        disabled
        createdAt
        updatedAt
        cells{
            id
            tableId
            columnId
            rowId
            fieldType
            data
            createdAt
            updatedAt
        }
    }
}
`;
export const VERSIONED_ROWS = gql`
query versionedRows($skip: Int, $first: Int, $last: Int, $before: String, $after: String, $where: VersionedRowWhereInput, $orderBy: String){
    versionedRows(skip: $skip, first: $first, last: $last, before: $before, after: $after, where: $where, orderBy: $orderBy){
        primaryId
        id
        tableId
        versionId
        sortBaseTable
        disabled
        createdAt
        updatedAt
        cells{
            primaryId
            id
            tableId
            columnId
            rowId
            versionId
            fieldType
            data
            createdAt
            updatedAt
        }
    }
}
`;
export const VERSIONS = gql`
query versions($skip: Int, $first: Int, $last: Int, $before: String, $after: String, $where: VersionWhereInput, $orderBy: String){
    versions(skip: $skip, first: $first, last: $last, before: $before, after: $after, where: $where, orderBy: $orderBy){
        id
        tableId
        name
        description
        index
        sortBaseTable
        createdAt
        updatedAt
    }
}
`;
export const LOGIN_BY_GITHUB = gql`
mutation loginByGithub($code: String!){
    loginByGithub(code: $code){
        token
        userId
        username
        user{
            id
            login
            githubId
            username
            nickname
            bio
            avatar
            email
            emailValidatedAt
            phone
            jobTitle
            googleSsoOnly
            samlSsoOnly
        }
        visit{
            id
            userId
            teamId
            tableId
            viewId
            viewType
        }
    }
}
`;
export const REGISTER_BY_EMAIL = gql`
mutation registerByEmail($input: RegisterByEmailInput!){
    registerByEmail(input: $input){
        token
        userId
        username
        user{
            id
            login
            githubId
            username
            nickname
            bio
            avatar
            email
            emailValidatedAt
            phone
            jobTitle
            googleSsoOnly
            samlSsoOnly
        }
        visit{
            id
            userId
            teamId
            tableId
            viewId
            viewType
        }
    }
}
`;
export const LOGIN_BY_EMAIL = gql`
mutation loginByEmail($input: LoginByEmailInput!){
    loginByEmail(input: $input){
        token
        userId
        username
        user{
            id
            login
            githubId
            username
            nickname
            bio
            avatar
            email
            emailValidatedAt
            phone
            jobTitle
            googleSsoOnly
            samlSsoOnly
        }
        visit{
            id
            userId
            teamId
            tableId
            viewId
            viewType
        }
    }
}
`;
export const ADD_MEMBER = gql`
mutation addMember($input: AddMemberInput!){
    addMember(input: $input){
        id
        teamId
        userId
        roleId
        nickname
        createdAt
        updatedAt
        user{
            id
            login
            githubId
            username
            nickname
            bio
            avatar
            email
            emailValidatedAt
            phone
            jobTitle
            googleSsoOnly
            samlSsoOnly
        }
        role{
            id
            name
            alias
            desc
            createdAt
            updatedAt
        }
    }
}
`;
export const REMOVE_MEMBER = gql`
mutation removeMember($input: RemoveMemberInput!){
    removeMember(input: $input)
}
`;
export const EXIT_TEAM = gql`
mutation exitTeam($input: ExitTeamInput!){
    exitTeam(input: $input)
}
`;
export const MODIFY_MEMBER_ROLE_TYPE = gql`
mutation modifyMemberRoleType($input: ModifyMemberRoleTypeInput!){
    modifyMemberRoleType(input: $input)
}
`;
export const UPDATE_COLUMN = gql`
mutation updateColumn($input: UpdateColumnInput!){
    updateColumn(input: $input){
        id
        tableId
        name
        description
        fieldType
        isPrimary
        config{
            useRichText
            multiCollaborator
            shouldNotify
            dateFormat
            timeFormat
            includeTime
        }
        createdAt
        updatedAt
    }
}
`;
export const MODIFY_COLUMN = gql`
mutation modifyColumn($input: ModifyColumnInput!){
    modifyColumn(input: $input)
}
`;
export const UPDATE_VIEW_COLUMN = gql`
mutation updateViewColumn($input: UpdateViewColumnInput!){
    updateViewColumn(input: $input){
        id
        columnId
        tableId
        viewId
        width
        visible
        sortBaseView
        createdAt
        updatedAt
        column{
            id
            tableId
            name
            description
            fieldType
            isPrimary
            createdAt
            updatedAt
        }
    }
}
`;
export const ADD_VIEW = gql`
mutation addView($input: AddViewInput!){
    addView(input: $input){
        id
        tableId
        name
        description
        public
        type
        stackedColumnId
        leading
        sortBaseTable
        createdAt
        updatedAt
        viewColumns{
            id
            columnId
            tableId
            viewId
            width
            visible
            sortBaseView
            createdAt
            updatedAt
        }
        sorts{
            id
            columnId
            tableId
            viewId
            ascending
            sortBaseView
            createdAt
            updatedAt
        }
        groups{
            id
            columnId
            tableId
            viewId
            ascending
            showEmptyGroup
            sortBaseView
            createdAt
            updatedAt
        }
        filters{
            id
            columnId
            tableId
            viewId
            conjunction
            operator
            fieldType
            value
            sortBaseView
            createdAt
            updatedAt
        }
    }
}
`;
export const UPDATE_VIEW = gql`
mutation updateView($input: UpdateViewInput!){
    updateView(input: $input){
        id
        tableId
        name
        description
        public
        type
        stackedColumnId
        leading
        sortBaseTable
        createdAt
        updatedAt
        viewColumns{
            id
            columnId
            tableId
            viewId
            width
            visible
            sortBaseView
            createdAt
            updatedAt
        }
        sorts{
            id
            columnId
            tableId
            viewId
            ascending
            sortBaseView
            createdAt
            updatedAt
        }
        groups{
            id
            columnId
            tableId
            viewId
            ascending
            showEmptyGroup
            sortBaseView
            createdAt
            updatedAt
        }
        filters{
            id
            columnId
            tableId
            viewId
            conjunction
            operator
            fieldType
            value
            sortBaseView
            createdAt
            updatedAt
        }
    }
}
`;
export const REMOVE_VIEW = gql`
mutation removeView($input: RemoveViewInput!){
    removeView(input: $input)
}
`;
export const CREATE_SORT = gql`
mutation createSort($input: CreateSortInput!){
    createSort(input: $input){
        id
        columnId
        tableId
        viewId
        ascending
        sortBaseView
        createdAt
        updatedAt
    }
}
`;
export const UPDATE_SORT = gql`
mutation updateSort($input: UpdateSortInput!){
    updateSort(input: $input){
        id
        columnId
        tableId
        viewId
        ascending
        sortBaseView
        createdAt
        updatedAt
    }
}
`;
export const DELETE_SORT = gql`
mutation deleteSort($input: DeleteSortInput!){
    deleteSort(input: $input)
}
`;
export const CREATE_GROUP = gql`
mutation createGroup($input: CreateGroupInput!){
    createGroup(input: $input){
        id
        columnId
        tableId
        viewId
        ascending
        showEmptyGroup
        sortBaseView
        createdAt
        updatedAt
    }
}
`;
export const UPDATE_GROUP = gql`
mutation updateGroup($input: UpdateGroupInput!){
    updateGroup(input: $input){
        id
        columnId
        tableId
        viewId
        ascending
        showEmptyGroup
        sortBaseView
        createdAt
        updatedAt
    }
}
`;
export const DELETE_GROUP = gql`
mutation deleteGroup($input: DeleteGroupInput!){
    deleteGroup(input: $input)
}
`;
export const CREATE_FILTER = gql`
mutation createFilter($input: CreateFilterInput!){
    createFilter(input: $input){
        id
        columnId
        tableId
        viewId
        conjunction
        operator
        fieldType
        value
        sortBaseView
        createdAt
        updatedAt
    }
}
`;
export const UPDATE_FILTER = gql`
mutation updateFilter($input: UpdateFilterInput!){
    updateFilter(input: $input){
        id
        columnId
        tableId
        viewId
        conjunction
        operator
        fieldType
        value
        sortBaseView
        createdAt
        updatedAt
    }
}
`;
export const DELETE_FILTER = gql`
mutation deleteFilter($input: DeleteFilterInput!){
    deleteFilter(input: $input)
}
`;
export const ADD_COLUMN = gql`
mutation addColumn($input: AddColumnInput!){
    addColumn(input: $input){
        id
        tableId
        name
        description
        fieldType
        isPrimary
        config{
            useRichText
            multiCollaborator
            shouldNotify
            dateFormat
            timeFormat
            includeTime
        }
        createdAt
        updatedAt
        options{
            id
            columnId
            name
            color
            sortBaseColumn
            createdAt
            updatedAt
        }
    }
}
`;
export const ADD_ROW = gql`
mutation addRow($input: AddRowInput!){
    addRow(input: $input){
        id
        tableId
        sortBaseTable
        disabled
        createdAt
        updatedAt
        cells{
            id
            tableId
            columnId
            rowId
            fieldType
            data
            createdAt
            updatedAt
        }
    }
}
`;
export const ADD_ROW_WITH_DATA = gql`
mutation addRowWithData($input: AddRowWithDataInput!){
    addRowWithData(input: $input){
        id
        tableId
        sortBaseTable
        disabled
        createdAt
        updatedAt
        cells{
            id
            tableId
            columnId
            rowId
            fieldType
            data
            createdAt
            updatedAt
        }
    }
}
`;
export const MODIFY_ROW = gql`
mutation modifyRow($input: ModifyRowInput!){
    modifyRow(input: $input)
}
`;
export const ADD_TEAM = gql`
mutation addTeam($input: AddTeamInput!){
    addTeam(input: $input){
        id
        creatorId
        ownerId
        deletedById
        slug
        name
        description
        avatar
        access
        isPersonal
        isPaid
        isStudentTeam
        tableCount
        createdAt
        updatedAt
        tables{
            id
            teamId
            creatorId
            lastVisitedViewId
            name
            description
            permissionLevel
            sortBaseTeam
            editing
            deletedAt
            createdAt
            updatedAt
        }
        invitationTokens{
            id
            teamId
            roleType
            token
            createdAt
            updatedAt
        }
    }
}
`;
export const UPDATE_TEAM = gql`
mutation updateTeam($input: UpdateTeamInput!){
    updateTeam(input: $input){
        id
        creatorId
        ownerId
        deletedById
        slug
        name
        description
        avatar
        access
        isPersonal
        isPaid
        isStudentTeam
        tableCount
        createdAt
        updatedAt
        members{
            id
            teamId
            userId
            roleId
            nickname
            createdAt
            updatedAt
        }
        tables{
            id
            teamId
            creatorId
            lastVisitedViewId
            name
            description
            permissionLevel
            sortBaseTeam
            editing
            deletedAt
            createdAt
            updatedAt
        }
        invitationTokens{
            id
            teamId
            roleType
            token
            createdAt
            updatedAt
        }
    }
}
`;
export const ADD_TABLE = gql`
mutation addTable($input: AddTableInput!){
    addTable(input: $input){
        id
        teamId
        creatorId
        lastVisitedViewId
        name
        description
        permissionLevel
        sortBaseTeam
        editing
        deletedAt
        createdAt
        updatedAt
        team{
            id
            creatorId
            ownerId
            deletedById
            slug
            name
            description
            avatar
            access
            isPersonal
            isPaid
            isStudentTeam
            tableCount
            createdAt
            updatedAt
        }
        views{
            id
            tableId
            name
            description
            public
            type
            stackedColumnId
            leading
            sortBaseTable
            createdAt
            updatedAt
        }
        viewColumns{
            id
            columnId
            tableId
            viewId
            width
            visible
            sortBaseView
            createdAt
            updatedAt
        }
        rows{
            id
            tableId
            sortBaseTable
            disabled
            createdAt
            updatedAt
        }
        versionedRows{
            primaryId
            id
            tableId
            versionId
            sortBaseTable
            disabled
            createdAt
            updatedAt
        }
        columns{
            id
            tableId
            name
            description
            fieldType
            isPrimary
            createdAt
            updatedAt
        }
        versionedColumns{
            primaryId
            id
            tableId
            versionId
            name
            description
            fieldType
            isPrimary
            createdAt
            updatedAt
        }
    }
}
`;
export const UPDATE_TABLE = gql`
mutation updateTable($input: UpdateTableInput!){
    updateTable(input: $input){
        id
        teamId
        creatorId
        lastVisitedViewId
        name
        description
        permissionLevel
        sortBaseTeam
        editing
        deletedAt
        createdAt
        updatedAt
        team{
            id
            creatorId
            ownerId
            deletedById
            slug
            name
            description
            avatar
            access
            isPersonal
            isPaid
            isStudentTeam
            tableCount
            createdAt
            updatedAt
        }
        views{
            id
            tableId
            name
            description
            public
            type
            stackedColumnId
            leading
            sortBaseTable
            createdAt
            updatedAt
        }
        viewColumns{
            id
            columnId
            tableId
            viewId
            width
            visible
            sortBaseView
            createdAt
            updatedAt
        }
        rows{
            id
            tableId
            sortBaseTable
            disabled
            createdAt
            updatedAt
        }
        versionedRows{
            primaryId
            id
            tableId
            versionId
            sortBaseTable
            disabled
            createdAt
            updatedAt
        }
        columns{
            id
            tableId
            name
            description
            fieldType
            isPrimary
            createdAt
            updatedAt
        }
        versionedColumns{
            primaryId
            id
            tableId
            versionId
            name
            description
            fieldType
            isPrimary
            createdAt
            updatedAt
        }
    }
}
`;
export const REMOVE_TABLE = gql`
mutation removeTable($input: RemoveTableInput!){
    removeTable(input: $input)
}
`;
export const SET_AS_LAST_VISITED = gql`
mutation setAsLastVisited($input: SetAsLastVisitedInput!){
    setAsLastVisited(input: $input)
}
`;
export const UPDATE_CELL = gql`
mutation updateCell($input: UpdateCellInput!){
    updateCell(input: $input){
        id
        tableId
        columnId
        rowId
        fieldType
        data
        createdAt
        updatedAt
        options{
            id
            columnId
            name
            color
            sortBaseColumn
            createdAt
            updatedAt
        }
    }
}
`;
export const REMOVE_COLUMN = gql`
mutation removeColumn($input: RemoveColumnInput!){
    removeColumn(input: $input)
}
`;
export const REMOVE_ROW = gql`
mutation removeRow($input: RemoveRowInput!){
    removeRow(input: $input)
}
`;
export const SORT_ROWS = gql`
mutation sortRows($input: SortRowsInput!){
    sortRows(input: $input)
}
`;
export const SORT_VIEWS = gql`
mutation sortViews($input: SortViewsInput!){
    sortViews(input: $input)
}
`;
export const SORT_VIEW_COLUMNS = gql`
mutation sortViewColumns($input: SortViewColumnsInput!){
    sortViewColumns(input: $input)
}
`;
export const MODIFY_CELL = gql`
mutation modifyCell($input: ModifyCellInput!){
    modifyCell(input: $input)
}
`;
export const CREATE_OPTION = gql`
mutation createOption($input: CreateOptionInput!){
    createOption(input: $input){
        id
        columnId
        name
        color
        sortBaseColumn
        createdAt
        updatedAt
    }
}
`;
export const UPDATE_OPTION = gql`
mutation updateOption($input: UpdateOptionInput!){
    updateOption(input: $input){
        id
        columnId
        name
        color
        sortBaseColumn
        createdAt
        updatedAt
    }
}
`;
export const UPDATE_USER = gql`
mutation updateUser($input: UpdateUserInput!){
    updateUser(input: $input){
        id
        login
        githubId
        username
        nickname
        bio
        avatar
        email
        emailValidatedAt
        phone
        jobTitle
        googleSsoOnly
        samlSsoOnly
    }
}
`;
export const MODIFY_PASSWORD = gql`
mutation modifyPassword($input: ModifyPasswordInput!){
    modifyPassword(input: $input)
}
`;
export const UPDATE_VERSION = gql`
mutation updateVersion($input: UpdateVersionInput!){
    updateVersion(input: $input){
        id
        tableId
        name
        description
        index
        sortBaseTable
        createdAt
        updatedAt
    }
}
`;
export const ADD_VERSION = gql`
mutation addVersion($input: AddVersionInput!){
    addVersion(input: $input){
        id
        tableId
        name
        description
        index
        sortBaseTable
        createdAt
        updatedAt
    }
}
`;
export const UPDATE_VISIT = gql`
mutation updateVisit($input: UpdateVisitInput!){
    updateVisit(input: $input){
        id
        userId
        teamId
        tableId
        viewId
        viewType
    }
}
`;
export const MODIFY_VISIT = gql`
mutation modifyVisit($input: ModifyVisitInput!){
    modifyVisit(input: $input)
}
`;
