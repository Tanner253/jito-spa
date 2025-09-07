'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ExternalLink, TrendingUp } from 'lucide-react'

interface TokenDisplayProps {
  tokenAddress: string
  tokenName: string
  tokenSymbol: string
  marketCap?: number
  price?: number
  change24h?: number
  isLive?: boolean
}

export default function TokenDisplay({ 
  tokenAddress, 
  tokenName, 
  tokenSymbol, 
  marketCap, 
  price, 
  change24h,
  isLive = false 
}: TokenDisplayProps) {
  const [copied, setCopied] = useState(false)

  const copyCA = async () => {
    await navigator.clipboard.writeText(tokenAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const openPumpFun = () => {
    window.open(`https://pump.fun/coin/${tokenAddress}`, '_blank')
  }

  const openDexScreener = () => {
    window.open(`https://dexscreener.com/solana/${tokenAddress}`, '_blank')
  }

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-6 border border-trench-500/30 relative overflow-hidden"
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-trench-300">
          {tokenName} ({tokenSymbol})
        </h3>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          isLive 
            ? 'bg-green-500/20 border border-green-500/30 text-green-400'
            : 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400'
        }`}>
          {isLive ? 'LIVE' : 'COMING SOON'}
        </div>
      </div>
      
      {/* Contract Address */}
      <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 mb-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-sm text-gray-300 break-all flex-1 mr-3">
            {tokenAddress}
          </div>
          <button
            onClick={copyCA}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
            title="Copy contract address"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Token Stats */}
      {(marketCap || price) && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {marketCap && (
            <div className="text-center">
              <div className="text-sm text-gray-400">Market Cap</div>
              <div className="text-lg font-bold text-trench-400">
                ${marketCap.toLocaleString()}
              </div>
            </div>
          )}
          {price && (
            <div className="text-center">
              <div className="text-sm text-gray-400">Price</div>
              <div className="text-lg font-bold text-white">
                ${price.toFixed(6)}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 24h Change */}
      {change24h !== undefined && (
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className={`w-4 h-4 mr-2 ${change24h >= 0 ? 'text-green-400' : 'text-red-400'}`} />
          <span className={`font-semibold ${change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
            {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}%
          </span>
          <span className="text-gray-400 text-sm ml-1">24h</span>
        </div>
      )}

      {/* Action Buttons */}
      {isLive && (
        <div className="flex space-x-2">
          <button
            onClick={openPumpFun}
            className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Pump.fun
          </button>
          <button
            onClick={openDexScreener}
            className="flex-1 bg-gradient-to-r from-trench-600 to-trench-700 hover:from-trench-700 hover:to-trench-800 text-white py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Chart
          </button>
        </div>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-trench-500/5 to-purple-500/5 rounded-2xl blur-xl -z-10" />
    </motion.div>
  )
} 