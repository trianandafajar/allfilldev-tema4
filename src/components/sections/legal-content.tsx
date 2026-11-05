import type { LegalDocument } from "@/data/legal";

/** Teks legal: tanggal pembaruan, pengantar, lalu klausul bernomor. */
export function LegalContent({ document }: { document: LegalDocument }) {
  return (
    <section className="container">
      <div className="max-w-[900px]">
        <p className="text-sm uppercase">Terakhir diperbarui: {document.updatedAt}</p>
        <div className="mt-5 grid gap-5">
          {document.intro.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        {document.sections.map((section, i) => (
          <section key={section.heading} className="mt-[40px] lg:mt-[60px]">
            <h2 className="mb-5 text-[28px] md:text-4xl">
              {i + 1}. {section.heading}
            </h2>
            <div className="grid gap-5">
              {section.paragraphs?.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {section.items && (
                <ul className="m-0 list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item} className="mb-2 text-base last:mb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
