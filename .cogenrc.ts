require('dotenv').config()
import { CogenConfig } from '@cogen/cli'
import { ModalConfig } from 'cogen-modal'
import { DrawerConfig } from 'cogen-drawer'

import { StookGraphqlConfig, ConfigItem } from 'cogen-stook-graphql'

const { NODE_ENV } = process.env

export const getEndpoint = () => {
  if (NODE_ENV === 'development') return 'http://localhost:5001/graphql'
  if (NODE_ENV === 'production') return 'http://1.14.165.196:5001/graphql'
  return 'http://localhost:5001/graphql'
}

const gqlConfig: ConfigItem[] = [
  {
    name: 'loginByGithub',
    actions: ['query'],
  },
  {
    name: 'registerByEmail',
    actions: ['query'],
  },
  {
    name: 'loginByEmail',
    actions: ['query'],
  },
  {
    name: 'ownedTeams',
    actions: ['useQuery', 'refetch'],
    depthLimit: 2,
    excludes: [
      'ownedTeams.invitationTokens',
      'ownedTeams.members',
      // 'ownedTeams.members.role',
      // 'ownedTeams.members.user',
      // 'ownedTeams.table.columns',
      // 'ownedTeams.table.rows',
    ],
  },
  {
    name: 'addMember',
    actions: ['query'],
  },
  {
    name: 'removeMember',
    actions: ['query'],
  },
  {
    name: 'exitTeam',
    actions: ['query'],
  },
  {
    name: 'modifyMemberRoleType',
    actions: ['query'],
  },
  {
    name: 'members',
    actions: ['useQuery', 'refetch'],
  },
  {
    name: 'searchUsers',
    actions: ['useQuery', 'refetch'],
  },
  {
    name: 'updateColumn',
    actions: ['query'],
    excludes: ['updateColumn.options'],
  },
  {
    name: 'modifyColumn',
    actions: ['query'],
  },
  {
    name: 'updateViewColumn',
    actions: ['query'],
  },
  {
    name: 'addView',
    actions: ['query'],
  },
  {
    name: 'updateView',
    actions: ['query'],
  },
  {
    name: 'removeView',
    actions: ['query'],
  },
  {
    name: 'createSort',
    actions: ['query'],
  },
  {
    name: 'updateSort',
    actions: ['query'],
  },
  {
    name: 'deleteSort',
    actions: ['query'],
  },
  {
    name: 'createGroup',
    actions: ['query'],
  },
  {
    name: 'updateGroup',
    actions: ['query'],
  },
  {
    name: 'deleteGroup',
    actions: ['query'],
  },
  {
    name: 'createFilter',
    actions: ['query'],
  },
  {
    name: 'updateFilter',
    actions: ['query'],
  },
  {
    name: 'deleteFilter',
    actions: ['query'],
  },
  {
    name: 'addColumn',
    actions: ['useMutation', 'query'],
  },
  {
    name: 'addRow',
    actions: ['query'],
  },
  {
    name: 'addRowWithData',
    actions: ['query'],
  },
  {
    name: 'modifyRow',
    actions: ['query'],
  },

  {
    name: 'addTeam',
    actions: ['query'],
    excludes: ['addTeam.members'],
  },
  {
    name: 'team',
    actions: ['useQuery'],
    depthLimit: 3,
  },

  {
    name: 'updateTeam',
    actions: ['useQuery', 'refetch'],
  },

  {
    name: 'tables',
    actions: ['query', 'useQuery'],
  },

  {
    name: 'table',
    depthLimit: 3,
    excludes: ['table.viewColumns', 'table.team'],
    actions: ['query', 'useQuery', 'refetch', 'mutator'],
  },

  {
    name: 'addTable',
    actions: ['query'],
  },

  {
    name: 'updateTable',
    actions: ['query'],
  },

  {
    name: 'removeTable',
    actions: ['query'],
  },

  {
    name: 'setAsLastVisited',
    actions: ['query'],
  },

  {
    name: 'updateCell',
    actions: ['query'],
  },

  {
    name: 'view',
    actions: ['query', 'useQuery'],
    excludes: ['view.viewColumns', 'view.sorts', 'view.groups', 'view.filters'],
  },
  {
    name: 'views',
    actions: ['useQuery', 'mutator', 'refetch'],
  },
  {
    name: 'columns',
    actions: ['useQuery', 'mutator', 'refetch'],
  },
  {
    name: 'versionedColumns',
    actions: ['query'],
  },
  {
    name: 'removeColumn',
    actions: ['useMutation', 'query'],
  },
  {
    name: 'removeRow',
    actions: ['useMutation', 'query'],
  },
  {
    name: 'rows',
    actions: ['useQuery', 'mutator', 'refetch'],
  },
  {
    name: 'versionedRows',
    actions: ['query'],
  },
  {
    name: 'sortRows',
    actions: ['query'],
  },
  {
    name: 'sortViews',
    actions: ['query'],
  },
  {
    name: 'sortViewColumns',
    actions: ['query'],
  },
  {
    name: 'modifyCell',
    actions: ['query'],
  },
  {
    name: 'createOption',
    actions: ['query'],
  },
  {
    name: 'updateOption',
    actions: ['query'],
  },
  {
    name: 'updateUser',
    actions: ['query'],
  },
  {
    name: 'modifyPassword',
    actions: ['query'],
  },
  {
    name: 'versions',
    actions: ['useQuery', 'refetch', 'query'],
  },
  {
    name: 'updateVersion',
    actions: ['query'],
  },
  {
    name: 'addVersion',
    actions: ['query'],
  },
  {
    name: 'updateVisit',
    actions: ['query', 'useQuery'],
  },
  {
    name: 'modifyVisit',
    actions: ['query', 'useQuery'],
  },
]

const config: CogenConfig = {
  plugins: ['cogen-stook-graphql', 'cogen-modal', 'cogen-drawer'],
  drawer: {
    moduleSpecifier: '@common/drawer',
  } as DrawerConfig,
  modal: {
    moduleSpecifier: '@common/modal',
  } as ModalConfig,
  stookGraphql: {
    codegen: {
      schema: [
        {
          [getEndpoint()]: {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjAsImlhdCI6MTU3ODM4MjMxNywiZXhwIjoxNTgwOTc0MzE3fQ.-du3lqLdO2TEkM4_YwqgTtS99d0F_48Se4ZOW0j6w0o',
            },
          },
        },
      ],
      generates: {
        [process.cwd() + '/generated/types.ts']: {
          plugins: ['typescript'],
        },
        [process.cwd() + '/generated/schema.graphql']: {
          plugins: ['schema-ast'],
        },
      },
    },
    httpModule: '@common/stook-graphql',
    // httpModule: 'stook-graphql',
    gql: gqlConfig,
  } as StookGraphqlConfig,
}

export default config
