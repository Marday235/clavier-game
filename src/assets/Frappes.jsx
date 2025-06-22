import React, { useEffect, useMemo, useState } from 'react'
import Clavier from './Clavier';
import Win from '../Win';

export default function Frappes() {
    const WordFrappes = useMemo(() => [
        "beau", "grand", "petit", "rapide", "lent", "facile", "ancien", "nouveau",
        "fort", "faible", "clair", "sombre", "heureux", "triste", "rich", "pauvre", "intelligent",
        "sage", "fou", "amusant", "ennuyeux", "gentil", "méchant", "vrai", "faux", "chaud",
        "froid", "haut", "bas", "sec", "mouillé", "lourd", "léger", "proche", "lointain", "jeune",
        "vieux", "simple", "compliqué", "bon", "mauvais", "propre", "sale", "riche", "vide", "plein",
        "premier", "dernier", "suivant", "précédent", "tard", "ensemble", "seul", "pareil",
        "différent", "même", "autre", "beaucoup", "peu", "assez", "trop", "important", "inutile",
        "essentiel", "secondaire", "fortuit", "prévu", "quotidien", "rare", "constant", "variable",
        "incertain", "logique", "absurde", "visible", "invisible", "audible", "inaudible",
        "dur", "mou", "solide", "fragile", "vivant", "mort", "actif", "passif", "ouvert", "fermé",
        "public", "privé", "national", "international", "humain", "animal", "naturel", "artificiel"
    ], []);
    const [score, setScore] = useState(0)
    const [frapper, setFrapper] = useState([])
    const [index, setIndex] = useState(0)
    const [inde, setInde] = useState(0)
    const [listFrappes, setListFrappes] = useState("")
    const [frappesWin, setFrappesWin] = useState(0)
    const [start, setStart] = useState(true)
    const [frappeWin, setFrappewin] = useState("")
    const [frappeLost, setFrappeLost] = useState("")
    const [win, setWin] = useState(false)

    //
    useEffect(() => {
        if (score > 60) {
            setScore(0)
            setStart(false)
            setWin(true)
            setIndex(0)
            setFrapper([])
            setInde(0)
        }
    }, [score])
    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setScore(prev => prev + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [score, start])
    useEffect(() => {
        const inigame = () => {
            setFrapper(WordFrappes[index])
        }
        inigame()
    }, [WordFrappes, index, frapper])
    useEffect(() => {

        const verifiesFrappes = (letter) => {
            const frapperArray = frapper.split("")
            if (frapperArray[inde] === letter) {
                const frapper = [...listFrappes, letter]
                setListFrappes(frapper)
                const frapperWins = [...frappeWin, letter]
                setInde(i => i + 1)
                setFrappewin(frapperWins)
            } if (frapperArray[inde] !== letter) {
                const frapperLosts = [...frappeLost, letter]
                setFrappeLost(frapperLosts)
                console.log(frappeLost);
            }
        }
        const fyup = (e) => {
            const frappe = e.key
            if (!win) {
                verifiesFrappes(frappe)
            }

        }
        window.addEventListener("keyup", fyup)
        return () => {
            window.removeEventListener("keyup", fyup)
        }
    }, [frapper, listFrappes, inde, frappeLost, frappeWin,win])

    useEffect(() => {
        const verifieFrapper = () => {

            if (listFrappes !== "") {
                if (listFrappes.length === frapper.length) {
                    let frappeIndex = 0
                    for (let i = 0; i < frapper.length; i++) {
                        if (frapper.indexOf(listFrappes[i]) === -1) {
                            frappeIndex = 0
                        }
                        else {
                            frappeIndex = 1
                        }
                    }

                    console.log(frappeIndex);

                    setFrappesWin(frappeIndex)

                    if (frappeIndex === 1) {
                        if (index < WordFrappes.length - 1) {
                            setIndex(t => t + 1)
                            console.log("yy");
                            setListFrappes("")
                            setInde(0)
                        }
                    }
                }
            }
        }
        verifieFrapper()
    }, [listFrappes, index, frapper, WordFrappes, frappesWin])

    return (
        <>
            {!win && <div className="container-home">
                <div className="title">
                    Frappes
                </div>
                <div className="container">
                    {frapper.length > 1 &&
                        <Clavier frapper={frapper} listFrappes={listFrappes} inde={inde} />}
                </div>
                <div className="conter-seconde">
                    <span>{score}</span>
                </div>
            </div>}
            {win && <Win setScore={setScore} setStart={setStart} setWin={setWin} frappeWin={frappeWin} setListFrappes={setListFrappes} frappeLost={frappeLost} setFrappeLost={setFrappeLost} setFrappesWin={setFrappesWin} />}
        </>
    )
}
