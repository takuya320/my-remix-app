import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Next.js vs Remix 徹底比較 - Remix情報ページ' },
    {
      name: 'description',
      content:
        'Next.jsとRemixの詳細な比較。アーキテクチャ、パフォーマンス、開発体験、適用ケースなど、あらゆる観点から両フレームワークを分析します。',
    },
  ]
}

export default function NextjsVsRemix() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Next.js vs Remix
        </h1>
        <p className="text-xl text-gray-600">
          モダンReactフレームワークの徹底比較
        </p>
      </div>

      {/* 1. はじめに */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-blue-500 pb-2">
          1. はじめに
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              ドキュメントの目的
            </h3>
            <p className="text-gray-700 leading-relaxed">
              本ドキュメントは、Next.jsとRemixという2つの主要なReactフレームワークを、
              <strong>アーキテクチャ</strong>、<strong>パフォーマンス</strong>、
              <strong>開発体験</strong>、<strong>適用ケース</strong>
              など、多角的な観点から比較分析します。
              エンジニアリングチームがプロジェクトに最適なフレームワークを選択するための実践的なガイドを提供することを目的としています。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              対象読者
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>
                  <strong>フロントエンドエンジニア:</strong>{' '}
                  新規プロジェクトでのフレームワーク選定を行う方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>
                  <strong>テックリード・アーキテクト:</strong>{' '}
                  技術戦略とアーキテクチャ決定に責任を持つ方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>
                  <strong>プロダクトマネージャー:</strong>{' '}
                  技術選択がプロダクトに与える影響を理解したい方
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                <span>
                  <strong>CTOや技術責任者:</strong>{' '}
                  長期的な技術投資の判断を行う方
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              フレームワーク簡単紹介
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-gray-900 text-white rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mr-3">
                    ▲
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Next.js</h4>
                    <p className="text-sm text-gray-600">by Vercel</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Vercelが開発するReactフレームワーク。SSG/SSR/ISRなど多様なレンダリング戦略を提供し、
                  大規模エンタープライズから個人プロジェクトまで幅広く採用されている。
                  App RouterとPages Routerの2つのモードを提供。
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
                  Shopifyが買収・開発するフルスタックReactフレームワーク。
                  Web標準とネイティブブラウザAPI重視の設計思想が特徴。
                  loader/actionパターンによる明確なデータフロー、ネストルーティング、
                  優れたフォーム処理などが強み。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. フレームワーク概要 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-purple-500 pb-2">
          2. フレームワーク概要
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Next.js の概要
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>開発元:</strong> Vercel（旧Zeit）
                </p>
                <p>
                  <strong>初版リリース:</strong> 2016年10月
                </p>
                <p>
                  <strong>設計思想:</strong>
                </p>
                <ul className="ml-6 space-y-2">
                  <li>
                    ・ゼロコンフィグで始められる開発体験（Convention over
                    Configuration）
                  </li>
                  <li>
                    ・SSG（Static Site Generation）、SSR（Server-Side
                    Rendering）、ISR（Incremental Static
                    Regeneration）、CSR（Client-Side
                    Rendering）など、多様なレンダリング戦略の柔軟な組み合わせ
                  </li>
                  <li>・Vercelプラットフォームとの緊密な統合と最適化</li>
                  <li>
                    ・エンタープライズグレードのパフォーマンスとスケーラビリティ
                  </li>
                  <li>
                    ・画像最適化やフォント最適化などの自動化された最適化機能
                  </li>
                </ul>
                <p>
                  <strong>特徴:</strong>
                </p>
                <ul className="ml-6 space-y-1">
                  <li>
                    ・App Router（React Server Components対応）とPages
                    Routerの2つのルーティングシステム
                  </li>
                  <li>・豊富なエコシステムと大規模なコミュニティ</li>
                  <li>・エッジランタイム対応（Middleware、Edge Functions）</li>
                  <li>
                    ・大企業での採用実績が豊富（Hulu、Twitch、Nike、Uberなど）
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
                  <strong>設計思想:</strong>
                </p>
                <ul className="ml-6 space-y-2">
                  <li>・Web標準（Web APIs、HTTP、HTML Forms）への回帰と尊重</li>
                  <li>
                    ・プログレッシブエンハンスメント（JavaScriptが無効でも動作）
                  </li>
                  <li>・サーバーとクライアントの明確な境界とデータフロー</li>
                  <li>
                    ・ネストルーティングによる効率的なデータローディングと並列化
                  </li>
                  <li>
                    ・ランタイム非依存（Node.js、Cloudflare
                    Workers、Deno、Bun等）
                  </li>
                </ul>
                <p>
                  <strong>特徴:</strong>
                </p>
                <ul className="ml-6 space-y-1">
                  <li>
                    ・loader/actionパターンによる型安全なデータフェッチとミューテーション
                  </li>
                  <li>
                    ・標準的なWeb Fetch
                    APIベースのキャッシュ戦略（HTTPヘッダー制御）
                  </li>
                  <li>・Viteベースの高速な開発体験（Remix v2以降）</li>
                  <li>・Shopifyエコシステムとの統合</li>
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
                      Next.js
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Remix
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      設計理念
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      多機能・柔軟性重視
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Web標準・シンプルさ重視
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      ターゲット層
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      全規模プロジェクト
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      動的Webアプリ中心
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      学習曲線
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      緩やか（多機能ゆえの複雑性）
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      やや急（Web標準理解が前提）
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      エコシステム
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      非常に豊富
                    </td>
                    <td className="border border-gray-300 px-4 py-3">成長中</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      企業バックボーン
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Vercel（ホスティング企業）
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      Shopify（EC大手）
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
              <div className="bg-white border-2 border-gray-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-gray-800">
                  Next.js
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>Pages Router（従来）:</strong>
                </p>
                <ul className="text-sm space-y-1 ml-4 mb-3 text-gray-700">
                  <li>
                    ・pages/ディレクトリベースのファイルシステムルーティング
                  </li>
                  <li>・各ページが独立したルート</li>
                  <li>・getServerSideProps、getStaticPropsでデータ取得</li>
                </ul>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>App Router（新）:</strong>
                </p>
                <ul className="text-sm space-y-1 ml-4 text-gray-700">
                  <li>
                    ・app/ディレクトリベース、レイアウトとネストルートをサポート
                  </li>
                  <li>・React Server Components統合</li>
                  <li>
                    ・loading.tsx、error.tsx、layout.txsによる宣言的UI状態管理
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <p className="text-sm text-gray-700 mb-3">
                  <strong>ネストルーティング:</strong>
                </p>
                <ul className="text-sm space-y-1 ml-4 text-gray-700">
                  <li>
                    ・ファイル名によるネスト構造（例: routes/blog.$slug.tsx）
                  </li>
                  <li>・親ルートと子ルートが並列でデータローディング</li>
                  <li>・Outletコンポーネントで子ルートをレンダリング</li>
                  <li>・エラーバウンダリが各ルートレベルで機能</li>
                  <li>・URL変更時に必要なルートのみ再フェッチ（効率的）</li>
                </ul>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800">
                  💡 Remixのネストルーティングは、React
                  Routerのコンセプトを発展させたもの
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
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-300">
                <h4 className="text-lg font-bold mb-3 text-gray-800">
                  Next.js
                </h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Pages Router:</strong>
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>・getStaticProps: ビルド時にデータ取得（SSG）</li>
                    <li>
                      ・getServerSideProps:
                      リクエスト毎にサーバーでデータ取得（SSR）
                    </li>
                    <li>・getStaticPaths: 動的ルートの静的生成パス指定</li>
                    <li>
                      ・ISR（Incremental Static Regeneration）:
                      再検証時間を指定して静的ページを更新
                    </li>
                  </ul>
                  <p className="mt-3">
                    <strong>App Router:</strong>
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>
                      ・Server Components内で直接fetchやデータベースクエリ
                    </li>
                    <li>・fetch拡張により自動的なrevalidate、cache制御</li>
                    <li>
                      ・'use client'ディレクティブでクライアント境界を明示
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-300">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>loader/actionパターン:</strong>
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>・loader: GETリクエスト時のサーバー側データ取得</li>
                    <li>・action: POST/PUT/DELETEなどのミューテーション処理</li>
                    <li>
                      ・型推論が効く（useLoaderData&lt;typeof loader&gt;()）
                    </li>
                    <li>
                      ・標準Web Fetch APIベース、Responseオブジェクトを返却
                    </li>
                    <li>
                      ・ネストルートの全loaderが並列実行（パフォーマンス向上）
                    </li>
                    <li>
                      ・HTTPヘッダー（Cache-Control等）で細かくキャッシュ制御
                    </li>
                  </ul>
                  <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-800">
                    💡 RemixはWeb標準を重視し、fetch
                    APIとHTTPセマンティクスに忠実
                  </div>
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
                      Next.js
                    </th>
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                      Remix
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      SSR
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ サポート（getServerSideProps、Server Components）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ デフォルト（loader関数）
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      SSG
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ ファーストクラスサポート（getStaticProps）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ⚠️ 限定的（HTTPキャッシュヘッダーやCDNで代替）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      ISR
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ 独自機能（revalidate）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ⚠️ HTTPキャッシュ戦略（stale-while-revalidate等）で代替
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      CSR
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ サポート（useEffect、SWR、React Query等）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ サポート（useEffect、fetcher等）
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      Streaming
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ App Router（React Suspense）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ defer()関数でStreaming SSR
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
              <div className="bg-white border border-gray-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-gray-800">
                  Next.js
                </h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>Vercel:</strong>{' '}
                    最適化された環境（Edge、Serverless）
                  </li>
                  <li>
                    <strong>エッジランタイム:</strong> Middleware、Edge API
                    Routes
                  </li>
                  <li>
                    <strong>Node.jsサーバー:</strong> next
                    startでセルフホスティング可能
                  </li>
                  <li>
                    <strong>Docker:</strong> コンテナ化も可能
                  </li>
                  <li>
                    <strong>他プラットフォーム:</strong>{' '}
                    AWS、GCP、Azure、Netlify等（一部機能制限あり）
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
                    <strong>Node.js:</strong> Express、Fastifyなど
                  </li>
                  <li>
                    <strong>Cloudflare Workers:</strong>{' '}
                    エッジコンピューティング
                  </li>
                  <li>
                    <strong>Deno、Bun:</strong> 新しいランタイムにも対応
                  </li>
                  <li>
                    <strong>Vercel、Netlify、Fly.io:</strong>{' '}
                    主要ホスティングで利用可能
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800">
                  💡 Remixはランタイム非依存設計で柔軟性が高い
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
              <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3">Next.js</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">ドキュメント:</p>
                    <p>
                      非常に充実。日本語含む多言語対応。豊富なサンプルコード。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">コミュニティ:</p>
                    <p>
                      巨大。Stack Overflow、GitHub Discussions、Discord等で活発
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">学習コスト:</p>
                    <p>
                      低〜中。多機能ゆえの複雑さあり。App
                      Routerは学習曲線やや高め。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">開発速度:</p>
                    <p>高速（Fast Refresh、Turbopack（オプション））</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold mb-1">ドキュメント:</p>
                    <p>良質だが英語中心。実践的なチュートリアルが充実。</p>
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
                      中。Web標準（HTTP、Forms、Fetch
                      API）理解が前提。習得後は生産性高い。
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">開発速度:</p>
                    <p>
                      高速（Viteベース、HMR）。loader/actionの型安全性で開発効率良好。
                    </p>
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
              <div className="bg-white border border-gray-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3">Next.js</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>・next.config.jsで豊富なカスタマイズ</li>
                  <li>
                    ・公式プラグイン（@next/mdx、@next/bundle-analyzer等）
                  </li>
                  <li>
                    ・SWR、React Query等のデータフェッチライブラリと良好な統合
                  </li>
                  <li>
                    ・認証（NextAuth.js）、CMS連携（Contentful、Sanity）のエコシステム豊富
                  </li>
                  <li>
                    ・画像最適化（next/image）、国際化（next-i18next）等の公式パッケージ
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-blue-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3 text-blue-700">Remix</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>・remix.config.js（またはvite.config.ts）で設定</li>
                  <li>
                    ・Remix
                    Stacksテンプレート（Blues、Indie、Grunge等）で素早くスタート
                  </li>
                  <li>・Shopify製ライブラリとの統合（Hydrogen、Polaris等）</li>
                  <li>
                    ・標準Reactエコシステムとの互換性（React Router、React
                    Query等）
                  </li>
                  <li>・認証、CMS連携は自前実装またはサードパーティ利用</li>
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
                      Next.js
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
                      ✅ ファーストクラスサポート
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ ファーストクラスサポート
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      データ型推論
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ getServerSideProps、getStaticPropsの戻り値から自動推論
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ useLoaderData&lt;typeof loader&gt;()で自動推論
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      型安全なAPI
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ⚠️ API Routesは手動で型定義が必要
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      ✅ loader/actionとコンポーネント間で型推論が効く
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2 font-medium">
                      設定の自由度
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      高（next.config.jsで細かく調整可能）
                    </td>
                    <td className="border border-gray-300 px-3 py-2">
                      中（シンプル設計、必要最小限）
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
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2">Next.js</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>
                    ・Jest、React Testing
                    Library、Playwright/Cypressとの統合が一般的
                  </li>
                  <li>
                    ・Vercel Analytics、Vercel Speed
                    Insightsなどの公式分析ツール
                  </li>
                  <li>
                    ・デバッグ: React DevTools、Next.js
                    DevTools、ソースマップ対応
                  </li>
                  <li>・運用: Vercel Dashboardでログ、メトリクス確認可能</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-700">Remix</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>
                    ・Vitest、React Testing Library推奨（公式ドキュメント記載）
                  </li>
                  <li>
                    ・loader/action単体がシンプルな関数のため、テストしやすい
                  </li>
                  <li>
                    ・デバッグ: React
                    DevTools、ブラウザDevTools、Viteのソースマップ
                  </li>
                  <li>
                    ・運用:
                    ホスティング先の監視ツールに依存（Sentry、Datadog等）
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
                <strong>一般的な傾向（プロジェクト内容に依存）:</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Next.js:</strong>
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>
                      ・多機能のため、フレームワークランタイムがやや大きめ
                    </li>
                    <li>
                      ・App Router（Server
                      Components）では、クライアントバンドルを削減可能
                    </li>
                    <li>
                      ・画像最適化、フォント最適化などが自動化されておりTTI改善
                    </li>
                    <li>
                      ・Vercel環境ではエッジキャッシング、CDN活用でFCP/LCP高速化
                    </li>
                  </ul>
                </li>
                <li className="mt-3">
                  <strong>Remix:</strong>
                  <ul className="ml-6 mt-1 space-y-1">
                    <li>
                      ・フレームワークランタイムが軽量（Web標準重視のため）
                    </li>
                    <li>・ネストルーティングにより必要なコードのみロード</li>
                    <li>
                      ・プログレッシブエンハンスメントでJavaScript無しでも動作（初期ロード高速）
                    </li>
                    <li>
                      ・loader/actionの並列実行、効率的なデータフェッチでTTI改善
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
                <p className="font-semibold text-yellow-800 mb-1">
                  📊 ベンチマーク参考
                </p>
                <p className="text-yellow-700">
                  実際のパフォーマンスはアプリケーション設計、最適化の工夫、ホスティング環境に大きく依存します。
                  どちらのフレームワークも適切に使えば高速なWebアプリケーションを構築可能です。
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
              <div className="bg-white border border-gray-300 rounded-lg p-5">
                <h4 className="text-lg font-bold mb-3">Next.js</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>SSG/ISR:</strong>{' '}
                    静的ファイルとしてCDNにキャッシュ可能
                  </li>
                  <li>
                    <strong>revalidate:</strong> ISRで再検証時間を指定
                  </li>
                  <li>
                    <strong>App Router:</strong>{' '}
                    fetch拡張でcache、next.revalidate設定
                  </li>
                  <li>
                    <strong>Middleware:</strong> エッジでレスポンスヘッダー操作
                  </li>
                  <li>
                    <strong>Vercel:</strong>{' '}
                    自動的なCDNキャッシング、エッジネットワーク活用
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
                    stale-while-revalidate、max-age等の標準キャッシュディレクティブ
                  </li>
                  <li>
                    <strong>CDN:</strong>{' '}
                    Cloudflare、Fastly等と連携し、エッジキャッシング活用
                  </li>
                  <li>
                    <strong>細かい制御:</strong>{' '}
                    ルート毎に異なるキャッシュ戦略を柔軟に設定可能
                  </li>
                </ul>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-800">
                  💡
                  RemixはWeb標準のHTTPキャッシュ戦略を使用し、CDN・プロキシとの親和性が高い
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
              <div className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2">Next.js</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>スケーラビリティ:</strong>{' '}
                    Vercelではオートスケーリング。他のホスティングではNode.jsサーバーのスケーリング設計が必要。
                  </p>
                  <p>
                    <strong>運用負荷:</strong>{' '}
                    Vercel利用時は極めて低い（デプロイ自動化、監視、ログ管理が統合）。セルフホスティング時はインフラ管理必要。
                  </p>
                  <p>
                    <strong>ベンダーロックイン:</strong> Vercel固有機能（Edge
                    Middleware、Image
                    Optimization等）を多用すると移行コスト増。セルフホスティングも可能だが最適化が制限される場合あり。
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-700">Remix</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>スケーラビリティ:</strong>{' '}
                    Adapter方式で様々なプラットフォーム対応。Cloudflare
                    Workersなどエッジでも動作し、グローバルスケーリング可能。
                  </p>
                  <p>
                    <strong>運用負荷:</strong>{' '}
                    ホスティング先に依存。Fly.io、Vercel、Netlify等のマネージドサービス利用で運用負荷低減。
                  </p>
                  <p>
                    <strong>ベンダーロックイン:</strong>{' '}
                    Web標準ベース設計のため、ロックインリスク低い。異なるランタイム・ホスティング間での移行が比較的容易。
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
              <div className="bg-white border-2 border-gray-400 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <span className="text-2xl mr-2">▲</span>
                  Next.js が向いているケース
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>静的サイト・ブログ:</strong>{' '}
                      SSG/ISRで高速な静的コンテンツ配信
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>Eコマース・マーケティングサイト:</strong>{' '}
                      SEO最適化、画像最適化が重要なサイト
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>大規模エンタープライズアプリ:</strong>{' '}
                      豊富なエコシステムとVercelサポート
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>Vercel環境での運用:</strong>{' '}
                      プラットフォーム統合による運用効率化
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>多様なレンダリング戦略が必要:</strong>{' '}
                      SSG、SSR、ISR、CSRを混在させたい
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>大規模コミュニティ・エコシステムが必要:</strong>{' '}
                      プラグイン、サンプル、情報が豊富
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
                      <strong>動的Webアプリケーション:</strong>{' '}
                      ユーザーインタラクションが多いダッシュボード、SaaS等
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
                      <strong>プログレッシブエンハンスメント重視:</strong>{' '}
                      JavaScript無効でも動作が必要
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>Web標準重視・HTTPキャッシュ戦略:</strong>{' '}
                      標準仕様に基づいた設計
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>ベンダーロックイン回避:</strong>{' '}
                      複数ランタイム・ホスティング対応
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 font-bold">✓</span>
                    <span>
                      <strong>エッジコンピューティング活用:</strong> Cloudflare
                      Workers等での実行
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
                  Next.js の弱み・注意点
                </h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>・App Router vs Pages Router：学習コストと移行コスト</li>
                  <li>
                    ・多機能ゆえの複雑性：小規模プロジェクトではオーバースペックになる可能性
                  </li>
                  <li>
                    ・Vercel外でのホスティング：一部機能の制限や最適化の困難さ
                  </li>
                  <li>・Server Components：新しい概念で学習曲線あり</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h4 className="font-bold mb-3 text-red-800">
                  Remix の弱み・注意点
                </h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>・SSG/ISRのサポート：Next.jsほど洗練されていない</li>
                  <li>
                    ・コミュニティ規模：Next.jsに比べると小さい（情報量・プラグイン）
                  </li>
                  <li>・日本語ドキュメント：英語中心で日本語情報が少ない</li>
                  <li>・エコシステム：成長中だが、Next.jsほど成熟していない</li>
                  <li>
                    ・Web標準理解：HTTPヘッダー、Forms等の理解が必要で学習コストやや高め
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
                以下の質問に答えて、最適なフレームワークを選択しましょう：
              </p>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    1. プロジェクトの主な性質は？
                  </p>
                  <p className="text-gray-700">
                    → 静的コンテンツ中心
                    <strong>（Next.js有利）</strong> / 動的アプリ中心
                    <strong>（Remix有利）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">2. ホスティング環境は？</p>
                  <p className="text-gray-700">
                    → Vercel前提
                    <strong>（Next.js有利）</strong> / 複数環境・エッジ重視
                    <strong>（Remix有利）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    3. フォーム・ミューテーション処理の多さは？
                  </p>
                  <p className="text-gray-700">
                    → 少ない
                    <strong>（どちらでも可）</strong> / 多い
                    <strong>（Remix有利）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    4. チームのWeb標準知識レベルは？
                  </p>
                  <p className="text-gray-700">
                    → 初級〜中級
                    <strong>（Next.js有利）</strong> / 中級〜上級
                    <strong>（Remix有利）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    5. エコシステム・プラグインの豊富さの重要度は？
                  </p>
                  <p className="text-gray-700">
                    → 重要
                    <strong>（Next.js有利）</strong> / 標準技術で十分
                    <strong>（Remix有利）</strong>
                  </p>
                </div>

                <div className="bg-white p-4 rounded shadow-sm">
                  <p className="font-semibold mb-2">
                    6. ベンダーロックインへの懸念は？
                  </p>
                  <p className="text-gray-700">
                    → 許容できる
                    <strong>（Next.js可）</strong> / 回避したい
                    <strong>（Remix有利）</strong>
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
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                <h4 className="text-lg font-bold mb-3">
                  Create React App → Next.js
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
                      ・クライアントサイドルーティング（React
                      Router等）からファイルベースルーティングへ変更
                    </li>
                    <li>
                      ・サーバー側データ取得パターンへの移行（getServerSideProps等）
                    </li>
                    <li>・環境変数、ビルド設定の調整</li>
                  </ul>
                  <p>
                    <strong>コスト:</strong>{' '}
                    中規模アプリで数週間〜数ヶ月（段階的移行可能）
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-300">
                <h4 className="text-lg font-bold mb-3">
                  Create React App → Remix
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
                      ・React Routerベースのため、ルーティング移行は比較的容易
                    </li>
                    <li>
                      ・loader/actionパターンへの書き換え（データ取得ロジック変更）
                    </li>
                    <li>・フォーム処理をRemix Formパターンに移行</li>
                    <li>・Web標準理解が必要（HTTPヘッダー、Response等）</li>
                  </ul>
                  <p>
                    <strong>コスト:</strong>{' '}
                    中規模アプリで数週間〜数ヶ月（学習コスト含む）
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-300">
                <h4 className="text-lg font-bold mb-3">Next.js ⇔ Remix 移行</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>難易度:</strong> 高
                  </p>
                  <p>
                    <strong>課題:</strong>
                  </p>
                  <ul className="ml-6 space-y-1">
                    <li>
                      ・データ取得パターンの完全な書き換え（getServerSideProps ⇔
                      loader）
                    </li>
                    <li>・ルーティングモデルの違いに対応</li>
                    <li>・Next.js固有機能（Image、Script等）の代替実装</li>
                    <li>・キャッシュ戦略の再設計</li>
                  </ul>
                  <p>
                    <strong>推奨:</strong>{' '}
                    新規プロジェクトで選定するのが理想。既存プロジェクトの全面移行はコスト高。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 将来性・保守性 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              両フレームワークにおける将来性・保守性
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-3">Next.js</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    <strong>✅ 将来性:</strong>
                  </li>
                  <ul className="ml-4 space-y-1">
                    <li>・Vercelの強力なバックアップと継続的な開発</li>
                    <li>・React Teamとの密接な協力（Server Components等）</li>
                    <li>・大企業での採用実績多数</li>
                    <li>・App Routerが将来の標準となる方向性</li>
                  </ul>
                  <li className="mt-3">
                    <strong>✅ 保守性:</strong>
                  </li>
                  <ul className="ml-4 space-y-1">
                    <li>・Pages Routerは当面サポート継続</li>
                    <li>・豊富なドキュメント・コミュニティサポート</li>
                    <li>・定期的なアップデートとセキュリティパッチ</li>
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
                  </ul>
                  <li className="mt-3">
                    <strong>✅ 保守性:</strong>
                  </li>
                  <ul className="ml-4 space-y-1">
                    <li>・シンプルな設計で長期保守が容易</li>
                    <li>・Web標準依存で外部環境変化の影響小</li>
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
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8 rounded-lg border-2 border-purple-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-900">
              総合まとめ
            </h3>
            <div className="space-y-4 text-gray-800">
              <p className="leading-relaxed">
                <strong>Next.js</strong>と<strong>Remix</strong>
                は、どちらも優れたReactフレームワークですが、
                設計思想と得意領域が異なります。
              </p>
              <p className="leading-relaxed">
                <strong>Next.js</strong>は、
                <span className="font-semibold text-gray-900">
                  多機能で柔軟性が高く、静的サイトから動的アプリまで幅広く対応
                </span>
                します。豊富なエコシステム、Vercelとの緊密な統合、大規模コミュニティが強みです。
                特にSSG/ISRを活用した静的コンテンツ配信、Eコマース、エンタープライズアプリに最適です。
              </p>
              <p className="leading-relaxed">
                <strong>Remix</strong>は、
                <span className="font-semibold text-blue-900">
                  Web標準重視でシンプル、動的Webアプリケーションに特化
                </span>
                した設計です。loader/actionパターンによる明確なデータフロー、ネストルーティング、
                標準HTTPキャッシュ戦略が特徴で、フォーム処理が多い管理画面やSaaSアプリに強みがあります。
              </p>
              <p className="leading-relaxed">
                どちらを選ぶべきかは、
                <strong>
                  プロジェクトの性質、チームのスキルセット、ホスティング環境、長期的な技術戦略
                </strong>
                によって決まります。
              </p>
            </div>
          </div>

          {/* プロジェクト別簡易ガイド */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              プロジェクト別簡易ガイド
            </h3>
            <div className="space-y-3">
              <div className="bg-white border-l-4 border-gray-600 p-4 shadow-sm">
                <p className="font-semibold text-gray-800 mb-1">
                  ブログ・マーケティングサイト
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Next.js 推奨</strong> (SSG/ISRで高速配信、SEO最適化)
                </p>
              </div>

              <div className="bg-white border-l-4 border-gray-600 p-4 shadow-sm">
                <p className="font-semibold text-gray-800 mb-1">
                  Eコマースサイト
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Next.js 推奨</strong>{' '}
                  (画像最適化、多様なレンダリング戦略、豊富なCMS連携)
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-4 shadow-sm">
                <p className="font-semibold text-blue-800 mb-1">
                  SaaSダッシュボード・管理画面
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Remix 推奨</strong>{' '}
                  (フォーム処理、CRUD操作、ネストルーティング)
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-4 shadow-sm">
                <p className="font-semibold text-blue-800 mb-1">
                  動的Webアプリケーション
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Remix 推奨</strong> (loader/action、型安全、Web標準)
                </p>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-4 shadow-sm">
                <p className="font-semibold text-purple-800 mb-1">
                  大規模エンタープライズアプリ
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Next.js または Remix</strong>{' '}
                  (チーム規模、既存技術スタック、運用方針による)
                </p>
              </div>

              <div className="bg-white border-l-4 border-gray-600 p-4 shadow-sm">
                <p className="font-semibold text-gray-800 mb-1">
                  静的コンテンツ + 一部動的機能
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Next.js 推奨</strong> (SSGとSSRの柔軟な組み合わせ)
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-4 shadow-sm">
                <p className="font-semibold text-blue-800 mb-1">
                  エッジコンピューティング活用
                </p>
                <p className="text-sm text-gray-700">
                  → <strong>Remix 推奨</strong> (Cloudflare
                  Workers等での実行、ランタイム非依存)
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
              <div className="bg-gray-100 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-gray-900">Next.js</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    ・<strong>App Routerの成熟:</strong> Pages
                    Routerからの移行が進むか、エコシステムの対応状況
                  </li>
                  <li>
                    ・<strong>React Server Components:</strong>{' '}
                    本格採用の進展とパフォーマンス改善
                  </li>
                  <li>
                    ・<strong>Turbopack:</strong>{' '}
                    Rustベースの高速ビルドツール統合（Webpackから移行）
                  </li>
                  <li>
                    ・<strong>Partial Prerendering:</strong>{' '}
                    静的と動的を組み合わせた新レンダリング戦略
                  </li>
                  <li>
                    ・<strong>エッジランタイム拡充:</strong> Middleware、Edge
                    Functionsの機能強化
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100 p-5 rounded-lg">
                <h4 className="font-bold mb-2 text-blue-900">Remix</h4>
                <ul className="text-sm space-y-2 text-gray-700">
                  <li>
                    ・<strong>React Routerとの統合:</strong> React Router
                    v7がRemixベースになる計画（エコシステム拡大）
                  </li>
                  <li>
                    ・<strong>Vite統合の深化:</strong> Remix
                    v2以降、Viteベースの開発体験向上
                  </li>
                  <li>
                    ・<strong>Shopifyエコシステム:</strong>{' '}
                    Hydrogen（Shopify製フレームワーク）との連携強化
                  </li>
                  <li>
                    ・<strong>Server Components対応:</strong>{' '}
                    Reactの新機能への対応動向
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
                    ・<strong>エッジコンピューティング:</strong>{' '}
                    両フレームワークともエッジランタイム対応強化
                  </li>
                  <li>
                    ・<strong>React最新機能:</strong> Server
                    Components、Suspense、Concurrent Renderingの活用
                  </li>
                  <li>
                    ・<strong>型安全性:</strong>{' '}
                    TypeScript統合の深化、End-to-End型安全
                  </li>
                  <li>
                    ・<strong>パフォーマンス:</strong> Core Web
                    Vitals最適化、ビルド高速化、バンドルサイズ削減
                  </li>
                  <li>
                    ・<strong>開発者体験:</strong>{' '}
                    HMR、型推論、エラーメッセージ改善
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 最終推奨 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">最終推奨</h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                ✅{' '}
                <strong>
                  静的コンテンツ中心、Vercel利用、豊富なエコシステムが必要
                </strong>{' '}
                → <strong>Next.js</strong>
              </p>
              <p>
                ✅{' '}
                <strong>
                  動的アプリ、フォーム処理多数、Web標準重視、ベンダーロックイン回避
                </strong>{' '}
                → <strong>Remix</strong>
              </p>
              <p>
                ✅ <strong>どちらも試してみる</strong>:{' '}
                小規模プロトタイプを両方で作成し、チームにフィットする方を選択
              </p>
              <p className="mt-4 pt-4 border-t border-white border-opacity-30">
                どちらのフレームワークも優秀で、適切に使えば高品質なWebアプリケーションを構築できます。
                プロジェクトの要件とチームの状況を慎重に評価し、最適な選択をしましょう。
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
              <div className="bg-white border border-gray-300 rounded-lg p-5">
                <h4 className="font-bold mb-3 text-gray-900">Next.js</h4>
                <ul className="text-sm space-y-2 text-blue-600">
                  <li>
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      公式サイト →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nextjs.org/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      ドキュメント →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/vercel/next.js"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      GitHub リポジトリ →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nextjs.org/learn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Learn Next.js →
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
                <li>・"Next.js vs Remix comparison 2024"</li>
                <li>・"Remix performance benchmark"</li>
                <li>・"Next.js App Router vs Remix"</li>
                <li>・"Migrating from Next.js to Remix"</li>
                <li>・"Remix vs Next.js for SaaS"</li>
                <li>・"Next.js case studies"</li>
                <li>・"Remix Shopify integration"</li>
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
                  <p className="font-semibold text-gray-900">ISR</p>
                  <p className="text-gray-700">
                    Incremental Static Regeneration（段階的静的再生成）
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
                  <p className="font-semibold text-gray-900">DX</p>
                  <p className="text-gray-700">
                    Developer Experience（開発者体験）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">FCP</p>
                  <p className="text-gray-700">
                    First Contentful Paint（最初のコンテンツ描画）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">LCP</p>
                  <p className="text-gray-700">
                    Largest Contentful Paint（最大コンテンツ描画）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">TTI</p>
                  <p className="text-gray-700">
                    Time to Interactive（インタラクティブになるまでの時間）
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">CRUD</p>
                  <p className="text-gray-700">
                    Create, Read, Update, Delete（基本的なデータ操作）
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
