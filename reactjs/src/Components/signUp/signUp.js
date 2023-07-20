import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const SignUp = () => {


    const [data,setData] = useState({
        name : '',
        email: '',
        password : ''
    })

   

    const handleChange = (e,field) => {
        setData({...data,[field]:e.target.value})
    }

    const resetData = () => {
        setData({
            name : '',
            email: '',
            password : ''
        })
    }

    const submitForm = (e) => {
        e.preventDefault()

        console.log(data);

        fetch('http://localhost:2000/accounts',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": data.name,
                "email": data.email,
                "password": data.password
            })
        });

    }

    return(
        <Container>

            <Row className="m-5">
                <Col sm={{size:6,offset:3}} >
                <Card color="dark" outline>
                <CardHeader><h1>Sign Up</h1></CardHeader>

                <CardBody> 

                    <Form onSubmit={submitForm}>
                        <FormGroup>
                            <Label for='name'>Enter your name:</Label>
                            <Input type = 'text' 
                            placeholder="Name" 
                            id="name"
                            onChange={(e) => handleChange(e,'name')}
                            value={data.name}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for='email'>Enter your Email:</Label>
                            <Input type = 'email' 
                            placeholder="email@gmail.com" 
                            id="email"
                            onChange={(e) => handleChange(e,'email')}
                            value={data.email}
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for='password'>Enter Password:</Label>
                            <Input type = 'password'
                            placeholder="*****" 
                            id="password"
                            onChange={(e) => handleChange(e,'password')}
                            value={data.password}
                            />
                        </FormGroup>
                    
                        <Container className="text-center">
                            <Button color="dark" >
                                Register
                            </Button>
                            <Button onClick={resetData} color="dark" type="reset" className="ms-2">
                                Reset
                            </Button>
                        </Container>
                    
                    </Form>

                </CardBody>

            </Card> 
                </Col>
            </Row>

        </Container>
    )
}

export default SignUp;

