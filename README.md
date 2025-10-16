# Organelle Therapeutics Tracker — Starter

このフォルダは、**GitHub Pages × Jekyll（Minimal Mistakes）**で今すぐ公開できる最小スターターです。

## 1) GitHubにアップロード
1. GitHubで新しい公開リポジトリを作成（例: `organelle-therapeutics`）。
2. このZIPを解凍し、中身（フォルダ直下のファイル群）を**そのまま**リポジトリ直下にアップロード。
3. `Commit`。

## 2) GitHub Pages を有効化
- **Settings → Pages**  
  Source: **Deploy from a branch** / Branch: **main** / Folder: **/** を選択して保存。  
  数十秒後にサイトが公開されます。URLは `https://<あなたのユーザー名>.github.io/<リポジトリ名>/`。

## 3) 記事の書き方（100%ブラウザでOK）
- `/_posts/` に **`YYYY-MM-DD-スラッグ.md`** という名前で新規ファイルを作成。  
- 上部に**YAMLフロントマター**、本文は**Markdown**で書きます（テンプレは `_posts/` のサンプルを参照）。
- カテゴリ＝**オルガネラ**（例: `["Mitochondria"]`）、タグ＝**モダリティ/段階/企業/地域** で整理。

## 4) よく使うFront Matter
```yaml
---
title: "タイトル"
description: "短い説明（検索・SNS用）"
date: 2025-10-17 09:00:00 +0900
last_modified_at: 2025-10-17 10:00:00 +0900
categories: ["Mitochondria"]
tags: ["Peptide", "Phase 3", "Stealth BioTherapeutics", "US"]
layout: single
author_profile: true
toc: true
toc_sticky: true
---
```

## 5) カテゴリ／タグの索引
- `/categories/` と `/tags/` ページを用意済み。記事に付けたカテゴリ・タグが自動でまとまります。

## 6) カスタマイズ
- `_config.yml` の `title`/`description`/`author`/`minimal_mistakes_skin` を編集。
- ナビは `/_data/navigation.yml`。メニューの追加・順序変更が可能です。

## 7) トラブルシュート
- 設定直後はキャッシュで表示に少し時間がかかることがあります。少し待って再読込。
- 404のとき：PagesのSource/Branch/Folder設定を再確認。`main` ブランチ直下にファイルがあるかチェック。

Happy writing! ✍️
