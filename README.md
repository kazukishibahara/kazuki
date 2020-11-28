# チームホットパイ
Web IoT Makers Challenge チームE(ホットパイ)用開発リポジトリ

## 環境構成
docker
docker-compose


## 環境構築
### dockerのインストール
参考サイト
https://qiita.com/ksh-fthr/items/6b1242c010fac7395a45

***docker-composeの起動***
```
docker-compose up -d --build
```

***docker-composeのログ確認***
```
docker-compose logs -f
```

***docker-composeの停止***
```
docker-compose down
```

## docker-composeで起動したwebappの確認
webブラウザから「http://localhost」で確認可能

## パラメータ送信の確認
ブラウザ上で簡単にGETの確認
http://localhost?test1=test1&test2=test2&test3=trst3

などで確認可能。
たぶんPOSTでもそのまま確認できると思うけど未検証。
