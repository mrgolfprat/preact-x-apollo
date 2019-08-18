import { h } from 'preact'
import { useEffect } from 'preact/hooks'
// import React, { useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const query = gql`
    query getRate($currency: String!) {
        rates(currency:$currency) {
            rate
            name
            currency
        }
    }
`

export default function Currency() {
    const { loading, error, data } = useQuery(query, { variables: { currency: "usd" } })

    return (
        <div>
            {loading ? "Loading..." : data.rates.map(el => <CurrencyView key={el.currency} {...el} />)}
        </div>
    )
}


const CurrencyView = ({ currency, name, rate }) => (
    <div style={{ borderBottomWidth: 1, borderBottomColor: "#888", borderBottomStyle: 'solid' }} >
        <p>Name: {name}</p>
        <p>Currency: {currency}</p>
        <p>rate: {rate}</p>
    </div>
)
