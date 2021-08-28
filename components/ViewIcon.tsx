import { ViewType } from '@generated/types'
import { IconGrid } from './icons/IconGrid'
import { IconKanban } from './icons/IconKanban'
import { IconGallery } from './icons/IconGallery'
import { IconForm } from './icons/IconForm'
import { IconCalendar } from './icons/IconCalendar'

interface Props {
  viewType: `${ViewType}`
  size?: number
}

export const ViewIcon = ({ viewType, size = 16 }: Props) => {
  const props = {
    square: size,
    gray600: true,
  }

  const iconsMap = {
    Grid: {
      icon: IconGrid,
      color: 'red500',
    },
    Kanban: {
      icon: IconKanban,
      color: 'green500',
    },
    Gallery: {
      icon: IconGallery,
      color: 'blue500',
    },
    Form: {
      icon: IconForm,
      color: 'purple500',
    },
    Calendar: {
      icon: IconCalendar,
      color: 'orange500',
    },
  }
  if (!iconsMap[viewType]) return null

  const { icon: Icon, color } = iconsMap[viewType]

  if (Icon) return <Icon size={24} {...{ [color]: true, ...props }}></Icon>
  return null
}
