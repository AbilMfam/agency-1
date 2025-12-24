import React from 'react'

export const PortfolioLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <div className="safe-area-inset-top safe-area-inset-right safe-area-inset-left">
        {children}
      </div>
    </div>
  )
}
