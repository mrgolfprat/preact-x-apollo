import { h } from 'preact'
import { useEffect } from 'preact/hooks'
import { useQuery } from '@apollo/react-hooks'
import { withApollo } from 'react-apollo'
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

function Currency() {
    const { loading, error, data, client } = useQuery(query, { variables: { currency: "usd" } })

    useEffect(() => {
        console.log(data)
        console.log(client)
    }, [data])

    return (
        <div>
            {loading ? "Loading..." : data.rates.map(el => <CurrencyView key={el.currency} {...el} />)}
        </div>
    )
}


const CurrencyView = ({ currency, name, rate }) => (
    <div className="currency-view"  >
        <p>Name: {name}</p>
        <p>Currency: {currency}</p>
        <p>rate: {rate}</p>
    </div>
)

export default withApollo(Currency)
