import './pokemon.css'
function Pokemon({name , image}){

    return(
        <div className='pokemon'>
            <div><h2 className='pokemon-name'>{name}</h2></div>
            <div>
            <img src={image} alt={name} className='pokemon-image'/>
            </div>
        </div>
    )


}

export default Pokemon;
