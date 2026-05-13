# ゴールデンBesiegeタイム

**#ゴールデンBesiegeタイム / #FridayBesiege** の企画告知サイトです。  
毎週金曜日のBesiege企画「Besiegeをやろう大作戦」と「SNSジャック大作戦」を紹介しています。

## 技術スタック

- [Astro](https://astro.build/) v4 — 静的サイトジェネレーター
- CSS (Scoped + Global) — 外部UIライブラリなし
- Google Fonts — [Bangers](https://fonts.google.com/specimen/Bangers) / [Permanent Marker](https://fonts.google.com/specimen/Permanent+Marker) / [Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)
- GitHub Actions — GitHub Pages への自動デプロイ

## ローカル開発

```bash
npm install
npm run dev       # http://localhost:4321 で起動
npm run build     # dist/ に静的ファイルを生成
npm run preview   # ビルド結果をローカルで確認
```

## ディレクトリ構成

```
src/
├── layouts/
│   └── Layout.astro          # HTMLテンプレート
├── pages/
│   └── index.astro           # エントリーポイント（全セクションを組み立て）
├── components/
│   ├── Nav.astro             # 固定ナビゲーション（スクロール連動・モバイル対応）
│   ├── Hero.astro            # ファーストビュー（回転ギア・スプレードット）
│   ├── NextEvent.astro       # 次回開催リンク
│   ├── PlanOverview.astro    # 企画概要（2カードグリッド）
│   ├── MultiPlan.astro       # Besiegeをやろう大作戦 詳細
│   ├── SNSPlan.astro         # SNSジャック大作戦 詳細
│   ├── Tags.astro            # ハッシュタグ説明・SNS別参加方法
│   ├── Participation.astro   # 参加ルール
│   └── Footer.astro          # フッターCTA
└── styles/
    └── global.css            # CSS変数・共通スタイル
public/
└── favicon.svg               # ギアモチーフのSVGファビコン
.github/workflows/
└── deploy.yml                # GitHub Pages デプロイワークフロー
```

## デプロイ

`main` ブランチへのプッシュで GitHub Actions が自動的にビルド・デプロイします。

初回のみ、GitHubリポジトリの **Settings → Pages → Source** を `GitHub Actions` に設定してください。

```bash
git push origin main
```

## コンテンツの更新

### 次回開催リンクの変更

`src/components/NextEvent.astro` の `href="#"` を実際のURLに書き換えてください。

```astro
<a href="https://..." class="event-link" target="_blank" rel="noopener noreferrer">
```

### 本文テキストの変更

各セクションは対応するコンポーネントファイルに分かれています。  
テキストを変更したいセクションのコンポーネントを直接編集してください。

## ライセンス

使用フォント (Google Fonts) は各フォントのライセンスに従います。
