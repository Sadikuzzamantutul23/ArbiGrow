import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

export default function Founders() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const team = [
    {
      name: 'Steven Goldfeder, PhD',
      title: 'Co-Founder & CEO, Offchain Labs',
      credentials: 'Princeton University',
      description: 'Leading expert in blockchain scalability and cryptographic protocols. Co-creator of Arbitrum technology.',
      expertise: ['Layer-2 Solutions', 'Cryptography', 'Distributed Systems']
    },
    {
      name: 'Ed Felten, PhD',
      title: 'Co-Founder & Chief Scientist, Offchain Labs',
      credentials: 'Princeton University, Former White House Deputy CTO',
      description: 'Renowned computer scientist and technology policy expert with extensive government advisory experience.',
      expertise: ['Computer Science', 'Security', 'Technology Policy']
    }
  ];

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
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Technology Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built on <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">World-Class Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by Arbitrum technology from Offchain Labs, founded by leading academics and blockchain pioneers
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <div className="text-indigo-400 font-semibold mb-2">{member.title}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Award className="w-4 h-4" />
                    <span>{member.credentials}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4">{member.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIdx) => (
                      <span 
                        key={skillIdx}
                        className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-xs text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Offchain Labs Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-indigo-900/20 backdrop-blur-xl border border-blue-500/30 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Powered by Offchain Labs Technology</h3>
            <p className="text-gray-300 leading-relaxed">
              ArbiGrow is built on Arbitrum, the leading Ethereum Layer-2 scaling solution developed by Offchain Labs. 
              This institutional-grade infrastructure ensures maximum security, performance, and reliability for decentralized 
              trading operations. Offchain Labs has raised over $120M from top-tier investors and powers billions in TVL across 
              the DeFi ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
