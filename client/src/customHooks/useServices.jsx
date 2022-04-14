import React from 'react';
import { getProducts } from '../services/api';

const useProducts = () => {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState();

    React.useEffect(() => {
        setLoading(true);
        getProducts()
        .then(res => {
            setData(res);
            setLoading(false);
        })
    }, [])

    return { loading, data }
}

export { useProducts };