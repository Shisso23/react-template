import z from 'zod';

import { BaseFormProps } from '@project/components';
import { userSchema } from './schemas';

export type User = z.infer<typeof userSchema>;

export interface UserProps extends BaseFormProps<User> {
  isEdit?: boolean;
  isArchived?: boolean;
}
