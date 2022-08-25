import './App.css';

export default function Card(props){
    return(
        <>
        
    <div id='card_box'>
      <img src={props.img} alt='None'/>
    <div id='card'>
<span id='card_cat'>{props.title}</span>
<h3 id='title'> {props.name} </h3>
<a href={props.links} target="None">
  <button>Watch Now</button>
</a>
    </div>
    </div>
   
        </>
    )
}