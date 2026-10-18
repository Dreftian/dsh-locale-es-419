import fs from 'node:fs';

const metas = JSON.parse(fs.readFileSync('C:/Users/Dreitz/.gemini/antigravity/scratch/dsh-locale-es-419/tools/extracted-metas.json', 'utf8'));

// Curated high quality translations for DeepSeek Harness packages and plugins
const translations = {
  // --- Experimental plugins (Image 5) ---
  "Agent Teams": "Equipos de agentes",
  "Enable team collaboration, team tools, the member roster, and the shared task board.": "Habilita la colaboración en equipo, herramientas grupales, lista de miembros y tablero de tareas compartido.",
  "Voice input": "Entrada de voz",
  "Transcribe recordings locally with SenseVoice; first use requires installing dependencies": "Transcribe grabaciones de voz localmente con SenseVoice; el primer uso requiere instalar dependencias.",
  "Auto Authorization Review": "Revisión automática de autorización",
  "Add an Auto review permission mode that uses the model to assess authorization before each tool call.": "Agrega un modo de revisión automática de permisos que evalúa la autorización antes de cada llamada a una herramienta.",
  "Developer Tools": "Herramientas de desarrollador",
  "Inspect and debug raw session data, grouped chat messages, and the NodeJS backend.": "Inspecciona y depura datos sin procesar de la sesión, mensajes agrupados del chat y el backend de NodeJS.",
  "Git Worktrees": "Worktrees de Git",
  "Let the agent create a new Git branch and worktree, then continue there.": "Permite al agente crear una nueva rama de Git y worktree, y continuar trabajando allí.",
  "Machine translation of reasoning": "Traducción automática del razonamiento",
  "Machine translation of expanded reasoning; source text is sent to the selected service": "Traducción automática del razonamiento extendido; el texto fuente se envía al servicio seleccionado.",
  "Display expanded reasoning in another language using machine translation.": "Muestra el razonamiento extendido en otro idioma mediante traducción automática.",
  "Persistent terminals": "Terminales persistentes",
  "Keep shell processes alive across tool calls.": "Mantiene los procesos de la terminal activos entre llamadas a herramientas.",
  "Session search": "Búsqueda en sesiones",
  "Give Agents tools to search and read earlier sessions from the current workspace.": "Proporciona a los agentes herramientas para buscar y leer sesiones anteriores del espacio de trabajo actual.",
  "Conversation-following titles": "Títulos según la conversación",
  "Refresh session titles as new human prompts arrive.": "Actualiza los títulos de las sesiones a medida que llegan nuevas instrucciones del usuario.",

  // --- Session & core plugins (Image 3) ---
  "Composition-authored deployment persona section for the DeepSeek Harness": "Sección de personalidad de despliegue compuesta para DeepSeek Harness.",
  "Model-facing filesystem tools (read, write, edit) over the DeepSeek Harness filesystem": "Herramientas de sistema de archivos orientadas al modelo (lectura, escritura, edición).",
  "Model-facing filesystem tools (read, write, edit) over the DeepSeek Harness filesystem...": "Herramientas de sistema de archivos orientadas al modelo (lectura, escritura, edición)...",
  "Token-meter-driven compaction policy and LLM summarization backend for the DeepSeek Harness": "Política de compactación impulsada por conteo de tokens y backend de resumen con LLM.",
  "Human-facing slash command for explicit session compaction": "Comando slash para compactación explícita de la sesión por parte del usuario.",
  "Persistent PTY session seam for the DeepSeek Harness — owner-scoped ids, backend...": "Integración de sesión PTY persistente para la terminal de DeepSeek Harness...",
  "Persistent PTY session seam for the DeepSeek Harness — owner-scoped ids, backend processes, and attach/detach lifecycles": "Integración de sesión PTY persistente para la terminal de DeepSeek Harness: procesos de backend y ciclo de vida de conexión.",
  "Persistent shell PTY backend over the DeepSeek Harness subprocess terminal...": "Backend PTY persistente para el subproceso de la terminal Bash...",
  "Persistent shell PTY backend over the DeepSeek Harness subprocess terminal runtime": "Backend PTY persistente para el subproceso de la terminal Bash.",

  // --- Other plugins & tools ---
  "Browser Use (Playwright)": "Uso de navegador (Playwright)",
  "Let the model browse and operate web pages through Playwright MCP in a launched Chromium.": "Permite al modelo navegar y operar páginas web a través de Playwright MCP en Chromium.",
  "Team Panel": "Panel de equipo",
  "View team members and shared tasks, and navigate to member conversations.": "Visualiza miembros del equipo, tareas compartidas y navega a conversaciones de miembros.",
  "Voice recording": "Grabación de voz",
  "Record speech and insert editable text into the conversation draft.": "Graba voz e inserta texto editable en el borrador de la conversación.",
  "Computer Use (Cua Driver MCP)": "Uso de computadora (Cua Driver MCP)",
  "Let the model operate the desktop through a separately installed cua-driver executable.": "Permite al modelo operar el escritorio mediante el ejecutable cua-driver.",
  "Computer Use (Cua Driver)": "Uso de computadora (Cua Driver)",
  "Let the model operate the desktop with the bundled Cua Driver runtime; needs desktop permissions for the app that launches dsh.": "Permite al modelo operar el escritorio con el entorno integrado de Cua Driver.",
  "NodeJS Inspector": "Inspector de NodeJS",
  "Press Ctrl/Cmd+Shift+. to open Chrome DevTools in the bottom panel for development and debugging.": "Presiona Ctrl/Cmd+Shift+. para abrir Chrome DevTools en el panel inferior.",
  "Custom plugin markets": "Mercados de plugins personalizados",
  "Adds a Discover tab to Plugins for browsing and installing bundles from plugin market indexes you add": "Agrega una pestaña Descubrir en Plugins para explorar e instalar paquetes desde índices externos.",
  "Ralph loops": "Bucles de Ralph",
  "Run explicitly requested repeated work with fresh agents.": "Ejecuta tareas repetitivas solicitadas explícitamente con nuevos agentes.",
  "Session Log": "Registro de sesión",
  "Enable analysis of the current session's raw data and grouped chat messages in the session sidebar.": "Habilita el análisis de datos sin procesar de la sesión actual y mensajes agrupados en la barra lateral.",
  "DSH": "DSH",
  "Provide the official powered-by-DSH badge skill.": "Proporciona la habilidad oficial de insignia impulsada por DSH.",
  "Speech recognition": "Reconocimiento de voz",
  "Manage speech transcription and select a recognition service.": "Administra la transcripción de voz y selecciona un servicio de reconocimiento.",
  "Local SenseVoice recognition": "Reconocimiento local SenseVoice",
  "Transcribe recordings into text locally with SenseVoice.": "Transcribe grabaciones a texto localmente con SenseVoice.",
  "Team Tools": "Herramientas de equipo",
  "Give agents tools to coordinate members, exchange messages, and manage shared tasks.": "Proporciona herramientas a los agentes para coordinar miembros, intercambiar mensajes y gestionar tareas compartidas.",
  "Composer Decoration": "Decoración del editor",
  "Displays a blue circle below the message composer.": "Muestra un círculo azul debajo del editor de mensajes.",
  "Demo MCP Connection": "Conexión de demostración MCP",
  "Connects a remote MCP server to make its tools available to the agent.": "Conecta un servidor MCP remoto para poner sus herramientas a disposición del agente.",
  "Task scheduling": "Programación de tareas",
  "Stores automation tasks, runs each in its original session when it is due, and gives the agent tools to manage them.": "Almacena tareas automáticas, ejecuta cada una en su sesión original y le da herramientas al agente para administrarlas.",
  "Claude Code subagent": "Subagente Claude Code",
  "Delegate one task to Claude Code using its native authentication and settings.": "Delega una tarea a Claude Code utilizando su autenticación y configuración nativa.",
  "Codex subagent": "Subagente Codex",
  "Delegate one task to Codex using its native authentication and settings.": "Delega una tarea a Codex utilizando su autenticación y configuración nativa.",

  // Module short names and common descriptions
  "api-account-controller": "Controlador de cuenta",
  "api-gateway": "Puerta de enlace API",
  "api-job-controller": "Controlador de tareas en segundo plano",
  "api-remotes": "API de cliente remota",
  "api-session-controller": "Controlador de sesiones",
  "api-settings-controller": "Controlador de configuración",
  "api-terminal-controller": "Controlador de terminal",
  "api-workspace-controller": "Controlador del espacio de trabajo",
  "api-workspace-files": "Archivos del espacio de trabajo",
  "attachment-local": "Almacenamiento local de adjuntos",
  "config-editor": "Editor de configuración de plugins",
  "hmr": "Recarga rápida de cliente Web (HMR)",
  "plugin-manager": "Administrador de plugins",
  "plugin-manager/tools": "Herramientas de administración de plugins",
  "web-app": "Soporte de aplicación Web",
  "web-app/startup": "Inicio de aplicación Web",
  "connection": "Conexión de cliente",
  "file-upload": "Subida de archivos",
  "locale": "Idioma de la interfaz",
  "modules": "Cargador de módulos",
  "product-analytics": "Telemetría de la aplicación",
  "resources": "Servicio de recursos",
  "shortcuts": "Atajos de teclado",
  "ui-agent-preset": "Preajustes del agente",
  "ui-approval": "Aprobación de operaciones",
  "ui-attachment": "Archivos adjuntos",
  "ui-brand-official": "Identidad DeepSeek",
  "ui-chat": "Vista del chat",
  "ui-commands": "Selector de comandos",
  "ui-conversation": "Marco de conversación"
};

// Also map any matching chinese values from extracted-metas
for (const [key, obj] of Object.entries(metas)) {
  if (translations[key]) {
    if (obj.zh) translations[obj.zh] = translations[key];
  }
}

fs.writeFileSync('C:/Users/Dreitz/.gemini/antigravity/scratch/dsh-locale-es-419/locale/es-419/packageMeta.json', JSON.stringify(translations, null, 2), 'utf8');
console.log('Saved packageMeta.json with', Object.keys(translations).length, 'translations');
