import React from 'react'
import { useJsonFetch } from '../../hooks/useJsonFetch';
import { TUrl } from '../Data/Data';

export const Loading = ({ url }: TUrl) => {

    const [ loading ] = useJsonFetch(url);

  return (
    <div>{`${loading.loading}`}</div>
  )
}
