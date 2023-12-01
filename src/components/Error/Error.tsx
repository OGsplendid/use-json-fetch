import { useJsonFetch } from '../../hooks/useJsonFetch'
import { TUrl } from '../Data/Data';

export const Error = ({ url }: TUrl) => {
    const [ error ] = useJsonFetch(url);

  return (
    <div>{`${error.error}`}</div>
  )
}
