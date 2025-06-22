import React, { useEffect, useState } from 'react'

export default function Win({ setFrappeLost, setFrappesWin, setListFrappes, setStart, setWin, frappeWin, frappeLost, setScore }) {
    const [niveau, setNiveau] = useState("")
    const parSeconde = (frappeWin.length / 60)
    const NombreSeconde = parSeconde.toFixed(0)
    const NombreFausse = frappeLost.length
    console.log(NombreSeconde);
    useEffect(() => {
        if (NombreSeconde >= 6) {
            setNiveau("Tres Rapide")
        }
        else if (NombreSeconde >= 4 && NombreSeconde < 6) {
            setNiveau("Bien ")
        }
        else if (NombreSeconde >= 2 && NombreSeconde < 4) {
            setNiveau("Bon niveau  ")
        }
        else if (NombreSeconde >= 1 && NombreSeconde < 2) {
            setNiveau("Moyenne  ")
        }
        else {
            setNiveau("Débutant  ")
        }
    }, [NombreSeconde])

    const handclik = () => {
        setWin(false)
        setStart(true)
        setScore(0)
        setListFrappes("")
        setFrappesWin("")
        setFrappeLost("")

    }
    return (
        <>
            <div className="container">
                <div className="container-win">
                    <div className="title">
                        Frappes
                    </div>
                    <div className="contain-winer">
                        <div className="win-container">
                            <h1 className="title-win"> {niveau}</h1>
                            <div className="frappes-win">
                                <span className="win">{parSeconde.toFixed(2)} frappes parsecondes</span>
                                <br />
                                {NombreFausse > 0 && <span className="fausses">{NombreFausse} frappes fausses</span>}

                            </div>
                            <button onClick={handclik}>à nouveau</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
