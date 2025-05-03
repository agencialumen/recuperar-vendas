# Como Adicionar Seu Vídeo

## Opção 1: Usando Google Drive

1. Faça upload do seu vídeo para o Google Drive
2. Clique com o botão direito no arquivo e selecione "Compartilhar"
3. Clique em "Qualquer pessoa com o link pode visualizar"
4. Copie o link compartilhável
5. Abra o arquivo `components/video-player.tsx`
6. Substitua o valor da constante `VIDEO_URL` pelo seu link do Google Drive:

\`\`\`javascript
const VIDEO_URL = "seu-link-do-google-drive-aqui"
\`\`\`

O componente automaticamente converte o link do Google Drive para um formato incorporável.

## Opção 2: Usando Vimeo, YouTube ou outro serviço

Para melhor performance e confiabilidade, recomendamos usar um serviço de hospedagem de vídeo como Vimeo ou YouTube:

1. Faça upload do seu vídeo para Vimeo, YouTube ou outro serviço
2. Obtenha o link de incorporação (embed)
3. Abra o arquivo `components/video-player-alternative.tsx`
4. Substitua o valor da constante `VIDEO_URL` pelo link de incorporação:

\`\`\`javascript
const VIDEO_URL = "seu-link-de-incorporacao-aqui"
\`\`\`

5. Renomeie `video-player-alternative.tsx` para `video-player.tsx` (substituindo o arquivo original)

## Ajustando o Tempo para Mostrar a Oferta

Por padrão, a oferta aparece 30 segundos após o início do vídeo (para fins de demonstração). Para ajustar este tempo:

1. Localize esta linha no arquivo:

\`\`\`javascript
setTimeout(() => {
  setVideoCompleted(true)
}, 30000) // 30 segundos
\`\`\`

2. Altere `30000` para a duração do seu vídeo em milissegundos (por exemplo, 120000 para 2 minutos)

## Dicas para Melhor Performance

- Comprima seu vídeo antes de fazer upload
- Use um formato moderno como MP4 com codificação H.264
- Para vídeos longos, considere usar Vimeo ou YouTube em vez do Google Drive
- Teste em dispositivos móveis para garantir que o vídeo carregue rapidamente
