import React, { useState } from 'react'
import { Hooks } from '@generated/hooks'
import { Refetcher } from '@generated/refetcher'
import { Input } from '@bone-ui/input'
import { Button } from '@bone-ui/button'
import { toast } from '@bone-ui/toast'
import { User, RoleType } from '@generated/types'
import { Tag } from './tag'
import { AddItemMenu } from './AddItemMenu'
import useDebounce from '@utils/useDebounce'
import { apiService } from '@generated/api'
import { useRouter } from 'next/router'
import { Box } from '@fower/react'

interface Props {
  onClose(isNeedUpdate: boolean): void
}
interface roleTypeObjIF {
  name: RoleType
  alias: string
}
export default function Members(props: Props) {
  const { onClose } = props
  const [addType, setAddType] = useState<number>(1)
  const [roleTypeObj, setRoleTypeObj] = useState<roleTypeObjIF>({
    name: RoleType.Editor,
    alias: '编辑者',
  })
  const [searchInput, setSearchInput] = useState('')
  const [selectUser, setSelectUser] = useState<User[]>([])
  const [isShowList, setIsShowList] = useState<boolean>(false)
  const router = useRouter()
  const query: any = router.query

  const { data: searchUser, loading: searchLoading } = Hooks.useSearchUsers()
  const liClick = (_addType: number) => {
    setAddType(_addType)
  }
  const onChangeInput = useDebounce((val: string) => {
    Refetcher.refetchSearchUsers({ q: val })
    setIsShowList(true)
  }, 1500)
  const handleCloseTab = (item: User) => {
    const _selectUser = selectUser.filter((ele) => item.id !== ele.id)
    setSelectUser(_selectUser)
  }
  const handleUserSelect = (item: User) => {
    setIsShowList(false)
    setSearchInput('')
    setSelectUser([...selectUser, item])
  }
  const addMember = async () => {
    try {
      await apiService.addMember({
        teamId: query.teamSlug,
        roleType: roleTypeObj.name,
        userId: selectUser[0].id,
      })
      toast.success('添加成员成功')
      setTimeout(() => {
        onClose(true)
      }, 1000)
    } catch (error) {
      toast.error('添加失败' + error.message)
    }
  }
  const onAddItem = (_roleType: RoleType) => {
    let alias = ''
    switch (_roleType) {
      case RoleType.Editor:
        alias = '编辑者'
        break
      case RoleType.Commenter:
        alias = '评论者'
        break
      case RoleType.Reader:
        alias = '阅读者'
        break
    }
    setRoleTypeObj({ name: _roleType, alias })
  }
  // if (!searchLoading) {
  //   console.log('查询结果', searchUser)
  // }
  const renderNullSearch = () => {
    return (
      <Box h-160 toCenter>
        <div>未搜索到相关结果</div>
      </Box>
    )
  }
  const renderAddType = () => {
    if (addType === 1) {
      return (
        <div>
          <Box mb-10>
            {selectUser.map((item: User) => {
              return (
                <Tag
                  mr-4
                  variant="outline"
                  closable
                  onClose={() => {
                    handleCloseTab(item)
                  }}
                  key={item.id}
                >
                  {item.nickname}
                </Tag>
              )
            })}
          </Box>
          <div>
            <Input
              onChange={(e) => {
                setSearchInput(e.target.value)
                return onChangeInput(e.target.value)
              }}
              value={searchInput}
              placeholder="输入用户名、id 搜索"
              size="sm"
              h-40
            />
            <Box relative h-300>
              {isShowList && searchUser ? (
                <Box absolute overflow="auto" maxH-264 w="100%" zIndex-102 bg="#f0f0f0">
                  {searchUser.length === 0 ? (
                    renderNullSearch()
                  ) : (
                    <ul style={{ listStyle: 'none' }}>
                      {searchUser.map((item) => {
                        if (selectUser.filter((value: User) => value.id === item.id).length)
                          return null
                        return (
                          <Box
                            as="li"
                            key={item.id}
                            bgBlue30--hover
                            cursorPointer
                            h-32
                            pt-5
                            pb-5
                            style={{ lineHeight: '22px' }}
                            onClick={() => handleUserSelect(item)}
                          >
                            <Box pl-10>{item.nickname}</Box>
                          </Box>
                        )
                      })}
                    </ul>
                  )}
                </Box>
              ) : null}
            </Box>
            {/* 底部 */}
            <Box pb-16>
              <Box row>
                <Box row>
                  <Box pr-20>已选择 {selectUser.length} 人</Box>
                  <span>
                    添加为：<span>{roleTypeObj.alias}</span>
                  </span>
                  <AddItemMenu onAddItem={onAddItem}></AddItemMenu>
                </Box>
                <Button onClick={addMember} disabled={selectUser.length === 0}>
                  添加
                </Button>
              </Box>
            </Box>
            {/* 底部end */}
          </div>
        </div>
      )
    } else {
      return <Box h-340>链接添加</Box>
    }
  }
  return (
    <Box pl-20 pr-20>
      <div>
        <Box row style={{ listStyle: 'none', lineHeight: '46px' }} h-46>
          <Box cursorPointer mr-20 onClick={() => liClick(1)}>
            搜索添加
          </Box>
          <Box cursorPointer mr-20 onClick={() => liClick(2)}>
            邀请添加
          </Box>
        </Box>
        {renderAddType()}
      </div>
    </Box>
  )
}
