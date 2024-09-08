import { z } from 'zod';
import { CategoriesAPIResponseSchema } from '../utils/receipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;