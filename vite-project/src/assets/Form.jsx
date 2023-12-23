import React from 'react'

function Form() {
  return (
    <form onSubmit={handleSubmit}>
          <h1>Already have an account?</h1>
          <h2>Log In!</h2>
          <label htmlFor="">Email:</label>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" />
          <label htmlFor="">Password:</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
          {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          <button type='submit'>Submit</button>
        </form>
  )
}

export default Form