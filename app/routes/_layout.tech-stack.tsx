import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: '技術スタック - Remix情報ページ' },
    {
      name: 'description',
      content:
        'このサイトで使用している技術スタック。Remix、React、TypeScript、Tailwind CSS、pnpm、Viteなど。',
    },
  ]
}

export default function TechStack() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">技術スタック</h1>

      <div className="mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          このサイトで使用している技術スタック、ツール、ライブラリを紹介します。
          すべてモダンで実績のある技術を採用しています。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">コア技術</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                R
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-700">Remix</h3>
                <p className="text-sm text-gray-600">Version 2 (Vite-based)</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">
              フルスタックReactフレームワーク。サーバーサイドレンダリング、ファイルベースルーティング、効率的なデータローディングを提供。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                SSR
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                ルーティング
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                データローディング
              </span>
            </div>
          </div>

          <div className="bg-white border-2 border-cyan-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-cyan-500 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                R
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-cyan-600">React</h3>
                <p className="text-sm text-gray-600">Version 18</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">
              UIライブラリ。コンポーネントベースの開発により、再利用可能で保守しやすいインターフェースを構築。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
                コンポーネント
              </span>
              <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
                Hooks
              </span>
              <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
                宣言的UI
              </span>
            </div>
          </div>

          <div className="bg-white border-2 border-blue-400 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                TS
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-blue-600">
                  TypeScript
                </h3>
                <p className="text-sm text-gray-600">Strict mode enabled</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">
              型安全な開発言語。コンパイル時の型チェックにより、バグを早期発見し、保守性を向上。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                型安全
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                IntelliSense
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                リファクタリング
              </span>
            </div>
          </div>

          <div className="bg-white border-2 border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-teal-500 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                TW
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-teal-600">
                  Tailwind CSS
                </h3>
                <p className="text-sm text-gray-600">Version 3</p>
              </div>
            </div>
            <p className="text-gray-700 mb-3">
              ユーティリティファーストCSSフレームワーク。迅速なスタイリングと一貫したデザインシステムを実現。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                ユーティリティ
              </span>
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                レスポンシブ
              </span>
              <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                カスタマイズ
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">ビルドツール</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-purple-800">Vite</h3>
            <p className="text-gray-700 mb-3">
              次世代フロントエンドビルドツール。高速な開発サーバーとビルドを提供。
              Remix v2ではViteベースのビルドがデフォルトになりました。
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ 高速なHMR（ホットモジュールリプレースメント）</li>
              <li>✓ 最適化されたプロダクションビルド</li>
              <li>✓ プラグインエコシステム</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-yellow-800">pnpm</h3>
            <p className="text-gray-700 mb-3">
              高速で効率的なパッケージマネージャー。ディスク容量を節約し、インストール速度を向上。
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>✓ ディスク容量の効率的利用</li>
              <li>✓ 高速なインストール</li>
              <li>✓ strictなnode_modules構造</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">開発ツール</h2>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-start">
            <div className="bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center text-xl mr-4 flex-shrink-0">
              🎨
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Prettier</h3>
              <p className="text-gray-700 text-sm">
                コードフォーマッター。一貫したコードスタイルを自動的に維持。セミコロン無し、シングルクォート、トレイリングカンマの設定を使用。
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-start">
            <div className="bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center text-xl mr-4 flex-shrink-0">
              🔧
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">PostCSS</h3>
              <p className="text-gray-700 text-sm">
                CSS変換ツール。Tailwind
                CSSとの統合により、最適化されたCSSを生成。
              </p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-start">
            <div className="bg-gray-100 rounded-lg w-10 h-10 flex items-center justify-center text-xl mr-4 flex-shrink-0">
              📦
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Node.js</h3>
              <p className="text-gray-700 text-sm">
                ランタイム環境。バージョン20.0.0以上を使用。最新のJavaScript機能をサポート。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">デプロイメント</h2>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg">
          <div className="flex items-center mb-4">
            <div className="bg-white text-gray-900 rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
              ▲
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Vercel</h3>
              <p className="text-gray-300">フロントエンドホスティングプラットフォーム</p>
            </div>
          </div>
          <p className="mb-4 text-gray-200">
            このサイトはVercelにデプロイされています。GitHubとの連携により、プッシュ時に自動デプロイ。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 p-3 rounded">
              <h4 className="font-semibold mb-1 text-sm">自動デプロイ</h4>
              <p className="text-xs text-gray-300">
                mainブランチへのプッシュで自動的にデプロイ
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-3 rounded">
              <h4 className="font-semibold mb-1 text-sm">プレビュー環境</h4>
              <p className="text-xs text-gray-300">
                プルリクエストごとにプレビューURL生成
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-3 rounded">
              <h4 className="font-semibold mb-1 text-sm">グローバルCDN</h4>
              <p className="text-xs text-gray-300">
                世界中で高速なコンテンツ配信
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-3 rounded">
              <h4 className="font-semibold mb-1 text-sm">セキュリティ</h4>
              <p className="text-xs text-gray-300">
                HTTPS、セキュリティヘッダーが自動設定
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">プロジェクト構成</h2>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <pre className="text-sm text-gray-800 overflow-x-auto">
            {`my-remix-app/
├── app/
│   ├── routes/              # ルートコンポーネント
│   │   ├── _layout.tsx      # 共通レイアウト
│   │   ├── _layout._index.tsx
│   │   ├── _layout.about.tsx
│   │   ├── _layout.features.tsx
│   │   ├── _layout.tech-stack.tsx
│   │   ├── _layout.blog.tsx
│   │   ├── _layout.blog.$slug.tsx
│   │   ├── _layout.projects.tsx
│   │   └── _layout.projects.$id.tsx
│   ├── components/          # 再利用可能コンポーネント
│   │   └── Navigation.tsx
│   ├── root.tsx             # ルートレイアウト
│   ├── entry.client.tsx     # クライアントエントリー
│   ├── entry.server.tsx     # サーバーエントリー
│   └── tailwind.css         # Tailwindインポート
├── public/                  # 静的ファイル
├── .claude/                 # Claude Code設定
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── .npmrc
└── vercel.json              # Vercel設定`}
          </pre>
        </div>
      </section>

      <section className="bg-blue-50 p-8 rounded-lg border border-blue-200">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">
          技術選定の理由
        </h2>
        <div className="space-y-3 text-gray-700">
          <p>
            <strong>Remix:</strong>{' '}
            Web標準を重視し、優れたパフォーマンスとデベロッパー体験を提供。
          </p>
          <p>
            <strong>TypeScript:</strong>{' '}
            型安全性により、大規模アプリケーションでも保守性を維持。
          </p>
          <p>
            <strong>Tailwind CSS:</strong>{' '}
            迅速な開発と一貫したデザインシステムを実現。
          </p>
          <p>
            <strong>Vite:</strong> 高速な開発体験とビルド性能。
          </p>
          <p>
            <strong>pnpm:</strong> 効率的なパッケージ管理とディスク容量の節約。
          </p>
          <p>
            <strong>Vercel:</strong> シームレスなデプロイメントとグローバルCDN。
          </p>
        </div>
      </section>
    </div>
  )
}
