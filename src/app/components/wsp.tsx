import Image from "next/image";
import Link from "next/link";

export default function WspButton() {
  const phoneNumber = "+5493517564852";
  const message = "Hola! Visite la web de Vitality y quiero más información.";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURI(message)}`;

  return (
    <>
      <div>
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/Whatsapp.svg"
            alt="whatsapp"
            width={100}
            height={100}
            className="fixed  bottom-8 right-4 rounded-full cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
}