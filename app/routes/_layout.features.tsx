import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: '機能紹介 - Remix情報ページ' },
    {
      name: 'description',
      content:
        'Remixフレームワークの主要機能を詳しく解説。Loader、Action、エラーハンドリング、ネストルートなど。',
    },
  ]
}

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">Remixの機能紹介</h1>

      <div className="mb-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Remixは、モダンなウェブアプリケーション開発を支える多彩な機能を提供しています。
          ここでは、Remixの主要機能を詳しく解説します。
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">コア機能</h2>

        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Loader - データローディング
            </h3>
            <p className="text-gray-700 mb-4">
              Loaderは、ページレンダリング前にサーバーサイドでデータを取得する機能です。
              データベース、API、ファイルシステムなど、あらゆるデータソースからデータを取得できます。
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-semibold mb-2 text-sm text-gray-600">
                主な特徴：
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  サーバーサイドで実行されるため、セキュアなデータアクセス
                </li>
                <li>並列データフェッチによる高速化</li>
                <li>型安全なデータ取得（TypeScript完全対応）</li>
                <li>自動的なエラーハンドリングとバウンダリ</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Action - データ変更処理
            </h3>
            <p className="text-gray-700 mb-4">
              Actionは、フォーム送信やデータ変更を処理する機能です。POST、PUT、DELETE
              リクエストを処理し、データの作成、更新、削除を実行します。
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-semibold mb-2 text-sm text-gray-600">
                主な特徴：
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>
                  プログレッシブエンハンスメント対応（JavaScript無しでも動作）
                </li>
                <li>CSRF保護が標準で有効</li>
                <li>バリデーションエラーの簡単な処理</li>
                <li>楽観的UI更新のサポート</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              ファイルベースルーティング
            </h3>
            <p className="text-gray-700 mb-4">
              ファイルシステムの構造がそのままURLルーティングになります。
              直感的で保守しやすいルーティング設計が可能です。
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-semibold mb-2 text-sm text-gray-600">例：</h4>
              <ul className="space-y-2 text-gray-700 font-mono text-sm">
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    app/routes/_index.tsx
                  </code>{' '}
                  → <code>/</code>
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    app/routes/about.tsx
                  </code>{' '}
                  → <code>/about</code>
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    app/routes/blog.$slug.tsx
                  </code>{' '}
                  → <code>/blog/any-slug</code>
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    app/routes/projects.$id.tsx
                  </code>{' '}
                  → <code>/projects/123</code>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              ネストルート
            </h3>
            <p className="text-gray-700 mb-4">
              親子関係のあるルートを定義し、共通レイアウトやデータを共有できます。
              このサイトでも、ナビゲーションとフッターを共通レイアウトとして使用しています。
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <h4 className="font-semibold mb-2 text-sm text-gray-600">
                メリット：
              </h4>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>共通UIコンポーネントの再利用</li>
                <li>親ルートでのデータプリロード</li>
                <li>階層的なエラーハンドリング</li>
                <li>部分的なページ更新による高速化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">パフォーマンス機能</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              リソースプリフェッチ
            </h3>
            <p className="text-gray-700">
              ユーザーがリンクにホバーした際に、次のページのリソースを事前読み込み。
              ページ遷移が瞬時に感じられます。
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              並列データフェッチ
            </h3>
            <p className="text-gray-700">
              複数のLoaderを並列実行し、データ取得時間を最小化。
              ウォーターフォールを防ぎます。
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              自動コード分割
            </h3>
            <p className="text-gray-700">
              各ルートのコードが自動的に分割され、必要なコードのみを読み込み。
              初期ロード時間を短縮します。
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              最適化されたキャッシュ
            </h3>
            <p className="text-gray-700">
              適切なキャッシュヘッダーの自動設定により、リピート訪問時の表示が高速化。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">開発者体験</h2>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ホットモジュールリプレースメント
              </h3>
              <p className="text-gray-700">
                コード変更時に、ブラウザの状態を保持したまま即座に反映。開発効率が大幅に向上します。
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                TypeScriptネイティブサポート
              </h3>
              <p className="text-gray-700">
                設定不要でTypeScriptを使用可能。Loader、Actionのデータ型も自動推論されます。
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                明確なエラーメッセージ
              </h3>
              <p className="text-gray-700">
                問題の原因を特定しやすい詳細なエラーメッセージとスタックトレース。
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
              4
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">開発ツール統合</h3>
              <p className="text-gray-700">
                React DevTools、ブラウザ開発ツールとの完全な互換性。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4">エラーハンドリング</h2>
        <p className="text-lg mb-6 opacity-90">
          Remixは、エラーバウンダリーとCatchバウンダリーにより、
          堅牢なエラーハンドリングを実現します。
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-10 p-4 rounded">
            <h3 className="font-semibold mb-2">ErrorBoundary</h3>
            <p className="text-sm opacity-90">
              予期しないエラーをキャッチし、ユーザーにフレンドリーなエラーページを表示。
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded">
            <h3 className="font-semibold mb-2">ルートレベルの分離</h3>
            <p className="text-sm opacity-90">
              エラーが発生したルートのみを分離し、他のページへの影響を最小化。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
