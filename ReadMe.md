# 轮子

## 遇到的问题
* `appendChild(),insertBefore()`插入已经在DOM树中的元素时，会先移除DOM树中的元素，再重新插入。

* `<template>`

    HTML5新元素，可以允许其它类型元素作为其子元素，这意味着可以通过`innerHTML`设置任意HTML DOM字符串。
    
    除此以外，还包含只读的 content 属性，通过它可以读取模板内容。一般来说，可以通过判断 content 属性是否存在来判断浏览器是否支持 <template> 元素。
    
    参考资料：
    
    * [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)
    * [stackoverflow](http://stackoverflow.com/a/35385518/1262580)
    
* `className,classList`

    `className`属性用来读写当前元素节点的class属性。它的值是一个字符串，每个class之间用空格分割。

    `classList`属性则返回一个类似数组的对象，当前元素节点的每个class就是这个对象的一个成员。
    
    `classList`方法：
    ```angular2html
      add()：增加一个class。
      remove()：移除一个class。
      contains()：检查当前元素是否包含某个class。
      toggle()：将某个class移入或移出当前元素。
      item()：返回指定索引位置的class。
      toString()：将class的列表转为字符串。
    ```
