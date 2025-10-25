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
    features: [
      '商品管理',
      'ショッピングカート',
      'オンライン決済',
      'レスポンシブデザイン',
    ],
    status: '完成',
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
  },
  {
    id: 4,
    name: 'ポートフォリオサイト',
    description:
      '開発者向けポートフォリオテンプレート。プロジェクト紹介、スキル表示。',
    image: '💼',
    techStack: ['Remix', 'React', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'アニメーション',
      'ダークモード',
      'コンタクトフォーム',
      'ブログ統合',
    ],
    status: '完成',
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
  },
  {
    id: 6,
    name: 'ダッシュボード',
    description:
      'データビジュアライゼーションダッシュボード。チャート、グラフ表示。',
    image: '📊',
    techStack: ['Remix', 'React', 'Chart.js', 'D3.js', 'PostgreSQL'],
    features: [
      '各種チャート',
      'データフィルタリング',
      'エクスポート機能',
      'リアルタイム更新',
    ],
    status: '完成',
  },
]

export async function loader({ request }: LoaderFunctionArgs) {
  // 実際のアプリでは、検索やフィルタリングのクエリパラメータを処理
  return json({ projects })
}

export const meta: MetaFunction = () => {
  return [
    { title: 'プロジェクト - Remix情報ページ' },
    {
      name: 'description',
      content: 'Remixを使用した実装例やサンプルプロジェクトの紹介。',
    },
  ]
}

export default function Projects() {
  const { projects } = useLoaderData<typeof loader>()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">プロジェクト</h1>
        <p className="text-lg text-gray-700">
          Remixを使用した実装例やサンプルプロジェクトを紹介します。
          各プロジェクトの技術スタック、機能、実装の詳細をご覧ください。
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow hover:border-blue-300"
          >
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-center">
              <div className="text-6xl mb-2">{project.image}</div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-900">
                  {project.name}
                </h2>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    project.status === '完成'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="text-blue-600 text-sm font-semibold hover:text-blue-700">
                詳細を見る →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          動的ルーティングのデモ
        </h2>
        <p className="text-gray-700 mb-3">
          このプロジェクト一覧ページは、Remixの動的ルーティング機能を示しています。
          各プロジェクトは{' '}
          <code className="bg-white px-2 py-1 rounded">/projects/$id</code>{' '}
          パターンでアクセスできます。
        </p>
        <p className="text-gray-700 mb-4">
          プロジェクトカードをクリックすると、IDを使用して動的に生成されたページに遷移します。
          これにより、1つのコンポーネントで複数のプロジェクト詳細ページを処理できます。
        </p>
        <div className="bg-white p-4 rounded border border-blue-300">
          <h3 className="font-semibold mb-2 text-sm text-gray-700">
            ルーティング構造：
          </h3>
          <ul className="space-y-1 text-sm text-gray-600 font-mono">
            <li>
              <code>/projects</code> → プロジェクト一覧（このページ）
            </li>
            <li>
              <code>/projects/1</code> → プロジェクトID: 1の詳細
            </li>
            <li>
              <code>/projects/2</code> → プロジェクトID: 2の詳細
            </li>
            <li>
              <code>/projects/[任意のID]</code> → 該当プロジェクトの詳細
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
