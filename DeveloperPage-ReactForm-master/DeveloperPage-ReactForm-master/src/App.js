import React from 'react';
import './App.css'; // Asegúrate de tener este archivo si lo necesitas

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="titulo">Luis Najera <span>Developer</span></h1>
      </header>
      <form className="formulario">
        <fieldset>
          <legend>Contactanos llenando todos los campos</legend>
          <div className="contenedor-campos">
            <div className="campo">
              <label>Nombre</label>
              <input className="input-text" type="text" placeholder="Tu Nombre" required />
            </div>
            <div className="campo">
              <label>Telefono</label>
              <input className="input-text" type="tel" placeholder="Tu número" required />
            </div>
            <div className="campo">
              <label>Correo</label>
              <input className="input-text" type="email" placeholder="Dirección de correo electrónico" required />
            </div>
            <div className="campo">
              <label>Mensaje</label>
              <textarea className="input-text" name="" id="" cols="30" rows="10" required></textarea>
            </div>
          </div>
          <div className="alinear-derecha flex">
            <input className="boton w-sm-100" type="submit" value="Enviar" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;