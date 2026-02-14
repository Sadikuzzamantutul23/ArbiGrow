import { motion } from 'motion/react';
import { FileText, Shield, AlertCircle, CheckCircle, Scale, Lock } from 'lucide-react';
import Navbar from '../component/Navbar';

export function TermsAndConditions() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      icon: CheckCircle,
      content: [
        'By accessing and using the ArbiGrow platform ("Platform"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms and Conditions, please do not use the Platform.',
        'ArbiGrow reserves the right to modify these terms at any time. Your continued use of the Platform following any changes indicates your acceptance of the new terms.',
      ],
    },
    {
      title: '2. Eligibility and Account Registration',
      icon: Shield,
      content: [
        'You must be at least 18 years old and have the legal capacity to enter into binding contracts to use the Platform.',
        'You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.',
        'You are responsible for safeguarding your account credentials and for any activities or actions under your account.',
        'ArbiGrow reserves the right to suspend or terminate accounts that violate these terms or engage in fraudulent activities.',
      ],
    },
    {
      title: '3. Services Description',
      icon: FileText,
      content: [
        'ArbiGrow provides a decentralized AI trading infrastructure built on Arbitrum Layer-2 blockchain technology.',
        'The Platform offers automated trading strategies, portfolio management tools, and market analysis powered by artificial intelligence.',
        'Services are provided "as is" and "as available" without warranties of any kind, either express or implied.',
        'ArbiGrow does not guarantee profits or specific returns on investment. All trading involves risk, including the potential loss of principal.',
      ],
    },
    {
      title: '4. Trading Risks and Disclaimers',
      icon: AlertCircle,
      content: [
        'Cryptocurrency trading carries substantial risk of loss and is not suitable for all investors. You should carefully consider whether trading is appropriate for you in light of your experience, objectives, financial resources, and other relevant circumstances.',
        'Past performance is not indicative of future results. AI-powered strategies may not perform as expected in all market conditions.',
        'You acknowledge that you are solely responsible for determining the nature, potential value, suitability, and appropriateness of these risks for yourself.',
        'ArbiGrow is not liable for any losses incurred as a result of using the Platform, including but not limited to losses from market volatility, smart contract vulnerabilities, or system failures.',
      ],
    },
    {
      title: '5. Fees and Payments',
      icon: Scale,
      content: [
        'ArbiGrow charges fees for certain services as disclosed on the Platform. Fee structures may include subscription fees, performance fees, and transaction fees.',
        'All fees are non-refundable unless otherwise stated in writing by ArbiGrow.',
        'You authorize ArbiGrow to charge your connected wallet or payment method for all applicable fees.',
        'ArbiGrow reserves the right to modify fee structures with 30 days prior notice to users.',
      ],
    },
    {
      title: '6. Intellectual Property Rights',
      icon: Lock,
      content: [
        'All content, features, and functionality of the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are the exclusive property of ArbiGrow or its licensors.',
        'You are granted a limited, non-exclusive, non-transferable license to access and use the Platform for personal, non-commercial purposes.',
        'You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Platform without prior written consent.',
      ],
    },
    {
      title: '7. User Conduct and Prohibited Activities',
      icon: AlertCircle,
      content: [
        'You agree not to use the Platform for any unlawful purpose or in violation of these Terms.',
        'Prohibited activities include but are not limited to: (a) market manipulation, (b) money laundering, (c) financing terrorism, (d) circumventing security features, (e) using automated systems to access the Platform without authorization.',
        'You agree not to impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity.',
        'ArbiGrow reserves the right to investigate and take appropriate legal action against anyone who violates these provisions.',
      ],
    },
    {
      title: '8. Privacy and Data Protection',
      icon: Shield,
      content: [
        'Your use of the Platform is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
        'ArbiGrow collects, uses, and protects your personal information in accordance with applicable data protection laws, including GDPR and CCPA.',
        'By using the Platform, you consent to the collection and use of your information as described in our Privacy Policy.',
        'We implement industry-standard security measures to protect your data, but cannot guarantee absolute security.',
      ],
    },
    {
      title: '9. Compliance and Regulatory Matters',
      icon: Scale,
      content: [
        'You are responsible for complying with all applicable laws and regulations in your jurisdiction, including tax obligations related to cryptocurrency trading.',
        'ArbiGrow complies with AML (Anti-Money Laundering) and KYC (Know Your Customer) requirements and may request additional documentation to verify your identity.',
        'You represent and warrant that you are not located in, under the control of, or a national or resident of any restricted jurisdiction.',
        'ArbiGrow reserves the right to refuse service to users in jurisdictions where the Platform\'s services are prohibited.',
      ],
    },
    {
      title: '10. Limitation of Liability',
      icon: AlertCircle,
      content: [
        'To the maximum extent permitted by law, ArbiGrow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses.',
        'In no event shall ArbiGrow\'s total liability exceed the amount of fees paid by you to ArbiGrow in the twelve (12) months preceding the event giving rise to the liability.',
        'Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential damages. In such jurisdictions, our liability will be limited to the greatest extent permitted by law.',
      ],
    },
    {
      title: '11. Indemnification',
      icon: Shield,
      content: [
        'You agree to indemnify, defend, and hold harmless ArbiGrow, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses arising from: (a) your use of the Platform, (b) your violation of these Terms, (c) your violation of any third-party rights.',
      ],
    },
    {
      title: '12. Dispute Resolution and Arbitration',
      icon: Scale,
      content: [
        'Any dispute arising out of or relating to these Terms or the Platform shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.',
        'The arbitration shall be conducted in English and the seat of arbitration shall be Delaware, United States.',
        'You waive your right to participate in a class action lawsuit or class-wide arbitration.',
        'Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction.',
      ],
    },
    {
      title: '13. Termination',
      icon: AlertCircle,
      content: [
        'ArbiGrow may terminate or suspend your account and access to the Platform immediately, without prior notice or liability, for any reason, including breach of these Terms.',
        'Upon termination, your right to use the Platform will immediately cease. All provisions which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.',
        'You may terminate your account at any time by contacting customer support. Outstanding fees and obligations remain due upon termination.',
      ],
    },
    {
      title: '14. Force Majeure',
      icon: AlertCircle,
      content: [
        'ArbiGrow shall not be liable for any failure or delay in performance due to circumstances beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, network infrastructure failures, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.',
      ],
    },
    {
      title: '15. Miscellaneous',
      icon: FileText,
      content: [
        'Governing Law: These Terms shall be governed by and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.',
        'Severability: If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.',
        'Entire Agreement: These Terms constitute the entire agreement between you and ArbiGrow regarding the use of the Platform and supersede all prior agreements.',
        'Assignment: You may not assign or transfer these Terms without ArbiGrow\'s prior written consent. ArbiGrow may assign these Terms without restriction.',
        'Waiver: No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term.',
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
            Terms and{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-4">
            Please read these terms and conditions carefully before using the ArbiGrow platform
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: February 13, 2026
          </p>
        </motion.div>

        {/* Important Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-2">Important Notice</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                By accessing or using ArbiGrow, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. Cryptocurrency trading involves substantial risk and may not be suitable for all investors. You should carefully consider your investment objectives and risk tolerance before using our platform.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Section Content */}
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Questions About These Terms?</h3>
              <p className="text-gray-400 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  <span className="text-cyan-400 font-medium">Email:</span> legal@arbigrow.io
                </p>
                <p className="text-gray-300">
                  <span className="text-cyan-400 font-medium">Address:</span> 1234 Crypto Boulevard, Suite 500, Delaware, USA
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Acceptance Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#home"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            <CheckCircle className="w-5 h-5 relative z-10" />
            <span className="relative z-10">I Accept These Terms</span>
          </a>
        </motion.div>
      </div>
    </section>
      </>
  );
}
