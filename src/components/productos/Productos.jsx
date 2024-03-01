import PropTypes from 'prop-types';

const Productos = (props) => {
  console.log(props)

  return (
    <>
    <section className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
          <h1 className="display-1 fw-semibold">Componente de Productos</h1>
          <h1 className="fw-normal">No hemos podido encontrar lo que buscabas</h1>
          <button type="button" className="btn btn-outline-danger  rounded rounded-5 " onClick={props.funcionProps}> Click {props.count}</button>

          <h3>{props.club.nombre} es {props.club.estadio}</h3>
      </div>
    </section>
      
    </>
  );
};

Productos.propTypes = {
  funcionProps: PropTypes.func,
  club: PropTypes.object,
  count: PropTypes.number
}

export default Productos;
