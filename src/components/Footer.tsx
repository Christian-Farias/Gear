import React from 'react';
import { WHATSAPP_URL } from '../data/config';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div className="c1">
            <a href="#top" className="logo">
              <svg viewBox="0 0 500 540">
                <use href="#logo-g" />
              </svg>
              <b>GEAR</b>
            </a>
            <p>Tecnologia que impulsiona o seu amanhã.</p>
          </div>
          <div className="c2">
            <h4 className="mono">Navegar</h4>
            <ul>
              <li>
                <a href="#solucoes">Soluções</a>
              </li>
              <li>
                <a href="#casos">Casos</a>
              </li>
              <li>
                <a href="#processo">Processo</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </div>
          <div className="c3">
            <h4 className="mono">Social</h4>
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>
          </div>
          <div className="c4">
            <h4 className="mono">Contato</h4>
            <ul>
              <li>
                <a href={WHATSAPP_URL}>WhatsApp</a>
              </li>
              <li>
                <a href="mailto:contato@gear.com.br">E-mail</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal mono">
          <span>© 2025 GEAR. Todos os direitos reservados.</span>
          <span>Desenvolvido no Brasil</span>
        </div>
      </div>
      <div className="word" aria-hidden="true">
        GEAR
      </div>
    </footer>
  );
};

export default Footer;
