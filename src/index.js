import { h } from 'preact'
import React, { useState, } from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider, } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import Currency from './components/Currency'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

const client = new ApolloClient({
    uri: "https://o5x5jzoo7z.sse.codesandbox.io/graphql",
    cache
})


const App = () => {
    const [counter, setCounter] = useState(0)
    return (
        <ApolloProvider client={client} >
            <div>
                count: {counter}
                <button onClick={() => setCounter(counter + 1)} >+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>
                <Currency></Currency>
            </div>
        </ApolloProvider>
    )
}

ReactDOM.render(<App />, document.getElementById("app"))