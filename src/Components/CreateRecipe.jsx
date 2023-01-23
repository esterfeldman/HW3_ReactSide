import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';

const CreateRec = () => {
    const [lineCount, setLineCount] = useState(0);

    useEffect(() => {
        async function fetchLineCount() {
            try {
                const response = await fetch("https://localhost:44366/api/Ingrd");
                const data = await response.json();
                setLineCount(data.length);
            } catch (error) {
                console.error(error);
            }
        }
        fetchLineCount();
    }, []);

    const [ingerdients, SetIngerdients] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);
    async function fetchdata() {
        await fetch("https://localhost:44366/api/Ingrd", {
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
                    SetIngerdients(result)
                },
                (error) => {
                    console.log("err post=", error);
                });
    }

    async function change1() {
        let ingerdientschecked = [];
        ingerdients.forEach(element => {
            if (element.checked === true) {
                ingerdientschecked.push({ id: element.id });
            }
        });
        let recname = document.getElementById("formBasicName").value;
        let recimg = document.getElementById("formBasicImg").value;
        let rectime = document.getElementById("formBasicCooktime").value;
        let reccook = document.getElementById("formBasicCookmethod").value;
        const newrecipe = {
            id: lineCount + 1,
            name: recname,
            image: recimg,
            cookingMethod: reccook,
            time: rectime,
            ingerdients: ingerdientschecked
        };
        let response = await fetch('https://localhost:44366/api/Recipe', {
            method: 'POST',
            headers: {
                'Accept': 'application/json; charset=UTF-8',
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(newrecipe)
        })
        let data = await response.json();
        if (data === 200) {
            alert('Recipe was added!')
        }
        else {
            alert('Recipe was not added!')
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        change1();
    }
    function handleCheckboxChange(id) {
        SetIngerdients(
            ingerdients.map((card) => {
                if (card.id === id) {
                    return {
                        ...card,
                        checked: !card.checked,
                    };
                }
                return card;
            })
        );
    }
    return (
        <>
            <h1 style={{ textShadow: '2px 2px 4px #000000', fontSize: '32px', fontWeight: 'bold', color: 'lightblue', textTransform: 'uppercase', margin: '0' }}>
                Create Recipe
            </h1><br />
            <Form style={{ bottom: '20px' }} onSubmit={handleSubmit}  >
                <Form.Group className="mb-3" controlId="formBasicName" >
                    <Form.Label>Recipe Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Recipe Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImg">
                    <Form.Label>Enter Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCooktime">
                    <Form.Label>Enter Cooking Time</Form.Label>
                    <Form.Control type="text" placeholder="Cooking Time" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCookmethod">
                    <Form.Label>Enter Cooking Method</Form.Label>
                    <Form.Control type="text" placeholder="Cooking Method" />
                </Form.Group>
                <Row className="mx-auto" style={{ marginTop: "30px", marginBottom: "50px" }}>
                    {ingerdients.map((card) => (
                        <Col key={card.id} md={6} lg={2}>
                            <Card style={{ marginBottom: "10px", backgroundColor: "lightblue" }}>
                                <Card.Body style={{ height: "200px" }}>
                                    <Form.Check
                                        type="checkbox"
                                        checked={card.checked}
                                        onChange={() => handleCheckboxChange(card.id)}
                                        label="Pick Ingerdient"
                                        style={{ paddingLeft: "12px" }}
                                    />
                                    <Card.Img variant="top" src={card.image} style={{ height: '100px' }} />
                                    <Card.Title>{card.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Button variant="primary" type="submit" >
                    Add Recipe
                </Button>
            </Form>
            
        </>
    );
}
    ;

export default CreateRec;
