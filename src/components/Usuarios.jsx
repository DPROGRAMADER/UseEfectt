import React, { useState } from 'react'

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const mostrarUsuarios = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((res,) => res.json())
      .then((data) => SetUsuarios(data))
      .catch((err) => {
        console.log(err)
      })
  }
  mostrarUsuarios()

  return (
    <div>Usuarios</div>
  )
}

export default Usuarios