/* eslint-disable no-unused-vars */
const obtenerDatos = async () => {
  try {
    const url = '/src/database/juegos.json';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log('Ocurrió un error');
  }
};

const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(valor);
};

export { obtenerDatos, formatearDinero };
