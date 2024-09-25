import { useState, useEffect } from 'react';

export const useApi = (apiCallback, params) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchData = async () => {
        setIsLoading(true)
        try {
            // const response = await axios(url, options);
            const response = await apiCallback(params)
            setData(response.data.data)
        } catch (error) {
            setError(error);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [params])

    return {
        data,
        isLoading,
        error
    }
}
