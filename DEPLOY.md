# Despliegue en Coolify

Este proyecto es un **Static Site** (generado con `next export`).

## Configuración Recomendada

Al crear el recurso en Coolify, selecciona:

- **Type**: Static Site
- **Build Image**: Nixpacks (recomendado)

### Parámetros de Build

| Parámetro | Valor | Notas |
|-----------|-------|-------|
| **Build Command** | `npm run build` | Genera los archivos estáticos |
| **Install Command** | `npm install` | Instala dependencias |
| **Publish Directory** | `out` | **IMPORTANTE**: Next.js exporta aquí por defecto |
| **Node Version** | `20` | O la versión LTS más reciente |

## Notas Adicionales

1. **Imágenes**: En `next.config.ts` ya hemos configurado `images: { unoptimized: true }` para que las imágenes funcionen correctamente en la exportación estática sin un servidor de imágenes de Next.js.
2. **Rutas**: Hemos activado `trailingSlash: true` para asegurar compatibilidad con la mayoría de servidores web estáticos.
