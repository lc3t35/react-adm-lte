// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const TabContent = ({children}) => {
  return (
    <div className='tab-content'>
      {children}
    </div>
  )
}

TabContent.propTypes = {
  children: PropTypes.element
}

export default TabContent
