import { useState } from "react";

export default function Formulario_Optimo() {
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("http://localhost:4000/form", {
      method: "POST",
      body: new URLSearchParams(formData as any),
    });

    const data = await res.json();
    console.log("✅ Respuesta del servidor:", data);
    setMensaje(data.mensaje); // Muestra lo que dice el servidor
  };

  return (
    <div className="pagina">
      <h1>Formulario conectado ✅</h1>

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

        <button type="submit">Enviar</button>
      </form>

      {mensaje && <p style={{ marginTop: "1rem" }}>{mensaje}</p>}
    </div>
  );
}
