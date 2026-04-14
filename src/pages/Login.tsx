import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import loginBg from '../assets/login-bg.svg';
import './Login.css';

export function Login() {
  return (
    <div className="login-layout" style={{ backgroundImage: `url(${loginBg})` }}>
      <Card style={{ maxWidth: '500px', padding: '3.5rem 3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '28px', color: '#ffffff', margin: '0 0 8px 0', fontWeight: 700, fontFamily: 'Poppins, sans-serif' }}>
            Entrar
          </h1>
          <p style={{ color: '#888888', fontSize: '14px', margin: 0, fontFamily: 'Poppins, sans-serif' }}>
            Portal de Academias e Parceiros
          </p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <Input label="E-mail" type="email" autoComplete="email" />
          <Input label="Senha" type="password" autoComplete="current-password" />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="tertiary" type="button" style={{ padding: '0 4px', height: 'auto', fontSize: '13px' }}>
              Esqueci a senha
            </Button>
          </div>

          <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '0.5rem' }}>
            Acessar porta
          </Button>

          <Button variant="secondary" type="button" style={{ width: '100%' }}>
            Criar conta
          </Button>
        </form>
      </Card>
    </div>
  );
}
