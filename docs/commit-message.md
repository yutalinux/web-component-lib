# コミットメッセージのルール

## フォーマット

一行目: `<Prefix>: #<Issue Number> <Title>`
二行目は何も書かない
三行目: `<Detail>`

`<Issue Number>`は Issue に対してのプルリクの時のみ

## Prefix

具体的には以下の単語を使う

- feat
- fix
- refactor
- style
- test
- docs
- chore
- release

### feat

Feature の略で機能の追加、変更など (テストなどのアプリの実行に直接関係ない部分を除く)

#### ファイルの追加

フォーマット: `<filename>を追加` `<filename>を削除`

例: `feat: "biome.json"を追加`

#### ライブラリの削除

フォーマット: `<filename>を追加` `<filename>を削除`

例: `feat: "@storybook/test"を削除`

#### 仕様変更

ファーマット: `<filename>の仕様を変更`

例: `feat: Typographyの仕様を変更`

### fix

不具合の修正 (feat と同じようにテストなどを除く)

#### 不具合

フォーマット: `<filename>の不具合を修正`

例: `fix: TextBoxの不具合を修正`

### refactor

リファクタリングを目的とした修正

### style

フォーマットなどコードスタイルの修正

### test

test コードの追加、修正

### docs

ドキュメントの更新

### chore

タスクファイルなどプロダクションに直接影響がない修正

### release

リリースするとき

#### リリース

フォーマット: `<version>`

例: `release: v1.0.0`

## ファイル名、ライブラリ名など

略したりしない場合は""で囲む

それ以外は囲まない

## 参考文献

[Git のコミットメッセージの書き方（2023 年 ver.）](https://zenn.dev/itosho/articles/git-commit-message-2023)
