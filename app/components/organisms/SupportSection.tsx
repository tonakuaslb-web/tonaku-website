import { Section } from "../templates";
import { DonationMethodCard } from "../molecules";
import { CreditCard, Package, Heart } from "lucide-react";

type SupportData = {
  mainTitle: string;
  whyTitle: string;
  whyDescription: string;
  impactListTitle: string;
  impactItems?: Array<{ text: string }>;
  impactMessage: string;
  impactDescription: string;
  howToTitle: string;
  bankTransfer?: {
    title?: string | null;
    description?: string | null;
    accountName?: string | null;
    iban?: string | null;
    bic?: string | null;
    communication?: string | null;
  } | null;
  products?: {
    title?: string | null;
    description?: string | null;
    item1?: string | null;
    item2?: string | null;
    item3?: string | null;
    contactName?: string | null;
    contactPhone?: string | null;
  } | null;
  materialDonations?: {
    title?: string | null;
    subtitle?: string | null;
    item1?: string | null;
    item2?: string | null;
    item3?: string | null;
    item4?: string | null;
  } | null;
  membership?: {
    title?: string | null;
    description?: string | null;
    benefit1?: string | null;
    benefit2?: string | null;
    benefit3?: string | null;
    benefit4?: string | null;
    contactEmail?: string | null;
  } | null;
};

type SupportSectionProps = Readonly<{
  support: SupportData;
}>;

export default function SupportSection({ support }: SupportSectionProps) {
  return (
    <Section
      id="soutenez-nous"
      background={{ type: "color", value: "bg-primary-700" }}
      paddingY="xl"
      textColor="text-white"
    >
      <div className="space-y-16">
        {/* En-tête */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {support.mainTitle}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-secondary-400">
            {support.whyTitle}
          </h3>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            {support.whyDescription}
          </p>
        </div>

        {/* Ce que nous pouvons faire avec votre soutien */}
        <div className="max-w-4xl mx-auto">
          <h4 className="text-xl font-semibold mb-6 text-center">
            {support.impactListTitle}
          </h4>
          <ul className="space-y-4 text-white/90 text-lg">
            {support.impactItems?.map((item, index) => (
              <li key={`impact-${index}`} className="flex items-start gap-3">
                <span className="text-secondary-400 mt-1 text-2xl">✓</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Message d'impact */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-2xl font-semibold text-secondary-400 mb-4">
            {support.impactMessage}
          </p>
          <p className="text-lg text-white/90 leading-relaxed italic">
            {support.impactDescription}
          </p>
        </div>

        {/* Comment faire un don */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center mb-8">
            {support.howToTitle}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Versement bancaire */}
            {support.bankTransfer && (
              <DonationMethodCard
                icon={<CreditCard size={28} strokeWidth={2} />}
                title={support.bankTransfer.title || "Versement bancaire"}
              >
                <div className="space-y-4">
                  {support.bankTransfer.description && (
                    <p className="text-white/90 text-sm">
                      {support.bankTransfer.description}
                    </p>
                  )}
                  <div className="space-y-2">
                    {support.bankTransfer.accountName && (
                      <p className="text-white/80 text-sm font-semibold">
                        Nom : {support.bankTransfer.accountName}
                      </p>
                    )}
                    {support.bankTransfer.iban && (
                      <div className="bg-primary-600/50 rounded-lg p-3">
                        <p className="text-white/80 text-xs mb-1">IBAN :</p>
                        <p className="text-white font-mono text-sm">
                          {support.bankTransfer.iban}
                        </p>
                      </div>
                    )}
                    {support.bankTransfer.bic && (
                      <div className="bg-primary-600/50 rounded-lg p-3">
                        <p className="text-white/80 text-xs mb-1">BIC :</p>
                        <p className="text-white font-mono text-sm">
                          {support.bankTransfer.bic}
                        </p>
                      </div>
                    )}
                    {support.bankTransfer.communication && (
                      <p className="text-white/80 text-xs italic mt-2">
                        Communication : {support.bankTransfer.communication}
                      </p>
                    )}
                  </div>
                </div>
              </DonationMethodCard>
            )}

            {/* 2. Produits Tonaku */}
            {support.products && (
              <DonationMethodCard
                icon={<Package size={28} strokeWidth={2} />}
                title={support.products.title || "Produits Tonaku"}
              >
                <div className="space-y-4">
                  {support.products.description && (
                    <p className="text-white/90 text-sm font-semibold">
                      {support.products.description}
                    </p>
                  )}
                  <ul className="space-y-2 text-white/90 text-sm">
                    {support.products.item1 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">•</span>
                        <span>{support.products.item1}</span>
                      </li>
                    )}
                    {support.products.item2 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">•</span>
                        <span>{support.products.item2}</span>
                      </li>
                    )}
                    {support.products.item3 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">•</span>
                        <span>{support.products.item3}</span>
                      </li>
                    )}
                  </ul>
                  {(support.products.contactName ||
                    support.products.contactPhone) && (
                    <div className="bg-primary-600/30 rounded-lg p-3 mt-4">
                      <p className="text-white/90 text-xs">
                        {support.products.contactName && (
                          <>
                            <span className="font-semibold">Contact :</span>{" "}
                            {support.products.contactName}
                            <br />
                          </>
                        )}
                        {support.products.contactPhone && (
                          <>
                            <span className="font-semibold">Tél :</span>{" "}
                            {support.products.contactPhone}
                          </>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </DonationMethodCard>
            )}

            {/* 3. Dons matériels */}
            {support.materialDonations && (
              <DonationMethodCard
                icon={<Package size={28} strokeWidth={2} />}
                title={support.materialDonations.title || "Dons matériels"}
              >
                <div className="space-y-4">
                  {support.materialDonations.subtitle && (
                    <p className="text-white/80 text-sm font-semibold">
                      {support.materialDonations.subtitle}
                    </p>
                  )}
                  <ul className="space-y-2 text-white/90">
                    {support.materialDonations.item1 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">•</span>
                        <span>{support.materialDonations.item1}</span>
                      </li>
                    )}
                    {support.materialDonations.item2 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">•</span>
                        <span>{support.materialDonations.item2}</span>
                      </li>
                    )}
                    {support.materialDonations.item3 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">•</span>
                        <span>{support.materialDonations.item3}</span>
                      </li>
                    )}
                    {support.materialDonations.item4 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">•</span>
                        <span>{support.materialDonations.item4}</span>
                      </li>
                    )}
                  </ul>
                </div>
              </DonationMethodCard>
            )}

            {/* 4. Devenir membre */}
            {support.membership && (
              <DonationMethodCard
                icon={<Heart size={28} strokeWidth={2} />}
                title={support.membership.title || "Devenir membre"}
              >
                <div className="space-y-4">
                  {support.membership.description && (
                    <p className="text-white/90 text-sm font-semibold">
                      {support.membership.description}
                    </p>
                  )}
                  <ul className="space-y-2 text-white/90 text-sm">
                    {support.membership.benefit1 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">✓</span>
                        <span>{support.membership.benefit1}</span>
                      </li>
                    )}
                    {support.membership.benefit2 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">✓</span>
                        <span>{support.membership.benefit2}</span>
                      </li>
                    )}
                    {support.membership.benefit3 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">✓</span>
                        <span>{support.membership.benefit3}</span>
                      </li>
                    )}
                    {support.membership.benefit4 && (
                      <li className="flex items-start gap-2">
                        <span className="text-secondary-400 mt-1">✓</span>
                        <span>{support.membership.benefit4}</span>
                      </li>
                    )}
                  </ul>
                  {support.membership.contactEmail && (
                    <div className="bg-primary-600/30 rounded-lg p-3 mt-4">
                      <p className="text-white/90 text-xs">
                        <span className="font-semibold">
                          Envoyez votre candidature :
                        </span>
                        <br />
                        {support.membership.contactEmail}
                      </p>
                    </div>
                  )}
                </div>
              </DonationMethodCard>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
