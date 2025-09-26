'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Wallet, ExternalLink, AlertTriangle, CheckCircle, Copy, Check } from 'lucide-react'
import { usePhantom } from '../hooks/usePhantom'

interface PurchaseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PurchaseModal({ isOpen, onClose }: PurchaseModalProps) {
  const { connected, connecting, publicKey, connect, sendPayment, installing } = usePhantom()
  const [step, setStep] = useState<'connect' | 'confirm' | 'processing' | 'success' | 'error'>('connect')
  const [transactionSignature, setTransactionSignature] = useState<string>('')
  const [githubLink, setGithubLink] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [linkCopied, setLinkCopied] = useState(false)

  const RECIPIENT_WALLET = "7DzEtHHx232SMSipo27AhZdzfTEwtuQJJKSyvKBFx1QC"
  const PAYMENT_AMOUNT = 5

  const handleConnect = async () => {
    try {
      await connect()
      if (!installing) {
        setStep('confirm')
      }
    } catch (err) {
      setError('Failed to connect to Phantom wallet')
      setStep('error')
    }
  }

  const handlePayment = async () => {
    try {
      setStep('processing')
      const signature = await sendPayment()
      setTransactionSignature(signature)
      
      // Set the direct GitHub repository link
      setGithubLink("https://github.com/Tanner253/jito-bundle")
      setStep('success')
    } catch (err) {
      console.error('Payment error:', err)
      
      // Handle specific error cases
      let errorMessage = 'Payment failed'
      if (err instanceof Error) {
        if (err.message.includes('User rejected')) {
          errorMessage = 'Transaction was rejected by user'
        } else if (err.message.includes('Insufficient funds')) {
          errorMessage = 'Insufficient SOL balance'
        } else if (err.message.includes('not confirmed')) {
          errorMessage = 'Transaction timeout - please check Solana Explorer to verify if payment went through'
        } else {
          errorMessage = err.message
        }
      }
      
      setError(errorMessage)
      setStep('error')
    }
  }

  const generateSecureGithubLink = async (signature: string): Promise<string> => {
    // In a real implementation, this would call your secure backend endpoint
    // For now, we'll simulate the secure link generation
    const timestamp = Date.now()
    const baseUrl = window.location.origin
    
    // This would be generated on your backend with proper HMAC
    const mockSecureToken = btoa(`${signature}-${timestamp}`).replace(/[+=\/]/g, '').substring(0, 32)
    
    return `${baseUrl}/github-access/${signature}/${timestamp}/${mockSecureToken}`
  }

  const copyGithubLink = async () => {
    try {
      await navigator.clipboard.writeText(githubLink)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy link')
    }
  }

  const resetModal = () => {
    setStep('connect')
    setTransactionSignature('')
    setGithubLink('')
    setError('')
    setLinkCopied(false)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  React.useEffect(() => {
    if (connected && step === 'connect') {
      setStep('confirm')
    }
  }, [connected, step])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-[#1A202C] border border-trench-500/20 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-trench-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-trench-400">
                  Purchase TrenchPad
                </h2>
                <button
                  onClick={handleClose}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Connect Step */}
              {step === 'connect' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <Wallet className="w-16 h-16 mx-auto text-trench-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Connect Your Wallet</h3>
                    <p className="text-slate-300">Connect your Phantom wallet to purchase TrenchPad access</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-300">Price:</span>
                      <span className="text-trench-400 font-bold text-lg">{PAYMENT_AMOUNT} SOL</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Recipient:</span>
                      <span className="text-slate-400 font-mono text-sm">{RECIPIENT_WALLET.slice(0, 8)}...{RECIPIENT_WALLET.slice(-8)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleConnect}
                    disabled={connecting || installing}
                    className="w-full bg-trench-500 hover:bg-trench-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    {installing ? 'Opening Phantom...' : connecting ? 'Connecting...' : 'Connect Phantom Wallet'}
                  </button>
                </div>
              )}

              {/* Confirm Step */}
              {step === 'confirm' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 mx-auto text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Confirm Payment</h3>
                    <p className="text-slate-300">Review the payment details below</p>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Your Wallet:</span>
                      <span className="text-slate-400 font-mono text-sm">{publicKey?.toBase58().slice(0, 8)}...{publicKey?.toBase58().slice(-8)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Amount:</span>
                      <span className="text-trench-400 font-bold text-lg">{PAYMENT_AMOUNT} SOL</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Recipient:</span>
                      <span className="text-slate-400 font-mono text-sm">{RECIPIENT_WALLET.slice(0, 8)}...{RECIPIENT_WALLET.slice(-8)}</span>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-600/30 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-amber-200">
                        <p className="font-semibold mb-1">Important Notice:</p>
                        <p>We do not store purchase records. Save the GitHub link after payment as you will not be able to recover it.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="w-full bg-trench-500 hover:bg-trench-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Send Payment
                  </button>
                </div>
              )}

              {/* Processing Step */}
              {step === 'processing' && (
                <div className="space-y-4 text-center">
                  <div className="animate-spin w-16 h-16 mx-auto border-4 border-trench-500 border-t-transparent rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white">Processing Payment...</h3>
                  <p className="text-slate-300">Please confirm the transaction in your Phantom wallet</p>
                </div>
              )}

              {/* Success Step */}
              {step === 'success' && (
                <div className="space-y-4">
                  <div className="text-center">
                    <CheckCircle className="w-16 h-16 mx-auto text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-green-400 mb-2">Transaction Sent!</h3>
                    <p className="text-slate-300">Your payment has been submitted to the blockchain. Access your GitHub repository below.</p>
                  </div>

                  <div className="bg-green-900/20 border border-green-600/30 p-4 rounded-lg">
                    <p className="text-green-200 text-sm mb-3">
                      <strong>Transaction ID:</strong> {transactionSignature.slice(0, 20)}...
                    </p>
                    
                    <div className="space-y-3">
                      <p className="text-green-200 font-semibold">GitHub Repository Access:</p>
                      <div className="bg-slate-900/50 p-3 rounded border border-slate-700">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-300 text-sm font-mono break-all mr-2">{githubLink}</span>
                          <button
                            onClick={copyGithubLink}
                            className={`flex-shrink-0 px-3 py-1 rounded text-sm font-semibold transition-all duration-300 ${
                              linkCopied 
                                ? 'bg-green-500 text-white' 
                                : 'bg-trench-600 hover:bg-trench-500 text-white'
                            }`}
                          >
                            {linkCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-600/30 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-amber-200">
                        <p className="font-semibold mb-1">Save This Link!</p>
                        <p>This is the direct link to the private GitHub repository. Save it securely as we don't store purchase records.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={copyGithubLink}
                      className="flex-1 bg-trench-500 hover:bg-trench-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Copy Link
                    </button>
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open
                    </a>
                  </div>
                </div>
              )}

              {/* Error Step */}
              {step === 'error' && (
                <div className="space-y-4 text-center">
                  <div className="text-red-400">
                    <X className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Payment Failed</h3>
                    <p className="text-slate-300">{error}</p>
                  </div>
                  
                  <button
                    onClick={resetModal}
                    className="w-full bg-trench-500 hover:bg-trench-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
