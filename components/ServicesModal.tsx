'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap, Shield, Users, TrendingUp, ChevronsRight } from 'lucide-react'

interface ServicesModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-[#1A202C] border border-green-500/20 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-green-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8 space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-green-400 tracking-tight">
                  Managed Jito Bot Services
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div>
                <p className="text-slate-300">
                  Don't want to download or run the bot yourself? No problem. We offer a managed service where we run the Jito bot for you.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-green-400">How It Works</h3>
                <ol className="space-y-4 text-slate-200">
                  <li className="flex items-start">
                    <ChevronsRight className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Deposit SOL:</strong> You send us the SOL you want to use for trading (5 SOL minimum).</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronsRight className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Service Fee:</strong> We take a 10% fee from the deposited SOL for management and setup.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronsRight className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span><strong>Bot Execution:</strong> We run the Jito bot with your desired strategy and parameters.</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Services & Fees</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <p className="font-bold text-lg text-slate-300">Volume Generation</p>
                    <p className="text-green-400 text-2xl font-mono">0.0025 SOL <span className="text-sm text-slate-400">/trade</span></p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <p className="font-bold text-lg text-slate-300">Token Bundling</p>
                    <p className="text-green-400 text-2xl font-mono">0.000025 SOL <span className="text-sm text-slate-400">/trade</span></p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-400">Features</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex flex-col items-center justify-center">
                    <TrendingUp className="w-8 h-8 mx-auto text-green-400 mb-2" />
                    <p className="text-slate-300">Volume Boosting</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex flex-col items-center justify-center">
                    <Zap className="w-8 h-8 mx-auto text-green-400 mb-2" />
                    <p className="text-slate-300">Fresh Launch Bundling</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex flex-col items-center justify-center">
                    <Shield className="w-8 h-8 mx-auto text-green-400 mb-2" />
                    <p className="text-slate-300">Privacy & Security</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 flex flex-col items-center justify-center">
                    <Users className="w-8 h-8 mx-auto text-green-400 mb-2" />
                    <p className="text-slate-300">Up to 150 Wallets*</p>
                  </div>
                   <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 col-span-2 sm:col-span-1 flex flex-col items-center justify-center">
                    <p className="font-bold text-green-400 text-lg">Trust</p>
                    <p className="text-sm text-slate-400">Reliable & Transparent</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2 text-center">*Scalability testing in progress.</p>
              </div>
              
              <div className="text-center pt-4">
                <div className="bg-slate-700 text-white font-bold py-3 px-8 rounded-lg">
                  @osknyo_Dev
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 