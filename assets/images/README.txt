# Imágenes de Veterinaria Del Sur Panamá

## Logo Principal ✅ CONFIGURADO

**Archivo actual**: `logo.avif` (5.7 KB)
**Estado**: Implementado y funcionando

El logo está configurado en:
- Header (navegación superior)
- Footer (pie de página)

Usa el elemento `<picture>` para compatibilidad óptima.

## Fallback

Si el logo no carga, aparece automáticamente el texto:
**"Veterinaria Del Sur Panamá"**

---

## Otras Imágenes Recomendadas

### Hero Section
Actualmente usa placeholders de Unsplash. Para personalizar:

Editar en `/assets/js/app.js` → `CONFIG.images.hero`:
- `main`: Veterinaria atendiendo (600x700px)
- `cat`: Gato (250x250px)
- `rabbit`: Conejo (250x250px)

### About Section
Editar en `/assets/js/app.js` → `CONFIG.images.about`:
- Foto del equipo veterinario o instalaciones (600x400px)

### Mascotas Exóticas
Editar directamente en `index.html` (sección `.exotic-pets__gallery`):
- 5 fotos: Conejo, Cobayo, Hurón, Loro, Erizo (300x300px cada una)

---

**Nota**: Este archivo es solo informativo. Los placeholders actuales funcionan correctamente mientras se obtienen fotografías reales.