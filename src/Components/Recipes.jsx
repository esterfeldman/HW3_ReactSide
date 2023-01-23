import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';


const GetRec = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);
    async function fetchdata() {
        await fetch("https://localhost:44366/api/Recipe", {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json; charset=UTF-8',
                'Content-type': 'application/json; charset=UTF-8'
            })
        })
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    setRecipes(result)
                },
                (error) => {
                    console.log("err post=", error);
                });
    }

    return (
        <>
            <div >
            <h1 style={{ textShadow: '2px 2px 4px #000000', fontSize: '32px', fontWeight: 'bold', color: 'lightblue', textTransform: 'uppercase', margin: '0' }}>
                Saved Recipes
            </h1><br/>
                <div className='repiceCss' >
                        <Row className="mx-auto" style={{position:"center", marginTop: "30px", marginBottom: "50px" }}>
                            {recipes.map((rec) => (
                                <Col key={rec.id} md={6} lg={2}>
                                    <Card style={{ marginBottom: "5px", backgroundColor:"lightblue" }}>
                                        <Card.Body style={{ height: "250px" }}>
                                            <Card.Img variant="top" src={rec.imageurl} style={{height: '100px' }} />
                                            <Card.Title><b>{rec.name}</b></Card.Title>
                                            <Card.Title>{rec.cookingmethod}</Card.Title>
                                            <Card.Title>{rec.Time}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                </div>
            </div>
        </>
    )
};
export default GetRec;