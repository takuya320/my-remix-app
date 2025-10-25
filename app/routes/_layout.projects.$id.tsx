import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

// サンプルプロジェクトデータ（実際のアプリではデータベースから取得）
const projects = [
  {
    id: 1,
    name: 'ECサイト構築',
    description:
      'Remixを使用したモダンなECサイト。商品一覧、カート機能、決済統合を実装。',
    image: '🛒',
    techStack: ['Remix', 'React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    features: ['商品管理', 'ショッピングカート', 'オンライン決済', 'レスポンシブデザイン'],
    status: '完成',
    details: `
      このプロジェクトは、Remixを使用して構築されたフルスタックのECサイトです。
      モダンなユーザーインターフェースと高速なパフォーマンスを両立しています。

      <h3>主な機能</h3>
      <ul>
        <li>商品の一覧表示、検索、フィルタリング</li>
        <li>ショッピングカート機能（追加、削除、数量変更）</li>
        <li>Stripeを使用したセキュアな決済処理</li>
        <li>ユーザー認証とプロフィール管理</li>
        <li>注文履歴の確認</li>
        <li>管理画面での商品管理</li>
      </ul>

      <h3>技術的なハイライト</h3>
      <ul>
        <li>Remixのloaderを使用した効率的なデータフェッチ</li>
        <li>Actionによるフォーム処理とバリデーション</li>
        <li>楽観的UI更新による快適なユーザー体験</li>
        <li>サーバーサイドレンダリングによるSEO対策</li>
        <li>TypeScriptによる型安全な実装</li>
      </ul>
    `,
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    name: 'ブログプラットフォーム',
    description:
      'マークダウンベースのブログシステム。記事作成、編集、公開機能を提供。',
    image: '📝',
    techStack: ['Remix', 'React', 'Prisma', 'PostgreSQL', 'MDX'],
    features: ['MDXサポート', 'タグ分類', 'コメント機能', 'RSS配信'],
    status: '完成',
    details: `
      MDXを使用したリッチなコンテンツ作成が可能なブログプラットフォームです。
      記事の作成、編集、公開までを一貫して管理できます。

      <h3>主な機能</h3>
      <ul>
        <li>MDXによるリッチなコンテンツ作成</li>
        <li>記事のドラフト保存と公開</li>
        <li>タグによる記事分類</li>
        <li>コメント機能とモデレーション</li>
        <li>RSS/Atomフィード配信</li>
        <li>記事の検索とフィルタリング</li>
      </ul>

      <h3>技術的なハイライト</h3>
      <ul>
        <li>Prismaによる型安全なデータベースアクセス</li>
        <li>MDXによるインタラクティブなコンテンツ</li>
        <li>ネストルートを活用した効率的な構造</li>
        <li>エラーバウンダリーによる堅牢なエラーハンドリング</li>
        <li>リソースルートを使用したRSS配信</li>
      </ul>
    `,
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    name: 'タスク管理アプリ',
    description:
      'チーム向けタスク管理ツール。プロジェクト管理、タスク割り当て、進捗追跡。',
    image: '✅',
    techStack: ['Remix', 'React', 'Supabase', 'TypeScript', 'DnD Kit'],
    features: [
      'ドラッグ&ドロップ',
      'リアルタイム更新',
      'チーム管理',
      'ダッシュボード',
    ],
    status: '開発中',
    details: `
      チームでのタスク管理を効率化するアプリケーションです。
      直感的なUIとリアルタイム更新により、スムーズなコラボレーションを実現します。

      <h3>主な機能</h3>
      <ul>
        <li>ドラッグ&ドロップによるタスク移動</li>
        <li>プロジェクトとタスクの階層管理</li>
        <li>チームメンバーへのタスク割り当て</li>
        <li>進捗状況の可視化ダッシュボード</li>
        <li>リアルタイムでの更新通知</li>
        <li>期限管理とリマインダー</li>
      </ul>

      <h3>技術的なハイライト</h3>
      <ul>
        <li>Supabaseによるリアルタイムデータベース</li>
        <li>DnD Kitを使用したドラッグ&ドロップ実装</li>
        <li>楽観的UI更新による即座のフィードバック</li>
        <li>認証とロールベースのアクセス制御</li>
        <li>WebSocketによるリアルタイム通信</li>
      </ul>
    `,
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    name: 'ポートフォリオサイト',
    description: '開発者向けポートフォリオテンプレート。プロジェクト紹介、スキル表示。',
    image: '💼',
    techStack: ['Remix', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: ['アニメーション', 'ダークモード', 'コンタクトフォーム', 'ブログ統合'],
    status: '完成',
    details: `
      開発者向けの美しいポートフォリオサイトテンプレートです。
      カスタマイズが容易で、すぐに使い始められます。

      <h3>主な機能</h3>
      <ul>
        <li>滑らかなアニメーション効果</li>
        <li>ダークモード/ライトモードの切り替え</li>
        <li>プロジェクト紹介セクション</li>
        <li>スキルセットの可視化</li>
        <li>コンタクトフォーム</li>
        <li>ブログ統合</li>
      </ul>

      <h3>技術的なハイライト</h3>
      <ul>
        <li>Framer Motionによる洗練されたアニメーション</li>
        <li>Tailwind CSSのダークモードサポート</li>
        <li>レスポンシブデザイン</li>
        <li>SEO最適化</li>
        <li>高速なページ遷移</li>
      </ul>
    `,
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    name: 'リアルタイムチャット',
    description: 'WebSocketを使用したリアルタイムチャットアプリケーション。',
    image: '💬',
    techStack: ['Remix', 'React', 'WebSocket', 'Redis', 'Node.js'],
    features: [
      'リアルタイムメッセージング',
      'ルーム機能',
      'ファイル共有',
      'オンライン状態表示',
    ],
    status: '開発中',
    details: `
      WebSocketを活用したリアルタイムチャットアプリケーションです。
      複数のルームでのコミュニケーションをサポートします。

      <h3>主な機能</h3>
      <ul>
        <li>リアルタイムメッセージング</li>
        <li>複数チャットルームのサポート</li>
        <li>ファイルとメディアの共有</li>
        <li>オンライン/オフライン状態表示</li>
        <li>メッセージの既読管理</li>
        <li>通知機能</li>
      </ul>

      <h3>技術的なハイライト</h3>
      <ul>
        <li>WebSocketによる双方向通信</li>
        <li>Redisを使用したセッション管理</li>
        <li>効率的なメッセージキャッシング</li>
        <li>ファイルアップロードとストレージ管理</li>
        <li>スケーラブルなアーキテクチャ</li>
      </ul>
    `,
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 6,
    name: 'ダッシュボード',
    description: 'データビジュアライゼーションダッシュボード。チャート、グラフ表示。',
    image: '📊',
    techStack: ['Remix', 'React', 'Chart.js', 'D3.js', 'PostgreSQL'],
    features: [
      '各種チャート',
      'データフィルタリング',
      'エクスポート機能',
      'リアルタイム更新',
    ],
    status: '完成',
    details: `
      ビジネスデータを可視化するダッシュボードアプリケーションです。
      様々なチャートとグラフでデータを分かりやすく表示します。

      <h3>主な機能</h3>
      <ul>
        <li>多様なチャート（棒グラフ、折れ線グラフ、円グラフなど）</li>
        <li>インタラクティブなデータ探索</li>
        <li>カスタマイズ可能なダッシュボード</li>
        <li>データフィルタリングと集計</li>
        <li>CSVエクスポート機能</li>
        <li>リアルタイムデータ更新</li>
      </ul>

      <h3>技術的なハイライト</h3>
      <ul>
        <li>Chart.jsとD3.jsによる高度なデータビジュアライゼーション</li>
        <li>効率的なデータクエリとキャッシング</li>
        <li>レスポンシブなチャート表示</li>
        <li>WebSocketによるリアルタイム更新</li>
        <li>パフォーマンス最適化</li>
      </ul>
    `,
    demoUrl: '#',
    githubUrl: '#',
  },
]

export async function loader({ params }: LoaderFunctionArgs) {
  const id = Number(params.id)
  const project = projects.find((p) => p.id === id)

  if (!project) {
    throw new Response('Not Found', { status: 404 })
  }

  return json({ project })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: 'プロジェクトが見つかりません' }]
  }

  return [
    { title: `${data.project.name} - Remix情報ページ` },
    { name: 'description', content: data.project.description },
  ]
}

export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/projects"
          className="text-blue-600 hover:text-blue-700 mb-6 inline-block"
        >
          ← プロジェクト一覧に戻る
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-12 text-center">
            <div className="text-8xl mb-4">{project.image}</div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {project.name}
            </h1>
            <span
              className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                project.status === '完成'
                  ? 'bg-green-500 text-white'
                  : 'bg-yellow-500 text-white'
              }`}
            >
              {project.status}
            </span>
          </div>

          <div className="p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                概要
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                技術スタック
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                主要機能
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center"
                  >
                    <span className="text-blue-600 mr-2 text-xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                詳細情報
              </h2>
              <div
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: project.details }}
                style={{ lineHeight: '1.8' }}
              />
            </section>

            <section className="mb-8">
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.demoUrl}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  デモを見る
                </a>
                <a
                  href={project.githubUrl}
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  GitHubで見る
                </a>
              </div>
            </section>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-xl font-semibold mb-3 text-blue-800">
                動的ルーティングについて
              </h2>
              <p className="text-gray-700 mb-2">
                このページのURL:{' '}
                <code className="bg-white px-2 py-1 rounded text-sm">
                  /projects/{project.id}
                </code>
              </p>
              <p className="text-gray-700">
                URLの <code className="bg-white px-2 py-1 rounded text-sm">$id</code>{' '}
                部分は動的パラメータです。Remixは自動的にこの値を抽出し、Loaderに渡します。
                LoaderはこのIDを使用してデータベースから該当するプロジェクトを取得し、
                同じコンポーネントで異なるプロジェクトの詳細を表示できます。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            他のプロジェクトを見る
          </Link>
        </div>
      </div>
    </div>
  )
}

// エラーバウンダリー（プロジェクトが見つからない場合）
export function ErrorBoundary() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-600">
          プロジェクトが見つかりません
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          お探しのプロジェクトは存在しないか、削除された可能性があります。
        </p>
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          プロジェクト一覧に戻る
        </Link>
      </div>
    </div>
  )
}
