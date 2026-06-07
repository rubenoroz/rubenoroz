'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { LogOut } from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/admin')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Top Navigation / Dashboard bar */}
      <header className="border-b border-zinc-800 bg-zinc-950 p-4 sticky top-0 z-40 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border border-brand-yellow flex items-center justify-center text-brand-yellow font-mono text-xs">
            R
          </div>
          <span className="font-mono text-sm font-bold uppercase tracking-tight">
            Rubén Oroz // CMS Dashboard
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase border border-zinc-900 px-2 py-1 bg-zinc-900/40">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            CMS ONLINE
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 font-mono text-xs uppercase py-2 px-3 bg-zinc-900 hover:bg-brand-pink hover:text-black border border-zinc-800 hover:border-brand-pink transition-all cursor-pointer"
          >
            <LogOut size={12} /> Salir
          </button>
        </div>
      </header>

      {/* Main dashboard content container */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  )
}
