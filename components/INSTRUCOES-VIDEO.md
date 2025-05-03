# Como Configurar Seu Vídeo

## Configurações Simples

Abra o arquivo `components/video-player.tsx` e edite apenas as três constantes no topo do arquivo:

\`\`\`javascript
// URL do vídeo (YouTube, Vimeo, etc.)
const VIDEO_URL = "https://player.vimeo.com/video/76979871" // Substitua pelo seu link de vídeo

// URL da imagem de capa (thumbnail)
const THUMBNAIL_URL = "/placeholder.svg?height=360&width=640" // Substitua pelo URL da sua imagem de capa

// Duração do vídeo em segundos (para mostrar a oferta)
const VIDEO_DURATION = 30 // Substitua pela duração real do seu vídeo em segundos
\`\`\`

## Como Obter os Links Corretos

### Para Vimeo:

1. Faça upload do seu vídeo para o Vimeo
2. Vá para o vídeo e clique em "Compartilhar"
3. Clique na aba "Incorporar"
4. Copie o URL do src do iframe (exemplo: `https://player.vimeo.com/video/123456789`)
5. Cole este URL na constante `VIDEO_URL`

### Para YouTube:

1. Faça upload do seu vídeo para o YouTube
2. Vá para o vídeo e clique em "Compartilhar"
3. Clique em "Incorporar"
4. Copie o URL do src do iframe (exemplo: `https://www.youtube.com/embed/abcdefgh`)
5. Cole este URL na constante `VIDEO_URL`

### Para a Thumbnail:

1. Faça upload da sua imagem para qualquer serviço de hospedagem de imagens ou para o seu próprio servidor
2. Copie o URL direto da imagem
3. Cole este URL na constante `THUMBNAIL_URL`

## Dicas para Melhor Performance

- Use uma imagem de thumbnail otimizada (tamanho recomendado: 640x360 pixels)
- Defina a duração exata do seu vídeo para que a oferta apareça no momento certo
- Para vídeos do YouTube, adicione `?autoplay=1` ao final do URL para iniciar automaticamente quando o usuário clicar
- Para vídeos do Vimeo, adicione `?autoplay=1&title=0&byline=0&portrait=0` para iniciar automaticamente e remover elementos da interface

## Testando Localmente

Para testar localmente com uma imagem de thumbnail:

1. Coloque sua imagem na pasta `public` do projeto
2. Use o caminho relativo, por exemplo: `const THUMBNAIL_URL = "/minha-imagem.jpg"`
