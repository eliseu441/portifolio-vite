import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';

export default function SocialWidget() {
  return (
    <div className="cs-social_btns cs-style1">
      <Link to='https://www.linkedin.com/in/eliseu-caetano-da-silva-68a272186/' className="cs-center me-3">
        <Icon icon="fa6-brands:linkedin-in" style={{width:'50px', height:'50px'}}/>
      </Link>
      <Link to='https://github.com/eliseu441' className="cs-center">
        <Icon icon="fa6-brands:github" style={{width:'50px', height:'50px', color:'black', background:'white', borderRadius:'50px'}}/>               
      </Link>
    </div>
  )
}
