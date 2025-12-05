'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Toast = { id: number; title?: string; message: string; type?: 'success' | 'error' | 'info' }

const ToastContext = createContext<{
  toasts: Toast[]
  show: (toast: Omit<Toast, 'id'>) => void
  dismiss: (id: number) => void
} | null>(null)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])
  const show = (t: Omit<Toast, 'id'>) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, ...t }])
    setTimeout(() => dismiss(id), 4000)
  }
  const dismiss = (id: number) => setToasts((prev) => prev.filter((t) => t.id !== id))

  return (
    <ToastContext.Provider value={{ toasts, show, dismiss }}>
      {children}
      <div className="fixed bottom-4 right-4 space-y-2 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={
              'min-w-[260px] rounded-lg px-4 py-3 border shadow ' +
              (t.type === 'success'
                ? 'bg-green-900/40 border-green-700 text-green-200'
                : t.type === 'error'
                ? 'bg-red-900/40 border-red-700 text-red-200'
                : 'bg-slate-800/80 border-slate-700 text-slate-200')
            }
          >
            {t.title && <p className="text-sm font-semibold">{t.title}</p>}
            <p className="text-sm">{t.message}</p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within ToastProvider')
  return ctx
}
