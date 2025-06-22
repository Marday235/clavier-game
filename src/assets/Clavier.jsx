import React from 'react'

export default function Clavier({ frapper, listFrappes }) {
    const frapperArray = frapper.split("")

    return (
        <>
            <div className="container-clavier">
                {frapperArray.map((frap, i) => {
                    let status = "no"
                    if (listFrappes.length >= 1) {
                        if (listFrappes.indexOf(frap) !== -1 && i < listFrappes.length) {
                            status = "trouve"
                        }
                        else {
                            status = "no"
                        }
                    }

                    return (
                        <span className={status} key={i}>{frap}</span>
                    )
                })}
            </div>
        </>
    )
}
