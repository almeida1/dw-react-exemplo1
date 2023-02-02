export default function componente1() {
  const msg = "primeiro componente";
  return (
    <div>
      <h3> Exemplo1 </h3>
      {/* apresenta a mensagem definida na variavel const */}
      <p> {msg}</p>
    </div>
  );
}
