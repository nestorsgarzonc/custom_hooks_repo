import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null,
    })

    useEffect(() => {
        setstate({
            data: null,
            loading: true,
            error: null,
        })
        fetch(url)
            .then((res) => res.json())
            .then((data) =>
                setstate(
                    { data, loading: false, error: null, }
                ))
            .catch((error) => {
                setstate({
                    data: null,
                    loading: false,
                    error: error,
                })
            })

    }, [url])
    return state
}
