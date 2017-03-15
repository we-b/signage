# 運用（コンテンツ作成）

- https://github.com/we-b/signage   
  サイネージのリポジトリ
- https://we-b.github.io/signage/  
   表示しているURL

## 環境構築
[Middleman: インストール](https://middlemanapp.com/jp/basics/install/)
こちらを参考にして、middleman の環境を構築して置いてください。

`middleman s` でサーバーが立ち上がって、 http://localhost:4567/ でアクセスできるようになったらOK

## 上部コンテンツ変更
`master` branch の `/source/_shard/_main.html.haml`( https://github.com/we-b/signage/blob/master/source/shared/_main.html.haml ) が中身です。
基本的には画像を入れます。

`width:  3437px;`
`height: 4832px;`
参考：https://raw.githubusercontent.com/we-b/signage/master/source/images/01.div.png

## 変更後
```
$ git add .
$ git commit -m 'commit message'
$ git push origin master
```

## デプロイ
```
$ middleman b //build
$ middleman d //deploy
```

これで gh-pages ブランチにデプロイ完了です。
