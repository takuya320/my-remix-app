import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="font-sans p-4">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Remixとは？</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Remixの概要</h2>
          <p className="text-lg">
            Remixは、モダンで高性能なウェブアプリケーションを構築するための革新的なReactベースのフルスタックフレームワークです。2021年にリリースされ、Web標準技術を活用して優れたユーザー体験とデベロッパー体験を提供します。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Remixの主な特徴</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Reactを使用したUIの構築</li>
            <li>サーバーサイドレンダリング(SSR)のネイティブサポート</li>
            <li>直感的なファイルベースのルーティングシステム</li>
            <li>効率的なデータローディングと更新機能</li>
            <li>優れたパフォーマンス最適化</li>
            <li>Web標準技術の積極的な活用</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Remixの利点</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>高速なページロードとインタラクション</li>
            <li>SEOフレンドリーな構造</li>
            <li>優れた開発者体験</li>
            <li>柔軟なデプロイメントオプション</li>
            <li>堅牢なエラーハンドリング</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">まとめ</h2>
          <p className="text-lg">
            Remixは、現代のウェブ開発の課題に対応するために設計された強力なフレームワークです。SPAの利点を維持しつつ、従来のウェブアプリケーションの優れた特性を組み合わせることで、開発者とユーザーの両方に優れた体験を提供します。
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Remix情報ページ</p>
        </div>
      </footer>
    </div>
  )
}
