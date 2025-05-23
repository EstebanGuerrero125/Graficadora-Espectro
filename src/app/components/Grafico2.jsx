'use client';

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
import { useState } from 'react';

const LineChartComponent = () => {
  const [signalData, setSignalData] = useState([]);
  const [centerFreq, setCenterFreq] = useState(2400);
  const [bandwidth, setBandwidth] = useState(100);
  const [power, setPower] = useState(-60);

  const noiseLevel = -90;
  const noiseLine = [];
  for (let f = 2000; f <= 3000; f += 10) {
    noiseLine.push({ frequency: f, power: noiseLevel });
  }

  const generateSignal = () => {
    const half = bandwidth / 2;
    const points = [
      { frequency: centerFreq - half, power: power },
      { frequency: centerFreq + half, power: power },
    ];
    setSignalData(points);
  };

  return (
    <div className="flex flex-col gap-4 items-center text-white">
      <div className="flex gap-2">
        <input
          type="number"
          value={centerFreq}
          onChange={(e) => setCenterFreq(Number(e.target.value))}
          placeholder="Frecuencia central"
          className="bg-white text-black px-2 py-1 rounded"
        />
        <input
          type="number"
          value={bandwidth}
          onChange={(e) => setBandwidth(Number(e.target.value))}
          placeholder="Ancho de banda"
          className="bg-white text-black px-2 py-1 rounded"
        />
        <input
          type="number"
          value={power}
          onChange={(e) => setPower(Number(e.target.value))}
          placeholder="Potencia"
          className="bg-white text-black px-2 py-1 rounded"
        />
        <button onClick={generateSignal} className="bg-blue-500 text-white px-4 py-1 rounded">
          Graficar señal
        </button>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart margin={{ right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="frequency" domain={[2000, 3000]} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line data={noiseLine} dataKey="power" type="monotone" stroke="#8884d8" dot={false} name="Nivel de ruido" />
          <Line data={signalData} dataKey="power" type="step" stroke="#3b82f6" dot={false} name="Señal" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
