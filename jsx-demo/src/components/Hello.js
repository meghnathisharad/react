import React from 'react'

const Hello = () => {

    // This is with JSX 
    // return (
    //     <div id='helloDiv' classNam='greetings'>
    //         <h1>
    //             Hello Sharad!!
    //         </h1>
    //     </div>
    // )

    //This is without JSX
    return React.createElement('div', 
                    {
                        id: 'helloDiv',
                        className: 'greetings'
                    }, 
                    React.createElement('h1', null, 'Hello Sharad!!!'))
}

export default Hello