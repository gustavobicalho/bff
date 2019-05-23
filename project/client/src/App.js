import React, {useState} from 'react';
import axios from 'axios';
import path from './environment';
import './App.css';

function App() {
  const [data, setData] = useState('');

  const request = (service) => {
    axios.get(service).then((response) => {
      setData(JSON.stringify(response.data, null, 4));
    });
  }

  const getPedido = () => {
    request(`${path}/pedido`);
  }

  const getPedidoBff = () => {
    request(`${path}/bff/pedido`);
  }

  const getUser = () => {
    request(`${path}/users`);
  }

  const getProducts = () => {
    request(`${path}/products`);
  }

  const getUserProducts = () => {
    request(`${path}/userProducts`);
  }

  return (
    <div className="app">
      <button onClick={getPedido}>Buscar Pedido</button>
      <button onClick={getPedidoBff}>BFF: Buscar Pedido</button>
      <button onClick={getUser}>Buscar Usuário</button>
      <button onClick={getProducts}>Buscar Produtos</button>
      <button onClick={getUserProducts}>BFF: Buscar Usuário e Pedidos</button>

      {data && <div className="app-renderer">{data}</div>}
    </div>
  );
}

export default App;
