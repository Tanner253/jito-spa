'use client'

import { useState, useEffect, useCallback } from 'react'
import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js'

// Recipient wallet address - HARDCODED FOR SECURITY
const RECIPIENT_WALLET = "7DzEtHHx232SMSipo27AhZdzfTEwtuQJJKSyvKBFx1QC"
const PAYMENT_AMOUNT_SOL = 5
const SOLANA_RPC_URL = "https://solana-mainnet.g.alchemy.com/v2/B_Uu9b3oRTDeZle57OHRz"

interface PhantomProvider {
  isPhantom?: boolean
  connect: (opts?: { onlyIfTrusted: boolean }) => Promise<{ publicKey: PublicKey }>
  disconnect: () => Promise<void>
  signAndSendTransaction: (transaction: Transaction) => Promise<{ signature: string }>
  publicKey: PublicKey | null
  isConnected: boolean
}

interface UsePhantomReturn {
  provider: PhantomProvider | null
  connected: boolean
  connecting: boolean
  publicKey: PublicKey | null
  connect: () => Promise<void>
  disconnect: () => Promise<void>
  sendPayment: () => Promise<string>
  installing: boolean
}

export const usePhantom = (): UsePhantomReturn => {
  const [provider, setProvider] = useState<PhantomProvider | null>(null)
  const [connected, setConnected] = useState(false)
  const [connecting, setConnecting] = useState(false)
  const [installing, setInstalling] = useState(false)
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null)

  // Initialize provider
  useEffect(() => {
    const getProvider = () => {
      if (typeof window !== 'undefined') {
        const phantom = (window as any).phantom?.solana
        if (phantom?.isPhantom) {
          return phantom
        }
      }
      return null
    }

    const phantom = getProvider()
    if (phantom) {
      setProvider(phantom)
      setConnected(phantom.isConnected)
      setPublicKey(phantom.publicKey)
    }
  }, [])

  // Connect to wallet
  const connect = useCallback(async () => {
    if (!provider) {
      setInstalling(true)
      window.open('https://phantom.app/', '_blank')
      return
    }

    try {
      setConnecting(true)
      const response = await provider.connect()
      setConnected(true)
      setPublicKey(response.publicKey)
    } catch (error) {
      console.error('Failed to connect to Phantom:', error)
      throw error
    } finally {
      setConnecting(false)
      setInstalling(false)
    }
  }, [provider])

  // Disconnect from wallet
  const disconnect = useCallback(async () => {
    if (provider) {
      try {
        await provider.disconnect()
        setConnected(false)
        setPublicKey(null)
      } catch (error) {
        console.error('Failed to disconnect from Phantom:', error)
      }
    }
  }, [provider])

  // Send payment transaction
  const sendPayment = useCallback(async (): Promise<string> => {
    if (!provider || !publicKey) {
      throw new Error('Wallet not connected')
    }

    const connection = new Connection(SOLANA_RPC_URL, 'confirmed')
    const recipientPubKey = new PublicKey(RECIPIENT_WALLET)
    const lamports = PAYMENT_AMOUNT_SOL * LAMPORTS_PER_SOL

    try {
      // Create transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubKey,
          lamports: lamports,
        })
      )

      // Get recent blockhash
      const { blockhash } = await connection.getLatestBlockhash()
      transaction.recentBlockhash = blockhash
      transaction.feePayer = publicKey

      // Sign and send transaction
      const response = await provider.signAndSendTransaction(transaction)
      
      // Don't wait for confirmation here - just return the signature
      // We'll verify it later when the user tries to access the GitHub link
      return response.signature
    } catch (error) {
      console.error('Payment failed:', error)
      throw error
    }
  }, [provider, publicKey])

  return {
    provider,
    connected,
    connecting,
    publicKey,
    connect,
    disconnect,
    sendPayment,
    installing
  }
}
