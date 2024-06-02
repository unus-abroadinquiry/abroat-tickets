import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';


const Facebookmsg = () => {
  return (
    <FacebookProvider appId="7440237862681829" chatSupport>
        <CustomChat pageId="103074085113916" minimized="true"/>
      </FacebookProvider>    
  )
}

export default Facebookmsg