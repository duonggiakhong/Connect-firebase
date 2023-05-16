
import { set } from "firebase/database";
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const ListingPage = () => {
    const [name, setName] = useState("");
    const [isbnNumber, setisbnNumber] = useState("");
    const [price, setprice] = useState("");
    const [converPic, setconverPic] = useState("");



    const handleSbmit = () => { };

    return (
        <div className="container mt-5">
            <Form onSubmit={handleSbmit}>
                <Form.Group className="mb-3" controlId="formBasicBookName">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="bookname"
                        placeholder="Enter book name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                        onChange={(e) => setisbnNumber(e.target.value)}
                        value={isbnNumber}
                        type="Number" placeholder="Enter Number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        onChange={(e) => setprice(e.target.value)}
                        value={price}
                        type="Price" placeholder="Price" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control
                        onChange={(e) => setconverPic(e.target.value)}
                        value={converPic}
                        type="file" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
}
export default ListingPage