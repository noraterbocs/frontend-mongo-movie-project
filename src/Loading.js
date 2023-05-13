import React from 'react'
import { Watch } from 'react-loader-spinner'

export const Loading = () => {
  return (
    <div className="loading-screen">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="rgba(0, 0, 0, 0.87)"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible />
    </div>
  )
}