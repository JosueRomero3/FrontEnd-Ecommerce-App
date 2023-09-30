import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer mt-3">
      <h1 className="text-center">Tienda ficticia &copy; LaTiendita</h1>
      <p className='text-center'>Esta es una tienda ficticia con fines académicos</p>
      <p className="text-center mt-3">
        <Link to="/about">Sobre Nosotros</Link>|<Link to="/contact">Contáctanos</Link>|
        <Link to="/policy">Política de Privacidad</Link>
      </p>
    </div>
  )
}
