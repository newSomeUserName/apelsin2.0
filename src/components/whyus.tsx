export function WhyUsSection() {
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
          🟠 Почему родители выбирают нас
        </h2>

        <div className="
          grid 
          gap-5 
          md:grid-cols-2
        ">

          {[
            "10 лет опыта работы с билингвами",
            "Работаем только на русском языке",
            "Мини-группы до 4 детей",
            "Педагоги с профильным образованием",
            "Специализация — развитие речи билингвов"
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-6
                md:p-8
                shadow-md
                border border-amber-200
                flex items-start gap-4
                hover:shadow-lg
                transition
              "
            >
              <div className="text-xl md:text-2xl">⭐️</div>
              <p className="
                text-base
                sm:text-lg
                md:text-xl
                leading-snug
              ">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}