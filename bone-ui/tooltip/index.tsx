import React, { FC } from 'react'
// import { createPortal } from 'react-dom'
import { forwardRef } from '@bone-ui/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { styled } from '@fower/styled'
import { useLayer, useHover, Arrow, Placement, mergeRefs } from 'react-laag'

const AnimatedDiv = styled(motion.div)

function isReactText(children: any) {
  return ['string', 'number'].includes(typeof children)
}

export interface TooltipProps {
  backgroundColor?: string
  label?: string | React.ReactElement
  placement?: Placement
}

export const Tooltip: FC<TooltipProps> = forwardRef((props, ref) => {
  const { children, label, placement = 'top-center', backgroundColor = 'black', ...rest } = props
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 })

  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement,
    possiblePlacements: ['bottom-center'],
    auto: true,
    triggerOffset: 8, // small gap between wrapped content and the tooltip
  })

  const { ref: layerRef, ...restLayerProps } = layerProps
  const tooltipRef = mergeRefs(ref, layerRef)

  let trigger
  if (isReactText(children)) {
    trigger = (
      <span className="bone-tooltip-trigger" {...triggerProps} {...hoverProps}>
        {children}
      </span>
    )
  } else {
    // In case of an react-element, we need to clone it in order to attach our own props
    trigger = React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps,
    })
  }

  return (
    <>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {isOver && (
            <AnimatedDiv
              className="bone-tooltip-content"
              // initial={{ opacity: 0, scale: 0.9 }}
              // animate={{ opacity: 1, scale: 1 }}
              // exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...restLayerProps}
              ref={tooltipRef}
              bg={backgroundColor}
              white
              shadowTiny
              roundedSmall
              px3
              py2
              zIndex-10000
              textSM
              {...rest}
            >
              {label}
              <Arrow {...arrowProps} backgroundColor="#000" size={6} />
            </AnimatedDiv>
          )}
        </AnimatePresence>,
      )}
    </>
  )
})
