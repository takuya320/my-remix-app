import { Outlet } from '@remix-run/react'
import Navigation from '~/components/Navigation'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navigation />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Remix情報ページ</p>
          <p className="text-sm text-gray-400 mt-2">
            Built with Remix, React, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
