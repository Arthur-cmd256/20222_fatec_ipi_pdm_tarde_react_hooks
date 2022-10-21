import React from 'react'
import {Card} from 'primereact/card'


const Accordion = ({itens}) => {
    const expressaoJSX = itens.map((item, indice) => (
        <Card key={indice} className="border-1 border-400 p-0">
            <div className="">
                <i className="pi pi-caret-down"></i>
                <h5 className="inline ml-3">{item.titulo}</h5>
            </div>
            <p>{item.conteudo}</p>
        </Card>
    ))
  return (
    <div className="">
        {expressaoJSX}
    </div>
  )
}

export default Accordion