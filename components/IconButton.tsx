import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from '@fortawesome/fontawesome-svg-core'

interface Props {
   icon: IconDefinition
   label: string
}

function IconButton({icon, label}: Props) {
   return (
      <button className="flex items-center space-x-2 hover:text-white">
         <FontAwesomeIcon
            className="icon"
            icon={icon}
         />
         <span>{label}</span>
      </button>
   )
}

export default IconButton
