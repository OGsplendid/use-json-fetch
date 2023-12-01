import { useJsonFetch } from '../../hooks/useJsonFetch'

export type TUrl = {
  url: string,
}

export const Data = ({ url }: TUrl) => {
    const [ data ] = useJsonFetch(url);

  return (
    <div>{`${data.data}`}</div>
  )
}
