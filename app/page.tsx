'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, Twitter, Send, GitMerge, ShieldCheck, Zap, Bot } from 'lucide-react'
import TokenDisplay from '../components/TokenDisplay'
import ServicesModal from '../components/ServicesModal'
import PurchaseModal from '../components/PurchaseModal'

const PLACEHOLDER_CA = "Coming Soon"

export default function TrenchPadLanding() {
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false)
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false)

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
    { mc: 'Current Price', price: '5 SOL', description: 'Available Now', status: 'current', delay: 0 },
    { mc: '$100k MC', price: '4 SOL', description: 'Early Adopters', status: 'upcoming', delay: 0.1 },
    { mc: '$250k MC', price: '3 SOL', description: 'Growth Phase', status: 'upcoming', delay: 0.2 },
    { mc: '$500k MC', price: '2.5 SOL', description: 'Expansion', status: 'upcoming', delay: 0.3 },
    { mc: '$750k MC', price: '2 SOL', description: 'Mainstream', status: 'upcoming', delay: 0.4 },
    { mc: '$1M MC', price: '1 SOL', description: 'Mass Adoption', status: 'upcoming', delay: 0.5 },
    { mc: '$5M MC', price: 'FREE', description: 'Community Release', status: 'upcoming', delay: 0.6 }
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
          {/* Hero Banner */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-trench-400">TrenchPad</span>
              <span className="block text-4xl lg:text-5xl mt-2 text-gray-300">Professional Jito Bundle Trading</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              The most advanced Solana bundling system that coordinates 25 wallets for profitable token trading. 
              <span className="text-trench-400 font-semibold"> Runs 100% locally on your machine</span> - your keys never leave your computer.
            </p>

            {/* YouTube Video Embed */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-trench-500/20 border border-trench-500/20">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/RmsHAma_qUE?si=CRMWOZ9VIpW4Xjoa&playback_rate=1.5" 
                  title="TrenchPad Demo" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left: What It Does & Benefits */}
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-trench-400 mb-4 flex items-center">
                  <span className="mr-3">⚡</span> What TrenchPad Does
                </h3>

                {[
                  'Coordinate 25 wallets for volume generation',
                  'Launch new PumpFun tokens with instant buying',
                  'Automated profit taking with stop losses'
                ].map((item, index) => (
                  <div 
                    key={item}
                    className={`flex items-start space-x-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                    style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-6 h-6 bg-trench-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              {/* Why Choose TrenchPad */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-trench-400 mb-4 flex items-center">
                  <span className="mr-3">🛡️</span> Why Choose TrenchPad
                </h3>
                <div className="grid grid-cols-1 gap-3 text-gray-300">
                  <div className="flex items-start space-x-3">
                    <span className="text-trench-400 mr-1 text-lg mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-white">100% Local Execution</span>
                      <p className="text-sm text-gray-400">Runs entirely on your machine - maximum security</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-trench-400 mr-1 text-lg mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-white">Your Keys Stay Private</span>
                      <p className="text-sm text-gray-400">Never uploaded, shared, or stored anywhere</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-trench-400 mr-1 text-lg mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-white">Complete Source Code</span>
                      <p className="text-sm text-gray-400">Full TypeScript codebase included</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-trench-400 mr-1 text-lg mt-0.5">✓</span>
                    <div>
                      <span className="font-semibold text-white">Zero Tracking</span>
                      <p className="text-sm text-gray-400">No data collection or analytics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Goal */}
              <div className="bg-gradient-to-r from-trench-900/30 to-green-900/30 border border-trench-500/50 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-trench-400 mb-4 flex items-center">
                  <span className="mr-3">🚀</span> Community Mission
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-white font-semibold">Help us reach $5M market cap</span> and TrenchPad becomes 
                    <span className="text-green-400 font-semibold"> FREE for everyone!</span>
                  </p>
                  <p className="text-sm text-gray-400">
                    Every purchase brings us closer to the community release. Be part of the movement that democratizes advanced Solana trading tools.
                  </p>
                  <div className="bg-trench-800/30 p-3 rounded-lg border border-trench-600/30">
                    <p className="text-xs text-trench-300 text-center font-semibold">
                      💡 Early supporters get lifetime access + help unlock free access for thousands
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Purchase & Token */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              
              {/* Purchase Button */}
              <div className="bg-gradient-to-br from-trench-900/50 to-trench-800/50 border border-trench-500/50 rounded-xl p-6 shadow-xl shadow-trench-500/10">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">Get TrenchPad Now</h3>
                  <p className="text-gray-300 mb-6">Join the elite traders using advanced bundling</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-trench-400">5 SOL</span>
                    <span className="text-slate-400 ml-2 block text-sm mt-1">~$500 USD • Lifetime Access</span>
                  </div>
                  <button
                    onClick={() => setIsPurchaseModalOpen(true)}
                    className="w-full bg-gradient-to-r from-trench-500 to-trench-400 hover:from-trench-400 hover:to-trench-300 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-trench-500/25 mb-4"
                  >
                    Purchase with Phantom
                  </button>
                  <p className="text-xs text-gray-400">Secure payment via Solana blockchain</p>
                </div>
              </div>

              {/* Token Display */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">TrenchPad Token</h3>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full animate-pulse">
                    COMING SOON
                  </span>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600">
                  <div className="text-center">
                    <span className="text-gray-300 font-semibold">
                      {PLACEHOLDER_CA}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: '⚡', title: 'Lightning Fast', description: 'Sub-second execution' },
                  { icon: '🛡️', title: 'MEV Protected', description: 'Advanced protection' },
                  { icon: '🔒', title: 'Fully Private', description: '100% local operation' },
                  { icon: '💰', title: 'Profit Focused', description: 'Built for making money' }
                ].map((feature, index) => (
                  <div 
                    key={feature.title}
                    className={`p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{feature.icon}</div>
                      <div>
                        <div className="font-semibold text-white text-sm">{feature.title}</div>
                        <div className="text-xs text-gray-400">{feature.description}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Pricing & Info */}
            <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Future Pricing */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">Price Roadmap</h3>
                <p className="text-sm text-gray-400 text-center mb-6">Prices decrease as our token market cap grows</p>
                
                <div className="space-y-3">
                  {pricingTiers.map((tier, index) => (
                    <div 
                      key={tier.mc}
                      className={`flex items-center justify-between p-4 rounded-lg transition-all duration-500 ${
                        tier.price === 'FREE' 
                          ? 'bg-trench-900/30 border border-trench-600/50' 
                          : tier.status === 'current'
                          ? 'bg-trench-900/30 border border-trench-500/50'
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
                          tier.price === 'FREE' || tier.status === 'current' ? 'bg-trench-500 text-white' : 'bg-gray-600 text-gray-300'
                        }`}>
                          {index + 1}
                        </span>
                        <div>
                          <span className="text-white font-medium">{tier.mc}</span>
                          <div className="text-xs text-gray-400">{tier.description}</div>
                        </div>
                      </div>
                      <span className={`font-bold text-lg ${tier.price === 'FREE' || tier.status === 'current' ? 'text-trench-400' : 'text-white'}`}>
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

              {/* What's Included */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4 text-center">What's Included</h3>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-trench-400">✓</span>
                    <span className="text-gray-300">Complete TypeScript source code</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-trench-400">✓</span>
                    <span className="text-gray-300">25-wallet bundling system</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-trench-400">✓</span>
                    <span className="text-gray-300">Token creation & bundling tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-trench-400">✓</span>
                    <span className="text-gray-300">MEV protection & automation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-trench-400">✓</span>
                    <span className="text-gray-300">Lifetime access & updates</span>
                  </div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="bg-gradient-to-br from-green-900/20 to-trench-900/20 border border-green-500/30 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-green-400 mb-4 text-center">Proven Results</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">25</div>
                    <div className="text-xs text-gray-400">Coordinated Wallets</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">100%</div>
                    <div className="text-xs text-gray-400">Local Security</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">0ms</div>
                    <div className="text-xs text-gray-400">MEV Exposure</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">∞</div>
                    <div className="text-xs text-gray-400">Profit Potential</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className={`inline-block px-8 py-6 bg-gradient-to-r from-trench-900/30 to-green-900/30 border border-trench-500/50 rounded-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.8s' }}>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-trench-400">Join the Movement</h3>
                <p className="text-gray-300 max-w-2xl">
                  Every purchase brings us closer to the <span className="text-green-400 font-semibold">$5M market cap goal</span> where TrenchPad becomes free for everyone. 
                  <span className="text-white font-semibold"> Be part of democratizing advanced trading tools.</span>
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 mt-4">
                  <span>💎 Early Access</span>
                  <span>🚀 Lifetime Updates</span>
                  <span>🤝 Community Impact</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <ServicesModal isOpen={isServicesModalOpen} onClose={() => setIsServicesModalOpen(false)} />
      <PurchaseModal isOpen={isPurchaseModalOpen} onClose={() => setIsPurchaseModalOpen(false)} />
    </>
  )
} 