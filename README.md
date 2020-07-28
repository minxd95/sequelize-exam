# sequelize-exam

씨퀄라이즈 연습

## 필요 모듈

mysql2 sequelize sequelize-cli sequelize-auto

sequelize-auto : 기존 DB의 스키마를 모델로 자동 정의해주는 모듈

코드 :

```javascript
/* 코드생략 */
import SequelizeAuto from "sequelize-auto";
import path from "path";

/* 코드생략 */

const env = process.env.NODE_ENV || "development";
// 환경변수 NODE_ENV를 "production"으로 정의하면 설정파일에서 production 객체를 가져옴
const config = require(path.join(__dirname + "/config/sequelize.json"))[env];
// 설정파일의 env 객체 가져옴

const auto = new SequelizeAuto(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: "3306",
    dialect: config.dialect,
    additional: {
      timestamps: false, // 기존 스키마로 모듈을 정의하는데 왜 필요한지??
    },
  }

auto.run((err) => { // 모델 정의 실행
  if (err) throw err;
  console.log(auto.tables);
  console.log(auto.foreignKeys);
});

/* 코드생략 */
```

## 모델 사용하기

```javascript
/* 코드생략 */
import { t_list } from "./models";
// models 폴더의 index.js를 읽어온 결과에서 t_list 객체를 불러옴

/* 코드생략 */

app.get("/", async (req, res, next) => {
  // 모델들은 promise를 반환하므로 async/await 으로 비동기처리 가능
  try {
    const list = await t_list.findAll(); // SELECT *
    res.send(list);
  } catch (err) {
    next(err); // 에러처리 라우터
  }
});

/* 코드생략 */
```
