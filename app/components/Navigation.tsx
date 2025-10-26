import { Link, useLocation } from '@remix-run/react'

export default function Navigation() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'ホーム' },
    { path: '/about', label: 'サイト概要' },
    { path: '/features', label: '機能紹介' },
    { path: '/tech-stack', label: '技術スタック' },
    { path: '/nextjs-vs-remix', label: 'Next.js vs Remix' },
    { path: '/blog', label: 'ブログ' },
    { path: '/projects', label: 'プロジェクト' },
  ]

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-1 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-4 hover:bg-blue-700 transition-colors whitespace-nowrap ${
                    isActive ? 'bg-blue-700 border-b-2 border-white' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
