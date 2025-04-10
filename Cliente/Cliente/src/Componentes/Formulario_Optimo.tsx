//https://react.dev/reference/react-dom/components/input
export default function Formulario_Optimo() {
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      fetch('http://localhost:4000/form', {
        method: form.method,
        body: new URLSearchParams(formData as any),
      });
      
      //fetch('/some-api', { method: form.method, body: formData });
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    };
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    );
  }