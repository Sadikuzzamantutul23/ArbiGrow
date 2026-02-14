import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Upload, AlertCircle, FileText, CheckCircle, Image as ImageIcon, X, ChevronDown } from 'lucide-react';

// Popular countries with their flags
const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
];

export default function VerificationPage() {
  const [idNumber, setIdNumber] = useState('');
  const [idType, setIdType] = useState('nid');
  const [country, setCountry] = useState(countries[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const frontInputRef = useRef(null);
  const backInputRef = useRef(null);

  const validateImageFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return 'Please upload a valid image file (JPEG, PNG, or WebP)';
    }
    
    if (file.size > 5 * 1024 * 1024) {
      return 'File size must be less than 5MB';
    }
    
    return null;
  };

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes((searchQuery || '').toLowerCase()) ||
    c.code.toLowerCase().includes((searchQuery || '').toLowerCase())
  );

  const handleFrontImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validationError = validateImageFile(file);
      
      if (validationError) {
        setError(validationError);
        return;
      }
      
      setFrontImage(file);
      setError('');
    }
  };

  const handleBackImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validationError = validateImageFile(file);
      
      if (validationError) {
        setError(validationError);
        return;
      }
      
      setBackImage(file);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!idNumber.trim()) {
      setError('Please enter your ID number');
      return;
    }

    if (idType === 'nid' && idNumber.length < 10) {
      setError('NID number must be at least 10 digits');
      return;
    }

    if (idType === 'passport' && idNumber.length < 6) {
      setError('Passport number must be at least 6 characters');
      return;
    }

    if (!frontImage) {
      setError('Please upload the front image of your ID');
      return;
    }

    if (!backImage) {
      setError('Please upload the back image of your ID');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      
      // Handle success - you can navigate or show success message here
      console.log('Verification submitted successfully');
      setError('');
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Verification failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060913] via-[#080b1f] to-[#060913] text-white flex items-center justify-center px-4 py-12">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] bg-blue-600/4 rounded-full blur-3xl"></div>
      </div>

      {/* Logo */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 flex items-center gap-3 group z-50"
      >
        <div className="relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/50">
            <div className="relative w-7 h-7 border-[3px] border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              ArbiGrow
            </span>
          </div>
          <div className="text-[8px] text-cyan-400/80 uppercase tracking-[0.2em] font-semibold -mt-0.5">
            AI Trading Platform
          </div>
        </div>
      </motion.a>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-2xl w-full"
      >
        {/* Card */}
        <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6"
              >
                <ShieldCheck className="w-10 h-10 text-blue-400" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Verify Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Identity</span>
              </h1>
              <p className="text-gray-400 text-sm md:text-base">
                To comply with regulatory requirements, please provide your government-issued ID information
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Country Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Country of Issue
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white flex items-center justify-between hover:bg-white/10 focus:outline-none focus:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown */}
                  {isCountryDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute z-50 w-full mt-2 p-2 bg-[#0a0e27] border border-white/10 rounded-xl shadow-2xl max-h-64 overflow-y-auto backdrop-blur-2xl"
                    >
                      {/* Search */}
                      <div className="p-2 mb-2">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search countries..."
                          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
                        />
                      </div>

                      {/* Country List */}
                      <div className="space-y-1">
                        {filteredCountries.map((c) => (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => {
                              setCountry(c);
                              setIsCountryDropdownOpen(false);
                              setSearchQuery('');
                            }}
                            className="w-full px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-3 text-left"
                          >
                            <span className="text-xl">{c.flag}</span>
                            <span className="text-sm">{c.name}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* ID Type Selection */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIdType('nid')}
                  className={`relative p-4 rounded-xl border transition-all duration-300 ${
                    idType === 'nid'
                      ? 'bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <FileText className={`w-6 h-6 mx-auto mb-2 ${idType === 'nid' ? 'text-blue-400' : 'text-gray-400'}`} />
                  <div className={`text-sm font-semibold ${idType === 'nid' ? 'text-white' : 'text-gray-400'}`}>
                    National ID
                  </div>
                  {idType === 'nid' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-xl border-2 border-blue-400"
                    />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIdType('passport')}
                  className={`relative p-4 rounded-xl border transition-all duration-300 ${
                    idType === 'passport'
                      ? 'bg-cyan-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Upload className={`w-6 h-6 mx-auto mb-2 ${idType === 'passport' ? 'text-cyan-400' : 'text-gray-400'}`} />
                  <div className={`text-sm font-semibold ${idType === 'passport' ? 'text-white' : 'text-gray-400'}`}>
                    Passport
                  </div>
                  {idType === 'passport' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-xl border-2 border-cyan-400"
                    />
                  )}
                </button>
              </div>

              {/* ID Number Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {idType === 'nid' ? 'National ID Number' : 'Passport Number'}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={idNumber}
                    onChange={(e) => {
                      setIdNumber(e.target.value);
                      setError('');
                    }}
                    placeholder={idType === 'nid' ? 'Enter your NID number' : 'Enter your passport number'}
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300"
                  />
                  {idNumber && !error && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* File Uploads */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  Upload ID Documents
                </label>

                <div className="grid md:grid-cols-2 gap-4">
                  {/* Front Image Upload */}
                  <div>
                    <input
                      ref={frontInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFrontImageChange}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => frontInputRef.current?.click()}
                      className="w-full h-40 rounded-xl border-2 border-dashed border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                    >
                      {frontImage ? (
                        <div className="relative w-full h-full p-3">
                          <div className="w-full h-full rounded-lg bg-white/5 flex items-center justify-center relative overflow-hidden">
                            <ImageIcon className="w-12 h-12 text-green-400" />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setFrontImage(null);
                              }}
                              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center hover:bg-red-500/30 transition-colors"
                            >
                              <X className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                          <p className="text-xs text-gray-400 mt-2 text-center truncate">{frontImage.name}</p>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                          <div className="text-center">
                            <p className="text-sm font-medium text-gray-300">Front Side</p>
                            <p className="text-xs text-gray-500 mt-1">Click to upload</p>
                          </div>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Back Image Upload */}
                  <div>
                    <input
                      ref={backInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleBackImageChange}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => backInputRef.current?.click()}
                      className="w-full h-40 rounded-xl border-2 border-dashed border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-3 group"
                    >
                      {backImage ? (
                        <div className="relative w-full h-full p-3">
                          <div className="w-full h-full rounded-lg bg-white/5 flex items-center justify-center relative overflow-hidden">
                            <ImageIcon className="w-12 h-12 text-green-400" />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBackImage(null);
                              }}
                              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-red-500/20 border border-red-500/50 flex items-center justify-center hover:bg-red-500/30 transition-colors"
                            >
                              <X className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                          <p className="text-xs text-gray-400 mt-2 text-center truncate">{backImage.name}</p>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                          <div className="text-center">
                            <p className="text-sm font-medium text-gray-300">Back Side</p>
                            <p className="text-xs text-gray-500 mt-1">Click to upload</p>
                          </div>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400">{error}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full group px-6 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl font-semibold overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5" />
                      Submit for Verification
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-4 rounded-xl bg-blue-500/5 border border-blue-500/20"
            >
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <p className="mb-1">
                    Your information is encrypted and securely stored. We use this data solely for identity verification purposes.
                  </p>
                  <p className="text-xs text-gray-500">
                    Verification typically takes 1-2 business days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-gray-400">
                Need help?{' '}
                <a href="#support" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}