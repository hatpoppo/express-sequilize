express と sequelize を連携させる最小のアプリケーションを作成

[こちら](https://github.com/sequelize/express-example)を参考に 2020/01/05 に試してみました。

### express インストール

```
npx express-generator
npm install
```

### sequelize インストール

```
npm i sequelize sequelize-cli
npx sequelize-cli init
npm i pg pg-hstore
```

### sequelize-cli でモデル作成

```
npx sequelize-cli model:generate --name User --attributes username:string
npx sequelize-cli model:generate --name Task --attributes title:string
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
