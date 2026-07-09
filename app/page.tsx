import Link from "next/link";

export default function LanguageGateway() {
  return (
    <main className="container flex min-h-screen flex-col justify-center py-20">
      <p className="eyebrow">SIOJ</p>
      <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
        Sistema Simbiótico de Interoperabilidade e Organização Jurídica
      </h1>
      <p className="body-copy mt-8 max-w-3xl text-xl">
        Public research laboratory for cognitive governance, legal knowledge organization and
        Human-AI symbiosis.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/pt" hrefLang="pt-BR" className="language-card">
          Português
        </Link>
        <Link href="/en" hrefLang="en" className="language-card">
          English
        </Link>
      </div>
    </main>
  );
}
