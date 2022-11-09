import React from 'react'
import { CircleNotch } from 'phosphor-react'
import './LoadingCircle.css'

export default function LoadingCircle() {
  return (
    <div className='loading-box'>
        <CircleNotch className='loading-circle animate-spin'/>
    </div>
  )
}