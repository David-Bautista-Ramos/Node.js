import React from "react";
import { useForm } from "react-hook-form";

const formulario = () =>{

    const { register , handleSubmit} = useForm;

    const onSubmit = (data) => {
        console.log(data);
    };

    return <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label >Nombre:</label>
                <input type="text" name="" />
            </div>
            <div>
                <label >Apellido:</label>
                <input type="text"  name="" />
            </div>
            <div>
                <label >Edad:</label>
                <input type="text" name="" />
            </div>
            <label> Nacionalidad: </label>
            <select>
                <option value="nu">Seleccione una nacionalidad </option>
                <option value="co">Colombia</option>
                <option value="eu">Estadosunidos</option>
                <option value="es">Español</option>
                <option value="al">Alemania</option>
                <option value="it">Italia</option>
            </select>
        </form>
        <input type="submit" value='ENVIAR' />
    </div>
    
}

export default formulario;