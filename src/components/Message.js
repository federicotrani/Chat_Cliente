import React from 'react';

const obtenerFecha = () => {
  const ahora = new Date();
  const dia = ahora.getDate();
  const mes = ahora.getMonth() + 1;
  const anio = ahora.getFullYear();
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  return dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos + ':' + segundos;
}

const Message = (props) => (
    <div style={{ background: "#eee", borderRadius: '5px', padding: '0 10px' }}>
        <p><strong>{props.user}</strong> - {obtenerFecha()} - dice:</p>
        <p>{props.message}</p>
    </div>
);

export default Message;