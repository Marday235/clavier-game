import React from 'react'

export default function Acceuil({setNext}) {
  return (
  <>
    <div className="accueil">
        <div className="frappes-acceuill">
            Frappes Rappides
        </div>
        <p>100 mots. 100 progres.</p>
        <button onClick={()=>setNext(true)}>Suivant</button>
    </div>
  </>
  )
}
