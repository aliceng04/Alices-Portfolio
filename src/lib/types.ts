// Post types. Add one here and it shows up in the schema, the cards and the filter.
export const WORK_TYPES = {
  'case-study': 'Case study',
  analysis: 'Analysis',
  prototype: 'Prototype',
  writing: 'Writing',
  'side-project': 'Side project',
} as const;

export type WorkType = keyof typeof WORK_TYPES;
