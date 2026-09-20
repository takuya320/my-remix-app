import type { Project } from '~/types/project.types'

export const projects: Project[] = [
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
