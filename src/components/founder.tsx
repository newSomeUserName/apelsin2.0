export function FounderSection() {
  return (
    <section className="px-4 py-14 md:py-24">
      <div className="max-w-6xl mx-auto">

        <div className="
          grid 
          gap-10 
          md:grid-cols-2 
          items-center
        ">

          {/* Фото (можно заменить на next/image) */}
          <div className="
            w-full 
            h-[300px] 
            md:h-[420px] 
            rounded-3xl 
            bg-white 
            shadow-md 
            flex 
            items-center 
            justify-center 
            text-gray-400
          ">
            Фото Ольги
          </div>

          {/* Текст */}
          <div>
            <h2 className="
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              font-semibold 
              mb-6
            ">
              Меня зовут Ольга
            </h2>

            <div className="
              flex 
              flex-col 
              gap-5 
              text-base 
              sm:text-lg 
              md:text-xl 
              leading-relaxed
            ">
              <p>
                Более 10 лет я работаю с билингвами в Токио и хорошо знаю,
                как живут семьи за границей, где один родитель русскоговорящий,
                а второй — иностранец.
              </p>

              <p>
                Я создала центр развития речи <span className="font-semibold text-orange-600">«Апельсин»</span>,
                чтобы дети не теряли русский язык и начинали говорить уверенно.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}