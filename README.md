# dsh-locale-es-419

<p align="right"><strong>Español</strong> | <a href="#english">English</a></p>

Paquete de idioma **Español (Latinoamérica) - `es-419`** para la interfaz web y desktop de [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

Este plugin comunitario registra el idioma `es-419` (Español Latinoamérica) en el selector de idiomas de la configuración (**Configuración → General → Idioma**) y suministra los diccionarios traducidos con terminología adaptada a América Latina (por ejemplo: *archivo* en lugar de *fichero*, *computadora*, *configuración*, *guardar*, *cancelar*, *detener*).

---

## Características

- **Soporte nativo BCP 47 (`es-419`):** Reconocido automáticamente por navegadores y sistemas operativos de la región (México, Colombia, Argentina, Perú, Chile, etc.).
- **Compatibilidad con fallback a inglés (`en`):** Cualquier texto o nueva funcionalidad que aún no tenga traducción recurre de forma segura a inglés, garantizando que la interfaz nunca se rompa.
- **Persistencia automática:** Al seleccionar el idioma en la pantalla de configuración, se guarda de forma persistente en `locale.preference` en el archivo de configuración de DeepSeek Harness (`cordis.patch.yml`).
- **Arquitectura oficial de plugins (`dsh-plugin`):** Se integra mediante el API oficial `ctx.locale.addLanguage` y `ctx.locale.register`.

---

## Instalación

### Opción 1: Interfaz Web

Desde la consola donde ejecutas DeepSeek Harness:

```bash
dsh plugin --profile web add dsh-locale-es-419
```

O enlazando el repositorio local:

```bash
git clone https://github.com/Dreftian/dsh-locale-es-419.git
cd dsh-locale-es-419
dsh plugin --profile web add link:$(pwd)
```

En Windows (PowerShell):

```powershell
git clone https://github.com/Dreftian/dsh-locale-es-419.git
cd dsh-locale-es-419
dsh plugin --profile web add link:(Get-Location).Path
```

### Opción 2: Aplicación Desktop

```bash
dsh plugin --profile desktop add link:$(pwd)
```

En Windows (PowerShell):

```powershell
dsh plugin --profile desktop add link:(Get-Location).Path
```

---

## Cómo activar el idioma

1. Abre la interfaz de DeepSeek Harness (Web o Desktop).
2. Ve a **Settings → General** (Configuración → General).
3. En la fila **Language** (Idioma), selecciona **Español (Latinoamérica)**.
4. La interfaz se actualizará inmediatamente sin necesidad de recargar la página.

---

## Contribuir

¡Las contribuciones de la comunidad son bienvenidas! Si deseas ajustar o agregar traducciones:

1. Los archivos fuente se encuentran en `locale/es-419/*.json`.
2. Ejecuta la compilación con:
   ```bash
   npm run build
   ```
3. Envía tu Pull Request a este repositorio.

---

<a id="english"></a>
## English

**dsh-locale-es-419** is an open-source community language pack plugin providing Latin American Spanish (`es-419`) localization for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

### Installation

```bash
dsh plugin --profile web add link:<path-to-dsh-locale-es-419>
```

Open **Settings → General → Language** and select **Español (Latinoamérica)**.

---

## Licencia

[MIT](LICENSE) © 2026 Dangelo Vilchez ([@Dreftian](https://github.com/Dreftian))
