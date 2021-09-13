import { gql, ApolloError } from '@apollo/client'

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`

type Rate = {
    currency: string
    rate: string
}

export type ExchangeRatesQueryType = {
    loading?: boolean
    error?: ApolloError
    rates: Array<Rate>
}