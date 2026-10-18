import fs from 'node:fs';
import path from 'node:path';

const harnessRoot = 'C:/Users/Dreitz/.gemini/antigravity/scratch/deepseek-harness';
const esDir = 'C:/Users/Dreitz/.gemini/antigravity/scratch/dsh-locale-es-419/locale/es-419';

function parseObjectKeys(tsSource) {
  const match = tsSource.match(/export const (?:en|managerEn)\b[\s\S]*?=\s*\{([\s\S]*?)\}\s*satisfies/);
  if (!match) return {};
  const result = {};
  const lines = match[1].split('\n');
  for (const line of lines) {
    const m = line.match(/^\s*['"]([^'"]+)['"]\s*:\s*['"`]([\s\S]*?)['"`],?$/);
    if (m) {
      result[m[1]] = m[2];
    }
  }
  return result;
}

// 1. ui-theme
const themeTs = fs.readFileSync(path.join(harnessRoot, 'packages/client/ui-theme/src/client/locales.ts'), 'utf8');
const themeEn = parseObjectKeys(themeTs);
const themeJson = JSON.parse(fs.readFileSync(path.join(esDir, 'settings.theme.json'), 'utf8'));
const missingTheme = Object.keys(themeEn).filter(k => !themeJson[k]);
console.log('Missing in settings.theme.json (' + missingTheme.length + '):', missingTheme);

// 2. ui-chat
const chatTs = fs.readFileSync(path.join(harnessRoot, 'packages/client/ui-chat/src/client/locale.ts'), 'utf8');
const chatEn = parseObjectKeys(chatTs);
const chatJson = JSON.parse(fs.readFileSync(path.join(esDir, 'chat.json'), 'utf8'));
const missingChat = Object.keys(chatEn).filter(k => !chatJson[k]);
console.log('Missing in chat.json (' + missingChat.length + '):', missingChat);

// 3. ui-schedule / schedule.manager
const schedTs = fs.readFileSync(path.join(harnessRoot, 'packages/client/ui-schedule/src/client/task-manager-locales.ts'), 'utf8');
const schedEn = parseObjectKeys(schedTs);
console.log('Schedule manager keys in DSH:', Object.keys(schedEn).length);

// 4. ui-plugin-manager
const pmTs = fs.readFileSync(path.join(harnessRoot, 'packages/client/ui-plugin-manager/src/client/locales.ts'), 'utf8');
const pmEn = parseObjectKeys(pmTs);
const pmJson = JSON.parse(fs.readFileSync(path.join(esDir, 'pluginManager.json'), 'utf8'));
const missingPm = Object.keys(pmEn).filter(k => !pmJson[k]);
console.log('Missing in pluginManager.json (' + missingPm.length + '):', missingPm);
