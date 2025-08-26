import React from 'react'
import { useNavigate } from 'react-router-dom'
const Sidebar = ({selectedUser,setSelectedUser}) => {

    const navigate = useNavigate();
  return (
    <div>
     <div className='pb-5'>
        <div className='flex items-center justify-between'>
            <img src="{assets.logo}" alt="logo" className='max-w-40' />
                <div className='relative py-2 group '>
            <img src="{assets.menu_icon}" alt="Menu" className='max-h-5' />
            <div>
                <p className='cursor-pointer text-sm'>Edit Profile</p>
                <hr className='my-2 border-t border-gray-500'/>
                <p className='cursor-pointer text-sm'>Logout</p>
            </div>

                </div>
        </div>
     </div>
    </div>
  )
}

export default Sidebar
