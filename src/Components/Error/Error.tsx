import './Error.css'

function Error() {
  const message: string = "Something went wrong!Please try later" ;
  return (
    <div className='errorBox'>
      <h1>{message}</h1>
    </div>
  )
}

export default Error