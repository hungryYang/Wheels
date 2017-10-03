let dom = {
    //查询元素位置
    index:function(element){
        let childNodes = element.parentNode.children
        for (let index = 0;index<childNodes.length;index++){
            if(element === childNodes[index]){
                return index
            }
        }
        return -1
    },
    //尾部插入元素数组
    append:function(parentNode,childrenNodes){
        //如果传进的子元素不为数组  则变成数组
        if(childrenNodes.length === undefined){
            childrenNodes = [childrenNodes]
        }

        for(let index = 0;index < childrenNodes.length;index++){
            parentNode.appendChild(childrenNodes[index])
        }

        return parentNode
    },
    //头部插入元素数组
    prepend:function(parentNode,childrenNodes){
        if(childrenNodes.length === undefined){
            childrenNodes = [childrenNodes]
        }

        for(let index = 0;index < childrenNodes.length;index++){
            if(parentNode.firstChild){
                //如果要插入的元素已经在DOM树里 那么该元素首先会被移除
                parentNode.insertBefore(childrenNodes[index],parentNode.firstChild)
            }else{
                //如果要插入的元素已经在DOM树里 那么该元素首先会被移除
                parentNode.appendChild(childrenNodes[index])
            }
        }

        return parentNode
    },
    //http://stackoverflow.com/a/35385518/1262580
    //https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template
    create:function(html,children){
        var template = document.createElement('template')
        template.innerHTML = html.trim()
        let node = template.content.firstChild
        if (children){
            dom.append(node,children)
        }

        return node
    }
}