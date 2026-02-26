export function WhatsAppFixedButton() {
  const phone = "819012345678"; 
  const text = encodeURIComponent("Здравствуйте! Хочу записаться на диагностику речи.");

  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed z-50
        bottom-4 right-4
        md:bottom-8 md:right-8
        flex items-center gap-3
        rounded-full
        bg-green-500 hover:bg-green-600
        text-white
        shadow-lg
        px-4 py-3
        md:px-5 md:py-4
        transition
      "
      aria-label="Написать в WhatsApp"
    >
      <span className="text-xl md:text-2xl">💬</span>
      <span className=" sm:block text-sm md:text-base font-medium">
        Записаться на диагностику
      </span>
    </a>
  );
}