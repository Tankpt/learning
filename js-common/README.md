写一些通过的js的方法

##element##
1. addCLass(_node,_className)
2. removeClass(_node,_className)
3. hasClass(_node,_className)
4. getByClassName(_node,className)
5. getClass(_node,className)  iterate by node
6. getParent(_node,n)
7. getSibling(_node,n)
8. getChildren(_node,n)
9. dataset(_node,key,value)
10. textContent(_node,value)
11. outertHtml(_node,value)
12. getStyle(_node,cssName)
13. append(_node,_html)
14. prepend(_node,_html)
15. insertBefore(_node,_html)
16. insertAfter(_node,_html)


##event##
1. addEvent(_node,_event,_iterate)
2. removeEvent(_node,_event,_iterate)
3. dispatchEvent(_node,_event)
4. stopPropagation(_event)
5. preventDefault(_event)
6. onready

##util##

###Cookie###
1. getCookie()
2, setCookie(key,value)
3. deleteCookie(key)
4. clearCookie()