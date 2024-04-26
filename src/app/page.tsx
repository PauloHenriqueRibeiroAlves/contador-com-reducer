"use client"
import { useContagem } from "../rededcerss-hooks/contagem";

const Page =() => {
  const [contagem, contagemDispatch] = useContagem ();

  return (
    <div className="p-5">
      Contagem: {contagem.count}
      <hr/>
      <button className="p-3 m-1 border border-black" onClick={() =>contagemDispatch({type: 'ADD'})}>Adicionar</button>
      <button className="p-3 m-1 border border-black" onClick={() =>contagemDispatch({type: 'DEL'})}>Remover</button>
      <button className="p-3 m-1 border border-black" onClick={() =>contagemDispatch({type: 'REST'})}>Resetar</button>
    </div>
  );
}

export default Page; //Precisa ter esse comando para ele se exportado e assim funcionar