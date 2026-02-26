

export function ProblemSection() {
  return (
    <section className="px-4 py-10 md:py-20">
      <div className="max-w-5xl mx-auto">

        <h2 className="
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          font-semibold 
          text-center 
          mb-8
        ">
          🟠 Знакомо?
        </h2>

        <div className="
          rounded-3xl 
          border 
          border-orange-200 
          bg-orange-50 
          p-6 
          md:p-10 
          shadow-md
        ">

          <ul className="
            flex 
            flex-col 
            gap-4 
            text-base 
            sm:text-lg 
            md:text-xl
          ">
            <li>— ребёнок понимает русский, но не говорит</li>
            <li>— говорит на одном языке, а второй игнорирует</li>
            <li>— стесняется говорить по-русски</li>
            <li>— вы живёте за границей, где нет русскоязычной среды</li>
          </ul>

          <div className="
            mt-8 
            text-center 
            text-lg 
            md:text-xl 
            font-medium
          ">
            <span className="block mb-2">
              👉 Если вы узнали своего ребёнка —
            </span>
            <span className="text-emerald-400 font-semibold">
              важно не ждать.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}