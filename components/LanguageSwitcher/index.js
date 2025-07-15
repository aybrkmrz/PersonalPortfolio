import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale, asPath } = router;

  const otherLocale = locale === 'tr' ? 'en' : 'tr';

  return (
    <div className="fixed top-5 right-5 z-50">
      <Link href={asPath} locale={otherLocale}>
        <button className="bg-gray-800 text-white px-3 py-1 rounded">
          {otherLocale.toUpperCase()}
        </button>
      </Link>
    </div>
  );
}