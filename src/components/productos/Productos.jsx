import PropTypes from "prop-types";

const Productos = ({ funcionProps }) => {

  return (
    <>
      <h1>Componente de Productos</h1>
      
      <button onClick={funcionProps}>Disminuir desde producto</button>
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
