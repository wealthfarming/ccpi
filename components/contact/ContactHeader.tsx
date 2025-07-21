// components/contact/ContactHeader.tsx
export default function ContactHeader() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-24 md:py-48"
      style={{
        backgroundImage: 'url(https://ccpi.vn/wp-content/uploads/2017/09/page-title-background.jpg)',
        backgroundAttachment: 'fixed', // For parallax effect, but needs JS for true parallax
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay for dark skin */}
      <div className="container mx-auto px-4 relative z-10 text-white text-left">
        <h3 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h3>
        <span className="text-2xl md:text-3xl">Get Intouch</span>
      </div>
    </div>
  );
}