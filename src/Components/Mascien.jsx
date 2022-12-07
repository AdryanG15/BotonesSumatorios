import useContador from '../Contador'

const Mascien =() => {

const {value, incrementValue, decrementValue} = useContador(100, 100)
  return (
    <div>
        <h2>El resultado es {value}</h2>

          <button className='inline-flex' onClick={incrementValue}>Suma 100</button>
          
          <button className='inline-flex, bmalo' onClick={decrementValue}>Resta 100</button>
    </div>
  )
}

export default Mascien