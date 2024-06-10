import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>This a Custome App which is made by me!</h1>
        </div>
    )
}

const reactElement = { /// this is not work here cause this custome element react doesn't know it !
    type : 'a',
    props : {
        href: "https:/google.com",
        target:'_blank'
    },
    children : 'Click me to visit google!!'
}

const areactElement = React.createElement(
    'a',//type/ Element
    {// second thig its always take object!
        href:"https://google.com",   // Attribute
        target:'_blank'
    },
    'Click Here to visit Google!!' //children

)


const AnotherElement = ( // this is raw HTML thats why we have to name variable here is starting with a Capital letter!
    <a href="https://google.com" target='_blank'>Visit Google!!</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    areactElement
)
