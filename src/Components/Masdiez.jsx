import useContador from '../Contador'

const Masdiez =() => {

  const {value, incrementValue, decrementValue} = useContador(10, 10)

  return (
    <div>
        <h2>El resultado es {value}</h2>
        
        <button className='inline-flex' onClick={incrementValue}>Suma 10</button>
        
        <button className='inline-flex, bmalo' onClick={decrementValue}>Resta 10</button>
    </div>
  )
}

export default Masdiez