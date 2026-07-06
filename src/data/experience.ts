export interface ExperienceEntry {
  company: string;
  period: string;
  role: string;
  project: string;
  stack: string[];
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: '虎の穴ラボ株式会社',
    period: '2025年8月 – 現在',
    role: 'バックエンドエンジニア（テックリード）',
    project: 'ECサイトの改修',
    stack: ['Java SE 8', 'Kotlin', 'Spring（独自フレームワーク）', 'Oracle DB', 'PostgreSQL', 'MySQL（MariaDB）', 'CentOS'],
    highlights: [
      '新決済手段の追加対応',
      'CI/CDフロー改善：Jenkinsでのデプロイ時間を3時間から1時間に短縮',
      '生成AIを活用したコンテキストエンジニアリングプロジェクトを始動',
      '決済タイミング変更に伴う会計勘定科目の精査を事業部と調整し、3ヶ月停滞していた課題を2週間で解決',
    ],
  },
  {
    company: '虎の穴ラボ株式会社',
    period: '2023年4月 – 2025年8月',
    role: 'バックエンドエンジニア（エンジニアリングマネージャー）',
    project: '小規模サービス群（6プロダクト程度）の運用・保守チームマネジメント',
    stack: ['Ruby', 'Ruby on Rails', 'MySQL', 'AWS EC2', 'ConoHa'],
    highlights: [
      'CtoCプラットフォーム開発と並行してチームマネージャーを担当',
      '業務内容の棚卸しとチーム定義付けを行い採用を強化（内定0名/年 → 翌年2名）',
      '技術軸の昇格ラインを明確化するキャリアラダーを作成',
      '各言語で脆弱性のある簡易Webサイトを実装し、セキュアプログラミングの練習教材として活用',
    ],
  },
  {
    company: '虎の穴ラボ株式会社',
    period: '2020年9月 – 2025年8月',
    role: 'フロントエンドエンジニア（リードエンジニア → エンジニアリングマネージャー）',
    project: 'CtoC向け新規ファンクラブプラットフォームの立ち上げ・運用',
    stack: ['Ruby 2.6→3.3', 'Ruby on Rails 5.2→7.2', 'MySQL', 'AWS Fargate', 'Vue2', 'Nuxt2'],
    highlights: [
      '立ち上げ期はリードエンジニアとしてバックエンド・フロントエンド・インフラを一気通貫で担当し、2020年12月のリリース目標を達成',
      '立ち上げ後はエンジニアリングマネージャーとして、VTuber向け施策・改修を推進し売上を1年で約5倍に成長させる',
      '支援金額の目標管理機能、配信スケジュール管理機能、DC3（コンテンツ流通基盤ソリューション）連携プロジェクトを完遂',
      'Vue/Nuxt未経験メンバー向けにコンポーネント分割・双方向バインディングの基礎資料を作成',
    ],
  },
  {
    company: '虎の穴ラボ株式会社',
    period: '2020年5月 – 2020年9月',
    role: 'バックエンドエンジニア',
    project: 'CtoCファンクラブプラットフォームの改修',
    stack: ['Ruby 2.6', 'Ruby on Rails 5.2', 'MySQL', 'Google Cloud'],
    highlights: ['Ruby on Rails未経験からキャッチアップし、決済ロジックの修正を実施'],
  },
  {
    company: '虎の穴ラボ株式会社',
    period: '2019年8月 – 2020年5月',
    role: 'バックエンドエンジニア',
    project: 'ECサイトの改修',
    stack: ['Java SE 8', 'Kotlin', 'Spring（独自フレームワーク）', 'Oracle DB', 'PostgreSQL', 'MySQL（MariaDB）', 'CentOS'],
    highlights: ['請求書発行システムの構築', '通販サイトの有料会員サービスの設計・製造'],
  },
  {
    company: 'ヒューマンネットワーク株式会社（現：株式会社エクソナ）',
    period: '2015年4月 – 2019年7月',
    role: 'バックエンドエンジニア（客先常駐 / 派遣・準委任契約、大手SIer案件）',
    project: '家賃保証会社向け管理システム開発',
    stack: ['Java SE 11', 'Doma2'],
    highlights: ['チームでの役割: リードエンジニア、開発基盤構築', '担当フェーズ: 基本設計・詳細設計・実装'],
  },
  {
    company: 'ヒューマンネットワーク株式会社（現：株式会社エクソナ）',
    period: '2015年4月 – 2019年7月',
    role: 'バックエンドエンジニア（客先常駐 / 派遣・準委任契約、大手SIer案件）',
    project: '石油販売企業向け生産管理システム開発',
    stack: ['Java SE 8', '独自フレームワーク'],
    highlights: ['チームでの役割: リードエンジニア、開発基盤構築', '担当フェーズ: 基本設計・詳細設計・実装・テスト'],
  },
  {
    company: 'ヒューマンネットワーク株式会社（現：株式会社エクソナ）',
    period: '2015年4月 – 2019年7月',
    role: 'バックエンドエンジニア（客先常駐 / 派遣・準委任契約、大手SIer案件）',
    project: '広告代理店向け請求書発行システム開発',
    stack: ['Java SE 8', 'Spring'],
    highlights: ['チームでの役割: リードエンジニア', '担当フェーズ: 基本設計・詳細設計・実装・テスト・リリース'],
  },
  {
    company: 'ヒューマンネットワーク株式会社（現：株式会社エクソナ）',
    period: '2015年4月 – 2019年7月',
    role: 'バックエンドエンジニア（客先常駐 / 派遣・準委任契約、大手SIer案件）',
    project: 'オートリース企業向け顧客情報管理システム開発',
    stack: ['Java SE 8', 'Java EE 6', 'JSF', 'HiRDB', 'Cosminexus'],
    highlights: ['チームでの役割: プログラマ → リードエンジニア', '担当フェーズ: 基本設計・詳細設計・実装・テスト・リリース'],
  },
];
