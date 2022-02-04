import React from 'react'
import SVG from 'react-inlinesvg'
import { toAbsoluteUrl } from '../Asset'
type Props = {
  className?: string
  path: string
  svgClassName?: string
}

const SvgHelpers: React.FC<Props> = ({className = '', path, svgClassName = 'mh-50px'}) => {
  return (
    <span className={`svg-icon ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  )
}

export {SvgHelpers}
