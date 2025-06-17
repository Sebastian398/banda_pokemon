'use client';

import { useRouter } from 'next/navigation';
import Button from '../button/page';
import Card from '../card/page';

export default function PostContent({ content }) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/blog');
  };

  return (
    <>
      <Card title="Información">
        <p className="text-black-900 mb-6">{content}</p>
      </Card>
      <div className="mt-4">
        <Button onClick={handleClick}>Volver</Button>
      </div>
    </>
  );
}
