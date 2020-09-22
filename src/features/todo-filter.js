import React from 'react'

export default function TodoFilter() {
  return (
    <div className="mt-4 d-flex">
        <button>ALL</button>
        <button>BOOKMARKED</button>
        <button>COMPLETED</button>
        <button>IN-COMPLETE</button>
    </div>
  )
}
