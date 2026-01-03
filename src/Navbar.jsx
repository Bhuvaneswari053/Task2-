import html from './assets/html.jpg'

function Navbar(props){
    return(
        <div className="navv"> 
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            
        </div>

    );
}
export default Navbar