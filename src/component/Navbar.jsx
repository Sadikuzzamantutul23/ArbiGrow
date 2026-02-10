import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap, FileText, LogIn, UserPlus, ChevronDown } from 'lucide-react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
   const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Features', href: '#features' },
    { label: 'Security', href: '#security' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'About', href: '#about' }
  ];

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3'
            : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className={`relative rounded-2xl transition-all duration-500 ${
            isScrolled
              ? 'bg-[#0a0e27]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-blue-500/10'
              : 'bg-gradient-to-r from-[#0a0e27]/40 via-[#0a0e27]/60 to-[#0a0e27]/40 backdrop-blur-md border border-white/5'
          }`}>
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} 
                className="flex items-center gap-3 group relative z-10"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  
                  {/* Logo container */}
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/50">
                    <div className="relative w-7 h-7 border-[3px] border-white rounded-full flex items-center justify-center">
                      <motion.div 
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                      ArbiGrow
                    </span>
                  </div>
                  <div className="text-[9px] text-cyan-400/80 uppercase tracking-[0.2em] font-semibold -mt-1">
                    AI Trading Platform
                  </div>
                </div>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="relative px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-cyan-500/10 to-blue-600/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div 
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 group-hover:w-3/4 transition-all duration-300"
                    ></motion.div>
                  </a>
                ))}
              </div>

              {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/5"
                onClick={() => navigate("/login")}>
                  <LogIn className="w-4 h-4" 

                  />
                  <span>Login</span>
                </button> 

               <Button variant="gradient" icon={<Zap />}
               onClick={() => navigate("/register")}>
                Pre-Register
                </Button>
              </div>


              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/20 flex items-center justify-center hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-cyan-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5 relative z-10" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5 relative z-10" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-gradient-to-br from-[#0a0e27] via-[#0d1137] to-[#0a0e27] border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/50">
                      <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">ArbiGrow</div>
                      <div className="text-[8px] text-cyan-400/80 uppercase tracking-wider">AI Trading</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1 mb-8">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{link.label}</span>
                        <ChevronDown className="w-4 h-4 -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

                {/* Action Buttons */}
                {/* <div className="space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 border border-white/10">
                    <FileText className="w-4 h-4" />
                    Whitepaper
                  </button> */}
                       <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2">
                           <Button variant="frosted" icon={<LogIn />}
                            onClick={() => navigate("/login")}
                           >
                            Login
                           </Button>

                          <Button variant="frosted" icon={<UserPlus />}
                          onClick={() => navigate("/register")}
                          >
                          Register Account
                         </Button>

                 
                   </div>

                  {/* <button className="w-full relative group px-5 py-3.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl font-semibold text-sm overflow-hidden shadow-lg shadow-blue-500/30">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Pre-Register Now
                    </span>
                  </button> */}
                

                {/* Bottom Info */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-center text-sm text-gray-400">
                    <p className="mb-2">Powered by Arbitrum</p>
                    <p className="text-xs text-gray-500">Enterprise-Grade Security</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
