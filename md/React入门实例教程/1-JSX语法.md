#### JSX语法
允许HTML与JavaScript混写  
遇到HTML标签(以<开头)，用HTML规则解析  
遇到代码块(以{开头)，用JavaScript规则解析
```typescript jsx
import React from 'react'

let names = ['Alice', 'Emily']

ReactDOM.render(
    <div>
    {
        names.map((item)=>{
            return <div>hello, {name}</div>
        })
    }
    </div>
)
```