import { useState } from 'react'

const Masuno =() => {

const [Masuno, setMasuno] = useState(0)
  return (
    <div>
        <h2>El resultado es {Masuno}</h2>
        <button className='inline-flex' onClick={() => setMasuno(Masuno + 1)}>Suma 1</button>
        <button className='inline-flex, bmalo' onClick={() => setMasuno(Masuno - 1)}>Resta 1</button>
    </div>
  )
}

export default Masuno