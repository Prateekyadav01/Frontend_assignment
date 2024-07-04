import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly m-4 bg-slate-200 h-auto md:h-32 p-4 rounded-md'>
      <div className='flex flex-col mb-4 md:mb-0 border-r border-gray-400 pr-4'>
        <h3 className='font-semibold mb-2'>Enter City</h3>
        <input type="text" placeholder="City Name" className='p-2 rounded-md border-2 border-gray-300' />
      </div>
      <div className='flex flex-col mb-4 md:mb-0 border-r border-gray-400 pr-4'>
        <h3 className='font-semibold mb-2'>Date</h3>
        <input type="date" placeholder='dd-mm-yyyy' className='p-2 rounded-md border-2 border-gray-300' />
      </div>
      <div className='flex flex-col mb-4 md:mb-0 border-r border-gray-400 pr-4'>
        <h3 className='font-semibold mb-2'>Price</h3>
        <select name="" id="" className='p-2 rounded-md border-2 border-gray-300'>
            <option value="">0-3000</option>
            <option value="500">RS:0-500</option>
            <option value="high">Rs: 500-1000</option>
            <option value="veryHigh">Rs: 1000-1500</option>
            <option value="extremelyHigh">Rs: 1500-2000</option>
            <option value="ultraHigh">Rs: 2000-3000</option>
            <option value="highest">Rs: 3000+</option>
        </select>
      </div>
      <div className='flex flex-col border-r border-gray-400 pr-4'>
        <h3 className='font-semibold mb-2'>Property Type</h3>
        <select name="" id="" className='p-2 rounded-md border-2 border-gray-300'>
            <option value="">All</option>
            <option value="house">House</option>
            <option value="pg">pg</option>
            <option value="Farm-house">Farm-house</option>
            <option value="villa">Villa</option>
            <option value="hotel">Hotel</option>
            <option value="Oyo">Oyo</option>
        </select>
      </div>
      <div className='flex items-center gap-3 ml-3'>
        <button className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400'>Submit</button>
      </div>
    </div>
  )
}

export default Search
