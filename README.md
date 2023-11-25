# unit-conversion

- 快捷的单位转换工具,对 Number 原型扩展,实现快速使用

## 日志

- 时间
- 存储容量
- 长度（公制、市制、英制）

```bash
npm install @godcount/unit-conversion
```

## 用法

- 只需要全局导入

### 导入例子

- 导入全部

```js
import "@godcount/unit-conversion";
```

- 使用类

```js
import { DurationUnit } from "@godcount/unit-conversion";
```

- （typescript）全局类型提示

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["@godcount/unit-conversion"]
  }
}
```

# 使用例子

## 转换时间

- 返回毫秒

```js

const duration = 180;
duration.toDuration("s").ms;
duration.toDuration("s").min;
...
```

## 转换存储容量

- 返回兆

```js
const byte = 1024;
byte.toStorage("byte").m;
```

## 转换长度

- 返回厘米、毫、码

```js
const nm = 100;
nm.toLength("nm")
    .cm.toLength("cm")
    .hao.toLength("hao").yd;
```
