import type { MetaFunction } from 'react-router'

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix v3 調査レポート - Remix情報ページ' },
    {
      name: 'description',
      content:
        'Reactを手放した新しいフルスタックフレームワーク Remix 3 の調査レポート。リリース状況、独自UIランタイム、v2やReact Routerとの関係、採用判断をまとめます。',
    },
  ]
}

export default function RemixV3() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Title */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
          Remix v3
        </h1>
        <p className="text-xl text-gray-600">
          Reactを手放した、新しいフルスタックフレームワーク
        </p>
        <p className="text-sm text-gray-500 mt-3">調査時点: 2026年9月20日</p>
      </div>

      {/* 0. 要約 */}
      <section className="mb-16">
        <div className="bg-linear-to-r from-violet-50 to-fuchsia-50 border-l-4 border-violet-500 p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold mb-3 text-violet-800">結論</h2>
          <p className="text-gray-700 leading-relaxed">
            Remix 3 は v2 の続編ではなく、
            <strong>Reactを使わない別物のフルスタックフレームワーク</strong>
            です。v2 からの移行パスは存在しません。既存の Remix v2
            アプリケーションの移行先は Remix 3 ではなく
            <strong>React Router (Framework Mode)</strong> です。
          </p>
        </div>
      </section>

      {/* 1. リリース状況 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-violet-500 pb-2">
          1. リリース状況
        </h2>

        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    項目
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                    状況
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    正式リリース
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <strong>2026年10月2日</strong>（Remix Jam にて発表予定）
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    現在の段階
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    RC（リリース候補）。npm の <code>remix@next</code> は{' '}
                    <code>3.0.0-rc.3</code>（2026年9月18日公開）
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    RCの位置づけ
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    機能開発は凍結。バグ修正・セキュリティ監査・ドキュメント整備のみ
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">
                    安定版ライン
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    <code>latest</code> は依然 <code>2.17.5</code>。v2 と v3
                    は別ラインで並走
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              開発タイムライン
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="bg-violet-100 text-violet-800 font-mono text-xs px-2 py-1 rounded-sm mr-3 whitespace-nowrap">
                    2026-01-26
                  </span>
                  <span>alpha.1 公開</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-100 text-violet-800 font-mono text-xs px-2 py-1 rounded-sm mr-3 whitespace-nowrap">
                    2026-04-30
                  </span>
                  <span>
                    beta.0 公開 —
                    ブログ「Remix&nbsp;3&nbsp;Beta&nbsp;Preview」で方針を公表
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-100 text-violet-800 font-mono text-xs px-2 py-1 rounded-sm mr-3 whitespace-nowrap">
                    2026-08-31
                  </span>
                  <span>rc.1 公開 — beta 以降「350以上のコミット」</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-fuchsia-100 text-fuchsia-800 font-mono text-xs px-2 py-1 rounded-sm mr-3 whitespace-nowrap">
                    2026-10-02
                  </span>
                  <span>
                    <strong>正式リリース予定</strong>（以降は SemVer に準拠）
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Remix 3 の中身 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-fuchsia-500 pb-2">
          2. Remix 3 の中身
        </h2>

        <div className="space-y-6">
          <div className="bg-fuchsia-50 p-6 rounded-lg border border-fuchsia-200">
            <h3 className="text-xl font-semibold mb-3 text-fuchsia-800">
              「メタフレームワーク」から「フルスタックフレームワーク」へ
            </h3>
            <p className="text-gray-700 leading-relaxed">
              v2 まではルーティングとレンダリングだけを担う
              <strong>センタースタック</strong>
              のフレームワークでした。Remix 3 は
              <strong>
                データベースからUIまで単一の {'"remix"'} パッケージ
              </strong>
              に同梱し、依存を組み立てずにすぐ開発を始められることを目指しています。
              各機能は独立したパッケージの集合体で、たとえばスキーマ検証を Zod
              に、ORM を Drizzle に差し替えることもできます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-violet-300 rounded-lg p-6 shadow-xs">
              <h4 className="text-lg font-bold mb-3 text-violet-700">
                UI・レンダリング
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・React非依存の独自UIランタイム（Preactフォークベース）</li>
                <li>
                  ・組み込みコンポーネント（Button, Menu, Popover, Combobox,
                  Tabs, Toggle, Context Menu など）
                </li>
                <li>・Web Animations API ベースのアニメーション</li>
                <li>・Frames によるストリーミングUIと部分更新</li>
                <li>・フルスタックHMR（サーバーモジュールも再読み込み）</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-fuchsia-300 rounded-lg p-6 shadow-xs">
              <h4 className="text-lg font-bold mb-3 text-fuchsia-700">
                サーバー・データ
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  ・Request → Response
                  のWeb標準モデル（ルーター、コントローラー、ミドルウェア）
                </li>
                <li>
                  ・ORM・スキーマ検証（<code>remix/data-schema</code>
                  ）・SQLマイグレーションCLI
                </li>
                <li>・認証、セッション、フォーム、アップロード</li>
                <li>・バンドルしないアセット配信（プリロード内蔵）</li>
                <li>
                  ・テスト（Vitest互換）、<code>remix.json</code> による設定
                </li>
                <li>・SPAモード（同じルーター／ミドルウェアのまま）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. コンポーネントモデル */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-violet-500 pb-2">
          3. コンポーネントモデルの変化
        </h2>

        <div className="space-y-8">
          <p className="text-gray-700 leading-relaxed">
            最大の変更点はコンポーネントの書き方です。hooks ではなく
            <strong>「setup関数 + render関数」の命令的モデル</strong>
            を採用し、状態はただのローカル変数、再描画は
            <code>handle.update()</code> で明示的に行います。
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-300">
              <h4 className="text-lg font-bold mb-3 text-cyan-700">
                React（Remix v2）
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>宣言的・フック駆動:</strong>
                </p>
                <pre className="bg-white p-3 rounded-sm text-xs overflow-x-auto">
                  {`function Counter() {
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)
  return (
    <button onClick={inc}>
      Count: {count}
    </button>
  )
}`}
                </pre>
                <ul className="ml-4 space-y-1 text-xs">
                  <li>・状態はフックが管理</li>
                  <li>・依存配列とメモ化の考慮が必要</li>
                  <li>・再描画はランタイムが判断</li>
                </ul>
              </div>
            </div>

            <div className="bg-violet-50 p-5 rounded-lg border border-violet-300">
              <h4 className="text-lg font-bold mb-3 text-violet-700">
                Remix 3
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>命令的・クロージャ駆動:</strong>
                </p>
                <pre className="bg-white p-3 rounded-sm text-xs overflow-x-auto">
                  {`function Counter(handle: Handle) {
  let count = 0
  const inc = () => {
    count++
    handle.update()
  }
  return () => (
    <button mix={on('click', inc)}>
      Count: {count}
    </button>
  )
}`}
                </pre>
                <ul className="ml-4 space-y-1 text-xs">
                  <li>・状態はただのローカル変数</li>
                  <li>・依存配列もメモ化も不要</li>
                  <li>・再描画は明示的に呼び出す</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              mix プロップによる統合
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              React で分散していた <code>onClick</code> / <code>className</code>{' '}
              / <code>ref</code> といった属性は、単一の <code>mix</code>{' '}
              プロップに mixin の配列として渡す形に統合されました。
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs overflow-x-auto">
              {`<button mix={[
  css({ padding: 8 }),
  on('click', handleClick),
  ref(el => buttonEl = el),
  animateEntrance({ /* ... */ }),
]} />`}
            </pre>
            <p className="text-gray-600 text-sm mt-3">
              背景には「React の <code>useEffect</code> の連鎖、React Server
              Components、ハイドレーションの複雑さは人間にも LLM
              にも理解しづらい」という React
              への明確な問題提起があります。一方で、要素が何を担っているかが mix
              配列に隠れて見えにくくなるという指摘もあります。
            </p>
          </div>
        </div>
      </section>

      {/* 4. v2・React Router との関係 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-red-500 pb-2">
          4. Remix v2・React Router との関係
        </h2>

        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-3 text-red-800">
              ⚠️ Remix v2 は EOL
            </h3>
            <p className="text-gray-700 leading-relaxed">
              2026年6月17日の <strong>React Router v8</strong> リリースに伴い、
              <strong>React Router v6 と Remix v2 は End of Life</strong>
              となりました。セキュリティアップデートは提供されません。React
              Router v7 はセキュリティパッチの提供が継続されます。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xs text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                    観点
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                    React Router v7 / v8
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                    Remix 3
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">
                    位置づけ
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    React のメタフレームワーク（v2の正統な後継）
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    独立したフルスタックフレームワーク
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">
                    React 依存
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    ✅ あり（v8 は React 19.2.7+ が必要）
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    ❌ なし（独自ランタイム）
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">
                    v2 からの移行
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    ✅ future flags を全て有効化済みなら依存の差し替えが中心
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    ❌ 移行パスなし（実質的な書き直し）
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">
                    loader / action
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    ✅ そのまま利用可能
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    ❌ コントローラーモデルに置き換え
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-2 font-medium">
                    リリースサイクル
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    年1回のメジャーリリース
                  </td>
                  <td className="border border-gray-300 px-3 py-2">
                    正式版以降は SemVer に準拠
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-3 text-blue-800">
              このサイトの場合（移行済み）
            </h3>
            <p className="text-gray-700 leading-relaxed">
              本サイトは <code>@remix-run/* 2.17.5</code> + React 18
              で構築されていましたが、2026年9月に
              <strong>React Router v8 の Framework Mode</strong>{' '}
              へ移行しました。<code>loader</code> / <code>action</code> /
              ネストルーティングはほぼそのまま移行でき、
              <code>json()</code> の削除と meta の <code>data</code> →{' '}
              <code>loaderData</code> への改名が主な変更点でした。React Router
              v8 は Node 22.22.0+ / React 19.2.7+ / Vite 7+ / ESM only
              が要件です。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 採用判断 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-green-500 pb-2">
          5. 採用判断
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-300">
            <h3 className="text-xl font-semibold mb-4 text-green-800">
              メリット
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>全部入りで依存の選定コストがかからない</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>
                  Web標準に近く、LLMによるコード生成との相性が良いとされる
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>
                  mix プロップによる概念の統合、依存配列やメモ化からの解放
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>アニメーション、popover、メニューが標準で同梱される</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border border-orange-300">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">
              デメリット・リスク
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✕</span>
                <span>
                  Reactエコシステム（Radix UI、shadcn/ui、framer-motion
                  など）が一切使えない
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✕</span>
                <span>
                  ドキュメントが薄く、ソースを読む必要がある場面が多い（RC
                  時点で公式も課題と認識）
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✕</span>
                <span>beta 段階では仮想DOMの再描画バグの報告あり</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✕</span>
                <span>バックグラウンドジョブなど未提供の機能がある</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-600 mr-2">✕</span>
                <span>
                  採用事例・知見の蓄積がこれから。破壊的変更の歴史への懸念も
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-linear-to-r from-violet-50 to-fuchsia-50 p-6 rounded-lg border-l-4 border-violet-500">
          <h3 className="text-xl font-semibold mb-3 text-violet-800">
            推奨スタンス
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-violet-600 mr-2 font-bold">1.</span>
              <span>
                <strong>既存の Remix v2 アプリ:</strong> React Router v7 / v8
                へ移行する。v2 は EOL のため対応は急ぐべき
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 mr-2 font-bold">2.</span>
              <span>
                <strong>新規プロトタイプ・学習用途:</strong> Remix 3
                を試す価値はある
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-violet-600 mr-2 font-bold">3.</span>
              <span>
                <strong>新規の本番プロダクト:</strong>{' '}
                正式リリースと事例の蓄積を待ち、当面は React Router や
                Next.js、TanStack Start といった選択肢を検討する
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. 参考リンク */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b-4 border-gray-400 pb-2">
          6. 参考リンク
        </h2>

        <ul className="space-y-3">
          <li>
            <a
              href="https://remix.run/blog/remix-3-release-candidate"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Remix 3 Release Candidate — 公式ブログ
            </a>
          </li>
          <li>
            <a
              href="https://remix.run/blog/remix-3-beta-preview"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Remix 3 Beta Preview — 公式ブログ
            </a>
          </li>
          <li>
            <a
              href="https://remix.run/blog/react-router-v8"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              React Router v8 — v6 / Remix v2 の EOL 告知
            </a>
          </li>
          <li>
            <a
              href="https://guides.remix.run/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Remix 3 ドキュメント（guides.remix.run）
            </a>
          </li>
          <li>
            <a
              href="https://reactrouter.com/upgrading/remix"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Upgrading from Remix — React Router 公式ガイド
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
