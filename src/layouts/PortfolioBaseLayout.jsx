import React from 'react'

export const PortfolioBaseLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      <div className="safe-area-inset-top safe-area-inset-right safe-area-inset-left">
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
