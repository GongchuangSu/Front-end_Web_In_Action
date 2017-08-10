# 侧栏工具条开发(ToolBar)
通过以下几种方式实现侧栏工具条的开发
- 使用背景图片的方式
- 使用图标字体的方式
- 使用before和after伪类的方式

### 使用背景图片的方式(CSS精灵)
优缺点及兼容性
- HTML结构简单
- 兼容性良好，可以兼容到IE6
- 使用了大量图片，对性能有一定的影响，并且不利于修改

### 使用图标字体的方式
优缺点及兼容性
- 避免了图片的使用，节约了性能，并且修改方便
- HTML结构稍显复杂
- 不兼容IE6和IE7

### 使用before和after伪类的方式
优缺点及兼容性
- 避免了图片的使用，节约了性能，并且修改方便
- HTML结构简单，但CSS稍显复杂
- 不兼容IE6和IE7

# 涉及到的知识点
## SASS
1、 嵌套
```
// 嵌套格式
ul {
    li {
        a
    }
    ...
}

// 常规格式
ul li a {

}
```

2、 `$`变量：当某个值需要经常使用时，可将其定义为一个变量
```
$toolbar-size: 52px
```

3、 `@mixin`函数名(参数)：将部分代码进行封装，调用时根据传递参数的不同，达到不同的效果
```
@mixin opacity($opacity){
    opacity： $opacity;
    filter: alpha(opacity=$opacity * 100);
}
```

4、 `@import`：引入其他sass文件
```
@import "toolbar"
```

5、 `@extend`：继承其它已有代码
```
.box {
    ...
    ...
    ...
}

.box2 {
    @extend .box;
}
```

## RequireJS
1、 `requirejs.config`：配置requirejs
```
requirejs.config({
    paths: {
        jquery: 'jquery-1.11.3.min'
    }
});
```

2、 `requirejs`：加载模块
```
requirejs(['jquery', 'backtop'], function($, backtop){
    $('#backTop').backtop({
        mode: 'move'
    });
});
```

3、 `define`：定义模块
```
define(['jquery', 'scrollto'], function ($, scrollto){

});
```

## CSS3实现简单的动画效果
1、 过渡效果`transition`
```
transition: background-position 1s;
```

2、 2D变换`transform`
```
transform-origin(right bottom)); // 变换的基准点
transform: scale(0.01);
```

# 参考资料
[侧栏工具条开发(视频教程)](http://www.imooc.com/learn/425)