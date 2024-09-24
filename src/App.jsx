import { useState } from 'react'
import './App.css'

function App() {

  /* this(console one) is basic way to access the environment variables created in vite app
   second way used in production grade apps is to create a conf file in which all the env variables are 
   exported the below way is not efficient cause sometimes it can misread string type which causes huge error 
  console.log(import.meta.env.VITE_APPWRITE_URL); */
  
  return (
    <>
      <h1 className='text-red-500 bg-green-600'>This is a mega project of blog website</h1>
    </>
  )
}

export default App
