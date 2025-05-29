'use client';

import { RedocStandalone } from 'redoc';

export default function APIDocs() {
  return (
  <div className="[&_.menu-content]:!bg-gray-400 [&_.api-content]:!bg-gray-300">

    <RedocStandalone
      specUrl="/api/docs/swagger"
      options={{
        hideDownloadButton: true,
        theme: {
          colors: {
            primary: {
              main: '#3b82f6', // Tailwind blue-500
            },
            text: {
              primary: '#1f2937', // Tailwind gray-800
              secondary: '#4b5563', // Tailwind gray-600
            },
            border: {
              dark: '#e5e7eb', // Tailwind gray-200
              light: '#f3f4f6', // Tailwind gray-100
            },
            /*background: {
              default: '#ffffff',
              paper: '#f9fafb', // Tailwind gray-50
            },*/
            http: {
              get: '#10b981', // Tailwind emerald-500
              post: '#3b82f6', // Tailwind blue-500
              put: '#f59e0b', // Tailwind amber-500
              delete: '#ef4444', // Tailwind red-500
            },
          },
          typography: {
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif',
            headings: {
              fontWeight: '700',
             // color: '#111827', // Tailwind gray-900
            },
            code: {
              backgroundColor: '#f3f4f6', // Tailwind gray-100
              color: '#dc2626', // Tailwind red-600
            },
          },
          sidebar: {
            width: '300px',
            backgroundColor: '#7a94ae', // Tailwind gray-50
            activeTextColor : '#0d1c56'
            
          },
        },
      }}
    />
  </div>

  );
}