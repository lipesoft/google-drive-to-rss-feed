# Google Drive → RSS Feed Integration (Neonews)

## Sobre o Projeto

Este projeto foi desenvolvido a partir de uma **demanda real de empresa**, com o objetivo de automatizar a publicação de imagens em uma plataforma de comunicação digital (**Neonews**), que consome conteúdos via **RSS/XML**.

O problema inicial consistia em um processo manual e pouco escalável para envio de imagens. A solução proposta foi a criação de um **pipeline automatizado**, utilizando ferramentas do ecossistema Google, capaz de gerar um feed RSS dinâmico a partir de imagens armazenadas no Google Drive.

---

## Problema

- Processo manual de upload de imagens no sistema
- Baixa escalabilidade
- Dificuldade de atualização frequente de conteúdo
- Falta de automação para integração com o Neonews

---

## Solução Desenvolvida

Foi implementado um sistema automatizado com o seguinte fluxo:

Google Drive → Google Sheets → Google Apps Script → RSS XML → Neonews

### Funcionamento

1. As imagens são armazenadas em uma pasta pública no Google Drive
2. Um script lista automaticamente os arquivos e registra os dados em uma planilha
3. Outro script processa essas informações e gera um feed RSS em XML
4. O RSS é publicado como Web App e consumido diretamente pelo Neonews

---

## Funcionalidades

- Leitura automática de imagens do Google Drive
- Organização dos dados em Google Sheets
- Conversão de links do Drive em URLs diretas de imagem
- Geração automática de feed RSS (XML)
- Atualização contínua via triggers (gatilhos automáticos)
- Publicação como Web App acessível publicamente

---

## Arquitetura do Sistema

- **Google Drive** → Armazenamento das imagens
- **Google Sheets** → Estrutura de dados intermediária
- **Apps Script** → Processamento e geração do RSS
- **Web App** → Endpoint público do feed
- **Neonews** → Consumo do RSS como fonte de conteúdo

---

## Configuração

### 1. Google Drive

- Criar uma pasta para armazenar as imagens
- Tornar a pasta pública

### 2. Google Sheets

- Criar uma planilha
- Torná-la pública

### 3. Apps Script

#### Script 1 – Listar imagens

- Acessa a pasta do Drive
- Lista arquivos
- Salva dados na planilha

#### Script 2 – Gerar RSS

- Lê os dados da planilha
- Converte links do Drive
- Gera XML no padrão RSS 2.0

---

## Exemplo de saída (RSS)

```xml
<item>
  <title>imagem.jpg</title>
  <link>https://drive.google.com/...</link>
  <enclosure url="https://drive.google.com/uc?export=view&id=FILE_ID" type="image/jpeg" />
</item>
```
---

## Automatização

#### O sistema utiliza triggers do Google Apps Script:

- Atualização periódica da lista de imagens
- Geração automática do RSS
- Feed sempre atualizado sem intervenção manual

## Tecnologias Utilizadas

- Google Apps Script
- Google Drive API
- Google Sheets API
- XML (RSS 2.0)

## Resultados

- Redução do trabalho manual
- Maior agilidade na publicação de conteúdo
- Integração automatizada com o Neonews
- Solução escalável e de fácil manutenção

## Contexto Profissional

### Este projeto foi desenvolvido durante minha atuação profissional, com foco em resolver uma necessidade real da empresa.

### Além da implementação técnica, o projeto envolveu:

- Análise do problema
- Definição da arquitetura
- Automação de processos
- Integração com sistema externo

## Autor

Filipe Rodrigues

LinkedIn: https://www.linkedin.com/in/filipe-rodrigues-a79809386
