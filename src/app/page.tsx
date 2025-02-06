'use client'
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

export default function Home() {
  //guardamos el hook para navegar
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-900 to-slate-800 flex flex-col items-center justify-between p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/*  <h1 className="text-4xl  text-white text-center mb-2">
           Bienvenido
         </h1> */}
        {/* <TitleGeneric color1="from-gray-200" color2="to-white" title="Bienvenido" /> */}
        <h1 className={`text-2xl bg-clip-text text-transparent bg-gradient-to-r ${'from-gray-200'} ${'to-white'}`}>
          {'Bienvenido'}
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-purple-900 to-cyan-400 rounded-full mb-12" />
      </motion.div>

      <div className="space-y-6 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button
            className={`w-full py-4 text-sm sm:text-lg   rounded-md shadow-2xl shadow-cyan-500/20 ${'bg-gradient-to-tl from-cyan-800 to-cyan-500'} transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
            onClick={() => router.push('/home')}
          >
            Continuar
          </button>
        </motion.div>
{/*         <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            className={`w-full py-4 text-sm sm:text-lg   rounded-md shadow-2xl shadow-cyan-500/20 ${'bg-gradient-to-tl from-cyan-800 to-cyan-500'} transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
            onClick={() => router.push('/home')}
          >
            REGISTRARSE
          </button>
        </motion.div> */}
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-gray-400 mt-8"
      >
        <p className="text-center hidden">Pie de página</p>
      </motion.footer>
    </div>

  );
}
