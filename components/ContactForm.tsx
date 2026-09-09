"use client";

import { useState, type FormEvent } from "react";
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
    const message = formData.get("message");

    const subject = encodeURIComponent(`Message de ${prenom ?? ""} ${nom ?? ""} depuis gites-nephelie.fr`);
    const body = encodeURIComponent(`${message}\n\nRépondre à : ${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-vendee-800">
            Prénom
          </label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            autoComplete="given-name"
            className="mt-1 w-full rounded-md border border-vendee-200 px-3 py-2 focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600"
          />
        </div>
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-vendee-800">
            Nom <span aria-hidden="true">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            autoComplete="family-name"
            className="mt-1 w-full rounded-md border border-vendee-200 px-3 py-2 focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-vendee-800">
          E-mail <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-md border border-vendee-200 px-3 py-2 focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-vendee-800">
          Commentaire ou message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1 w-full rounded-md border border-vendee-200 px-3 py-2 focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600"
        />
      </div>

      <button type="submit" className="btn-primary">
        Envoyer
      </button>

      {sent && (
        <p role="status" className="text-sm text-forest-700">
          Votre messagerie va s&rsquo;ouvrir pour finaliser l&rsquo;envoi.
        </p>
      )}
    </form>
  );
}
