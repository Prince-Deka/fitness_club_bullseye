import React from 'react'
import './Form.css'
// import {Link} from 'react-router-dom'

function Form() {
  return (
    <div className="flex flex-wrap justify-center mt-12">
        <div className='parent border-solid border-black border-1.2'>
            <h1 className='text-white text-3xl font-bold'>Fitness Club Registration</h1>
            <br />
            <form action="" className='px-20 py-5  solid-black item-left bg-white md-10'>
                <input type="text"  className=' border-solid rounded-sm  md-40 border-gray border-2 py-1.5'name='username' placeholder='Name'/>
                <br/><br />
                
                <input type="text"  className=' border-solid rounded-sm md-40 border-gray border-2 py-1.5'name='username' placeholder='Email' />
                <br/><br />

                <input type="text"  className=' border-solid rounded-sm  md-40 border-gray border-2 py-1.5'name='username'  placeholder='Phone Number'/>
                <br/><br />

                <input type="text"  className=' border-solid rounded-sm  md-40 border-gray border-2 py-1.5'name='username' placeholder='Address'/>
                <br/><br />

                <button className='bg-sky-600 text-white px-4 py-2'>Add member</button><br /><br />
                <button className='bg-sky-600 text-white px-4 py-2'>View Member List
              </button>
              {/* <Link to="/list">  View Member List</Link> */}
                
            </form>
        </div>
        
    </div>
  )
}

export default Form