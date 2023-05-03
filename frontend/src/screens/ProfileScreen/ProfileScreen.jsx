import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../../actions/UserActions'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/ErrorMessage'
const ProfileScreen = () => {
  const submitHandler=(e)=>{
    e.preventDefault()
    if(!name || !email || !password ||!confirmPassword){
      alert('Please fill all the fields!')
    }
    else{
    if(password===confirmPassword){
    dispatch(updateProfile({name,email,password}))
    }
    else{
      alert('Passwords do not match!')
    }
  }
  }
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin
  const userUpdate=useSelector(state=>state.userUpdate)
  const {error,loading,success}=userUpdate
useEffect(()=>{
  if(!userInfo){
    navigate('/')
  }
  else{
    setName(userInfo.name)
    setEmail(userInfo.email)
    setPassword(userInfo.password)
    setConfirmPassword(userInfo.confirmPassword)
  }
},[])
  return (
    <div>
        <MainScreen title='EDIT PROFILE'>
          <div>
            <Row className='profileContainer'>
              <Col md={6}>
              <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                  <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              <Button type='submit' variant='primary'>Update</Button>
              </Form>
              </Col>
            </Row>
          </div>
        </MainScreen>
    </div>
  )
}

export default ProfileScreen