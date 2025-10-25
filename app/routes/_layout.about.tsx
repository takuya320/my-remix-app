import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'サイト概要 - Remix情報ページ' },
    {
      name: 'description',
      content:
        'Remix情報ページのサイト概要。このサイトの目的、構成、特徴について。',
    },
  ]
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">サイト概要</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">このサイトについて</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          このサイトは、Remixフレームワークの特徴、機能、技術スタックを紹介するための情報サイトです。
          Remixを学習したい開発者や、導入を検討している方々に向けて、実践的な情報を提供しています。
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          実際にRemixを使用して構築されており、ファイルベースルーティング、ネストルート、
          サーバーサイドレンダリングなど、Remixの主要機能を活用したデモンストレーションとしても機能しています。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">サイトの目的</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              学習リソースの提供
            </h3>
            <p className="text-gray-700">
              Remixの基本概念から実践的な使い方まで、わかりやすく解説しています。
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              実装例の提示
            </h3>
            <p className="text-gray-700">
              実際に動作するコードを通じて、Remixの機能を体験できます。
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              技術情報の共有
            </h3>
            <p className="text-gray-700">
              Remixを使用したプロジェクトの技術スタックやベストプラクティスを共有します。
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-700">
              コミュニティへの貢献
            </h3>
            <p className="text-gray-700">
              日本語でのRemix情報を充実させ、国内コミュニティの活性化に貢献します。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">サイト構成</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold mb-2">ホーム</h3>
            <p className="text-gray-700">
              Remixの概要、主な特徴、利点を紹介。フレームワークの全体像を把握できます。
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold mb-2">
              サイト概要（このページ）
            </h3>
            <p className="text-gray-700">
              このサイトの目的、構成、特徴について詳しく説明しています。
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold mb-2">機能紹介</h3>
            <p className="text-gray-700">
              Remixの主要機能を詳しく解説。Loader、Action、エラーハンドリングなど。
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold mb-2">技術スタック</h3>
            <p className="text-gray-700">
              このサイトで使用している技術スタック、ツール、ライブラリの紹介。
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold mb-2">ブログ</h3>
            <p className="text-gray-700">
              Remixに関する技術記事、チュートリアル、TIPSを掲載（動的ルーティングのデモ）。
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold mb-2">プロジェクト</h3>
            <p className="text-gray-700">
              Remixを使用した実装例やサンプルプロジェクトの紹介（動的ルーティングのデモ）。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">サイトの特徴</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <span>
              <strong>レスポンシブデザイン:</strong>{' '}
              モバイル、タブレット、デスクトップすべてに対応
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <span>
              <strong>高速表示:</strong>{' '}
              サーバーサイドレンダリングによる最適化されたページロード
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <span>
              <strong>TypeScript完全対応:</strong> 型安全なコード記述
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <span>
              <strong>モダンなUI:</strong> Tailwind CSSによる洗練されたデザイン
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <span>
              <strong>SEO最適化:</strong> メタタグ、構造化されたコンテンツ
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <span>
              <strong>ネストルート:</strong> 共通レイアウトによる効率的な構造
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2 text-xl">✓</span>
            <span>
              <strong>動的ルーティング:</strong>{' '}
              ブログやプロジェクトページでの柔軟なURL設計
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
