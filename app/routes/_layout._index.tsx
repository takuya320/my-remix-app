import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix情報ページ - モダンなReactフレームワーク' },
    {
      name: 'description',
      content:
        'Remixの概要、特徴、利点を紹介。モダンで高性能なウェブアプリケーション構築のためのフルスタックフレームワーク。',
    },
  ]
}

export default function Index() {
  return (
    <div className="font-sans">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Remixとは？</h1>
          <p className="text-xl md:text-2xl opacity-90">
            モダンで高性能なウェブアプリケーションを構築する
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Remixの概要</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Remixは、モダンで高性能なウェブアプリケーションを構築するための革新的なReactベースのフルスタックフレームワークです。2021年にリリースされ、Web標準技術を活用して優れたユーザー体験とデベロッパー体験を提供します。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">主な特徴</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                Reactベース
              </h3>
              <p className="text-gray-700">
                使い慣れたReactの構文で、直感的なUIを構築できます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                サーバーサイドレンダリング
              </h3>
              <p className="text-gray-700">
                SSRをネイティブサポートし、高速な初期表示を実現します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                ファイルベースルーティング
              </h3>
              <p className="text-gray-700">
                直感的なファイルシステムベースのルーティングで開発効率アップ。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                効率的なデータ処理
              </h3>
              <p className="text-gray-700">
                LoaderとActionによる効率的なデータローディングと更新。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Remixの利点</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    高速なページロードとインタラクション
                  </h3>
                  <p className="text-gray-700">
                    最適化されたリソース読み込みとプリフェッチにより、優れたパフォーマンスを実現。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    SEOフレンドリーな構造
                  </h3>
                  <p className="text-gray-700">
                    サーバーサイドレンダリングにより、検索エンジン最適化が容易。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">優れた開発者体験</h3>
                  <p className="text-gray-700">
                    ホットリロード、TypeScriptサポート、明確なエラーメッセージで開発が快適。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    柔軟なデプロイメントオプション
                  </h3>
                  <p className="text-gray-700">
                    Vercel、Fly.io、AWS、自己ホスティングなど、様々な環境にデプロイ可能。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-semibold">
                  5
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    堅牢なエラーハンドリング
                  </h3>
                  <p className="text-gray-700">
                    エラーバウンダリーによる適切なエラー処理で、ユーザー体験を損なわない。
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">まとめ</h2>
          <p className="text-lg leading-relaxed mb-6">
            Remixは、現代のウェブ開発の課題に対応するために設計された強力なフレームワークです。SPAの利点を維持しつつ、従来のウェブアプリケーションの優れた特性を組み合わせることで、開発者とユーザーの両方に優れた体験を提供します。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              サイト概要を見る
            </Link>
            <Link
              to="/features"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              詳しい機能を見る
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
