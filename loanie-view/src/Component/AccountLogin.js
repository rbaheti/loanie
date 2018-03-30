import React, { Component } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebase } from './Firebase';
import axios from 'axios';
// import { connect } from 'react-redux';
// import { changeTokenId } from '../Actions';
import '../CSS/AccountLogin.css';

const sendToken = (tokenId) => {
  // setter
  sessionStorage.setItem('tokenId', tokenId);

  console.log('Inside sendToken(), this.props: ', this.props);

  // Change token in Redux state.
  // this.props.dispatch(changeTokenId(tokenId));

  console.log('sending token to server!');
  const token = { token: tokenId };
  axios
    .post('http://localhost:3030/auth', token)
    .then((res) => {
      console.log('Response from server: ', res);
    })
    .catch((err) => {
      console.log('Login Failed!', err);
    });
  window.location = '/loan_list';
};

const uiConfig = {
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccess: () => {
      firebase.auth().onAuthStateChanged((user) => {
        console.log('got the ID!!', user.uid);
        sendToken(user.uid);
      });
    },
  },
  // credentialHelper: firebase.auth.CredentialHelper.NONE,
  // Terms of service url.
  // tosUrl: '<your-tos-url>',
};

export default function AccountLogin() {
  // console.log('TOKEN ID:', this.props.tokenId);
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

// const mapStateToProps = state => ({
//   tokenId: state.tokenId,
// });

// export default connect(mapStateToProps)(AccountLogin);
