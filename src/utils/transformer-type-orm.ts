import { ValueTransformer } from 'typeorm';

export const timeTransformer: ValueTransformer = {
  to: (value: Date | number) => (value ? new Date(value) : undefined),
  from: (value: Date) => (value ? new Date(value).getTime() : null),
};
