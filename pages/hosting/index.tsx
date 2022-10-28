import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Hosting() {
 const router = useRouter();
 useEffect(() => {
  router.push('https://www.reg.ru/?rlink=reflink-44247');
 }, [router]);

 return <div>Ща буит редирект...</div>;
}

export function getStaticProps() {
 return {
  props: {},
 };
}
