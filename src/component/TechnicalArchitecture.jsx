import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Layers, Cpu, Zap, Shield, TrendingUp, Database } from 'lucide-react';

export default function TechnicalArchitecture() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Technical Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built on <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Enterprise Infrastructure</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Arbitrum Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-600/10 to-blue-900/10 backdrop-blur-xl border border-blue-500/30"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-transparent blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center mb-6">
                <Layers className="w-8 h-8 text-blue-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Arbitrum & Offchain Labs Integration</h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Leveraging Arbitrum's optimistic rollup technology to deliver unparalleled speed, security, and cost efficiency for decentralized trading operations.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Layers, title: 'Optimistic Rollup Technology', desc: 'Advanced Layer-2 scaling solution' },
                  { icon: Shield, title: 'Ethereum-level Data Security', desc: 'Inherits Ethereum mainnet security' },
                  { icon: Zap, title: 'Fast Finality', desc: 'Near-instant transaction confirmation' },
                  { icon: TrendingUp, title: 'Low Gas Fees', desc: 'Up to 90% reduction in costs' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    className="flex md:flex-row flex-col md:items-start items-center md:text-left text-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Engine Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 rounded-3xl bg-gradient-to-br from-cyan-600/10 to-cyan-900/10 backdrop-blur-xl border border-cyan-500/30"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-cyan-500/20 to-transparent blur-xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center mb-6">
                <Cpu className="w-8 h-8 text-cyan-400" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                AI Engine – <span className="text-cyan-400">"Arbi-Core"</span>
              </h3>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Proprietary machine learning infrastructure that processes market data in real-time and executes emotion-free trading strategies through smart contracts.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Database, title: 'Real-time Data Ingestion', desc: 'Multi-source market intelligence' },
                  { icon: Cpu, title: 'Predictive Machine Learning', desc: 'Advanced pattern recognition algorithms' },
                  { icon: Zap, title: 'Smart Contract Auto-Execution', desc: 'Trustless automated trade execution' },
                  { icon: TrendingUp, title: 'Emotion-free Trading Logic', desc: 'Algorithmic decision-making system' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                    className="flex md:flex-row flex-col md:items-start items-center md:text-left text-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">{item.title}</div>
                      <div className="text-sm text-gray-400">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connection Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 relative"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-400 blur-sm"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
