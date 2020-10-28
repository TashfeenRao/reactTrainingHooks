import React from 'react'

export default function SignUp() {
  return (
    <form>
      <label htmlFor="Name">Name</label>
      <input type="text" />
      <label htmlFor="Email">Email</label>
      <input type="email" />
      <label htmlFor="password">Password</label>
      <input type="password" />
    </form>
  );
}
