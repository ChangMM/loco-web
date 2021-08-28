import { FieldType } from '@generated/types'
import UserOutline from '@bone-ui/icons/UserOutline'
import CurrencyYenOutline from '@bone-ui/icons/CurrencyYenOutline'
import DocumentOutline from '@bone-ui/icons/DocumentOutline'
import LinkOutline from '@bone-ui/icons/LinkOutline'
import VariableOutline from '@bone-ui/icons/VariableOutline'
import { IconLongText } from './IconLongText'
import { IconSingleLineText } from './IconSingleLineText'
import { IconSingleSelect } from './IconSingleSelect'
import { IconMultipleSelect } from './IconMultipleSelect'
import { IconCheckbox } from './IconCheckbox'
import { IconPhone } from './IconPhone'
import { IconRate } from './IconRate'
import { IconNumber } from './IconNumber'
import CalendarSolid from '@bone-ui/icons/CalendarSolid'
import MailSolid from '@bone-ui/icons/MailSolid'
import UserSolid from '@bone-ui/icons/UserSolid'
import { IconLang } from './IconLang'

interface Props {
  fieldType: `${FieldType}`
  size?: number
}

export const FieldIcon = ({ fieldType, size = 16 }: Props) => {
  const props = {
    square: size,
    gray600: true,
  }

  const iconsMap: Record<FieldType, any> = {
    Key: IconSingleLineText,
    Locale: IconLang,
    Namespace: IconSingleLineText,
    SingleLineText: IconSingleLineText,
    LongText: IconLongText,
    Collaborator: UserSolid,
    SingleSelect: IconSingleSelect,
    CreatedAt: UserOutline,
    UpdatedAt: UserOutline,
    CreatedBy: UserOutline,
    LastUpdatedBy: UserOutline,
  }
  const Icon = iconsMap[fieldType]

  if (Icon) return <Icon {...props}></Icon>
  return null
}
