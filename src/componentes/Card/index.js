import "./styles.css";

export default function Card(props) {
  //const titulo = props.titulo;
  return (
    <div className="Card">
      <div className="Title">{props.titulo} </div>
      <div className="Content"> {props.children} </div>
    </div>
  );
}
