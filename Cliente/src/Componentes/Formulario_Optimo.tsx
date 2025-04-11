import { useState } from "react";

export default function Formulario_Optimo() {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Enviamos los datos con URLSearchParams
    await fetch("http://localhost:4000/form", {
      method: "POST",
      body: new URLSearchParams(formData as any),
    });

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // Lo ves bien en consola del navegador
  };

  return (
    <div className="pagina">
      <h1>Formulario conectado</h1>

      <form method="post" onSubmit={handleSubmit} className="formulario">
        <h2>Formulario de contacto</h2>

        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Escribe tu nombre"
          required
        />

        <label htmlFor="correo">Correo electrónico:</label>
        <input
          type="email"
          name="correo"
          id="correo"
          placeholder="tucorreo@ejemplo.com"
          required
        />

        <div className="botones">
          <button type="reset">Reset</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}
