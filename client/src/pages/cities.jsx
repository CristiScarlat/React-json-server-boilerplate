import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import { getCities } from '../services/api';

const Cities = () => {
    const [citiesData, setCitiesData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // fetch('http://localhost:5000/cities')
        // .then(res => {
        //     res.json().then(jsonRes => console.log(jsonRes))
        // })
        async function fetchData() {
            setLoading(true);
            const res = await getCities();
            if (res.status === 200) setCitiesData(res.data)
            setLoading(false);
        }
        fetchData()
    }, [])


    return (
        <>
            {loading ? <div className="spinner-container">
                <Spinner animation="border" role="status" className='center-spinner'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner></div>
                :
                <div className="d-flex flex-wrap p-4">
                    {citiesData.map((cityObj, index) => (
                        <Card key={`${cityObj.cityName}-${index}`} style={{ width: '18rem', margin: '1rem' }}>
                            <Card.Img variant="top" src={`img/${cityObj.images[0]}`} />
                            <Card.Body>
                                <Card.Title>{cityObj.cityName}</Card.Title>
                                <Card.Text>
                                    {cityObj.description}
                                </Card.Text>
                                <Button variant="primary">See pictures</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>}
        </>
    )
}

export default Cities;