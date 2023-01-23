import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';

const CreateIng = () => {
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
     async function addingerd() {

        let ingerdname = document.getElementById("formBasicName").value;
        let ingerdimage = document.getElementById("formBasicImage").value;
        let ingerdcalories = document.getElementById("formBasicCalories").value;
        const newingerd = {
            id: lineCount+1,
            name: ingerdname,
            image: ingerdimage,
            calories: ingerdcalories
        }
        fetch("https://localhost:44366/api/Ingrd", {
            method: 'POST',
            body: JSON.stringify(newingerd),
            headers: new Headers({
                'Accept': 'application/json; charset=UTF-8',
                'Content-type': 'application/json; charset=UTF-8'
            })
        })
            .then(res => {
                console.log('res=', res);
                return res.json()
            })
            .then(
                (result) => {
                    console.log("fetch POST= ", result);
                    console.log(result.Avg);
                },
                (error) => {
                    console.log("err post=", error);
                });
        alert("Ingredient was added :) ")    
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        addingerd();
    }
    return (

        <div className="form-container" style={{ height: "70%", marginTop: "140px" }}>
            <h1 style={{ textShadow: '2px 2px 4px #000000', fontSize: '32px', fontWeight: 'bold', color: 'lightblue', textTransform: 'uppercase', margin: '0' }}>
                Create Ingredient
            </h1><br />
            <Form onSubmit={(e) => handleSubmit(e)} style={{ width: "50%", margin: "auto", marginTop: "50px", border: "2px solid lightgrey", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Ingerdient Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>ImageUrl</Form.Label>
                    <Form.Control type="text" placeholder="Enter Image Url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCalories">
                    <Form.Label> Calories</Form.Label>
                    <Form.Control type="text" placeholder="Enter Ingerdient Calories" />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default CreateIng;