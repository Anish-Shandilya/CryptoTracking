import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const Login = () => {

    return(
        <Container>
            <Row className="m-5">
                <Col sm={{size:6,offset:3}}>
                    <Card color="dark" outline>
                        <CardHeader>
                            <h1>Login</h1>
                        </CardHeader>

                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="email">
                                        Enter your email address:
                                    </Label>
                                    <Input type="text" id="email" />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="password">
                                        Enter your password:
                                    </Label>
                                    <Input type="password" id="password" />
                                </FormGroup>

                                <Container className="text-center">
                                    <Button color="dark">Submit</Button>
                                    <Button color="dark" type="reset" className="ms-2">Reset</Button>
                                </Container>

                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}


export default Login;