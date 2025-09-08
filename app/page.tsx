'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Twitter, Send, GitMerge, ShieldCheck, Zap, Bot } from 'lucide-react'
import TokenDisplay from '../components/TokenDisplay'
import ServicesModal from '../components/ServicesModal'

const PLACEHOLDER_CA = "7zkkPU6BRm8crunSJDW4gXPTd2X8oE1Tw5S9Lum8pump"

export default function TrenchPadLanding() {
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false)

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(PLACEHOLDER_CA)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.log('Copy failed')
    }
  }

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const pricingTiers = [
    { mc: '$100k MC', price: '10 SOL', description: 'Early Adopters', status: 'upcoming', delay: 0 },
    { mc: '$250k MC', price: '8 SOL', description: 'Growth Phase', status: 'upcoming', delay: 0.1 },
    { mc: '$500k MC', price: '6 SOL', description: 'Expansion', status: 'upcoming', delay: 0.2 },
    { mc: '$750k MC', price: '4 SOL', description: 'Mainstream', status: 'upcoming', delay: 0.3 },
    { mc: '$1M MC', price: '2 SOL', description: 'Mass Adoption', status: 'upcoming', delay: 0.4 },
    { mc: '$5M MC', price: 'FREE', description: 'Community Release', status: 'upcoming', delay: 0.5 }
  ]

  return (
    <>
      <div className="bg-grid-slate-900 font-sans text-white">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-trench-400">Trench</span>Pad
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsServicesModalOpen(true)}
              className="bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Services
            </button>
            <a 
              href="https://t.me/osknyo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-trench-500 hover:bg-trench-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 py-8">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left: Hero & What It Does */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-trench-400">TrenchPad</span>
                  <span className="block text-4xl lg:text-5xl mt-2">Bundle Trading</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Professional Jito bundling system that coordinates 25 wallets for profitable Solana token trading.
                </p>
              </div>

              {/* What It Does */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">What TrenchPad Does:</h3>
                
                {[
                  'Coordinate 25 wallets for volume generation',
                  'Launch new PumpFun tokens with instant buying',
                  'Automated profit taking with stop losses'
                ].map((item, index) => (
                  <div 
                    key={item}
                    className={`flex items-start space-x-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                    style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-8 h-8 bg-trench-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Security */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-trench-400 mb-4 flex items-center">
                  🔒 Security & Privacy
                </h3>
                <div className="grid grid-cols-1 gap-3 text-gray-300">
                  <div className="flex items-center">
                    <span className="text-trench-400 mr-3 text-lg">✓</span>
                    <span className="text-base">100% local execution</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-trench-400 mr-3 text-lg">✓</span>
                    <span className="text-base">Your keys never leave your computer</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-trench-400 mr-3 text-lg">✓</span>
                    <span className="text-base">Complete source code included</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-trench-400 mr-3 text-lg">✓</span>
                    <span className="text-base">Zero data collection or tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Token Display */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Token CA */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">TrenchPad Token</h3>
                  <span className="px-4 py-2 bg-red-500/20 text-red-400 text-sm font-semibold rounded-full animate-pulse">
                    COMING SOON
                  </span>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm text-gray-300 break-all">
                      {PLACEHOLDER_CA}
                    </span>
                    <button
                      onClick={copyCA}
                      className={`ml-3 px-3 py-2 rounded text-sm font-semibold transition-all duration-300 ${
                        copied 
                          ? 'bg-trench-500 text-white' 
                          : 'bg-trench-600 hover:bg-trench-500 text-white'
                      }`}
                    >
                      {copied ? '✓' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: '⚡', title: 'Fast Execution', description: 'Lightning-fast bundle execution' },
                  { icon: '🛡️', title: 'MEV Protected', description: 'Protected from MEV attacks' },
                  { icon: '🔒', title: 'Secure & Local', description: 'Runs entirely on your machine' }
                ].map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{feature.icon}</div>
                      <div>
                        <div className="text-lg font-semibold text-white">{feature.title}</div>
                        <div className="text-sm text-gray-400">{feature.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pricing & Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Pricing */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-6 text-center">Pricing Tiers</h3>
                
                <div className="space-y-3">
                  {pricingTiers.map((tier, index) => (
                    <div 
                      key={tier.mc}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all duration-500 ${
                        tier.price === 'FREE' 
                          ? 'bg-trench-900/30 border border-trench-600/50' 
                          : 'bg-gray-900/50'
                      }`}
                      style={{
                        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                        opacity: isVisible ? 1 : 0,
                        transition: `all 0.4s ease-out ${tier.delay}s`
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          tier.price === 'FREE' ? 'bg-trench-500 text-white' : 'bg-gray-600 text-gray-300'
                        }`}>
                          {index + 1}
                        </span>
                        <div>
                          <span className="text-white font-medium">{tier.mc}</span>
                          <div className="text-xs text-gray-400">{tier.description}</div>
                        </div>
                      </div>
                      <span className={`font-bold text-lg ${tier.price === 'FREE' ? 'text-trench-400' : 'text-white'}`}>
                        {tier.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">Contact</h3>
                <div className="space-y-4 text-base">
                  <a href="https://x.com/osknyo_dev" target="_blank" className="flex items-center space-x-3 text-gray-400 hover:text-trench-400 transition-colors">
                    <span>🐦</span>
                    <span>Twitter: @osknyo_dev</span>
                  </a>
                  <a href="https://t.me/osknyo" target="_blank" className="flex items-center space-x-3 text-gray-400 hover:text-trench-400 transition-colors">
                    <span>💬</span>
                    <span>Telegram: @osknyo</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <span>💬</span>
                    <span>Discord: osknyo</span>
                  </div>
                </div>
              </div>

              {/* What You Get */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">What You Get</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-trench-400 mt-1">✓</span>
                    <span>Complete TypeScript source code</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-trench-400 mt-1">✓</span>
                    <span>25-wallet bundling system</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-trench-400 mt-1">✓</span>
                    <span>Token creation & bundling tools</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-trench-400 mt-1">✓</span>
                    <span>MEV protection & profit automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Wholesome Message */}
          <div className="text-center py-8">
            <p className="text-slate-400 italic">please buy my services so i can pay rent :) &lt;3</p>
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center">
            <div className={`inline-block px-8 py-4 bg-trench-900/20 border border-trench-700/30 rounded-xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.8s' }}>
              <span className="text-trench-400 font-semibold text-lg">
                💡 Early supporters get the best value • Lifetime access • Full source code
              </span>
            </div>
          </div>
        </main>
      </div>
      <ServicesModal isOpen={isServicesModalOpen} onClose={() => setIsServicesModalOpen(false)} />
    </>
  )
} 