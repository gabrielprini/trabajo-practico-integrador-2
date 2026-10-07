// useState guarda y modifican datos que cambian dentro del componente, aca lo usamos para guardar
// los valores del formulario
import { useState } from "react";

// initialValues: Son los valores iniciales del formulario.
const useForm = (initialValues) => {
  // useState() sirve para crear un estado en React. Y como initialValues estan los valores del
  // formulario crea un estado de esto
  // formState => estado del formulario
  // setFormState => función que cambia el estado del formulario
  const [formState, setFormState] = useState(initialValues);

  // Creamos una función que se ejecutará cuando el usuario escriba en un input.
  const handleInputChange = (event) => {
    // event.target es el input que generó el evento.
    const { name, value } = event.target;

    // Acá vamos a modificar el estado. prevState significa, el estado anterior del formulario.
    setFormState((prevState) => ({
      // ... Significa: Copiá todas las propiedades que ya tenía el formulario.
      ...prevState,
      // los corchetes: permiten usar el valor de la variable name como nombre de propiedad.
      [name]: value,
    }));
  };

  // creamos una funcion que al llamarla el formulario vuelve a sus valores iniciales.
  const handleReset = () => {
    setFormState(initialValues);
  };

  // esto hace que el componente que use useForm pueda acceder a esas tres cosas:
  return { formState, handleInputChange, handleReset };
};

export default useForm;
