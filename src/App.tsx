import { useState } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Login } from './pages/Login';
import loginBg from './assets/login-bg.svg';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState<'showcase' | 'login'>('login');

  if (currentView === 'login') {
    return (
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'fixed', top: 24, left: 24, zIndex: 10 }}>
          <Button variant="primary" onClick={() => setCurrentView('showcase')}>
            Componentes DS
          </Button>
        </div>
        <Login />
      </div>
    );
  }

  return (
    <div className="showcase-layout" style={{ backgroundImage: `url(${loginBg})` }}>

      {/* Nav */}
      <div style={{ position: 'fixed', top: 24, right: 24, zIndex: 10 }}>
        <Button variant="primary" onClick={() => setCurrentView('login')}>
          Tela Login
        </Button>
      </div>

      {/* Header */}
      <Card style={{ textAlign: 'center' }}>
        <h1 className="showcase-title">
          <span style={{ color: '#40E18B' }}>Serotonina</span>
          <span style={{ color: '#ffffff' }}>.DS</span>
        </h1>
        <p className="showcase-subtitle">Portal de Academias e Parceiros</p>
      </Card>

      {/* Buttons */}
      <Card>
        <h2 className="card-section-title">Buttons</h2>

        <p className="card-section-group">Default</p>
        <div className="showcase-row">
          <div className="showcase-col">
            <span className="showcase-label">Primary</span>
            <Button variant="primary">Primary</Button>
          </div>
          <div className="showcase-col">
            <span className="showcase-label">Secundary</span>
            <Button variant="secondary">Secundary</Button>
          </div>
          <div className="showcase-col">
            <span className="showcase-label">Tertiary</span>
            <Button variant="tertiary">Tertiary</Button>
          </div>
        </div>

        <div className="card-divider" />

        <p className="card-section-group">Disabled</p>
        <div className="showcase-row">
          <div className="showcase-col">
            <span className="showcase-label">Primary</span>
            <Button variant="primary" disabled>Primary</Button>
          </div>
          <div className="showcase-col">
            <span className="showcase-label">Secundary</span>
            <Button variant="secondary" disabled>Secundary</Button>
          </div>
          <div className="showcase-col">
            <span className="showcase-label">Tertiary</span>
            <Button variant="tertiary" disabled>Tertiary</Button>
          </div>
        </div>
      </Card>

      {/* Inputs */}
      <Card>
        <h2 className="card-section-title">Input</h2>

        <div className="showcase-row">
          <div className="showcase-col">
            <span className="showcase-label">Default Field</span>
            <Input label="E-mail" type="email" />
          </div>
          <div className="showcase-col">
            <span className="showcase-label">Disabled Field</span>
            <Input label="E-mail" type="email" disabled defaultValue="thales@mail.com" />
          </div>
        </div>
      </Card>

    </div>
  );
}

export default App;
