import { Button, Card, Input } from '../../src';
import loginBg from '../assets/login-bg.svg';
import './Login.css';

export function Login() {
  return (
    <div className="login-layout" style={{ backgroundImage: `url(${loginBg})` }}>
      <Card style={{ maxWidth: '500px', padding: '3.5rem 3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: 'var(--ds-font-size-xl)',
            color: 'var(--ds-color-text-default)',
            margin: '0 0 8px 0',
            fontWeight: 'var(--ds-font-weight-bold)',
            fontFamily: 'var(--ds-font-family)',
          }}>
            Entrar
          </h1>
          <p style={{
            color: 'var(--ds-color-text-muted)',
            fontSize: 'var(--ds-font-size-base)',
            margin: 0,
            fontFamily: 'var(--ds-font-family)',
          }}>
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
            Acessar portal
          </Button>

          <Button variant="secondary" type="button" style={{ width: '100%' }}>
            Criar conta
          </Button>
        </form>
      </Card>
    </div>
  );
}
