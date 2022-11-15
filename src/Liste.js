
var Liste = (props) => (

  <div className="pokemonList">
  {console.log(props)}
  <div><h5><em>{props.data.map((element)=>
    <Liste data={element}/>
  )}</em></h5></div>
  <div className="pokemonName">{props.pokemonData.name}</div>
</div>


)

  export default Liste;