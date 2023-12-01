import { useEffect } from "react";
import { useState } from "react";

type TStatus = {
    status: string,
}

// type TData = {
//     data: TStatus,
// }

export function useJsonFetch(url: string) {
    const [data, setData] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const data: TStatus = await response.json();
                if (data.status !== 'ok') throw new Error(data.status)
                setData(data.status);
            } catch(e) {
                console.log(e);
                setError(e);
            } finally {
                setLoading(false);
                setTimeout(fetchData, 5000);
            }
        }
        fetchData();
    }, [])

    return [{data, error, loading}];
}
