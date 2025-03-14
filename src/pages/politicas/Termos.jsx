import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BREAKPOINT_MOBILE = 768;

/* Container global */
const All = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
  margin: 0;
  padding: 0;
`;

/**
 * Topo fixo:
 * - Se estiver no topo da página (scrollY === 0):
 *   -> Desktop: 500px 
 *   -> Mobile: 250px (metade)
 *   -> z-index = 2
 * - Se estiver rolando a página (scrollY > 0):
 *   -> Desktop: 350px 
 *   -> Mobile: 175px (metade)
 *   -> z-index = 999
 */
const Topo = styled.div`
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height}px;
  background: #f1f1f180;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 5%;
  gap: 20px;
  transition: height 0.4s ease;
  z-index: ${(props) => props.zIndex};

  /* Imagem e título */
  & > img {
    width: 200px;
    filter: invert(100%);
    @media (max-width: ${BREAKPOINT_MOBILE}px) {
      width: 150px; /* Imagem menor no mobile */
    }
  }

  & > h1 {
    font-size: 3rem;
    color: #333;
    font-weight: 500;
    margin: 0;

    @media (max-width: ${BREAKPOINT_MOBILE}px) {
      font-size: 2rem; /* Tamanho reduzido no mobile */
    }
  }
`;

/* 
  Contêiner principal com margem para não ficar 
  escondido atrás do cabeçalho fixo 
*/
const ContentContainer = styled.div`
  max-width: 1280px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 5% 5%;
  background-color: #ffffff;
  border-radius: 8px;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    /* Ajuste para mobile */
    margin-top: 280px;
    padding: 3% 5%;
  }
`;

/* Títulos e parágrafos */
const Title = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color--blue);
  font-size: 1.8rem;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    font-size: 1.4rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: var(--color--black);
  line-height: 1.6;
  font-size: 1rem;

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    font-size: 0.95rem;
  }
`;

/* Wrapper de tabela, com scroll horizontal no mobile */
const TableWrapper = styled.div`
  margin: 2rem 0;
  position: relative;
  overflow-x: auto; 
  &::after {
    content: 'Arraste para o lado →';
    position: absolute;
    top: -20px;
    right: 10px;
    background: #f1f1f150;
    backdrop-filter: blur(1px);
    color: #666;
    padding: 0.3rem 0.6rem;
    font-size: 0.55rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    pointer-events: none;
    opacity: 0.9;

    @media (min-width: ${BREAKPOINT_MOBILE + 1}px) {
      display: none; /* some em telas maiores */
    }
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;

  thead {
    background-color: #f1f1f1;
  }

  th,
  td {
    padding: 1rem;
    border: 1px solid #ddd;
    text-align: left;
    vertical-align: middle;
  }

  th {
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    display: block;
    white-space: nowrap;
    font-size: 0.9rem;
  }
`;

const Termos = () => {
  const [headerHeight, setHeaderHeight] = useState(500); // Desktop: topo "cheio"
  const [topoZIndex, setTopoZIndex] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= BREAKPOINT_MOBILE;

      // Se está no topo (scrollY == 0) -> cabeçalho maior
      if (window.scrollY === 0) {
        // Desktop: 500  |  Mobile: 250
        setHeaderHeight(isMobile ? 250 : 350);
        setTopoZIndex(2);
      } else {
        // Rolando -> cabeçalho reduzido
        // Desktop: 350 | Mobile: 175
        setHeaderHeight(isMobile ? 175 : 250);
        setTopoZIndex(999);
      }
    };

    // Executa a checagem no primeiro render para ajustar ao estado inicial
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <All>
      <Topo height={headerHeight} zIndex={topoZIndex}>
        <img
          src="https://imagedelivery.net/1n9Gwvykoj9c9m8C_4GsGA/3d1440c5-f0d7-41e3-953e-64662df60e00/public" 
          alt="logo-fast-homes" 
          loading="lazy"
        />
        <h1>Termos e Condições</h1>
      </Topo>

      <ContentContainer>
        <Paragraph>
          Bem-vindo(a) à nossa <strong>Política de Dados</strong>. Aqui você
          encontra informações detalhadas sobre como coletamos, utilizamos e
          protegemos seus dados, em conformidade com a{' '}
          <em>Lei Geral de Proteção de Dados (LGPD)</em>. Nosso compromisso é
          manter a máxima transparência e segurança em cada etapa do tratamento
          de dados.
        </Paragraph>

        <Title>1. Definições Importantes</Title>
        <Paragraph>
          <strong>Dados pessoais:</strong> qualquer informação relacionada a uma
          pessoa física identificada ou identificável, como nome, e-mail ou CPF.
          <br />
          <strong>Titular dos dados:</strong> a pessoa a quem os dados se
          referem.
          <br />
          <strong>Controlador:</strong> a quem compete tomar as decisões sobre o
          tratamento de dados pessoais.
          <br />
          <strong>Operador:</strong> a quem compete realizar o tratamento de
          dados pessoais em nome do controlador.
        </Paragraph>

        <Title>2. Exemplos de Coleta e Uso de Dados</Title>
        <Paragraph>
          Coletamos dados fornecidos voluntariamente por você ao entrar em
          contato conosco, se cadastrar em nossos serviços ou utilizar
          funcionalidades específicas em nosso site. Além disso, podemos obter
          dados do seu dispositivo (como IP e tipo de navegador) para melhorar a
          experiência do usuário.
        </Paragraph>

        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>Tipo de Dado</th>
                <th>Exemplo</th>
                <th>Finalidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome, CPF, RG</td>
                <td>
                  Criar cadastro e validar identidade para fins de segurança e
                  envio de comunicações.
                </td>
              </tr>
              <tr>
                <td>Contato</td>
                <td>E-mail, Telefone</td>
                <td>
                  Enviar notificações, suporte, marketing (caso autorizado) e
                  responder dúvidas.
                </td>
              </tr>
              <tr>
                <td>Navegação</td>
                <td>Endereço IP, Cookies, Sessão</td>
                <td>
                  Analisar estatísticas de uso, autenticação de login e melhoria
                  de performance.
                </td>
              </tr>
            </tbody>
          </StyledTable>
        </TableWrapper>

        <Paragraph>
          <strong>Observação:</strong> Caso sejam coletados dados bancários ou
          financeiros, estes serão utilizados estritamente para processamento de
          pagamentos e sempre com mecanismos de criptografia adequados.
        </Paragraph>

        <Paragraph>Os dados coletados podem ser usados para:</Paragraph>
        <ul>
          <li>Aprimorar nossos serviços e atendimento;</li>
          <li>
            Enviar ofertas relevantes sobre nossos produtos (mediante
            consentimento prévio);
          </li>
          <li>Manter registros internos, como histórico de solicitações;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>

        <Title>3. Armazenamento e Segurança</Title>
        <Paragraph>
          Implementamos <strong>medidas de segurança físicas</strong> (ex. salas
          com acesso controlado), <strong>eletrônicas</strong> (ex. firewalls e
          criptografia) e <strong>administrativas</strong> (ex. políticas de
          acesso restrito) para prevenir acessos não autorizados, uso indevido
          ou divulgação indevida. Nosso compromisso é garantir a{' '}
          <strong>confidencialidade</strong> e a <strong>integridade</strong> de
          suas informações.
        </Paragraph>

        <Paragraph>
          Abaixo, apresentamos uma tabela com alguns exemplos de medidas de
          segurança que adotamos:
        </Paragraph>

        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>Medida</th>
                <th>Descrição</th>
                <th>Benefício</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Criptografia</td>
                <td>
                  Dados sensíveis (ex: senhas) são armazenados e transmitidos de
                  forma criptografada.
                </td>
                <td>Protege contra interceptação ou vazamento de informação.</td>
              </tr>
              <tr>
                <td>Controle de Acesso</td>
                <td>
                  Sistemas de autenticação de múltiplos fatores e permissões
                  específicas para cada área.
                </td>
                <td>
                  Evita que colaboradores não autorizados acessem informações
                  sigilosas.
                </td>
              </tr>
              <tr>
                <td>Backup Regular</td>
                <td>
                  Realizamos cópias periódicas dos dados em local seguro e
                  isolado.
                </td>
                <td>Previne perda de dados em caso de incidentes ou falhas.</td>
              </tr>
            </tbody>
          </StyledTable>
        </TableWrapper>

        <Title>4. Compartilhamento de Dados</Title>
        <Paragraph>
          Não compartilhamos ou vendemos seus dados pessoais a terceiros para
          fins comerciais. Compartilhamos dados apenas nos seguintes casos:
        </Paragraph>
        <ul>
          <li>
            <strong>Obrigação legal ou regulatória:</strong> quando há
            necessidade de atender a requisitos legais, como ordens judiciais.
          </li>
          <li>
            <strong>Serviços terceirizados:</strong> contratamos parceiros de TI
            para hospedagem de dados ou envio de e-mails, sempre com cláusulas
            de confidencialidade.
          </li>
          <li>
            <strong>Consentimento expresso:</strong> quando o titular concorda
            com o compartilhamento para fins específicos (ex: promoções
            conjuntas).
          </li>
        </ul>

        <Title>5. Direitos do Titular</Title>
        <Paragraph>
          Você tem o direito de acessar, corrigir, atualizar ou solicitar a
          exclusão de seus dados, de acordo com a LGPD. Além disso, pode revogar
          consentimentos concedidos previamente e requisitar informações sobre
          qualquer compartilhamento realizado. Para exercer esses direitos,
          entre em contato conosco por meio de:
        </Paragraph>
        <ul>
          <li>
            E-mail: <em>contato@exemplo.com</em>
          </li>
          <li>
            Telefone: <em>(XX) XXXX-XXXX</em>
          </li>
          <li>
            Presencialmente em nossa sede: <em>Rua X, nº 123, Cidade, Estado</em>
          </li>
        </ul>

        <Paragraph>
          <strong>Importante:</strong> Em algumas situações, poderemos manter
          determinados dados pessoais mesmo após solicitação de exclusão, por
          motivos de cumprimento legal, resolução de disputas ou execução de
          contratos.
        </Paragraph>

        <Title>6. Retenção de Dados</Title>
        <Paragraph>
          Mantemos seus dados somente pelo tempo necessário para cumprir as
          finalidades para as quais foram coletados ou conforme exigido por lei.
          Após esse período, os dados são descartados de forma segura,
          minimizando riscos de vazamento ou uso indevido.
        </Paragraph>

        <Title>7. Transferência Internacional de Dados</Title>
        <Paragraph>
          Caso seja necessária qualquer transferência de dados para fora do
          território nacional (por exemplo, servidores em outros países),
          garantimos a conformidade com a LGPD, adotando cláusulas contratuais
          específicas e certificações que assegurem um nível de proteção
          adequado.
        </Paragraph>

        <Title>8. Alterações Nesta Política</Title>
        <Paragraph>
          Podemos atualizar esta <strong>Política de Dados</strong> periodicamente
          para refletir mudanças em nossas práticas ou na legislação aplicável.
          Qualquer alteração significativa será comunicada em nossos canais
          oficiais, para que você esteja sempre ciente de como tratamos suas
          informações.
        </Paragraph>

        <Paragraph>
          Em caso de dúvidas sobre nossa Política de Dados ou sobre como seus
          dados estão sendo tratados, entre em contato. Estamos à disposição
          para fornecer informações adicionais e garantir a melhor experiência
          possível, com total respeito aos seus direitos e privacidade.
        </Paragraph>

        <Paragraph>
          <em>
            Última atualização: <strong>01 de Janeiro de 2025</strong>
          </em>
        </Paragraph>
      </ContentContainer>
    </All>
  );
};

export default Termos;
