function Foo(){
    getName = function(){
        console.log(1);
    };
    return this;
}

Foo.getName = function(){
    console.log(2)
}

Foo.prototype.getName = function(){
    console.log(3)
}

var getName = function(){
    console.log(4)
}

function getName(){
    console.log(5)
}

//


Foo.getName(); //2;//调用静态方法
Foo().getName(); //1
getName(); // 4
console.dir(new Foo);
console.dir(new Foo());
new Foo.getName(); //2,取了私有属性的getName
new Foo().getName();// 3,取了原型链的getName
new new Foo().getName() //???3

//没有参数时，new Foo和new Foo()是一样的