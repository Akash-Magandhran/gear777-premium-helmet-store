import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();
  const submit = (e) => { e.preventDefault(); login(email); navigate('/'); };

  return (
    <section className="auth-shell">
      <div className="container">
        <div className="glass-card auth-card">
          <span className="eyebrow">Welcome back</span>
          <h2 className="title-lg mb-4">Login</h2>
          <form onSubmit={submit} className="d-flex flex-column gap-3">
            <input className="form-control" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="form-control" type="password" placeholder="Password" required value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <button className="btn btn-accent" type="submit">Sign In</button>
          </form>
          <p className="text-muted-soft mt-3 mb-0">No account? <Link to="/register" className="text-accent">Create one</Link></p>
        </div>
      </div>
    </section>
  );
}
