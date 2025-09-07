'use client'

import React, { useState, useEffect } from 'react'

const PLACEHOLDER_CA = "TrenchPadTokenAddressWillAppearHere123456789"

export default function TrenchPadLanding() {
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

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
    { mc: '$250k MC', price: '9 SOL', description: 'Growth Phase', status: 'upcoming', delay: 0.1 },
    { mc: '$500k MC', price: '8 SOL', description: 'Expansion', status: 'upcoming', delay: 0.2 },
    { mc: '$750k MC', price: '7 SOL', description: 'Mainstream', status: 'upcoming', delay: 0.3 },
    { mc: '$1M MC', price: '1 SOL', description: 'Mass Adoption', status: 'upcoming', delay: 0.4 },
    { mc: '$5M MC', price: 'FREE', description: 'Community Release', status: 'upcoming', delay: 0.5 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-trench-900/20 via-transparent to-trench-900/20"></div>
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 rounded-lg overflow-hidden border border-trench-500/30 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <img 
                src="/trenchpad-logo.png" 
                alt="TrenchPad" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.log('Logo not found at /trenchpad-logo.png - Please copy jito-img.png to jito-spa/public/trenchpad-logo.png')
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.parentElement) {
                    target.parentElement.innerHTML = '<div class="w-full h-full bg-trench-500 rounded-lg flex items-center justify-center text-white font-bold">TP</div>'
                  }
                }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">TrenchPad</h1>
              <p className="text-sm text-gray-400">Solana Bundle Trading</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://x.com/osknyo_dev" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://t.me/osknyo" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </header>

      {/* Main Content - Compact Single Screen */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(100vh-100px)] flex flex-col">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
          
          {/* Left: Hero & What It Does */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">
                <span className="text-trench-400">TrenchPad</span>
                <span className="block text-3xl">Bundle Trading</span>
              </h1>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Professional Jito bundling system that coordinates 25 wallets for profitable Solana token trading.
              </p>
            </div>

            {/* What It Does - Compact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">What TrenchPad Does:</h3>
              
              {[
                'Coordinate 25 wallets for volume generation',
                'Launch new PumpFun tokens with instant buying',
                'Automated profit taking with stop losses'
              ].map((item, index) => (
                <div 
                  key={item}
                  className={`flex items-center space-x-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-6 h-6 bg-trench-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            {/* Security - Compact */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-trench-400 mb-3">🔒 Security & Privacy</h3>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="text-trench-400 mr-2">✓</span>
                  100% local execution
                </div>
                <div className="flex items-center">
                  <span className="text-trench-400 mr-2">✓</span>
                  Your keys never leave your computer
                </div>
                <div className="flex items-center">
                  <span className="text-trench-400 mr-2">✓</span>
                  Complete source code included
                </div>
                <div className="flex items-center">
                  <span className="text-trench-400 mr-2">✓</span>
                  Zero data collection or tracking
                </div>
              </div>
            </div>
          </div>

          {/* Center: Token Display */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Token CA */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold text-white">TrenchPad Token</h3>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-semibold rounded-full animate-pulse">
                  COMING SOON
                </span>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-600">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-300 break-all">
                    {PLACEHOLDER_CA}
                  </span>
                  <button
                    onClick={copyCA}
                    className={`ml-2 px-2 py-1 rounded text-xs font-semibold transition-all duration-300 ${
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
            <div className="space-y-4">
              {[
                { icon: '⚡', title: 'Fast Execution' },
                { icon: '🛡️', title: 'MEV Protected' },
                { icon: '🔒', title: 'Secure & Local' }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`text-center p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-sm font-semibold text-white">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Compact Pricing */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Pricing Tiers</h3>
              
              <div className="space-y-2">
                {pricingTiers.map((tier, index) => (
                  <div 
                    key={tier.mc}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 ${
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
                    <div className="flex items-center space-x-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        tier.price === 'FREE' ? 'bg-trench-500 text-white' : 'bg-gray-600 text-gray-300'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="text-sm text-white">{tier.mc}</span>
                    </div>
                    <span className={`font-bold ${tier.price === 'FREE' ? 'text-trench-400' : 'text-white'}`}>
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Contact</h3>
              <div className="space-y-3 text-sm">
                <a href="https://x.com/osknyo_dev" target="_blank" className="block text-gray-400 hover:text-trench-400 transition-colors">
                  🐦 Twitter: @osknyo_dev
                </a>
                <a href="https://t.me/osknyo" target="_blank" className="block text-gray-400 hover:text-trench-400 transition-colors">
                  💬 Telegram: @osknyo
                </a>
                <span className="block text-gray-400">💬 Discord: osknyo</span>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">What You Get</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-trench-400 mr-3">✓</span>
                  Complete TypeScript source code
                </li>
                <li className="flex items-center">
                  <span className="text-trench-400 mr-3">✓</span>
                  25-wallet bundling system
                </li>
                <li className="flex items-center">
                  <span className="text-trench-400 mr-3">✓</span>
                  Token creation & bundling tools
                </li>
                <li className="flex items-center">
                  <span className="text-trench-400 mr-3">✓</span>
                  MEV protection & profit automation
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <div className={`inline-block px-6 py-3 bg-trench-900/20 border border-trench-700/30 rounded-lg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '0.8s' }}>
            <span className="text-trench-400 font-semibold text-sm">
              💡 Early supporters get the best value • Lifetime access • Full source code
            </span>
          </div>
        </div>
      </div>
    </div>
  )
} 