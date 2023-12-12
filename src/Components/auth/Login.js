

import { Navbar } from "react-bootstrap";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginSuccess } from '../../store/authActions';
import 'firebase/auth';
import { Redirect, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);
  let history = useHistory ();

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginSuccess(user));
        console.log(user);
        history.push("/home")
      })
      .catch((error) => {
        <Redirect to="/login"/>
        const errorMessage = error.message;
        dispatch(loginFailure(errorMessage));
      });
  };

  return(

  
    <>


    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Ensure the form takes up the full viewport height
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8, // Adjust the span to make the input boxes narrower
        }}
        style={{
          maxWidth: 1000,
          width: "100%", // Make the form responsive
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
               <div className="row m-4">
                
              <div className="col-xl-12 " align="center">
                <div id="container">
                <h1 class="logo-1 me-auto" >
                  <a className="logos" to="" style={{color:"rgb(48, 140, 201)"}}>financeFrenzy</a>
                </h1>
                </div>
                <h4 style={{ color: "black" }}>
                  Cherish Yesterday, Live Today, Dream Tomorrow!
                </h4>
             
              </div>
            </div>
 
     
          
     
   
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input   value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item       
          wrapperCol={{
            offset: 10,
            span: 10,
  
          }}
    
        >
          <Button onClick={handleLogin}type="primary" htmlType="submit">
            Submit
          </Button>
          <Button style={{margin:"5px"}}  type="primary" htmlType="submit">
            <Link to="/register">Register</Link>
          </Button>
          {error && <p>{error}</p>}
        </Form.Item>
      </Form>
    </div>
  </>
  )


}


export default Login;
