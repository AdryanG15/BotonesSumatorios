import { useState } from 'react'

const Mascien =() => {

const [Mascien, setMascien] = useState(0)
  return (
    <div>
        <h2>El resultado es {Mascien}</h2>

          <button className='inline-flex' onClick={() => setMascien(Mascien + 100)}>Suma 100</button>
          <button className='inline-flex, bmalo' onClick={() => setMascien(Mascien - 100)}>Resta 100</button>
    </div>
  )
}

export default Mascien