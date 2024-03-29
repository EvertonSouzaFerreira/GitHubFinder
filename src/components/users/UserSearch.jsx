import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/GuihubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {
    const [text, setText] = useState('')

    const {users, searchUsers, clearUsers} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(text === ''){
            setAlert('Please enter something!!!', 'erro')
        }else{
            searchUsers(text)
            setText('')
        }
    }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
        
        <form onSubmit={handleSubmit} className='relative'>
            <div className='form-control'>
                <input onChange={handleChange} value={text} type='text' className='w-full pr-40 bg-gray-200 input input-lg text-black'/>
                <button type='submit' className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>Go</button>
            </div>
        </form>

        
        {users.length > 0 && (
            <div>
                <button onClick={clearUsers} className='btn btn-ghost btn-lg'>Clear</button>
            </div>
        )}
        
    </div>
  )
}

export default UserSearch
