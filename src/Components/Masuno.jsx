import useContador from '../Contador'

const Masuno =() => {

const {value, incrementValue, decrementValue} = useContador()

  return (
    <div>
        <h2>El resultado es {value}</h2>

        <button className='inline-flex' onClick={incrementValue}>Suma 1</button>

        <button className='inline-flex, bmalo' onClick={decrementValue}>Resta 1</button>

    </div>
  )
}

export default Masuno