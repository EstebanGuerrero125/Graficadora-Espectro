import AreaChart from './components/AreaChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import GraficoLinea from './components/GraficoLinea';
import Grafico2 from './components/Grafico2';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44">
       <h1 className="text-4xl font-bold text-white mb-8">Redes Inalámbricas</h1>
       <h3 className="text-s font-bold text-white mb-8">David Esteban Guerrero Davila 20221578081 </h3>
       <h3 className="text-s font-bold text-white mb-8">Harold Steven Martinez 20221578017 </h3>
       <h3 className="text-s font-bold text-white mb-8">Yair Santiago Pineda Romero 20221578049 </h3>
      
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]">
        
        <GridItem title="Grafico de espectro">
          <Grafico2 />
        </GridItem>
      </div>
    </main>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}
