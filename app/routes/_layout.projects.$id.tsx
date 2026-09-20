import type { MetaFunction, LoaderFunctionArgs } from 'react-router'
import { Link, useLoaderData } from 'react-router'

import { projects } from '~/data/projects'
import { findProjectById } from '~/utils/content'

export async function loader({ params }: LoaderFunctionArgs) {
  const project = findProjectById(projects, params.id)

  if (!project) {
    throw new Response('Not Found', { status: 404 })
  }

  return { project }
}

export const meta: MetaFunction<typeof loader> = ({ loaderData }) => {
  if (!loaderData) {
    return [{ title: 'プロジェクトが見つかりません' }]
  }

  return [
    { title: `${loaderData.project.name} - Remix情報ページ` },
    { name: 'description', content: loaderData.project.description },
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
          <div className="bg-linear-to-br from-blue-500 to-blue-600 p-12 text-center">
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
                <code className="bg-white px-2 py-1 rounded-sm text-sm">
                  /projects/{project.id}
                </code>
              </p>
              <p className="text-gray-700">
                URLの{' '}
                <code className="bg-white px-2 py-1 rounded-sm text-sm">
                  $id
                </code>{' '}
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
