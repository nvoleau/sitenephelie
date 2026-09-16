"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { gites } from "@/lib/data/gites";
import { siteConfig } from "@/lib/site-config";

// TODO (à trancher avec Nicolas) : aucun backend d'envoi d'e-mail n'est encore
// choisi pour ce projet (Resend, SMTP via Route Handler, etc.). En attendant,
// le formulaire ouvre un e-mail pré-rempli via mailto: — fonctionnel sans
// inventer de dépendance tierce non validée, à remplacer par un vrai envoi
// serveur une fois la solution arbitrée.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const prenom = formData.get("prenom");
    const nom = formData.get("nom");
    const email = formData.get("email");
    const telephone = formData.get("telephone");
    const gite = formData.get("gite");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Message de ${prenom ?? ""} ${nom ?? ""} depuis gites-nephelie.fr`);
    const bodyLines = [
      message,
      "",
      `Répondre à : ${email}`,
      telephone ? `Téléphone : ${telephone}` : null,
      gite ? `Gîte souhaité : ${gite}` : null,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-6 gap-y-5">
      <div>
        <label htmlFor="prenom" className="eyebrow">
          Prénom <span aria-hidden="true">*</span>
        </label>
        <input id="prenom" name="prenom" type="text" required autoComplete="given-name" className="field mt-2" />
      </div>

      <div>
        <label htmlFor="nom" className="eyebrow">
          Nom <span aria-hidden="true">*</span>
        </label>
        <input id="nom" name="nom" type="text" required autoComplete="family-name" className="field mt-2" />
      </div>

      <div>
        <label htmlFor="email" className="eyebrow">
          Courriel <span aria-hidden="true">*</span>
        </label>
        <div className="relative mt-2">
          <Mail aria-hidden="true" size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-300" />
          <input id="email" name="email" type="email" required autoComplete="email" className="field pl-9" />
        </div>
      </div>

      <div>
        <label htmlFor="telephone" className="eyebrow">
          Téléphone
        </label>
        <div className="relative mt-2">
          <Phone aria-hidden="true" size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-300" />
          <input id="telephone" name="telephone" type="tel" autoComplete="tel" className="field pl-9" />
        </div>
      </div>

      <div>
        <label htmlFor="gite" className="eyebrow">
          Gîte souhaité
        </label>
        <select id="gite" name="gite" className="field mt-2">
          <option value="">Peu importe</option>
          {gites.map((gite) => (
            <option key={gite.slug} value={gite.name}>
              {gite.name}
            </option>
          ))}
        </select>
      </div>

      <div className="col-span-full">
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea id="message" name="message" rows={5} className="field mt-2" />
      </div>

      <div className="col-span-full flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          Envoyer la demande
        </button>
        <a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          Discuter sur WhatsApp
        </a>
      </div>

      {sent && (
        <p role="status" className="col-span-full text-body-sm text-bocage-700">
          Votre messagerie va s&rsquo;ouvrir pour finaliser l&rsquo;envoi.
        </p>
      )}
    </form>
  );
}
