import { signOut, onAuthStateChanged } from "firebase/auth"
import React, { useState } from "react"
import { auth, db } from "../firebaseConfig"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { uid } from "uid"
import { set, ref, onValue, remove, update } from "firebase/database"
import {
  AiOutlinePlus,
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
} from "react-icons/ai"
import { FaSignOutAlt} from "react-icons/fa";

function HomePage() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const navigate = useNavigate()
  const [isEdit, setIsEdit] = useState(false)
  const [tempUidd, setTempUidd] = useState("")

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setTodos([])
          //Read
          const data = snapshot.val()
          if (data !== null) {
            Object.values(data).map((todo) => {
              setTodos((oldArray) => [...oldArray, todo])
            })
          }
        })
      } else if (!user) {
        navigate("/")
      }
    })
  }, [])
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  //Create
  const writeToDatabase = () => {
    const uidd = uid()
    set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
      todo: todo,
      uidd: uidd,
    })
    setTodo("")
  }
  //Update
  const handleUpdate = (todo) => {
    setIsEdit(true)
    setTodo(todo.todo)
    setTempUidd(todo.uidd)
  }

  const handleEditConfirm = () => {
    update(ref(db, `/${auth.currentUser.uid}/${tempUidd}`), {
      todo: todo,
      tempUidd: tempUidd,
    })

    setTodo("")
    setIsEdit(false)
  }
  //Delete
  const handleDelete = (uid) => {
    remove(ref(db, `/${auth.currentUser.uid}/${uid}`))
  }

  return (
    <div className=" flex justify-center">
      <input
        type='text'
        className='absolute top-[20px]  w-[80%] h-[40px] px-3 text-[#e40fac] outline-[#e40fac]'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <div className="mt-48 ">
      {todos.map((todo) => (
        
        <div className="flex justify-center items-center mb-1">
          <div className=' flex items-center gap-4'>
         <div className="w-[250px] h-[40px] bg-[#e40fac] flex justify-start items-center">
         <h1 className='text-white pl-2'>{todo.todo}</h1>
         </div>

          <AiFillEdit
            onClick={() => handleUpdate(todo)}
            className='text-white text-[27px] '
          />

          <AiFillDelete
            onClick={() => handleDelete(todo.uidd)}
            className='text-white text-[27px] '
          />
        </div>
        </div>
      ))}
      </div>

      {isEdit ? (
        <div>
          <AiOutlineCheck
            onClick={handleEditConfirm}
            className='text-white text-[27px] absolute top-[18px] left-[250px]'
          />
        </div>
      ) : (
        <div>
          <AiOutlinePlus
            onClick={writeToDatabase}
            className='text-[#e40fac] text-[27px] absolute top-[24px] right-[50px]'
          />
        </div>
      )}
     
      <FaSignOutAlt className='absolute bottom-0 left-0 text-[red] text-[24px] m-4'
        onClick={handleSignOut}/>
    </div>
  )
}

export default HomePage
