import PropTypes from "prop-types";

const Productos = ({ funcionProps, club }) => {
  const { nombre, estadio } = club;

  return (
    <>
      <h1>Componente de Productos</h1>
      <h2>
        Nombre: {nombre} - Estadio: {estadio}
      </h2>
      <button onClick={funcionProps}>Ejecuta la funcion</button>
    </>
  );
};

Productos.propTypes = {
  name: PropTypes.string.isRequired,
  edad: PropTypes.number,
  funcionProps: PropTypes.func,
  club: PropTypes.object,
};

export default Productos;
