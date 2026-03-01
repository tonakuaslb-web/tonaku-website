import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { mapContactLocation } from "@/app/lib/mappers";
import type { Contact } from "@/tina/__generated__/types";

type FooterProps = Readonly<{
  contacts: Contact[];
}>;

export default function Footer({ contacts }: FooterProps) {
  return (
    <footer id="contact" className="bg-primary-700 text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Nous contacter
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1 : Logo et devise */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="TONAKU Logo"
                width={112}
                height={112}
                className="object-contain"
              />
              <h3 className="text-2xl font-bold">TONAKU</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              Préserver les livres, favoriser l&apos;accès au savoir, soutenir
              la scolarité des jeunes.
            </p>
          </div>

          {/* Colonnes 2 & 3 : Contacts dynamiques */}
          {contacts.map((location) => {
            const mappedLocation = mapContactLocation(location);
            return (
              <div key={location.id}>
                <div className="flex items-start gap-3 mb-4">
                  <MapPin size={20} className="text-secondary-500 mt-1" />
                  <h3 className="text-xl font-bold">
                    {mappedLocation.country}
                    {mappedLocation.city && ` (${mappedLocation.city})`}
                  </h3>
                </div>
                <div className="space-y-3">
                  {mappedLocation.details.map((detail, idx) => (
                    <div
                      key={`${location.id}-${idx}`}
                      className="flex items-start gap-2"
                    >
                      {detail.label === "Téléphone" && (
                        <Phone size={16} className="text-secondary-500 mt-1" />
                      )}
                      {detail.label === "Email" && (
                        <Mail size={16} className="text-secondary-500 mt-1" />
                      )}
                      {detail.label === "Adresse" && (
                        <MapPin size={16} className="text-secondary-500 mt-1" />
                      )}
                      <div>
                        <p className="text-white/70 text-sm">{detail.label}</p>
                        <p className="text-white/90">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} TONAKU ASBL. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
