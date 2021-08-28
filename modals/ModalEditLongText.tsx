import { Box } from '@fower/react'
import { modalService } from '@generated/modalService'
import { Cell } from '@generated/types'
import { useDebounceSyncCell } from '@hooks/useDebounceUpdateCell'
import React, { useEffect, useState } from 'react'

function ModalEditLongText({}) {
  const { data: modalData } = modalService.getModalEditLongText()
  const { data } = (modalData || {}) as Cell
  const debounceSync = useDebounceSyncCell()
  const [val, setVal] = useState(data)

  useEffect(() => {
    if (data) setVal(data)
  }, [data])

  function onChange(e: any) {
    setVal(e.target.value)
    debounceSync(modalData as Cell, e.target.value)
  }

  return (
    <Box h-100p w-100p>
      <Box as="textarea" h-100p w-100p flex value={val || ''} outlineNone onChange={onChange} />
    </Box>
  )
}

ModalEditLongText.modelProps = {}

export default ModalEditLongText
