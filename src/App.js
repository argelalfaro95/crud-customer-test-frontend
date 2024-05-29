import React, { useState, useEffect } from 'react';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import axios from 'axios';
import './App.css';

const App = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/Customer`);
      if (response.data && response.data.customer) {
        setCustomers(response.data.customer);
      } else {
        console.error('Error: la respuesta de la API no contiene clientes');
        setCustomers([]);
      }
    } catch (error) {
      console.error('Error al obtener a los clientes:', error);
      setCustomers([]);
    }
  };

  return (
    <div className="container">
      <h1>Sistema de Gestión de Clientes</h1>
      <CustomerForm fetchCustomers={fetchCustomers} />
      <CustomerList customers={customers} fetchCustomers={fetchCustomers} />
    </div>
  );
};

export default App;