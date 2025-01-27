'use client';

import TvDetailLayout from '@/layouts/TvDetailLayout';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const id = Number(params.id);

  return <TvDetailLayout id={id} />;
}
