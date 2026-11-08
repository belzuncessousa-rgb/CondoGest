# CondoGest

App para a gestão de condomínios residenciais, pensado primeiro para o
celular. Esta primeira versão é um **protótipo clicável do lado do síndico**:
tela de login, painel inicial e reserva de áreas comuns, além de esboços das
telas de Moradores, Avisos e Mais.

É só HTML, CSS e JavaScript, sem etapa de build e sem servidor, então roda
direto no GitHub Pages. Todos os dados são de exemplo e ficam no navegador.

**Ver no celular:** https://belzuncessousa-rgb.github.io/CondoGest/

## Como testar

Abra o link acima no celular (ou o `index.html` no navegador). No computador,
o app aparece como uma coluna da largura de um celular. Qualquer e-mail e
senha funcionam.

## O que tem no protótipo

| Tela | O que funciona |
| --- | --- |
| **Login** | Escolha Síndico / Morador (morador mostra "em breve"), e-mail e senha com validação, "manter conectado", esqueci a senha, entrada com código do condomínio (simulada). |
| **Início** | Saudação, quantos pedidos de reserva aguardam resposta, as reservas de hoje em ordem de horário (com marcador "Agora"), ações rápidas, último aviso. |
| **Reservas → Pedidos** | Cada pedido com data, horário, pessoas, observação do morador, taxas e alertas (ex.: acima da capacidade). Aprovar, ou recusar com um motivo que o morador vê. Dá para desfazer. |
| **Reservas → Agenda** | Faixa de duas semanas com marcação dos dias ocupados, filtro por área, detalhes da reserva, cancelamento (toque duas vezes para confirmar). |
| **Reservas → Áreas** | Seis áreas comuns com regras, taxas, modo de aprovação e ocupação da semana. |
| **Página da área** | Capacidade, taxa, caução, antecedência, prazo de cancelamento, horários livres por dia, chave "exige minha aprovação", regulamento. Toque num horário livre para reservar em nome de um morador. |
| **Moradores** | Lista de apartamentos com busca; toque para ver as reservas do apartamento. |
| **Avisos** | Comunicados do condomínio com contagem de leitura; publicar um novo. |
| **Mais** | Perfil, atalhos para módulos futuros (chamados, encomendas, boletos, documentos), restaurar dados de exemplo, sair. |

## Decisões desta primeira versão

Todas são fáceis de mudar:

- **Idioma:** português do Brasil (síndico, condôminos, apto, R$, boleto).
- **Prédio de exemplo:** "Edifício Alameda", 64 apartamentos em 16 andares,
  com a síndica "Ana Ribeiro". Pessoas e apartamentos são inventados.
- **Áreas comuns:** Salão de festas (com aprovação, R$ 250 + caução de
  R$ 500, três turnos de 4 h), Churrasqueira (imediata, R$ 80, turnos de
  3 h), Quadra de tênis (imediata, grátis, 1 h), Suíte de hóspedes (com
  aprovação, R$ 150/noite), Sala de coworking (imediata, grátis, 2 h) e
  Piscina (sem reserva; aparece fechada para manutenção, para mostrar esse
  estado).
- **Dois modos de reserva por área:** *imediata* (confirmada na hora) ou
  *com aprovação* (vai para os Pedidos do síndico). O síndico troca o modo
  de cada área.
- **O síndico pode reservar em nome de um morador** a partir de qualquer
  horário livre.
- **Recusar exige um motivo**, que o morador vê.
- **Navegação:** barra inferior com Início, Reservas, Moradores, Avisos, Mais.
- **Visual:** verde-petróleo escuro com detalhes em latão; segue o modo claro
  ou escuro do celular.
- **Tecnologia:** sem framework e sem build por enquanto. Quando virar um app
  de verdade, escolhemos a stack (React Native / Expo ou PWA) e um backend.

## Próximos passos sugeridos

1. Visão do morador: reservar uma área, ver minhas reservas, receber avisos.
2. Chamados de manutenção, controle de encomendas e boletos (os itens "Em breve").
3. Escolher a stack definitiva e o backend (contas, condomínios, reservas, pagamentos).

## Publicação

O workflow `.github/workflows/pages.yml` publica o site no GitHub Pages a cada
push na `main`. Configuração única no repositório:
**Settings → Pages → Build and deployment → Source: GitHub Actions**.
