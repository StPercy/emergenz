import React from 'react';

function createHTML() {
    return {
        __html: '<button onclick=\'alert("hello world");\'>hello</button>',
      };
}

function MyComponent() {
    /*
    const Hello = React.createElement(
        'span',
        null,
        'Hello React zum 100sten'
        );

        return React.createElement(
            'div', 
            null, 
            Hello
        );
        */
       return <div dangerouslySetInnerHTML={createHTML()}/>;
}

export default MyComponent;