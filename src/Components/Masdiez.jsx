import { useState } from 'react'

const Masdiez =() => {

const [Masdiez, setMasdiez] = useState(0)
  return (
    <div>
        <h2>El resultado es {Masdiez}</h2>
        <button className='inline-flex' onClick={() => setMasdiez(Masdiez + 10)}>Suma 1</button>
        <button className='inline-flex, bmalo' onClick={() => setMasdiez(Masdiez - 10)}>Resta 10</button>
    </div>
  )
}

export default Masdiez