import { Link } from 'react-router-dom'
import React from 'react'

export default function MyKitchen() {
  return (
    <div style={{ textAlign: 'center',  padding: '20px' }}>
      <h1 style={{ textShadow: '2px 2px 4px #000000', fontSize: '32px', fontWeight: 'bold', color: 'lightblue', textTransform: 'uppercase', margin: '0' }}>
        My kitchen
      </h1>
      <p style={{ fontSize: '18px', fontWeight: 'normal', color: '#333333', margin: '20px 0' }}>
        Bon Appetit :)
      </p><br/>
      <Link to="/createrec">
        <button style={{ fontSize: '16px', fontWeight: 'bold', borderRadius: '50px', color: '#FFFFFF', backgroundColor: 'lightblue', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
          Create recipes
        </button>
      </Link>
    </div>
  )
}

