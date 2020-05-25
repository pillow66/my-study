<template>
  <div>
    <h3>Higher-order JavaScript</h3>
  </div>
</template>

<script>
  /**
   * 为什么JavaScript适合函数式编程?
   * 用途广泛
   * 语法类似C，但又从函数式语言Lisp和Scheme中获取灵感，拥有高阶函数，闭包等特性
   * 函数是JavaScript的主要单元，不但用于实现程序功能，还可以用于定义对象，创建模块，处理事件
   * ES6带来如箭头函数，常量，迭代器，promise等适合函数式编程的新特性
   * JavaScript即是面向对象又是函数式的语言，但后者很少被用到
   */

  /**
   * OOP VS FP
   * 像Scala和F#这类混合语言糅合2种范式，JavaScript也类似
   * 使用哪种范式取决于你个人喜好和项目需求，了解2种范式，灵活运用
   *
   * JavaScript作为OO语言，不存像Java中的类继承
   * 尽管ES6提供了关键字class,extend语法糖，实现继承的本质任是原型链
   *
   * 思考如下情况:
   * 父类Person，子类Student，子类会继承父类所有数据和行为，假设扩展父类Person，添加gotoSchool函数会影响所有子类
   * 而另一子类Worker，无需gotoSchool函数，此时OOP就会变的比较棘手
   *
   * 函数式编程和面向对象编程的区别在于：数据(object's properties)和行为(functions)的耦合方式
   *
   * OOP依赖封装来保障数据完整性，通过实例方法暴露和操作数据，导致数据和行为深耦合
   * 面向对象编程的核心是抽象
   *
   * FP将数据独立出来，定义到类中，通过外部定义的函数调用类，实现数据和行为解耦
   *
   * 以上了解2种范式的区别，实践中应当相互配合，发挥其各自长处
   * 应将对象当做不可变的实体，将依赖这些对象的功能分离到通用函数中
   *
   * OOP通过继承扩展，FP通过组合扩展
   */

  /*** OOP ***/
  class Person {
    constructor(name) {
      this._name = name
      this._address = null
    }

    get name() {
      return this._name
    }

    //此处set并不是支持object可变，而是为了避免传递多个参数到构造函数，快速创建对象
    //当创建完对象，其状态(state)永远不改变(后续将学到处理这种情况)
    set address(adr) {
      this._address = adr
    }

    get address() {
      return this._address
    }

    //功能耦合数据this.name
    getName() {
      //this允许访问函数外的数据，导致函数副作用
      return this.name
    }

    //筛选相同地址
    peopleInSameAddress(friends) {
      let result = []
      let len = friends.length

      for (; len--;) {
        let friend = friends[len]

        if (this.address.city == friend.address.city) {
          result.push(friend)
        }
      }

      return result
    }
  }

  //Student继承People
  class Student extends Person {
    constructor(name, school) {
      super(name)
      this._school = school
    }

    get school() {
      return this._school
    }

    //筛选相同地址，相同学校
    studentInSameAddressAndSchool(friends) {
      let result = []
      let sameAddressFriends = super.peopleInSameAddress(friends)
      let len = sameAddressFriends.length

      for (; len--;) {
        let friend = sameAddressFriends[len]

        if (this.school == friend.school) {
          result.push(friend)
        }
      }

      return result
    }
  }

  class Address {
    constructor(city) {
      this._city = city
    }

    get city() {
      return this._city
    }
  }

  let curry = new Student('curry', 'A')
  curry.address = new Address('WuHan')
  let turing = new Student('turing', 'B')
  turing.address = new Address('BeiJin')
  let church = new Student('church', 'A')
  church.address = new Address('WuHan')

  //-> curry
  curry.getName()
  //-> [church]
  curry.studentInSameAddressAndSchool([turing, church])

  /*** FP ***/
    //功能独立到通用函数中，类型作为参数传入(解耦数据和行为)，避免使用this
    //基于原型链继承，使得该通用函数能接受其他Person派生类(如Student类)
  const getName = person => person.name

  function selector(city, school) {
    return function (student) {
      return student.address.city == city && student.school == school
    }
  }

  const studentInSameAddressAndSchool = (friends, selector) => friends.filter(selector)

  //-> curry
  getName(curry)
  //-> [curry, church]
  studentInSameAddressAndSchool([curry, turing, church], selector('WuHan', 'A'))

  /**
   * 总结：           OOP       和        FP 差异
   * 组织单元：        对象                函数
   * 编程风格：        命令式              声明式
   * 数据和行为：      深耦合              松散耦合
   * 状态(state)管理： 通过实例方法改变值   将对象视为不可变
   * 控制流：          循环和条件          函数和递归
   * 线程安全：        难以预料            可并发设计
   * 封装：            需要保障数据完整性   不需要，因为一切不可变
   *
   * 糅合2种范式，敲666哦^-^
   */

  /**
   * 管理JavaScript状态(state)
   * 状态(state):对象在某一时刻的快照
   * JavaScript在管理对象状态安全方面非常差！！！
   * JavaScript是一种高度动态语言，可以任意添加，删除，修改对象的属性
   * 之前在Person类中定义看似私有的变量_name其实可以在外部访问，修改，甚至删除
   *
   * 将对象视为值
   * String和Nubmers是创建后就不能修改的值类型
   * JavaScript的基本类型是值类型，用户自定义的对象，要具备或至少模仿值类型行为
   *
   * ES6虽然提供const关键，但请注意，对于引用类型任可以修改值！！！
   *
   * 肿么破???
   * 通过封装
   *
   * 以下模式是较为理想的状态，当需要处理一些历史遗留问题，可通过Object.freeze实现深度冻结
   * 但Object.freeze任无法冻结内嵌对象，可递归遍历对象，依次冻结(@o@~WTF)
   */

  function zipCode(code) {
    let _code = code

    //返回字面量对象
    return {
      //通过函数封装变量(实现一个虚假的私有变量)
      code() {
        //_code仅能通过闭包访问
        return _code
      },
      //通过方法返回一个新对象，是保持不变性的另一种方法
      translate(code) {
        return zipCode(code)
      }
    }
  }

  let freezePerson = new Person('lulu')
  freezePerson.address = new Address('WuHan')
  freezePerson = Object.freeze(freezePerson)
  //throw Error 冻结后的对象不可变
  //freezePerson.sex = 'female'
  //但对其嵌套对象任可修改
  freezePerson.address.code = 430000

  /**
   * 使用Lenses修改对象
   * OOP常使用函数去修改内部状态，这不利于状态检索结果，可能会破坏功能完整性
   *
   * 写时复制(copy-on-write)，执行写操作前，先复制一份副本，往副本里写
   * set name(name){
   *    return new Person(name)
   * }
   *
   * 函数式引用(Lenses)是函数式编程中访问和使得数据状态不可变的一种解决方案
   * Lenses类似写时复制
   *
   * Ramda.js提供了R.lensProp方法，可用于包装Person对象的name属性，无需自己实现COW
   * let person = new Person('lulu')
   * let nameLens = R.lensProp('name')
   * R.view(nameLens, person) //访问lens属性，输出:lulu
   * let newPerson = R.set(nameLens, '66', person) //修改lens属性
   * newPerson.name //输出:66
   * person.name //输出:lulu
   *
   * Lenses符合FP数据和逻辑分离的思想
   */

  /**
   * 函数
   * 函数是FP核心
   * 函数只有在返回有效值时才有意义，要区分表达式(有非null和undefined的值返回)，语句(无值返回)
   * 命令式编程和过程式编程大多由语句组成，FP完全由表达式组成，因此无返回值函数在FP范式下无意义
   *
   * JavaScript函数有2个重要特性：一等函数，高阶函数
   *
   * 一等函数
   * JavaScript中函数是对象(Function类型)，JavaScript定义函数的方法：
   * function fun(a){return a*a} //直接声明
   * let fun = function(a){return a*a} //通过匿名函数
   * let fun = a => a*a //通过lambda表达式
   * let fun = new Function('a', 'a*a') //通过构造函数
   *
   * 高阶函数
   * 可以当做参数传入其他函数并返回该函数，比如Array.sort()
   *
   * 基于函数一等和高阶，JavaScript的函数就是一个不可变，依赖输入的待求值
   */

  //opt()可作为参数传入
  function applyOperation(a, b, opt) {
    return opt(a, b)
  }

  //输出:3
  applyOperation(1, 2, (a, b) => {
    return a + b
  })

  //OOP
  function printPeopleInWuHan(people) {
    let len = people.length

    for (; len--;) {
      let p = people[len]

      if (p && p.address && p.address.city === 'WuHan') {
        console.log(p)
      }
    }
  }

  //输出:curry, church
  printPeopleInWuHan([curry, turing, church])

  //FP
  //抽象出selector和action，以后可扩展其他筛选条件和后续操作
  function printPeople(people, selector, action) {
    people.forEach(p => {
      if (selector(p)) {
        action(p)
      }
    })
  }

  let inWuHan = p => p && p.address && p.address.city === 'WuHan'
  let consolePeople = p => console.log(p)

  //输出:curry, church
  //高阶函数声明计算表达式更清晰简洁
  printPeople([curry, turing, church], inWuHan, consolePeople)

  /**
   * 函数this调用机制
   * JavaScript可自由指定函数运行上下文(this)的值，比如：
   *
   * 总结：函数内this指向取决于调用上下文
   */
  let myVar = 66

  function doWork() {
    return this.myVar
  }

  //全局环境中调用，this指向全局
  //返回:66
  //doWork()

  let obj = {
    myVar: 77,
    doWork
  }
  //在对象obj中调用，this指向obj
  //返回:77
  obj.doWork()

  //作为构造函数通过new调用，会创建新的对象
  let obj2 = new doWork()
  //返回:undefined
  obj2.myVar

  /**
   * call & apply
   * 主要用于调用函数并改变函数内this指向
   * 2个方法的区别在于传入参数的
   */
  function negate(func) {
    return function () {
      //apply传入第一个参数指定this指向，因此函数内this指向null
      //return !func.call(null, arguments[0])
      return !func.apply(null, arguments)
    }
  }

  function isNull(val) {
    return val === this
  }

  let isNotNull = negate(isNull)
  console.log(isNotNull(null)) //false
  console.log(isNotNull({})) //true

  /**
   * 闭包和作用域
   * 闭包是FP语言才有，JavaScript是第一个采用闭包的主流开发预言，并对我们编写代码的方式产生深远影响
   *
   * 闭包:有权访问另一个函数作用域中的变量的函数(原定义太TM学术，不好理解)
   * 闭包的规则基于JavaScript作用域
   */
  function makeAddFunction(amount) {
    function add(number) {
      //可访问外部作用域的amount
      //闭包保留了函数快照
      return number + amount
    }

    //返回一个方法
    return add
  }

  //闭包使得函数返回后，其内部状态(参数amount)保留，不会被GC
  let addTenTo = makeAddFunction(10)
  //返回16
  addTenTo(6)

  /**
   * 全局作用域的问题
   * 定义在全局中的对象可在所有函数作用域中访问
   *
   * 避免使用全局变量
   *
   * 函数作用域
   * 任何定义在函数中的变量不可被外部访问，除非通过函数返回
   * 函数作用域机制：从函数最内层开始向外逐层查找属性，找到则返回，直到最外层，没找到返回undefined
   */
  let x = '66'

  function parent() {
    function inner() {
      //对于变量x，先在inner函数中查找，再到parent函数中查找，最后去最外层全局作用域中查找
      console.log(x)
    }

    return inner
  }

  /**
   * 伪块级作用域
   * JavaScript没有块级({...})作用域，只有函数作用域
   *
   */
  function doWork() {
    //由于变量提升，不会抛出异常，myVar此时值为undefined
    if (myVar === undefined) {
      //变量myVar在{...}内声明，但在{...}外部也可被访问到
      //并且JavaScript会将变量和函数声明提升到最顶部(变量提升了解下)
      var myVar = 10
    }

    //返回10
    return myVar
  }

  function processArr() {
    let arr = [1, 2, 3, 4]

    function multipleBy10(val) {
      i = 10
      return val * i
    }

    //循环中定义的i被提升到函数内全局
    //ES6提供let声明变量可以避免这种情况
    //对于for循环的问题，FP推荐使用forEach语言实现
    for (var i = 0; i < arr.length; i++) {
      //调用multipleBy10函数可变更i值为10，导致循环条件提前结束
      //变量提升导致循环不安全
      arr[i] = multipleBy10(arr[i])
    }

    //返回[10, 2, 3, 4]
    return arr
  }

  processArr()

  /**
   * 闭包实际应用:
   * 模仿私自变量，模块化
   * 为异步操作提供回调函数
   * 创建块级作用域
   */
    //此处使用命名的IIFE，有助于抛出异常时进行堆栈跟踪
  var MyModule = (function MyModule(exp) {
      let _privateVar = 66

      exp.getVar = function () {
        return _privateVar
      }

      return exp
    }(MyModule || {}))

  //返回66
  MyModule.getVar()

  export default {}
</script>
