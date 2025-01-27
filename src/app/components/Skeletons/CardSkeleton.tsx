import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function CardSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton
        sx={{ bgcolor: 'grey.900' }}
        variant="rounded"
        width={200}
        height={300}
      />
      <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: '#424242' }} />
    </div>
  );
}
