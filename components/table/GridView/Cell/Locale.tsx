import { IconExpand } from '@components/icons/IconExpand'
import { css } from '@fower/core'
import ContentEditable from 'react-contenteditable'
import React, { FC, memo, useState, useEffect, useCallback, useRef } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@bone-ui/popover'
import { CellProps } from './CellProps'

// eslint-disable-next-line react/display-name
export const LocaleCell: FC<CellProps> = memo((props) => {
  const { cell, editable, updateCell, selected, width } = props
  const text = useRef(cell.data)
  const ref = useRef<any>()

  useEffect(() => {
    if (editable) {
      ref.current.el.current?.focus?.()
      document.execCommand('selectAll', false, '')
      document.getSelection()?.collapseToEnd()
    }
  }, [editable])

  useEffect(() => {
    text.current = cell.data
  }, [cell.data])

  const onChange = (e: any) => {
    text.current = e.target.value
  }

  const onBlur = useCallback(() => {
    updateCell({ ...cell, data: text.current })
  }, [text.current])

  return (
    <Popover placement="right-start" trigger="manual">
      <PopoverTrigger w-100p h-100p relative>
        {({ open }) => (
          <>
            <ContentEditable
              ref={ref}
              html={text.current || ''} // innerHTML of the editable div
              disabled={!editable} // use true to disable editing
              className={css({
                outlineNone: true,
                selectNone: !editable,
                square: '100%',
              })}
              style={{
                padding: '4px',
                paddingRight: '20px',
              }}
              onChange={onChange}
              onBlur={() => {
                onBlur()
              }}
              tagName="div"
            />
            <IconExpand
              onClick={open}
              size={16}
              absolute
              top-8
              right-6
              gray400
              cursorPointer
              hidden={!selected}
              visible={selected}
            />
          </>
        )}
      </PopoverTrigger>
      <PopoverContent w-200 h-120>
        go
      </PopoverContent>
    </Popover>
  )
})
