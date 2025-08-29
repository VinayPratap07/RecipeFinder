import './Loader.css'

function Loader() {
  return (
    <div className='loaderBox'>
        <div className="loaderBackground">
            <div className="loader"></div>
            
        </div>
        <p className='loaderText'>Finding recipes...</p>
    </div>
    
  )
}

export default Loader