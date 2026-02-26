export function ProgramsSection() {
  return (
    <section className="px-4 py-12 md:py-24 ">
      <div className="max-w-6xl mx-auto">

        <h2 className="
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          font-semibold 
          text-center 
          mb-10
        ">
          📚 Программы
        </h2>

        <div className="
          grid 
          gap-5 
          sm:grid-cols-2 
          md:grid-cols-4
          mb-12
        ">
          {[
            "Развитие речи",
            "Чтение и письмо",
            "Окружающий мир",
            "Рисование"
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-amber-50
                border border-amber-200
                rounded-2xl
                p-6
                text-center
                shadow-sm
                hover:shadow-md
                transition
                text-base
                sm:text-lg
                md:text-xl
                font-medium
              "
            >
              {item}
            </div>
          ))}
        </div>

        <div className="
          bg-amber-500
          text-white
          rounded-3xl
          p-6
          md:p-10
          text-center
          shadow-lg
        ">
          <p className="
            text-lg
            sm:text-xl
            md:text-2xl
            leading-snug
            font-semibold
          ">
            Мы не просто учим говорить —
            <br className="hidden sm:block" />
            мы формируем полноценную русскую речь.
          </p>
        </div>

      </div>
    </section>
  );
}