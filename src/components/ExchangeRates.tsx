import React from 'react'
import { useQuery } from '@apollo/client'
import { ExchangeRatesQueryType, EXCHANGE_RATES } from '../gql/querys/exchange'




export const ExchangeRate = () => {
    const { loading, error, data } = useQuery<ExchangeRatesQueryType>(EXCHANGE_RATES)

    if(loading) {
      return (
        <p>Loading...</p>
      )
    }
    if(error) {
      return (
        <p>This is awkward...</p>
      )
    }
    
    return (
      <>
        { data ? data.rates.map(({currency, rate}) => (
          <div key={currency}>
            <p>{currency}: {rate}</p>
          </div>
          )) : null
        }
      </>
    )
}