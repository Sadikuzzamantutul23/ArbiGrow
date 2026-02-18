import { motion } from "motion/react";
import {
  Scale,
  FileText,
  Database,
  Network,
  Lock,
  AlertCircle,
} from "lucide-react";

import Navbar from "../component/Navbar";

export default function LegalPage() {
  const sections = [
    {
      title: "1. Company Identity",
      icon: Database,
      content: [
        "Company Name: ArbiGrow Training Company",
        "Platform Type: Decentralized AI Trading Infrastructure",
        "Operating Network: Arbitrum One (Layer-2)",
      ],
    },

    {
      title: "2. Technology Partnership & Infrastructure",
      icon: Network,
      content: [
        "ArbiGrow operational systems and smart contracts are built on Arbitrum Nitro technology.",
        "Technology Provider Reference: Offchain Labs, Inc. – Developers of the Arbitrum ecosystem.",
        "All transaction settlements and security are ultimately protected by the Ethereum mainnet (Layer-1).",
      ],
    },

    {
      title: "3. Registration & License",
      icon: FileText,
      content: [
        "Legal Identity: C-Corporation",
        "State of Registration: Delaware, USA",
        "Registration Number: 7114194",
        "Registration Date: August 27, 2018",
        "Headquarters: Princeton, New Jersey, USA",
        "Official Websites: offchainlabs.com / arbitrum.io / yourdomain.com",
      ],
    },

    {
      title: "4. Compliance & Regulation",
      icon: Lock,
      content: [
        "We are committed to following international AML (Anti-Money Laundering) policies.",
        "KYC (Know Your Customer) compliance is maintained for platform integrity and fraud prevention.",
        "User data security and blockchain transparency are core principles of our infrastructure.",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-cyan-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 pt-3"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
              <Scale className="w-10 h-10 text-blue-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Legal Information &{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-4">
              Legal identity, technology framework, and compliance structure of
              the ArbiGrow platform.
            </p>

            <p className="text-sm text-gray-500">
              Last Updated: February 2026
            </p>
          </motion.div>

          {/* Legal Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-amber-400" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-amber-400 mb-2">
                  Legal Disclaimer
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  ArbiGrow Trading Company is a technology-driven platform.
                  Cryptocurrency trading involves market risks. While we aim to
                  reduce risks using AI analytics and high-speed blockchain
                  infrastructure, investors are advised to conduct their own
                  research before making financial decisions.
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mt-4">
                  ArbiGrow does not provide financial advisory services. All
                  investment decisions remain the responsibility of the user.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Legal Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4 pl-16">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-400 leading-relaxed text-sm md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}