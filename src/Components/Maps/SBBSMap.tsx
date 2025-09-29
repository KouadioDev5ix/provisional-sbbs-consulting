export function SBBSMap() {
  const mapLink =
    "https://www.google.com/maps/dir/5.3205703,-4.0128052/83Q2%2B8F3+Salomon+Betsaleel+Business+School,+cit%C3%A9+terre+afrique,+Abidjan/@5.3207999,-4.0244549,13z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0xfc1edc29b13eea5:0xd6cf579d9615991c!2m2!1d-3.9488836!2d5.3382454?entry=ttu";

  return (
    <div className="w-full h-80 relative pt-5">
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        <iframe
          title="Google Map SBBS"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.7634609377554!2d-3.9488836!3d5.3382454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1edc29b13eea5%3A0xd6cf579d9615991c!2sSalomon%20Betsaleel%20Business%20School!5e0!3m2!1sfr!2sci!4v1695400000000!5m2!1sfr!2sci"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-transparent cursor-pointer"></div>
      </a>
    </div>
  );
}
