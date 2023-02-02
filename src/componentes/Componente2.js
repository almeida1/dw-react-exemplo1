export default function Componente2(props) {
  const name = props.name;
  const tool = props.tool;
  return (
    <div>
      <h3> Passando parametros </h3>
      <p>My name is {name}.</p>
      <p>My favorite design tool is {tool}.</p>
    </div>
  );
}
