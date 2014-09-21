(function (window) {
    var _e ={};/* cope with the node */

    var ELEMENT_NODE = 1;

    /*
    * getElementsByClass
    * ==  可以添加支持多个class的功能==
    * */
    _e._$getByClassName = function(_node,className){
        if(!_node.getElementsByClassName){
            return _node.getElementsByClassName(className);
        }else{
            var _classElements = [],
                allElements = _node.getElementsByTagName("*"),
                _searchClass = className.split(" ");

            for(var i= 0,len=allElements.length;i<len;i++){
                var tmpClass = allElements[i].className,
                    key = 1;

                for(var j= 0,len2=_searchClass.length;j<len2;j++){
                    if(tmpClass.indexOf(_searchClass[j])==-1){
                        key = 0;
                        break;
                    }
                }
                if(key == 1){
                    _classElements.push(allElements[i]);
                }
            }

            return _classElements;
        }
    };

    _e._$getClass = function(_node,className){
        var _classElements = [],
            _searchClass = className.split(" ");
        _e._$$iterateClass(_node,_searchClass,_classElements);

        return _classElements;
    };

    _e._$$iterateClass = function(_node,_searchClass,_array){
        var key = 1,
            nodeClass = _node.className;
        for(var i= 0,len=_searchClass.length;i<len;i++){
            if(nodeClass.indexOf(_searchClass[i])==-1){
                key = 0;
                break;
            }
        }
        if(key ==1 ){
            _array.push(_node);
        }
        /*deal with the children*/
        var childrenList = [];
        if(_node.children){
            childrenList = _node.children;
        }else{
            var tmpList = _node.childNodes;
            for(var j= 0,len1= tmpList.length;j<len2;j++){
                if(tmpList[j].nodeType==ELEMENT_NODE){
                    childrenList.push(tmpList[j]);
                }
            }
        }
        for(var z= 0,len3=childrenList.length;z<len3;z++){
            _e.__$iterateClass(childrenList[z],_searchClass,_array);
        }
    };

    /*
    * add a _className 
    */
    _e._$addClass = function(_node ,_className){
        try{
            if(!_node || _node.nodeType != ELEMENT_NODE) throw new Error("Invalid empty node");
            if(!!_node.className){
                _node.className =  _node.className+" "+_className;
            }else{
                _node.className = _className;
            }           
        }catch(err){
            console.log(err.message);
        }
    };

    /*
    * search a class
    *
    *return bool [yes 1  no 0s]
    */
    _e._$hasClass = function(_node,_className){
        try{
            if(!_node || _node.nodeType != ELEMENT_NODE) throw new Error("Invalid empty node");
            
            var _searchList = _className.split(" "),
                _classList = _node.className.split(" "),
                _len1 = _searchList.length,
                _len2 = _classList.length,
                _gkey=1;

            for(var i = 0;i < _len1 ; i++){
                var _tmpClass = _searchList[i],
                    _tkey = 0;
                for(var j=0 ; j<_len2;j++){
                    if(_tmpClass === _classList[j]){
                        _tkey =1 ;
                        break;
                    }
                }
                _gkey = _gkey && _tkey;
            }

            return _gkey;
        }catch(err){
            console.log(err.message);
        }
    };

    /*
    *remove a class
    *
    */
    _e._$removeClass = function(_node,_className){
        try{
            if(!_node || _node.nodeType != ELEMENT_NODE) {
                throw new Error("Invalid empty node");
            }
            var _searchList = _className.split(" "),
                _classList = _node.className.split(" "),
                _len1 = _searchList.length,
                _len3 = _len2 = _classList.length;

            for(var i = 0;i < _len1 ; i++){
                var _tmpClass = _searchList[i];
                for(var j=0 ; j<_len2;j++){
                    if(_tmpClass === _classList[j]){
                        _classList.splice(j,1);
                        j--;
                        _len2 --;
                        break;
                    }
                }
            }
            if(_len3!=_len2){
                _node.className = _classList.join(" ");
            }
        }catch(err){
            console.log(err.message);
        }
    };

    /*
    * return the nth parent
    */
    _e._$getParent = function (_node,n){
        if(!n){
           n = 1;
        }
        while(n--&&_node){
            _node = _node.parentNode;
        }
        if(!_node && _node.nodeType !=ELEMENT_NODE) return null;
        return _node;
    };

    /*
     *return the nth silbing
     */
   _e._$getSibling = function (_node ,n) {
       if(!n) n=0;
       while(_node && n!=0){
            if(n>0) {
                if (_node.nextElementSibling) {
                    _node = _node.nextElementSibling;
                } else {
                    for (_node = _node.nextSibling; _node.nodeType != ELEMENT_NODE && !!_node; _node = _node.nextSibling){}
                }
                n--;
            }else{
                if (!_node.previousElementSibling) {
                    _node = _node.previousElementSibling;
                }else{
                    for(_node = _node.previousSibling;_node && _node.nodeType ==ELEMENT_NODE;_node=_node.previousSibling){}
                }
                n++;
            }
       }
       return _node;
   };

    /*
    * return the nth child
    * */
    _e._$getChildren = function(_node,n){
        if(_node.children){
            if(n<0) n +=_node.children.length;
            if(n<0) return null;
            return _node.children[n];
        }
        if(n>=0){
            if(_node.firstElementChild) _node= _node.firstElementChild;
            else{
                for(_node= _node.firstChild;_node && _node.nodeType==ELEMENT_NODE;_node = _node.nextSibling){}
            }
            return _e._$getSibling(_node,n);
        }else{
            if(_node.lastElementChild) _node = _node.lastElementChild;
            else{
                for(_node = _node.lastChild;_node && _node.nodeType==ELEMENT_NODE;_node= _node.previousSibling){}
            }
            return _e._$getSibling(_node,n+1);
        }

    };

    /*
    * return dataset of node
    * */
    _e._$dataset = function(_node,key,value){
       if(!_node.dataset){
           if(!value){
               return _node.getAttribute("data-"+key);
           }else{
               _node.setAttribute("data-"+key,value);
           }

       }else{
           if(!value){
               return _node.dataset.key;
           }else{
               _node.dataset[key]=value;
           }
       }
    };

    /*
    * return textContent
    * */
    _e._$textContent = function(_node,value){
        var content  = _node.textContent;
        if(!!value){
            if(content == void 0) _node.innerText = value;
            else _node.textContent = value;
        }else{
            if(content == void 0) return _node.innerText;
            else  return _node.textContent ;
        }
    };

    /*
    * return outerHTML
    * */
    _e._$outertHtml = function(_node,value){
        if(!value){
            if(!_node.outerHTML) {
                return _node.outerHTML;
            }
            else{
                var contain = document.createElement("div");
                contain.appendChild(_node.cloneNode(true));
                return contain.innerHTML;
            }
        }else{
            if(!_node.outerHTML) {
                _node.outerHTML = value;
            }
            else{
                var contain = document.createElement("div"),
                    parent = _node.parentNode;
                contain.innerHTML = value;
                while(contain.firstChild){
                    parent.insertBefore(contain.firstChild,_node);
                }
                parent.removeChild(_node);
            }
        }
    };

    /*
    * getStyle
    * 待修复的问题：１ auto 2.margin-left的问题  http://stylechen.com/getstyle.html
    * */
    _e._$getStyle = function(_node,cssName){
        if("getComputedStyle" in window){
            return getComputedStyle(_node,null)[cssName];
        }else{
            return _node.currentStyle[cssName];
        }
    };


    /*
    * private node
    * */
    _e._$$toInsertNode = function (_html) {
        if(typeof _html === "string"){
            var contain = document.createElement("div");
            contain.innerHTML = _html;
            return _e._$getChildren(contain,0);
        }else{
            return _html;
        }
    };


    /*
    * append
    * */
    _e._$append = function(_node,_html){
        _node.appendChild(_e._$$toInsertNode(_html));
    };

    /*
    * prepend
    * */
    _e._$prepend = function(_node,_html){
        _node.insertBefore(_e._$$toInsertNode(_html),_node.firstChild);
    };

    /*
    * insertBefore
    * */
    _e._$insertBefore = function(_node,_html){
        _node.parentNode.insertBefore(_e._$$toInsertNode(_html),_node);
    };

    /*
    * insertAfter
    * */
    _e._$insertAfter = function(_node,_html){
        _node.parentNode.insertBefore(_e._$$toInsertNode(_html),_e._$getSibling(_node,1));
    };


    window._e = _e;
})(window);