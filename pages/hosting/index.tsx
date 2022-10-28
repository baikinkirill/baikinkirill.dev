import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';

export default function Hosting (): ReactElement {
  const router = useRouter();
  useEffect(() => {
    router.push('https://www.reg.ru/?rlink=reflink-44247')
      .catch(() => {
        alert('Ошибка редиректа. Попробуйте перейти по ссылке вручную: https://www.reg.ru/?rlink=reflink-44247');
      });
  }, [router]);

  return <div>Ща буит редирект...</div>;
}

export function getStaticProps (): { props: {} } {
  return {
    props: {}
  };
}
