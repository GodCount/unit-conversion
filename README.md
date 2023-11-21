# unit-conversion

- 快捷的单位转换工具,对Number原型扩展,实现快速使用

## 日志
 
 - 实现时间,存储容量,单位转换



``` bash
npm install @god-count/unit-conversion
```

## 用法

 - 只需要全局导入

### 导入例子

- 导入全部

``` js
    import "@god-count/unit-conversion"
```

- 使用类

``` js
    import { DurationUnit } from "@god-count/unit-conversion"
``` 

# 使用例子

## 转换时间

- 返回毫秒

``` js

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
