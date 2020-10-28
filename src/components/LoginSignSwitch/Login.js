import React from 'react'

export default function Login() {
  return (
    <form>
      <label htmlFor="Email">Email</label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" />
    </form>
  );
}
