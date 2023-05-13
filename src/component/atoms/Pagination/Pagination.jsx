import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useDispatch, useSelector } from 'react-redux'
import { paginationControl } from '../../../config/redux/userSlice/userSlice'

function Pagination() {
    const dispatch = useDispatch()
   const p = useSelector(state => state.user.pagination)
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
    <div className="flex flex-1 justify-between sm:hidden">
      <a
        
        onClick={()=> dispatch(paginationControl(p-1))}
        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Previous
      </a>
      <a
        
        onClick={()=> dispatch(paginationControl(p+1))}
        
        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        Next
      </a>
    </div>
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>

      </div>
      <div>
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a
           
            onClick={()=> dispatch(paginationControl(p-1))}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
          {[1,2,3,4,5].map((v,i)=>(
            <a
            key={i}
            onClick={()=> dispatch(paginationControl(v))}
            aria-current="page"
            className={`relative inline-flex items-center px-4 py-2 bg-${p == v ? "green" : "" }-400 text-sm font-semibold text-${p == v ? "white" : "black" } ring-1 ring-inset ring-gray-300 hover:bg-${p+1 == v ? "green" : "" }-500 focus:z-20 focus:outline-offset-0`}
            >
            {v}
          </a>
          ))}
          
          <a
            onClick={()=> dispatch(paginationControl(p-1))}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Pagination