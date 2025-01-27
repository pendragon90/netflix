'use client';

import MovieDetailLayout from '@/layouts/MovieDetailLayout';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const id = Number(params.id);

  return <MovieDetailLayout id={id} />;
}
