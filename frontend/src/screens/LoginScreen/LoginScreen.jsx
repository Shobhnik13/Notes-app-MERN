import React, { useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
import { useDispatch } from 'react-redux'
const LoginScreen = () => {
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const dispatch=useDispatch()
const submitHandler=async(e)=>{
  e.preventDefault()
}
  return (
    <MainScreen title='LOGIN'>
        <div className='loginContainer'>
          {/* {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>} */}
          {/* {loading && <Loading/>} */}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Button variant='primary' type='submit' className='my-3'>Submit</Button>
        </Form>
        <Row className='py-3'>
          <Col>
          New Customer?<Link to='/register'>Register Here</Link>
          </Col>
        </Row>
        </div>
    </MainScreen>
  )
}

export default LoginScreen