'use client';

import Button, { type Props } from '../Button';
import { useFormStatus } from 'react-dom';

export default function SubmitButton(props: Props) {
  const { pending } = useFormStatus();
  return <Button {...props} loading={pending} />;
}
