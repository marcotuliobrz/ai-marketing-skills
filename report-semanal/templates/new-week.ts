// TEMPLATE: cria arquivo manual de uma semana só pra sobrescrever headlines.
//
// Quando usar este template:
//   • Você quer escrever headlines/highlights editoriais customizados pra uma
//     semana específica (ex: "W20 — pivot estratégico de criativo").
//   • Caso contrário, NÃO crie arquivo manual — o registry.ts gera placeholder
//     automaticamente a partir de ISO 8601 toda terça.
//
// Como usar:
//   1. Copie este arquivo pra components/gnatus/semanal/weeks/wXX-YYYY.ts
//   2. Substitua XX pelo número ISO da semana e YYYY pelo ano.
//   3. Preencha meetingDate (terça-feira em ISO), labels em pt-BR.
//   4. Importe e registre em weeks/registry.ts MANUAL_WEEKS array.
//
// Exemplo de uso:
//   import { W19_2026 } from './w19-2026'
//   const MANUAL_WEEKS: WeekDefinition[] = [W16_2026, W17_2026, W18_2026, W19_2026]

import type { WeekDefinition } from '../types'

/**
 * W?? de ????  —  Reunião de ??/???/???? (terça).
 *
 * Snapshot mostra:
 *   LW = ??/??? (ter) → ??/??? (seg)
 *   PW = ??/??? (ter) → ??/??? (seg)
 *
 * Snapshot/Demandas/Changes Summary resolvem em runtime via /api/semanal/*.
 * Aqui só sobrescrevemos a metadata editorial.
 */
export const W??_???? : WeekDefinition = {
  week: 0,                          // número ISO da semana (16-53)
  year: 2026,
  meetingDate: '2026-MM-DD',         // ISO da terça-feira da reunião
  meetingDateLabel: '?? de ??? de ????',   // pt-BR ex: '12 de maio de 2026'
  weekRangeLabel: '?? a ?? de ???',         // pt-BR ex: '5 a 11 de maio'
  status: 'upcoming',                // 'future' | 'upcoming' | 'available'
  reports: {
    expansao: {
      headline: 'Headline curta e descritiva — sem hype.',
      // highlights: [
      //   'Bullet 1 (frase completa, max 1 linha)',
      //   'Bullet 2',
      // ],
    },
    ads: {
      headline: 'Headline da semana pra Ads.',
    },
    service: {
      headline: 'Headline da semana pra Service.',
    },
    automation: {
      headline: 'Headline da semana pra Automation.',
    },
  },
  // ata e transcript são preenchidos pós-call via API ou edição direta
  // ata: {
  //   participants: ['Branevo: Joao, ...', 'Gnatus: ...'],
  //   decisions: ['Decisão 1', 'Decisão 2'],
  //   nextSteps: [
  //     { owner: 'Branevo', task: 'Entregar X', due: '2026-MM-DD' },
  //   ],
  // },
}

// REGISTRAR no weeks/registry.ts:
//
//   import { W??_???? } from './w??-????'
//   ...
//   const MANUAL_WEEKS: WeekDefinition[] = [
//     W16_2026,
//     W17_2026,
//     W18_2026,
//     W??_????,   // ← adiciona aqui
//   ]
