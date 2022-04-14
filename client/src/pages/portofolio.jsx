import { useEffect, useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { getProducts } from '../services/api'

const Portofolio = () => {

    const [productType, setProductType] = useState('products-cosmetics');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(productType)
        .then(res => setProducts(res))
    }, [productType])

    const handleTabOnChange = (tabKey) => {
        setProductType(tabKey)
    }

    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" onSelect={handleTabOnChange}>
                <Tab eventKey="products-cosmetics" title="Cosmetics">
                    {products.map(p => <p key={p.name} className="m-3">{p.name}</p>)}
                </Tab>
                <Tab eventKey="healthy-food" title="Healthy Food">
                    {products.map(p => <p key={p.name} className="m-3">{p.name}</p>)}
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                   
                </Tab>
            </Tabs>
        </div>)
}

export default Portofolio