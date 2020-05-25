#### Constructor(构造器)模式
面向对象编程语言中，Constructor是一种用于初始化创建对象的特殊方法

#### 对象创建
```javascript 1.7
//创建一个新的空对象
let newObj = {}
let newObj2 = new Object()

//对象赋值
newObj.key = 'hello'
newObj['key'] = 'hello'
Object.defineProperty(newObj, 'key', {
    value: '',
    writable: true,
    enumerable: true,
    configurable: true
})
Object.defineProperties(newObj, {
    'key': {},
    'otherKey': {}
})
```

#### 基本Constructor
```javascript 1.7
//不方便继承
function Car(model, year) {
  //this应用新创建的对象
  this.model = model
  this.year = year
}

let car = new Car('Honda', 2009)
//toString会被每个使用Car构造器创建的对象重复定义，但这种函数应该在不同Car实例间共享
car.toString()
```

#### 带原型的Constructor
```javascript
//使toString()单一实例在所有Car对象间共享
Car.prototype.toString = function() {
  return `${this.model} ${this.year}`
}
```

#### Model模式
```javascript
//对象字面量表示法，有助于封装和组织代码
let model = {
    name: '66'
}

obj.name

//模块模式，模拟类，使一个单独对象拥有公有/私有方法和变量
let model = (function() {
  //私有变量，被局限于模块闭包内
  let count = 0
  
  //返回一个公有对象
  return {
      getCount(){
          return count
      }
  }
})()

//模块外部不能直接操作私有变量，除非通过getCount函数
model.getCount()
```

#### Model模式变化
```javascript
let model = (function(jQuery) {
  function _getById(id) {
    return document.getElementById(id)
  }
  
  return {
      getById(id){
          return _getById(id)
      }
  }
  
//引入混入其他对象  
})(document)

model.getById('home')

let model = (function() {
  let m
  
  function _getById(id){
      return id
  }
  
  m.getById = function(id) {
    return _getById(id)
  }
  
  return m
})()
```

#### Revealing Module(揭示模块)模式
```javascript
let model = (function() {
  let _num = 0
  
  function _getNum() {
    return _num
  }
  
  //将暴露的公有对象直接指向私有函数和属性上
  return {
      get: _getNum
  }
})()
```

#### Singleton(单例)模式
类只能的实例化一次  

模式适用于：
- 当一个类只能有一个实例而且可以重多个地方访问
- 该唯一实例可通过子类扩展，且调用方无需更代码可直接使用扩展实例

静态实例和Singleton区别：可延迟构建，在需要时创建

Singleton的存在往往表明系统中模块紧密耦合或逻辑分散在多处
```javascript
let singleton = (function(){
    let instance
    
    function _init(){
        let _val = 0
        
        function _getVal() {
          return _val
        }
        
        return {
            getVal:_getVal()
        }
    }
    
    
    return {
        getInstance(){
            //instance存在就返回，不存在就创建并返回
            if(!instance){
                //保存一个引用
                instance = _init()
            }
            
            return instance
        }
    }
})()

singleton.getInstance()
```

#### Observer(观察者)模式
一个对象(subject)维持一列依赖它的对象(observer)，将状态变更通知给他们
```javascript
function Subject() {
  this.observerList = []
}
Subject.prototype.add = function(observer) {
  this.observerList.add(observer)
}
Subject.prototype.notify = function(context) {
  for(let item in this.observerList){
      //触发观察者的update事件
      item.onUpdate(context)
  }
}

function Observer(){
    //观察者订阅update事件
    this.onUpdate = function(context) {
        console.log(context)
    }
}

let s = new Subject()
s.add(new Observer())
s.add(new Observer())
//状态变更通知
s.notify('change')
```

#### Observer模式和Publish(发布)/Subscribe(订阅)模式的区别
- Observer模式要求希望接收通知的观察者必须订阅内容变更的事件
- Publish/Subscribe模式使用一个事件通道，介于Publish和Subscribe之间，避免两者产生依赖
```javascript
let pubsub = {}

(function(q) {
  //事件通道
  let events = {}
  
  q.publish = function(event, args) {
    let result = false
      
    if(events[event]){
       let subscribers = events[event]
       
       for(let item in subscribers){
           item.func(event, args)
       }
       
       //发布成功
       result = true
    }
    
    return result
  }
  
  q.subscribe = function(event, func) {
    if(!events[event]){
        events[event] = []
    }
    //订阅者提供回调处理，解耦发布/订阅依赖
    events[event].push({func})
  }
  
  q.unsubscribe = function() {
  }
}(pubsub))

//订阅者，先订阅
pubsub.subscribe('click', (event, args)=>{
    console.log(args)  
})
pubsub.subscribe('click', (event, args)=>{
    console.log('hello', args)  
})
pubsub.subscribe('focus', (event, args)=>{
    console.log(args)
})

//发布者给订阅了相关事件的对象传递信息
pubsub.publish('click', {name: 'click', x: 0, y: 0})
pubsub.publish('focus', {name: 'focus'})
```

#### Mediator(中介者)模式
允许我们公开一个统一的接口，系统不同部分可以通过该接口通信  
Mediator模式促进松散耦合的方式是：确保组件交互通过这个中心点来处理，而非显示引用彼此  
Mediator模式本质是Observer模式的共享目标
Mediator模式通过限制对象严格通过Mediator进行通信来实现这一目的
```javascript
let mediator = (function() {
    let events = {}
    
    let subscribe = function(event, func) {
        if(!events[event]){
            events[event] = []
        }
        
        events[event].push({context: this, callback: func})
    }
    
    let publish = function(event, args) {
        let result = false
        
        if(events[event]){
            for(let item in events[event]){
                item.callback(item.contex, args)
            }
            
            result = true
        }
        
        return result
    }
    
    return {
        publish,
        subscribe,
        installTo(obj){
            obj.publish = publish
            obj.subscribe = subscribe
        }
    }
})()

function receviceMessage(data){
    console.log(data.message)
}

function sendMessage(message){
    mediator.publish('message', {message})
}

mediator.subscribe('message', receviceMessage)

sendMessage('hellow')
```

#### Prototype(原型)模式
基于现有对象模板，通过克隆方式创建对象
```javascript
let carPrototype = {
    init(name){
        this.name = name
    },
    getModel(){
        console.log(this.name)
    }
}

//可供选择的Prototype模式
let beget = (function(){
    function F(){
    }
    
    //可自定义prototype
    return function(proto){
        //Prototype模式不包含任何初始化概念，而仅将对象链接至原型
        F.prototype = proto
        
        return new F()
    }
})()

function Car(name){
    let cp = beget(carPrototype)
    cp.init(name)
    
    return cp
}

let car = Car('Ford')
car.getModel()
```

#### Command(命令)模式
将方法调用，请求或操作封装到单一对象，从而根据不参数执行指定方法
将调用操作的对象和实现操作的对象解耦，分离职责
```javascript
let carManager = (function() {
    return {
        requestInfo(model, id){
            return `${model} ${id}`
        }
    }
})()

//将action动作和调用该动作的对象绑定在一起
//始终包括一个执行操作run()或execute()
carManager.execute = function(name, ...args){
    return carManager[name] && carManager[name](...args)
}

carManager.execute('requestInfo', 'Ford', 66)
```

#### Facade(外观)模式
一种结构型模式，提供方便的高层次接口，隐藏底层复杂，简化API暴露给开发者  
```javascript
const module = (function() {
    let _i = 0
    
    function _set(val){
        _i = val
    }
    
    function _run() {
      console.log('run', i)
    }
    
    function _jump(){
        console.log('jump', i+1)
    }
   
        
    return {
        //封装内部复杂方法调用，用户无感
        facade(args){
            _set(args.val)
            
            if(args.run){
                _run()
                _jump()
            }
        }
    }
})()

module.facade({val:6, run:true})
```

#### Factory(工厂)模式
创建型模式，不显示要求使用构造函数，提供一个通用的接口来创建对象
```javascript
function Cat(options){
    this.name = options.name
}

function Dog(options) {
  this.name = options.name
}

//工厂类
function AnimalFactory() {
}

//默认创建Cat
AnimalFactory.prototype.animalClass = Cat
//创建实例方法
AnimalFactory.prototype.createAnimal = function(options) {
    if(options.type == 'cat'){
        this.animalClass = Cat
    }
    else if(options.type == 'dog'){
        this.animalClass = Dog
    }
    
    return new this.animalClass(options)
}

let catFactory = new AnimalFactory()
let cat = catFactory.createAnimal({
    type: 'cat',
    name: 'lulu'
})

let dogFactory = new AnimalFactory()
let dog = dogFactory.createAnimal({
    type: 'dog',
    name: 'lulu'
})
```

#### Abstract Factory(虚拟工厂)
```javascript
const AbstractAnimalFactory = (function() {
    let types = {}
    
    return {
        //注册类
        registerAnimal(type, animalClass){
            types[type] = animalClass
        },
        //创建类实例
        createAnimal(type, options){
            let animalClass = types && types[type]
            
            return animalClass  && new animalClass(options) 
        }
    }
})()

AbstractAnimalFactory.registerAnimal('cat', Car)
AbstractAnimalFactory.registerAnimal('dog', Dog)

let cat = AbstractAnimalFactory.createAnimal('cat', {name: 'lulu'})
let dog = AbstractAnimalFactory.createAnimal('dog', {name: 'lulu'})
```

#### Mixin(混合)模式
可以轻松被一个子类或一组子类继承功能的类，目的是函数复用
```javascript
function Cat(){
}

const myMixin = function() {
}
myMixin.prototype = {
    cry(){
        console.log('cry')
    }
}

//将方法扩展到另一个对象上
function mixinTo(receivingClass, mixins) {
    for(let methodName in mixins){
        //排除prototype上的方法
        if(!Object.hasOwnProperty(receivingClass.prototype, methodName)){    
            receivingClass.prototype[methodName] = mixins.prototype[methodName]
        }
    }
}

mixinTo(Cat, myMixin)

let cat = new Cat()
cat.cry()
```

#### Decorator(装饰者)模式
结构型设计模式，促进代码复用  
提供将行为动态添加到系统现有类的能力
```javascript
function MacBook(){
    this.cost = function() {
      return 666
    }
}

//Decorator1
function Cost1(mackBook) {
    let val = mackBook.cost()
    
    mackBook.cost = function() {
        return val + 1
    }
}

function Cost2(macBook) {
    let val = macBook.cost()
  
    macBook.cost = function(){
        return val + 1
    }
}

let mb = new MacBook()
//装饰者重写对象的cost方法，返回特定价格升级
Cost1(mb)
Cost2(mb)

//668
mb.cost()
```

#### 伪经典Decorator
通过接口实现装饰者
接口(JS未提供内置支持)应该是对象定义方法的一种方式，但不关心方法具体实现
```typescript
interface IMacBook{
    addCost():Number
}

class MacBookPro implements IMacBook{
    getPrice(){
        return 0
    }
    addCost():Number {
        return this.getPrice() + 1
    }
}
```

#### Flyweight(享元)模式
结构型设计模式，用于优化重复，缓慢以及数据共享效率低的代码  
通过与相关对象共享尽可能多的数据减少内存使用  
```typescript
//书籍对象
const Book = function(id, title) {
    this.id = id
    this.title = title
    //将书籍外部状态分离到书籍管理类
    //this.checkoutDate = checkoutDate
}

//书籍创建工厂方法
const BookFactory = (function() {
    let existingBooks = {}
    
    return {
        createBook(id, title){
            let book, existingBook = existingBooks[id]
          
            //避免存储相同书籍信息
            if(!!existingBook){
                book = existingBook
            }
            else{
                book = new Book(id, title)
                existingBooks[id] = book
            }
          
            return book
        }
    }
})()

//书籍管理对象
const BookManager = (function() {
    let bookDatabase = {}
    
    return {
        addBook(id, title, checkoutDate){
            let book = BookFactory.createBook(id, title)
            
            bookDatabase[id] = {
                book,
                //添加书籍外部管理状态
                checkoutDate
            }
        }
    }
})()
```
