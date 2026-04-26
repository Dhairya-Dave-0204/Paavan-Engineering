export default function WhatsAppButton() {
  const phoneNumber = "918511326732"; // <-- replace with actual number (with country code, no +)

  const message = "Hello, I am interested in your products.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center text-3xl text-white transition-all duration-300 bg-green-500 rounded-full shadow-md bottom-6 right-6 w-14 h-14 hover:scale-110 hover:shadow-lg"
    >
      <i className="ri-whatsapp-line"></i>
    </a>
  );
}