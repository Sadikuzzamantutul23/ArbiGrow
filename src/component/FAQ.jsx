import { useState } from 'react';
import { motion, AnimatePresence} from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';
import Button from './Button';

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I pre-register for ArbiGrow?',
      answer: 'Click the "Pre-Register Now" button on the homepage and connect your Web3 wallet (MetaMask or Trust Wallet). Complete the brief registration form, and you will be added to our priority access list. Pre-registered users receive exclusive early access and bonus incentives at launch.'
    },
    {
      question: 'When are pre-registration bonuses distributed?',
      answer: 'Pre-registration bonuses will be distributed automatically to eligible wallets within 48 hours of mainnet launch on February 25, 2026. Bonuses are calculated based on registration timestamp and will be claimable through your connected wallet.'
    },
    {
      question: 'Does ArbiGrow work on all devices?',
      answer: 'Yes, ArbiGrow is fully responsive and works seamlessly across desktop, tablet, and mobile devices. You can access the platform through any modern web browser with Web3 wallet support. For mobile users, we recommend using MetaMask or Trust Wallet mobile apps with built-in dApp browsers.'
    },
    {
      question: 'Is ArbiGrow custodial? Do you hold my funds?',
      answer: 'No. ArbiGrow is 100% non-custodial. Your funds never leave your wallet, and we never have access to your private keys. All trading operations are executed through audited smart contracts on the Arbitrum network. You maintain complete control and ownership of your assets at all times.'
    },
    {
      question: 'What are the minimum requirements to use ArbiGrow?',
      answer: 'You need a Web3 wallet (MetaMask, Trust Wallet, or compatible), a small amount of ETH on Arbitrum for gas fees, and any supported trading assets. There is no minimum deposit requirement, though optimal AI strategies perform best with a recommended minimum of $1,000 USD equivalent.'
    },
    {
      question: 'How does the AI trading system work?',
      answer: 'The Arbi-Core AI engine analyzes real-time market data, identifies trading opportunities, and executes strategies through smart contracts. The system uses machine learning models trained on historical data, technical indicators, and sentiment analysis to make informed trading decisions without human emotion or bias.'
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center flex-shrink-0">
                  {openIndex === idx ? (
                    <Minus className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <Plus className="w-5 h-5 text-cyan-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-xl border border-blue-500/30"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-gray-400 mb-6">
            Our team is here to help. Reach out through our official communication channels.
          </p>
           <Button variant="gradient" fullWidth={false} className="mt-4  block mx-auto">
            Contact Support
           </Button>
        </motion.div>
      </div>
    </section>
  );
}
