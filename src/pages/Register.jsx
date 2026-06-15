import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Register() {
  const { register } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();
  const submit = (e) => { e.preventDefault(); register(name, email); navigate('/'); };

  return (
    <section className="auth-shell">
      <div className="container">
        <div className="glass-card auth-card">
          <span className="eyebrow">Join AVBAR</span>
          <h2 className="title-lg mb-4">Create account</h2>
          <form onSubmit={submit} className="d-flex flex-column gap-3">
            <input className="form-control" placeholder="Full name" required value={name} onChange={(e) => setName(e.target.value)} />
            <input className="form-control" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="form-control" type="password" placeholder="Password (8+ chars)" required minLength={8} value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <button className="btn btn-accent" type="submit">Create Account</button>
          </form>
          <p className="text-muted-soft mt-3 mb-0">Already a rider? <Link to="/login" className="text-accent">Login</Link></p>
        </div>
      </div>
    </section>
  );
}
