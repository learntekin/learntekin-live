// import React from "react";
// import firebase from "../../firebase";
// import { Link } from "react-router-dom";

// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//       error: null,
//     };
//   }

//   handleInputChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleRegister = () => {
//     const { email, password } = this.state;

//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Registration successful
//         const user = userCredential.user;
//         // Additional logic or database operations
//       })
//       .catch((error) => {
//         // Registration failed
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         this.setState({ error: errorMessage });
//       });
//   };

//   render() {
//     const { email, password, confirmPassword,error } = this.state;

//     return (
//       <div className="container">
//         <h2>Register</h2>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             placeholder="Enter your email"
//             value={email}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             className="form-control"
//             placeholder="Enter your password"
//             value={password}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             className="form-control"
//             placeholder="Confirm your password"
//             value={confirmPassword}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <button className="btn btn-primary" onClick={this.handleRegister}>
//           Register
//         </button>
//         {error && <p className="text-danger">{error}</p>}
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     );
//   }
// }

// export default Register;


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



const Register = () => {
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
        history.push("/")
      })
      .catch((error) => {
        <Redirect to="/login"/>
        const errorMessage = error.message;
        dispatch(loginFailure(errorMessage));
      });
  };

  return(

  
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            src=".\assets\img\logo.png"
            width="50"
            height="50"
            style={{
              position: "relative",
              right: "2rem",
              top: "0.2rem",
              left: "0.5rem",
            }}
            className="d-inline-block align-top ml-8"
            alt="React Bootstrap logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Brand>financeFrenzy</Navbar.Brand>
    </Navbar>

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
          label="Confirm Password"
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
            <Link to="/login">Login</Link>
          </Button>
          {error && <p>{error}</p>}
        </Form.Item>
      </Form>
    </div>
  </>
  )


}


export default Register;
