export function DiagnosticsSection() {
    return (
        <section className="px-4 py-14 md:py-24 ">
            <div className="max-w-5xl mx-auto">

                {/* Заголовок */}
                <h2 className="
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          font-semibold 
          text-center 
          mb-10
        ">
                    🟠 Диагностика речи
                </h2>

                {/* Карточка */}
                <div className="
          bg-amber-50 
          border border-amber-200 
          rounded-3xl 
          p-6 
          md:p-10 
          shadow-md
        ">

                    <h3 className="
            text-lg 
            sm:text-xl 
            md:text-2xl 
            font-medium 
            mb-6
          ">
                        Что вы получите:
                    </h3>

                    <ul className="
            flex 
            flex-col 
            gap-4 
            text-base 
            sm:text-lg 
            md:text-xl
          ">
                        <li className="flex gap-3">
                            <span>✔️</span>
                            <span>Определим уровень русского языка</span>
                        </li>
                        <li className="flex gap-3">
                            <span>✔️</span>
                            <span>Дадим рекомендации родителям</span>
                        </li>
                        <li className="flex gap-3">
                            <span>✔️</span>
                            <span>Подберём подходящую группу</span>
                        </li>
                    </ul>

                    <div className="
            mt-8 
            flex 
            flex-col 
            sm:flex-row 
            sm:justify-between 
            sm:items-center 
            gap-4
          ">
                        <div className="
              text-lg 
              md:text-xl 
              font-semibold 
              text-orange-600
            ">
                            ⏱️ 20 минут
                        </div>
                        <a href="">
                            <button className="
              bg-orange-500 
              hover:bg-orange-600 
              transition 
              text-white 
              font-medium 
              px-6 
              py-3 
              rounded-full 
              shadow-md
              w-full 
              sm:w-auto
            ">
                                Записаться
                            </button>
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}