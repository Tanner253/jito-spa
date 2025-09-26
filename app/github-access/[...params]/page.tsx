'use client'

import React, { useState, useEffect } from 'react'
import { Connection } from '@solana/web3.js'
import { CheckCircle, XCircle, ExternalLink, Loader2 } from 'lucide-react'

const SOLANA_RPC_URL = "https://solana-mainnet.g.alchemy.com/v2/B_Uu9b3oRTDeZle57OHRz"
const RECIPIENT_WALLET = "7DzEtHHx232SMSipo27AhZdzfTEwtuQJJKSyvKBFx1QC"
const EXPECTED_AMOUNT_LAMPORTS = 5 * 1000000000 // 5 SOL in lamports
const GITHUB_REPO_URL = "https://github.com/Tanner253/jito-bundle"

interface GitHubAccessProps {
  params: {
    params: string[]
  }
}

export default function GitHubAccess({ params }: GitHubAccessProps) {
  const [status, setStatus] = useState<'verifying' | 'valid' | 'invalid' | 'expired' | 'used'>('verifying')
  const [error, setError] = useState<string>('')
  const [transactionDetails, setTransactionDetails] = useState<any>(null)

  useEffect(() => {
    verifyAccess()
  }, [])

  const verifyAccess = async () => {
    try {
      const [signature, timestamp, hmac] = params.params

      if (!signature || !timestamp || !hmac) {
        setStatus('invalid')
        setError('Invalid access link format')
        return
      }

      // Check if link is expired (24 hours)
      const linkTimestamp = parseInt(timestamp)
      const now = Date.now()
      const twentyFourHours = 24 * 60 * 60 * 1000

      if (now - linkTimestamp > twentyFourHours) {
        setStatus('expired')
        setError('This access link has expired')
        return
      }

      // Verify transaction on blockchain
      const connection = new Connection(SOLANA_RPC_URL, 'confirmed')
      
      try {
        const transaction = await connection.getTransaction(signature, {
          commitment: 'confirmed'
        })

        if (!transaction) {
          setStatus('invalid')
          setError('Transaction not found on blockchain')
          return
        }

        // Verify transaction details
        const { meta, transaction: txData } = transaction
        
        if (!meta || meta.err) {
          setStatus('invalid')
          setError('Transaction failed or has errors')
          return
        }

        // Find the transfer instruction
        const instructions = txData.message.instructions
        let validTransfer = false

        for (const instruction of instructions) {
          // Check if this is a system program transfer
          const programId = txData.message.accountKeys[instruction.programIdIndex]
          
          if (programId.toBase58() === '11111111111111111111111111111111') {
            // Get account keys
            const fromAccount = txData.message.accountKeys[instruction.accounts[0]]
            const toAccount = txData.message.accountKeys[instruction.accounts[1]]
            
            // Verify recipient
            if (toAccount.toBase58() === RECIPIENT_WALLET) {
              // Check amount in post balances vs pre balances
              const recipientIndex = instruction.accounts[1]
              const preBalance = meta.preBalances[recipientIndex]
              const postBalance = meta.postBalances[recipientIndex]
              const transferAmount = postBalance - preBalance
              
              if (transferAmount >= EXPECTED_AMOUNT_LAMPORTS) {
                validTransfer = true
                break
              }
            }
          }
        }

        if (!validTransfer) {
          setStatus('invalid')
          setError('Invalid transaction: incorrect amount or recipient')
          return
        }

        // Store transaction details for display
        setTransactionDetails({
          signature,
          slot: transaction.slot,
          blockTime: transaction.blockTime,
          fee: meta.fee
        })

        // All checks passed
        setStatus('valid')

      } catch (txError) {
        console.error('Transaction verification error:', txError)
        setStatus('invalid')
        setError('Failed to verify transaction')
      }

    } catch (err) {
      console.error('Verification error:', err)
      setStatus('invalid')
      setError('Failed to verify access')
    }
  }

  const handleGitHubRedirect = () => {
    // In a real implementation, you might want to:
    // 1. Mark this link as used in your database
    // 2. Generate a time-limited GitHub access token
    // 3. Redirect to a specific private repository or download link
    
    window.open(GITHUB_REPO_URL, '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        
        {status === 'verifying' && (
          <div className="text-center space-y-4">
            <Loader2 className="w-16 h-16 mx-auto text-trench-400 animate-spin" />
            <h1 className="text-2xl font-bold text-white">Verifying Access</h1>
            <p className="text-slate-300">Please wait while we verify your payment...</p>
          </div>
        )}

        {status === 'valid' && (
          <div className="text-center space-y-6">
            <CheckCircle className="w-16 h-16 mx-auto text-green-400" />
            <div>
              <h1 className="text-2xl font-bold text-green-400 mb-2">Access Granted!</h1>
              <p className="text-slate-300">Your payment has been verified. You can now access the TrenchPad repository.</p>
            </div>

            {transactionDetails && (
              <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 text-left">
                <h3 className="text-sm font-semibold text-slate-300 mb-2">Transaction Details:</h3>
                <div className="space-y-1 text-xs text-slate-400">
                  <div>Signature: {transactionDetails.signature.slice(0, 20)}...</div>
                  <div>Slot: {transactionDetails.slot}</div>
                  <div>Fee: {transactionDetails.fee / 1000000000} SOL</div>
                </div>
              </div>
            )}

            <button
              onClick={handleGitHubRedirect}
              className="w-full bg-trench-500 hover:bg-trench-400 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Access GitHub Repository</span>
            </button>

            <div className="bg-amber-900/20 border border-amber-600/30 p-4 rounded-lg">
              <p className="text-amber-200 text-sm">
                <strong>Note:</strong> This link will expire after use or in 24 hours. Make sure to bookmark or clone the repository.
              </p>
            </div>
          </div>
        )}

        {(status === 'invalid' || status === 'expired' || status === 'used') && (
          <div className="text-center space-y-4">
            <XCircle className="w-16 h-16 mx-auto text-red-400" />
            <div>
              <h1 className="text-2xl font-bold text-red-400 mb-2">Access Denied</h1>
              <p className="text-slate-300">{error}</p>
            </div>

            <div className="bg-red-900/20 border border-red-600/30 p-4 rounded-lg">
              <p className="text-red-200 text-sm">
                {status === 'expired' 
                  ? 'This access link has expired. Please make a new purchase.'
                  : status === 'used'
                  ? 'This access link has already been used.'
                  : 'This access link is invalid or the transaction could not be verified.'
                }
              </p>
            </div>

            <a
              href="/"
              className="w-full bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-block"
            >
              Return to TrenchPad
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
