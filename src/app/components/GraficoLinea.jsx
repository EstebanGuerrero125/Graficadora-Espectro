'use client';
import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const LineChartComponent = () => {
  const [formData, setFormData] = useState({ name: '', senales: '', ruido: '' });
  const [data, setData] = useState([
    { name: 100, senales: 40, ruido: 24 },
    { name: 102, senales: 90, ruido: 24 },
    { name: 105, senales: 40, ruido: 24 }
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newPoint = {
      name: Number(formData.name),
      senales: Number(formData.senales),
      ruido: Number(formData.ruido),
    };
    setData([...data, newPoint]);
    setFormData({ name: '', senales: '', ruido: '' });
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <form onSubmit={handleAdd} className="mb-6 flex gap-2">
        <input
          type="number"
          name="name"
          placeholder="Frecuencia"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded bg-white text-black"

          required
        />
        <input
          type="number"
          name="senales"
          placeholder="Potencia"
          value={formData.senales}
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded bg-white text-black"

          required
        />
        <input
          type="number"
          name="ruido"
          placeholder="Ancho de banda"
          value={formData.ruido}
          onChange={handleChange}
          className="p-2 border border-gray-400 rounded bg-white text-black"

          required
        />
        <button type="submit" className="p-2 bg-blue-600 text-white rounded">
          Agregar
        </button>
      </form>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data} margin={{ right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="senales" stroke="#3b82f6" />
          <Line type="monotone" dataKey="ruido" stroke="#8b5cf6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          senales:<span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          ruido:<span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};
