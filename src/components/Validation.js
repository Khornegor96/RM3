import React from "react"

export function validate(email){
    if (!email) {
        return 'Email is required';
      }
    
      if (email.length > 35) {
        return 'Email must be less than 35 characters';
      }
    
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return 'Invalid email format';
      }
    
      return '';
    }
    
    export function validatePassword(password) {
      if (!password) {
        return 'Password is required';
      }
    
      if (password.length < 6 || password.length > 10) {
        return 'Password must be between 6 and 10 characters';
      }
    
      // Regular expression for password validation (at least one digit)
      const passwordRegex = /^(?=.*\d).{6,10}$/;
      if (!passwordRegex.test(password)) {
        return 'Password must contain at least one digit';
      }
    
      return '';
    }


