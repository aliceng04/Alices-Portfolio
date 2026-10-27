import type { WorkType } from './types';

// Tag colours. Post types get a fixed colour; any other tag gets a stable one picked from its name.
export const TONES = ['blue', 'violet', 'green', 'orange', 'pink', 'teal', 'amber'] as const;
export type Tone = (typeof TONES)[number];

const TYPE_TONES: Record<WorkType, Tone> = {
  'case-study': 'orange',
  analysis: 'violet',
  prototype: 'green',
  writing: 'blue',
  'side-project': 'pink',
};

export const typeTone = (type: WorkType): Tone => TYPE_TONES[type];

export function tagTone(name: string): Tone {
  let h = 0;
  for (const c of name.toLowerCase()) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return TONES[h % TONES.length];
}
