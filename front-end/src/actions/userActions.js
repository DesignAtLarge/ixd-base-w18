import { LOGIN_USER } from './types';
import { replace } from 'connected-react-router';

import firebase from '../utils/firebase';
import { notify } from '../utils/notify';
const db = firebase.firestore();
const userDB = db.collection('users');

export const loginUser = (credentials) => async dispatch => {

  // If Facebook login
  if (credentials.id) {
    userDB.where("userid", "==", credentials.id)
      .get()
      .then(function(querySnapshot) {
        console.log(querySnapshot)
          if(querySnapshot.size == 0) {
            console.log('hi')
            userDB.add({
              userid: credentials.id,
              username: credentials.username
            })
            dispatch({
              type: LOGIN_USER,
              username: credentials.username
            });
            dispatch(replace('/'));
          }
          else {
            querySnapshot.forEach(function(doc) {
              console.log(doc);
              dispatch({
                type: LOGIN_USER,
                username: credentials.username
              });
              dispatch(replace('/'));
            });
          }
        })
      .catch(function(error) {
        console.err(error);
      });


      // Normal login
  } else {
    // If user can be found
    userDB.where("username", "==", credentials.username)
      .get()
      .then(function(querySnapshot) {
          if(querySnapshot.size == 0) {
            userDB.add({
              username: credentials.username,
              password: credentials.password
            });
            dispatch({
              type: LOGIN_USER,
              username: credentials.username
            });
            dispatch(replace('/'));
          }
          else {
            querySnapshot.forEach(function(doc) {
                if(doc.data().password != credentials.password) {
                  notify('Unable to login!', 'Incorrect password');
                } else {
                  dispatch({
                    type: LOGIN_USER,
                    username: credentials.username
                  });
                  dispatch(replace('/'));
                }
              });
          }
        })
      .catch(function(error) {
        console.err(error);
      });
  }
}
