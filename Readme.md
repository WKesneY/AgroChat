# Agro Chat - Chat Bot

O presente projeto foi desenvolvido como trabalho de conclusão do **Curso IA Generativa Aplicada na Agricultura**. Nesse contexto, o objetivo foi criar um chatbot interativo com integração à API do Gemini, com foco no uso de IA generativa. O chatbot foi desenvolvido com a implementação de parâmetros de temperatura, topP e topK, conceitos estudados no curso, responsáveis por controlar o comportamento da IA durante a geração das respostas.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir a interface do usuário.
- **SCSS**: Pré-processador CSS utilizado para estilização da aplicação.
- **Axios**: Biblioteca para realizar requisições HTTP (usada para integrar a API do Gemini).
- **SQLite**: Banco de dados utilizado para armazenar o histórico de conversas entre o usuário e o chatbot.
- **Gemini API**: API da Google para gerar respostas baseadas em Inteligência Artificial (IA).

## Funcionalidades

Este projeto integra um chatbot com a API Gemini para gerar respostas personalizadas com base no que o usuário digitar. O processo funciona da seguinte maneira:

1. **Cadastro e Login**: O usuário inicia o processo criando uma conta com login e senha. Após o cadastro, é possível fazer o login para acessar o sistema. Isso permite um histórico de interações e configurações personalizadas para cada usuário.

2. **Interação com o Chatbot**: O usuário pode enviar mensagens para o chatbot, que responde com base na integração com a API Gemini. A API gera respostas utilizando modelos de linguagem baseados em IA.

3. **Personalização de Parâmetros**: O sistema oferece controles para o usuário ajustar três parâmetros principais de geração de texto:
   - **Temperatura**: Controla a criatividade da resposta. Valores mais baixos geram respostas mais determinísticas, enquanto valores mais altos aumentam a criatividade.
   - **Top-P**: Limita as palavras possíveis para a geração de texto, aumentando a diversidade ou restringindo as respostas.
   - **Top-K**: Define o número de opções consideradas na escolha da palavra, tornando a geração mais ampla ou mais restrita.

4. **Histórico de Conversas**: O sistema armazena um histórico completo de interações, permitindo ao usuário revisar mensagens e respostas anteriores.

