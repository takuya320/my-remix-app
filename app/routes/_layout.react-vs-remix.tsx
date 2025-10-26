import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'React vs Remix 徹底比較 - Remix情報ページ' },
    {
      name: 'description',
      content:
        'ReactとRemixの詳細な比較。アーキテクチャ、パフォーマンス、開発体験、適用ケースなど、あらゆる観点から両技術を分析します。',
    },
  ]
}

export default function ReactVsRemix() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          React vs Remix
        </h1>
        <p className="text-xl text-gray-600">
          ライブラリとフルスタックフレームワークの徹底比較
        </p>
      </div>

      {/* 1. はじめに */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-cyan-500 pb-2">
          1. はじめに
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-cyan-800">
              ドキュメントの目的
            </h3>
            <p className="text-gray-700 leading-relaxed">
              本ドキュメントは、<strong>React（単体ライブラリ）</strong>と
              <strong>Remix（フルスタックフレームワーク）</strong>
              を比較します。Reactはライブラリであり、RemixはReactベースのフレームワークという異なる性質を持ちます。
              両者の<strong>役割の違い</strong>、<strong>選択基準</strong>、
              <strong>適用ケース</strong>
              を明確にし、プロジェクトに最適な選択をサポートします。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              対象読者
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">✓</span>
                <span>
                  <strong>フロントエンドエンジニア:</strong>{' '}
                  Reactアプリの開発方針を決定する方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">✓</span>
                <span>
                  <strong>テックリード・アーキテクト:</strong>{' '}
                  技術スタックとアーキテクチャを設計する方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">✓</span>
                <span>
                  <strong>プロダクトマネージャー:</strong>{' '}
                  技術選択の影響を理解したい方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-500 mr-2">✓</span>
                <span>
                  <strong>開発チーム:</strong>{' '}
                  Reactプロジェクトの構成方法を検討している方
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              React と Remix の簡単な紹介
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-cyan-300 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-500 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mr-3">
                    R
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-cyan-700">React</h4>
                    <p className="text-sm text-gray-600">by Meta (Facebook)</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Metaが開発するUIライブラリ。コンポーネントベースの宣言的UI構築に特化。
                  ルーティング、状態管理、データフェッチなどは外部ライブラリと組み合わせて使用。
                  最小限の機能のみを提供し、自由度が高い。
                </p>
              </div>

              <div className="bg-white border-2 border-blue-600 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mr-3">
                    R
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-blue-700">Remix</h4>
                    <p className="text-sm text-gray-600">by Shopify</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Shopifyが開発するReactベースのフルスタックフレームワーク。
                  ルーティング、データローディング、フォーム処理、サーバーサイドレンダリングなど、
                  Webアプリ構築に必要な機能を統合的に提供。Web標準重視の設計思想。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. フレームワーク概要 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-purple-500 pb-2">
          2. ライブラリ／フレームワーク概要
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              React の概要
            </h3>
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>開発元:</strong> Meta (Facebook)
                </p>
                <p>
                  <strong>初版リリース:</strong> 2013年5月
                </p>
                <p>
                  <strong>性質:</strong> UIライブラリ（フレームワークではない）
                </p>
                <p>
                  <strong>設計思想:</strong>
                </p>
                <ul className="ml-6 space-y-2">
                  <li>・コンポーネントベースのUI構築</li>
                  <li>・宣言的プログラミング（UIを状態の関数として表現）</li>
                  <li>・仮想DOM（Virtual DOM）による効率的なレンダリング</li>
                  <li>・単方向データフロー（One-way data flow）</li>
                  <li>
                    ・Learn Once, Write Anywhere（Web、Native、VR等で再利用）
                  </li>
                  <li>・最小限の機能提供、他ツールとの組み合わせ前提</li>
                </ul>
                <p>
                  <strong>特徴:</strong>
                </p>
                <ul className="ml-6 space-y-1">
                  <li>
                    ・Hooks（useState、useEffect等）による状態管理とロジック再利用
                  </li>
                  <li>
                    ・巨大なエコシステム（React Router、Redux、React Query等）
                  </li>
                  <li>・React Server Components（実験的機能）</li>
                  <li>・世界最大級のフロントエンドコミュニティ</li>
                  <li>
                    ・自由度が高い反面、アーキテクチャ設計は開発者に委ねられる
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Remix の概要
            </h3>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>開発元:</strong> Remix Software Inc. →
                  Shopify（2022年買収）
                </p>
                <p>
                  <strong>初版リリース:</strong> 2021年11月（オープンソース化）
                </p>
                <p>
                  <strong>性質:</strong> フルスタックReactフレームワーク
                </p>
                <p>
                  <strong>設計思想:</strong>
                </p>
                <ul className="ml-6 space-y-2">
                  <li>・Reactの上に構築されたフルスタックフレームワーク</li>
                  <li>・Web標準（Web APIs、HTTP、HTML Forms）への回帰</li>
                  <li>・プログレッシブエンハンスメント</li>
                  <li>・ネストルーティングによる効率的なデータローディング</li>
                  <li>・サーバーサイドレンダリング（SSR）がデフォルト</li>
                  <li>
                    ・統合的なデベロッパー体験（ルーティング、データフェッチ、フォーム処理が一体化）
                  </li>
                </ul>
                <p>
                  <strong>特徴:</strong>
                </p>
                <ul className="ml-6 space-y-1">
                  <li>・loader/actionパターンによる型安全なデータ管理</li>
                  <li>・React Routerベースのファイルシステムルーティング</li>
                  <li>・標準Web Fetch APIベースのキャッシュ戦略</li>
                  <li>
                    ・複数ランタイム対応（Node.js、Cloudflare Workers、Deno等）
                  </li>
                  <li>・Reactの知識を活かしつつ、フレームワークが構造を提供</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              比較表：位置付け・理念の違い
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      観点
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      React
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Remix
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      性質
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      UIライブラリ
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      フルスタックフレームワーク
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      提供範囲
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      UI構築のみ
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      ルーティング、データフェッチ、SSR、フォーム処理等を統合
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      設計理念
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      最小限の機能、自由度重視
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      統合的体験、Web標準重視
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      学習曲線
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      低（基礎）〜高（エコシステム全体）
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      中（React知識+Web標準理解）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      アーキテクチャ決定
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      開発者が自由に設計
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      フレームワークが構造を提供
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      用途
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      UI部分のみ、SPAなど
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      フルスタックWebアプリ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. アーキテクチャ／設計思想の比較 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-2">
          3. アーキテクチャ／設計思想の比較
        </h2>

        <div className="space-y-8">
          {/* ルーティングモデル */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              ルーティングモデル
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-cyan-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-cyan-700">React</h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>ルーティング機能なし:</strong>
                </p>
                <ul className="text-sm space-y-1 ml-4 text-gray-700">
                  <li>・React自体はルーティング機能を提供しない</li>
                  <li>
                    ・外部ライブラリを使用（React Router、TanStack
                    Router、Wouter等）
                  </li>
                  <li>
                    ・<strong>React Router:</strong>{' '}
                    最も人気のあるルーティングライブラリ、宣言的ルート定義
                  </li>
                  <li>・クライアントサイドルーティング（SPA）が一般的</li>
                  <li>・ルーティング設計は完全に開発者に委ねられる</li>
                </ul>
                <div className="mt-3 p-2 bg-cyan-50 rounded text-xs text-cyan-800">
                  💡 Reactは「ライブラリ」なのでルーティングは別途実装が必要
                </div>
              </div>

              <div className="bg-white border-2 border-blue-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>ファイルベースルーティング（ネスト構造）:</strong>
                </p>
                <ul className="text-sm space-y-1 ml-4 text-gray-700">
                  <li>・app/routes/ディレクトリのファイル構造がルートになる</li>
                  <li>・ネストルーティング：親子関係を持つルート構造</li>
                  <li>
                    ・React Routerベース（Remix = React Router + サーバー機能）
                  </li>
                  <li>・親ルートと子ルートが並列でデータローディング</li>
                  <li>
                    ・各ルートでloader（データ取得）とaction（ミューテーション）を定義
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800">
                  💡 Remixはルーティングが組み込み済み、設定不要で使える
                </div>
              </div>
            </div>
          </div>

          {/* データ取得／フェッチパターン */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              データ取得／フェッチパターン
            </h3>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-300">
                <h4 className="text-lg font-bold mb-3 text-cyan-700">React</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>クライアントサイドデータフェッチ:</strong>
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>・useEffect内でfetch、axios等を使用してAPIコール</li>
                    <li>
                      ・外部ライブラリ推奨：SWR、React Query（TanStack
                      Query）、Apollo Client等
                    </li>
                    <li>
                      ・これらのライブラリはキャッシング、再検証、楽観的更新などを提供
                    </li>
                    <li>
                      ・状態管理：useState、useReducer、または外部ライブラリ（Redux、Zustand、Jotai等）
                    </li>
                    <li>
                      ・サーバーサイドレンダリング（SSR）はReact単体では不可、別途フレームワーク必要
                    </li>
                  </ul>
                  <p className="mt-3">
                    <strong>パターン例:</strong>
                  </p>
                  <pre className="bg-white p-3 rounded text-xs overflow-x-auto">
                    {`const [data, setData] = useState(null)
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData)
}, [])`}
                  </pre>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-300">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>loader/actionパターン（サーバーサイド）:</strong>
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>・loader: GETリクエスト時、サーバー側でデータ取得</li>
                    <li>
                      ・action:
                      POST/PUT/DELETE等、サーバー側でミューテーション処理
                    </li>
                    <li>
                      ・型推論が効く：useLoaderData&lt;typeof loader&gt;()
                    </li>
                    <li>
                      ・ネストルートの全loaderが並列実行（ウォーターフォール回避）
                    </li>
                    <li>・標準Web Fetch API、HTTPヘッダーでキャッシュ制御</li>
                    <li>・サーバーサイドレンダリング（SSR）がデフォルト</li>
                  </ul>
                  <p className="mt-3">
                    <strong>パターン例:</strong>
                  </p>
                  <pre className="bg-white p-3 rounded text-xs overflow-x-auto">
                    {`export async function loader() {
  const data = await fetch('/api/data')
  return json(data)
}

export default function Component() {
  const data = useLoaderData<typeof loader>()
  return <div>{data.title}</div>
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* レンダリング戦略 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              レンダリング戦略
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      戦略
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      React
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      Remix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      CSR
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ デフォルト（create-react-app、Vite等でSPA構築）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ 可能（useEffect、fetcherなどで実装）
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      SSR
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ⚠️
                      別途フレームワーク必要（Next.js、Remix等）。React単体ではrenderToStringを使う必要あり
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ デフォルト（loaderでサーバーサイドデータ取得）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      SSG
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ❌ React単体では不可、フレームワーク必要
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ⚠️ 限定的（HTTPキャッシュヘッダーやCDNで代替）
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Streaming
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ Suspenseサポート（React 18+）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ defer()関数でStreaming SSR
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Hydration
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ hydrateRoot（SSR時）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ 自動的にHydration実行
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* デプロイ・実行環境・ランタイム */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              デプロイ・実行環境・ランタイム
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-cyan-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-cyan-700">React</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>静的ホスティング:</strong> Vercel、Netlify、GitHub
                    Pages、S3等でSPAをホスティング
                  </li>
                  <li>
                    <strong>ビルドツール:</strong>{' '}
                    Vite、Webpack、Parcelなどでバンドル
                  </li>
                  <li>
                    <strong>開発環境:</strong> create-react-app（CRA）、Vite推奨
                  </li>
                  <li>
                    <strong>SSR環境:</strong>{' '}
                    フレームワーク（Next.js、Remix等）またはカスタムサーバー構築
                  </li>
                  <li>
                    <strong>柔軟性:</strong>{' '}
                    どんな環境でも動作するが、全て自前で構築
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-blue-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>ランタイム非依存:</strong> Adapter方式で複数環境対応
                  </li>
                  <li>
                    <strong>Node.js:</strong> Express、Fastifyなどと連携
                  </li>
                  <li>
                    <strong>Cloudflare Workers:</strong>{' '}
                    エッジコンピューティング対応
                  </li>
                  <li>
                    <strong>Deno、Bun:</strong> 新しいランタイムにも対応
                  </li>
                  <li>
                    <strong>主要ホスティング:</strong>{' '}
                    Vercel、Netlify、Fly.io、Render等
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800">
                  💡 Remixはサーバー実行前提、Adapterで環境に適応
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 機能／開発体験の比較 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-yellow-500 pb-2">
          4. 機能／開発体験の比較
        </h2>

        <div className="space-y-8">
          {/* 開発者体験 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              開発者体験（DX）
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-50 border border-cyan-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-cyan-700">React</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">ドキュメント:</p>
                    <p>
                      非常に充実。公式ドキュメントが刷新され、インタラクティブなチュートリアル豊富。多言語対応。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">コミュニティ:</p>
                    <p>
                      世界最大級。Stack
                      Overflow、Reddit、Discord、日本語コミュニティも活発。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">学習コスト:</p>
                    <p>
                      低〜中。基礎は学びやすいが、エコシステム全体（ルーティング、状態管理、SSR等）の習得には時間要。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">開発速度:</p>
                    <p>高速（Fast Refresh、HMR）。Vite使用でさらに高速化。</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">ドキュメント:</p>
                    <p>
                      良質だが英語中心。実践的なチュートリアルとガイドが充実。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">コミュニティ:</p>
                    <p>
                      成長中。Discord活発。Shopify買収後、企業サポート強化。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">学習コスト:</p>
                    <p>
                      中。React知識+Web標準理解が必要。習得後の生産性は高い。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">開発速度:</p>
                    <p>高速（Viteベース、HMR）。統合された開発体験で効率的。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* エコシステム・プラグイン・拡張性 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              エコシステム・プラグイン・拡張性
            </h3>
            <div className="space-y-4">
              <div className="bg-white border border-cyan-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-cyan-700">React</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>超巨大エコシステム:</strong>{' '}
                    数万のReact関連パッケージがnpmに存在
                  </li>
                  <li>
                    <strong>ルーティング:</strong> React Router、TanStack
                    Router、Wouter等
                  </li>
                  <li>
                    <strong>状態管理:</strong>{' '}
                    Redux、Zustand、Jotai、Recoil、MobX等
                  </li>
                  <li>
                    <strong>データフェッチ:</strong> React Query（TanStack
                    Query）、SWR、Apollo Client等
                  </li>
                  <li>
                    <strong>UIライブラリ:</strong> Material-UI、Ant
                    Design、Chakra UI、shadcn/ui等
                  </li>
                  <li>
                    <strong>フォーム:</strong> React Hook Form、Formik等
                  </li>
                  <li>
                    <strong>アニメーション:</strong> Framer Motion、React
                    Spring等
                  </li>
                  <li>
                    <strong>選択肢が豊富:</strong>{' '}
                    自由度高いが、選定・統合は開発者の責任
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-blue-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>統合済み機能:</strong>{' '}
                    ルーティング、データフェッチ、フォーム処理が組み込み
                  </li>
                  <li>
                    <strong>React Router v7:</strong> 将来的にReact
                    RouterとRemixが統合予定
                  </li>
                  <li>
                    <strong>Remix Stacks:</strong>{' '}
                    プロジェクトテンプレート（Blues、Indie、Grunge等）
                  </li>
                  <li>
                    <strong>Shopifyエコシステム:</strong>{' '}
                    Hydrogen、Polarisとの連携
                  </li>
                  <li>
                    <strong>標準React パッケージ互換:</strong> React
                    Query、UIライブラリ等も利用可能
                  </li>
                  <li>
                    <strong>シンプル志向:</strong>{' '}
                    必要最小限のライブラリで構築、Web標準活用
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 型安全／TypeScript サポート */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              型安全／TypeScript サポート
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      項目
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      React
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      Remix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      TypeScript対応
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ ファーストクラスサポート（型定義充実）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ ファーストクラスサポート
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      コンポーネント型定義
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ React.FC、Props型定義など標準的な型サポート
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ Reactと同じ（Reactベースのため）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      データ型推論
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ⚠️ 外部ライブラリ依存（React Queryなどは型推論サポート）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ useLoaderData&lt;typeof loader&gt;()で自動型推論
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      End-to-End型安全
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ⚠️ 手動設定必要（tRPC、GraphQL CodeGen等で実現可能）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ loader/actionとコンポーネント間で型推論が効く
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* テスト／デバッグ／運用性 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              テスト／デバッグ／運用性
            </h3>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-cyan-700">React</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>
                    <strong>テスト:</strong> Jest、React Testing
                    Library、Vitestが主流
                  </li>
                  <li>
                    <strong>E2Eテスト:</strong> Playwright、Cypress、Puppeteer等
                  </li>
                  <li>
                    <strong>デバッグ:</strong> React DevTools、ブラウザDevTools
                  </li>
                  <li>
                    <strong>運用:</strong>{' '}
                    静的サイトなら運用負荷低、SSRする場合はサーバー管理必要
                  </li>
                  <li>
                    <strong>監視:</strong>{' '}
                    Sentry、Datadog、LogRocketなどのサードパーティツール
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-700">Remix</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>
                    <strong>テスト:</strong> Vitest、React Testing Library推奨
                  </li>
                  <li>
                    <strong>loader/action:</strong>{' '}
                    純粋関数のため単体テストが容易
                  </li>
                  <li>
                    <strong>デバッグ:</strong> React
                    DevTools、Viteのソースマップ、サーバーログ
                  </li>
                  <li>
                    <strong>運用:</strong>{' '}
                    サーバー実行環境必要、ホスティング先の監視ツールと統合
                  </li>
                  <li>
                    <strong>監視:</strong>{' '}
                    Sentry、Datadog等のサードパーティツール利用
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. パフォーマンス・最適化・運用面 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-red-500 pb-2">
          5. パフォーマンス・最適化・運用面
        </h2>

        <div className="space-y-8">
          {/* JavaScript バンドル・初期ロード */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              JavaScriptバンドルサイズ・初期ロード・Time to Interactive
            </h3>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-700 mb-4">
                <strong>一般的な傾向:</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>React (SPA):</strong>
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>・React本体は軽量（約6KB gzipped）</li>
                    <li>
                      ・しかし、Router、状態管理、データフェッチライブラリなど追加で肥大化しやすい
                    </li>
                    <li>
                      ・全てクライアントサイドで動作するため、初期バンドルサイズが大きくなりがち
                    </li>
                    <li>・初期ロード後はページ遷移高速（SPA特性）</li>
                    <li>・Code Splitting、Lazy Loadingで改善可能</li>
                  </ul>
                </li>
                <li className="mt-3">
                  <strong>Remix (SSR):</strong>
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>
                      ・サーバー側でレンダリングするため、初期HTML配信が速い
                    </li>
                    <li>
                      ・クライアントバンドルは必要最小限（ルート毎に分割）
                    </li>
                    <li>・ネストルーティングで必要なコードのみロード</li>
                    <li>
                      ・プログレッシブエンハンスメント：JavaScript無効でも基本動作
                    </li>
                    <li>・FCP、LCP、TTIが一般的に良好</li>
                  </ul>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
                <p className="font-semibold text-yellow-800 mb-1">
                  📊 比較ポイント
                </p>
                <p className="text-yellow-700">
                  ReactのSPAは初期ロードが重く、その後が軽快。RemixのSSRは初期ロードが速く、インタラクティブになるまでの時間が短い。
                </p>
              </div>
            </div>
          </div>

          {/* キャッシュ戦略 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              キャッシュ戦略・CDN利用・HTTPヘッダー制御
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-cyan-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-cyan-700">React</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>静的ファイル:</strong>{' '}
                    ビルド後のJS/CSSファイルをCDNにキャッシュ
                  </li>
                  <li>
                    <strong>クライアント側:</strong> React
                    Query、SWRなどでクライアントキャッシュ
                  </li>
                  <li>
                    <strong>Service Worker:</strong>{' '}
                    PWA化でオフラインキャッシュ可能
                  </li>
                  <li>
                    <strong>HTTPヘッダー:</strong>{' '}
                    ホスティングサービス側で設定（Vercel、Netlify等）
                  </li>
                  <li>
                    <strong>制御:</strong>{' '}
                    サーバー側の制御はフレームワーク（Next.js等）必要
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-blue-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>HTTPヘッダー:</strong>{' '}
                    loaderでCache-Control、ETag等を明示的に制御
                  </li>
                  <li>
                    <strong>標準Web仕様:</strong>{' '}
                    stale-while-revalidate、max-age等の標準ディレクティブ
                  </li>
                  <li>
                    <strong>CDN:</strong>{' '}
                    Cloudflare、Fastly等のCDNと連携、エッジキャッシング
                  </li>
                  <li>
                    <strong>細かい制御:</strong>{' '}
                    ルート毎に異なるキャッシュ戦略を設定可能
                  </li>
                  <li>
                    <strong>Web標準:</strong>{' '}
                    HTTP仕様に準拠した透明性の高いキャッシュ戦略
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800">
                  💡 RemixはHTTPキャッシュを積極活用、CDNとの親和性が高い
                </div>
              </div>
            </div>
          </div>

          {/* スケーラビリティ・運用負荷・ベンダーロックイン */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              スケーラビリティ・運用負荷・ベンダーロックイン
            </h3>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-cyan-700">React (SPA)</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>スケーラビリティ:</strong>{' '}
                    静的ファイル配信のため、CDNでグローバルスケーリング容易。
                  </p>
                  <p>
                    <strong>運用負荷:</strong>{' '}
                    極めて低い（静的ホスティング）。APIサーバーは別途必要。
                  </p>
                  <p>
                    <strong>ベンダーロックイン:</strong>{' '}
                    ほぼ無し。React自体はオープンソース、どこでもホスティング可能。
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-700">
                  Remix (SSR/フレームワーク)
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>スケーラビリティ:</strong>{' '}
                    Adapter方式で様々なプラットフォーム対応。エッジでの実行も可能。
                  </p>
                  <p>
                    <strong>運用負荷:</strong>{' '}
                    サーバー環境が必要だが、マネージドサービス（Vercel、Fly.io等）で軽減可能。
                  </p>
                  <p>
                    <strong>ベンダーロックイン:</strong>{' '}
                    Web標準ベース設計のため、ロックインリスク低い。複数プラットフォーム対応。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 適用ケース／どちらを選ぶか */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-indigo-500 pb-2">
          6. 適用ケース／どちらを選ぶか
        </h2>

        <div className="space-y-8">
          {/* 向いているプロジェクト */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              向いているプロジェクトタイプ
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-cyan-400 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-cyan-700 flex items-center">
                  <span className="text-2xl mr-2">R</span>
                  React（単体）が向いているケース
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>既存システムへのUI追加:</strong>{' '}
                      既存のWebアプリに部分的にReactを導入
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>SPA（シングルページアプリケーション）:</strong>{' '}
                      管理画面、ダッシュボード、ツール系
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>モバイルアプリ:</strong> React
                      Nativeでネイティブアプリ開発
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>自由なアーキテクチャ設計:</strong>{' '}
                      独自のアーキテクチャを構築したい
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>静的サイト:</strong>{' '}
                      ポートフォリオ、ランディングページ（ただしフレームワーク推奨）
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>学習・プロトタイプ:</strong>{' '}
                      React基礎を学ぶ、迅速なプロトタイピング
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-400 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                  <span className="text-2xl mr-2">R</span>
                  Remix が向いているケース
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>フルスタックWebアプリ:</strong>{' '}
                      SaaS、Webサービス、動的Webアプリ
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>フォーム処理が多いアプリ:</strong>{' '}
                      管理画面、CRUD操作中心のアプリ
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>SEO重視:</strong>{' '}
                      サーバーサイドレンダリングでSEO最適化
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>高速な初期ロードが必要:</strong>{' '}
                      SSRで初期表示を高速化
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>Web標準重視:</strong> HTTP、Forms、Fetch
                      APIなど標準仕様に基づく開発
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>統合された開発体験:</strong>{' '}
                      フレームワークが提供する構造で効率的に開発
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 向いていないケース */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              向いていないケース・注意点
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h4 className="font-bold mb-3 text-red-800">
                  React（単体）の弱み・注意点
                </h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>・SSR/SSG：React単体では困難、フレームワーク推奨</li>
                  <li>・SEO：SPAのSEO最適化は難易度高い</li>
                  <li>・初期ロード：バンドルサイズが大きくなりやすい</li>
                  <li>
                    ・構造設計：全て自分で決める必要があり、経験が求められる
                  </li>
                  <li>
                    ・ライブラリ選定：Router、状態管理、データフェッチなど全て選定・統合が必要
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h4 className="font-bold mb-3 text-red-800">
                  Remix の弱み・注意点
                </h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>・サーバー実行前提：静的ホスティングのみでは使えない</li>
                  <li>
                    ・学習コスト：React知識+Web標準+フレームワーク理解が必要
                  </li>
                  <li>
                    ・コミュニティ規模：Reactエコシステム全体と比べると小さい
                  </li>
                  <li>・SSG/ISR：Next.jsほど洗練されていない</li>
                  <li>・日本語情報：英語中心で日本語ドキュメントが少ない</li>
                  <li>
                    ・既存SPAの移行：アーキテクチャが大きく異なり移行コスト高
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 判断基準チェックリスト */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              判断基準チェックリスト
            </h3>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border-2 border-purple-300">
              <p className="font-semibold mb-4 text-purple-900">
                以下の質問に答えて、最適な選択をしましょう：
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    1. アプリケーションの性質は？
                  </p>
                  <p className="text-gray-700">
                    → UI部分のみ／既存システムへの追加
                    <strong>（React推奨）</strong> / フルスタックWebアプリ
                    <strong>（Remix推奨）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    2. サーバーサイドレンダリング（SSR）が必要か？
                  </p>
                  <p className="text-gray-700">
                    → 不要（SPA）
                    <strong>（React推奨）</strong> / 必要（SEO、初期ロード）
                    <strong>（Remix推奨）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    3. フレームワークの構造は必要か？
                  </p>
                  <p className="text-gray-700">
                    → 自由に設計したい
                    <strong>（React推奨）</strong> / 統合された構造が欲しい
                    <strong>（Remix推奨）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">4. デプロイ環境は？</p>
                  <p className="text-gray-700">
                    → 静的ホスティングのみ
                    <strong>（React推奨）</strong> / サーバー環境あり
                    <strong>（どちらでも可、Remix有利）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    5. チームの経験レベルは？
                  </p>
                  <p className="text-gray-700">
                    → React初学者
                    <strong>（React単体で学習推奨）</strong> / React経験者
                    <strong>（Remix検討可）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    6. ライブラリ選定の自由度は？
                  </p>
                  <p className="text-gray-700">
                    → 自分で選びたい
                    <strong>（React推奨）</strong> / フレームワークに任せたい
                    <strong>（Remix推奨）</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. 移行／マイグレーション面の考慮 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-teal-500 pb-2">
          7. 移行／マイグレーション面の考慮
        </h2>

        <div className="space-y-8">
          {/* 既存プロジェクトからの移行 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              既存プロジェクトからの移行時の課題・コスト
            </h3>
            <div className="space-y-4">
              <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-300">
                <h4 className="text-lg font-bold mb-3 text-cyan-700">
                  既存Webアプリ → React追加
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>難易度:</strong> 低〜中
                  </p>
                  <p>
                    <strong>方法:</strong>
                  </p>
                  <ul className="ml-6 space-y-1">
                    <li>
                      ・段階的導入：既存ページの一部にReactコンポーネントを追加
                    </li>
                    <li>・script tagで読み込み、特定のDOM要素にマウント</li>
                    <li>・既存のバックエンド、ルーティングはそのまま維持</li>
                  </ul>
                  <p>
                    <strong>コスト:</strong> 小規模な追加であれば数日〜数週間
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-300">
                <h4 className="text-lg font-bold mb-3 text-blue-700">
                  React SPA → Remix
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>難易度:</strong> 中〜高
                  </p>
                  <p>
                    <strong>課題:</strong>
                  </p>
                  <ul className="ml-6 space-y-1">
                    <li>
                      ・クライアントサイドルーティング→ファイルベースルーティング変更
                    </li>
                    <li>
                      ・useEffect +
                      fetchパターン→loader/actionパターンへ書き換え
                    </li>
                    <li>・状態管理ライブラリ→Remixのデータフローへ移行</li>
                    <li>
                      ・クライアント専用ライブラリの扱い（'use client'的な対応）
                    </li>
                  </ul>
                  <p>
                    <strong>コスト:</strong> 中規模アプリで数週間〜数ヶ月
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-300">
                <h4 className="text-lg font-bold mb-3 text-purple-700">
                  Remix → React SPA
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>難易度:</strong> 中
                  </p>
                  <p>
                    <strong>課題:</strong>
                  </p>
                  <ul className="ml-6 space-y-1">
                    <li>
                      ・loader/action→クライアントサイドデータフェッチへ変更
                    </li>
                    <li>
                      ・ファイルベースルーティング→React
                      Router等のクライアントルーティング
                    </li>
                    <li>・SSRの恩恵を失う（SEO、初期ロード速度低下）</li>
                    <li>・APIエンドポイントを別途構築する必要</li>
                  </ul>
                  <p>
                    <strong>推奨:</strong>{' '}
                    Remixからの移行は通常推奨されない（機能後退）
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 将来性・保守性 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              将来性・保守性
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-cyan-300 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-cyan-700">React</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>✅ 将来性:</strong>
                  </li>
                  <ul className="ml-4 space-y-1">
                    <li>・Meta（Facebook）の強力なバックアップ</li>
                    <li>・世界最大級のフロントエンドコミュニティ</li>
                    <li>・React Native、React VRなど、Web以外での展開</li>
                    <li>・React Server Componentsなど新機能の開発継続</li>
                    <li>・UIライブラリとして長期的に安定した地位</li>
                  </ul>
                  <li className="mt-3">
                    <strong>✅ 保守性:</strong>
                  </li>
                  <ul className="ml-4 space-y-1">
                    <li>・後方互換性を重視した開発方針</li>
                    <li>・豊富なドキュメント、コミュニティサポート</li>
                    <li>・定期的なアップデートとセキュリティパッチ</li>
                    <li>・大企業での採用実績多数、エンジニア採用容易</li>
                  </ul>
                </ul>
              </div>

              <div className="bg-white border border-blue-300 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>✅ 将来性:</strong>
                  </li>
                  <ul className="ml-4 space-y-1">
                    <li>・Shopify買収により企業バックアップ強化</li>
                    <li>
                      ・React Routerとの統合計画（React Router v7 = Remix）
                    </li>
                    <li>・Web標準ベース設計で長期的な安定性</li>
                    <li>・エッジコンピューティングのトレンドに適合</li>
                    <li>・モダンWebアプリのベストプラクティスを体現</li>
                  </ul>
                  <li className="mt-3">
                    <strong>✅ 保守性:</strong>
                  </li>
                  <ul className="ml-4 space-y-1">
                    <li>・シンプルな設計で長期保守が容易</li>
                    <li>・Web標準依存で外部環境変化の影響小</li>
                    <li>・Reactベースなので、React知識が活きる</li>
                    <li>・オープンソースで透明性高い</li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. まとめ／推奨／今後の展望 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-pink-500 pb-2">
          8. まとめ／推奨／今後の展望
        </h2>

        <div className="space-y-8">
          {/* 総合まとめ */}
          <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 p-8 rounded-lg border-2 border-blue-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">
              総合まとめ
            </h3>
            <div className="space-y-4 text-gray-800">
              <p className="leading-relaxed">
                <strong>React</strong>と<strong>Remix</strong>
                は、レイヤーが異なる技術です。
              </p>
              <p className="leading-relaxed">
                <strong>React</strong>は、
                <span className="font-semibold text-cyan-900">
                  UIライブラリとして、コンポーネントベースのUI構築に特化
                </span>
                しています。最小限の機能のみを提供し、ルーティング、状態管理、データフェッチなどは外部ライブラリと組み合わせます。
                自由度が高い反面、アーキテクチャ設計は開発者に委ねられます。
                SPA、既存システムへのUI追加、React
                Nativeなど、幅広い用途に対応します。
              </p>
              <p className="leading-relaxed">
                <strong>Remix</strong>は、
                <span className="font-semibold text-blue-900">
                  Reactベースのフルスタックフレームワークとして、統合的な開発体験を提供
                </span>
                します。ルーティング、データローディング、SSR、フォーム処理などが組み込まれており、
                Web標準を重視した設計思想が特徴です。
                フルスタックWebアプリケーション構築に最適化されています。
              </p>
              <p className="leading-relaxed">
                <strong>
                  「React単体 vs Remix」は、「ライブラリ vs
                  フレームワーク」の比較
                </strong>
                です。Reactは土台となるライブラリ、RemixはReactの上に構築されたフレームワークという関係性です。
              </p>
            </div>
          </div>

          {/* プロジェクト別簡易ガイド */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              プロジェクト別簡易ガイド
            </h3>
            <div className="space-y-3">
              <div className="bg-white border-l-4 border-cyan-600 p-4 shadow-sm">
                <p className="font-semibold text-cyan-800 mb-1">
                  既存WebアプリへのUI追加
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>React 推奨</strong>{' '}
                  (段階的導入、既存システムとの共存)
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan-600 p-4 shadow-sm">
                <p className="font-semibold text-cyan-800 mb-1">
                  SPA（管理画面、ダッシュボード）
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>React 推奨</strong> (クライアントサイド完結)
                </p>
              </div>

              <div className="bg-white border-l-4 border-cyan-600 p-4 shadow-sm">
                <p className="font-semibold text-cyan-800 mb-1">
                  モバイルアプリ（iOS/Android）
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>React Native</strong> (Reactベースのモバイル開発)
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-4 shadow-sm">
                <p className="font-semibold text-blue-800 mb-1">
                  フルスタックWebアプリ（SaaS、Webサービス）
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Remix 推奨</strong> (SSR、統合された開発体験)
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-4 shadow-sm">
                <p className="font-semibold text-blue-800 mb-1">
                  SEO重視のWebサイト
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Remix 推奨</strong> (SSRでSEO最適化、または Next.js)
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-4 shadow-sm">
                <p className="font-semibold text-blue-800 mb-1">
                  フォーム処理が多いアプリ
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Remix 推奨</strong>{' '}
                  (loader/action、プログレッシブエンハンスメント)
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-4 shadow-sm">
                <p className="font-semibold text-purple-800 mb-1">
                  React学習・プロトタイピング
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>React + Vite 推奨</strong> (迅速な環境構築)
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-4 shadow-sm">
                <p className="font-semibold text-purple-800 mb-1">
                  複雑なカスタムアーキテクチャ
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>React 推奨</strong> (自由な設計が可能)
                </p>
              </div>
            </div>
          </div>

          {/* 今後の展望 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              今後の変化・アップデートで注目すべきポイント
            </h3>
            <div className="space-y-4">
              <div className="bg-cyan-100 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-cyan-900">React</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    ・<strong>React Server Components (RSC):</strong>{' '}
                    サーバーコンポーネントの本格普及
                  </li>
                  <li>
                    ・<strong>React Compiler:</strong> 自動メモ化で最適化（React
                    Forget）
                  </li>
                  <li>
                    ・<strong>Concurrent Rendering:</strong>{' '}
                    並行レンダリングの更なる改善
                  </li>
                  <li>
                    ・<strong>Suspense:</strong>{' '}
                    データフェッチ、コード分割での活用拡大
                  </li>
                  <li>
                    ・<strong>React Native進化:</strong>{' '}
                    新アーキテクチャ、Fabric、TurboModules
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-900">Remix</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    ・<strong>React Routerとの統合:</strong> React Router v7 =
                    Remix（エコシステム拡大）
                  </li>
                  <li>
                    ・<strong>Vite統合の深化:</strong> 開発体験の更なる向上
                  </li>
                  <li>
                    ・<strong>React Server Components対応:</strong>{' '}
                    RSCへの対応動向
                  </li>
                  <li>
                    ・<strong>Shopifyエコシステム連携:</strong>{' '}
                    Hydrogen、Polarisとの統合強化
                  </li>
                  <li>
                    ・<strong>コミュニティ成長:</strong>{' '}
                    プラグイン、ライブラリ、日本語情報の充実
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-purple-900">
                  共通のトレンド
                </h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    ・<strong>エッジコンピューティング:</strong> Cloudflare
                    Workers、Vercel Edge等での実行
                  </li>
                  <li>
                    ・<strong>型安全性:</strong>{' '}
                    TypeScript統合の深化、End-to-End型安全
                  </li>
                  <li>
                    ・<strong>パフォーマンス:</strong> Core Web
                    Vitals最適化、ビルド高速化
                  </li>
                  <li>
                    ・<strong>開発者体験:</strong>{' '}
                    HMR、型推論、エラーメッセージ改善
                  </li>
                  <li>
                    ・<strong>Web標準:</strong> ブラウザ標準API活用の拡大
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 最終推奨 */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">最終推奨</h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                ✅{' '}
                <strong>
                  UI構築のみ、既存システムへの追加、SPA、自由な設計
                </strong>{' '}
                → <strong>React</strong>
              </p>
              <p>
                ✅{' '}
                <strong>
                  フルスタックWebアプリ、SSR/SEO重視、統合された開発体験
                </strong>{' '}
                → <strong>Remix</strong>
              </p>
              <p>
                ✅ <strong>迷ったら:</strong>{' '}
                React基礎を学んでから、必要に応じてRemix等のフレームワークを検討
              </p>
              <p className="mt-4 pt-4 border-t border-white border-opacity-30">
                ReactとRemixは対立するものではなく、
                <strong>
                  Reactはライブラリ、RemixはReactベースのフレームワーク
                </strong>
                という関係です。
                プロジェクトの要件に応じて最適なレイヤーを選択しましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 参考資料／付録 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-orange-500 pb-2">
          9. 参考資料／付録
        </h2>

        <div className="space-y-8">
          {/* 公式ドキュメント */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              公式ドキュメント
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border border-cyan-300 rounded-lg p-5">
                <h4 className="font-bold mb-3 text-cyan-700">React</h4>
                <ul className="text-sm space-y-2 text-blue-600">
                  <li>
                    <a
                      href="https://react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      公式サイト（新）→
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://react.dev/learn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Learn React →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/facebook/react"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub リポジトリ →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ja.react.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      日本語ドキュメント →
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-blue-300 rounded-lg p-5">
                <h4 className="font-bold mb-3 text-blue-700">Remix</h4>
                <ul className="text-sm space-y-2 text-blue-600">
                  <li>
                    <a
                      href="https://remix.run/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      公式サイト →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://remix.run/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      ドキュメント →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/remix-run/remix"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub リポジトリ →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://remix.run/docs/en/main/start/tutorial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      チュートリアル →
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 関連ツール・ライブラリ */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              関連ツール・ライブラリ
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    React Router
                  </p>
                  <p className="text-gray-700">
                    Reactの標準的なルーティングライブラリ
                  </p>
                  <a
                    href="https://reactrouter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    https://reactrouter.com/ →
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    React Query (TanStack Query)
                  </p>
                  <p className="text-gray-700">
                    データフェッチ・キャッシング・同期ライブラリ
                  </p>
                  <a
                    href="https://tanstack.com/query"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    https://tanstack.com/query →
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Vite</p>
                  <p className="text-gray-700">
                    高速な開発サーバー・ビルドツール
                  </p>
                  <a
                    href="https://vitejs.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    https://vitejs.dev/ →
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    React Native
                  </p>
                  <p className="text-gray-700">
                    Reactでネイティブモバイルアプリ開発
                  </p>
                  <a
                    href="https://reactnative.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-xs"
                  >
                    https://reactnative.dev/ →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 比較記事・導入事例 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              比較記事・導入事例・ベンチマークレポート
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
              <p className="text-sm text-gray-700 mb-4">
                以下のキーワードで検索すると、詳細な比較記事や実際の導入事例を見つけることができます：
              </p>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>・"React vs Remix 2024"</li>
                <li>・"When to use React vs Framework"</li>
                <li>・"Remix getting started"</li>
                <li>・"React SPA vs SSR comparison"</li>
                <li>・"Migrating React SPA to Remix"</li>
                <li>・"React ecosystem 2024"</li>
                <li>・"Remix performance benefits"</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">
                ※
                最新情報は常にアップデートされているため、検索時には日付を確認しましょう。
              </p>
            </div>
          </div>

          {/* 用語・略語集 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              用語・略語集
            </h3>
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <div>
                  <p className="font-semibold text-gray-900">SPA</p>
                  <p className="text-gray-700">
                    Single Page Application（シングルページアプリケーション）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">SSR</p>
                  <p className="text-gray-700">
                    Server-Side Rendering（サーバーサイドレンダリング）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">SSG</p>
                  <p className="text-gray-700">
                    Static Site Generation（静的サイト生成）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">CSR</p>
                  <p className="text-gray-700">
                    Client-Side Rendering（クライアントサイドレンダリング）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">RSC</p>
                  <p className="text-gray-700">
                    React Server Components（Reactサーバーコンポーネント）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hydration</p>
                  <p className="text-gray-700">
                    SSRされたHTMLにイベントハンドラを付与する処理
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Virtual DOM</p>
                  <p className="text-gray-700">
                    仮想DOM、Reactの効率的なレンダリング機構
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hooks</p>
                  <p className="text-gray-700">
                    React 16.8+の機能、状態管理やライフサイクルを扱う
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">HMR</p>
                  <p className="text-gray-700">
                    Hot Module Replacement（ホットモジュールリプレースメント）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">CDN</p>
                  <p className="text-gray-700">
                    Content Delivery Network（コンテンツデリバリーネットワーク）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">TTI</p>
                  <p className="text-gray-700">
                    Time to Interactive（インタラクティブになるまでの時間）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">FCP / LCP</p>
                  <p className="text-gray-700">
                    First / Largest Contentful Paint（コンテンツ描画指標）
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center py-8 border-t border-gray-300">
        <p className="text-gray-600 text-sm">
          このドキュメントは2024-2025年時点の情報に基づいています。
        </p>
        <p className="text-gray-600 text-sm mt-2">
          最新情報は各公式ドキュメントをご確認ください。
        </p>
      </div>
    </div>
  )
}
