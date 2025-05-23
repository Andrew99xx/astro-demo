import React, { type HTMLAttributes } from 'react'

const CommonHtmlRender:React.FC<HTMLAttributes<HTMLDivElement>> = ({...props}) => {
  return (
    <div {...props}>
        {props?.children}
    </div>
  )
}

export default CommonHtmlRender