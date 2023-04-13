import { useState, useEffect } from "react";

const ApiCall = () => {
    const [customers, setCustomers] = useState([]);
    // const [isLoading, setLoading] = useState(false)
    // const [characters, setCharacters] = useState([]);

    useEffect(() => {
    // setLoading(true)
    fetch("api/lightDataFetch")
        .then((response) => response.json())
        .then((data) => {
        setCustomers(data.rows);
        // setLoading(false)
        })
        .catch((error) => console.log(error));
    }, []);
    // if (isLoading) return <p>Loading...</p>
    if (!customers) return <p>No customer data</p>

    return (
    <div className="container" style={{ 'maxWidth': '800px', 'margin': '0 auto' }}>
        <h1>LightDataFetch</h1>
        <h2>Customer Data From AWS RDS Postgresql</h2>
        <div>
        {customers.map((customer) => (
            <div key={customer.customer_id}>
            <h1>Customer ID: {customer.customer_id}</h1>
            <h2>Customer Member Status: {customer.club_member_status}</h2>
            <p>Customer FashionNews Frequency: {customer.fashion_news_frequency}</p>
            <p>Customer Age: {customer.age}</p>
            <p>-----------------------------------</p>
            </div>
        ))}
        </div>
    </div>
    );
};

export default ApiCall;