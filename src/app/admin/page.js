
"use client";

import { useEffect, useState } from "react";
import { defaultSiteContent } from "@/lib/site-content";

const navbarFields = [
  ["logo", "Logo image path"],
  ["phone", "Phone number"],
  ["phoneLink", "Phone link"],
  ["hours", "Opening hours"],
  ["ctaText", "Contact button text"],
  ["ctaLink", "Contact button link"],
];

const heroFields = [
  ["eyebrow", "Small heading above hero"],
  ["headingLine1", "Heading — line 1"],
  ["headingLine2", "Heading — line 2"],
  ["highlightedWord", "Highlighted word"],
  ["headingLine3", "Heading — line 3"],
  ["description", "Description"],
  ["primaryButtonText", "Primary button text"],
  ["primaryButtonLink", "Primary button link"],
  ["secondaryButtonText", "Secondary button text"],
  ["secondaryButtonLink", "Secondary button link"],
  ["seasonalText", "Seasonal information"],
  ["backgroundImage", "Background image path"],
  ["backgroundImageAlt", "Background image alt text"],
  ["farmerCardImage", "Farmers card image path"],
  ["farmerCardHeading", "Farmers card heading"],
  ["farmerCardDescription", "Farmers card description"],
  ["fieldCardImage", "Field card image path"],
  ["fieldCardImageAlt", "Field card image alt text"],
  ["fieldCardHeading", "Field card heading"],
  ["fieldCardDescription", "Field card description"],
];

function InputField({ label, value, onChange, multiline = false }) {
  const common =
    "w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 outline-none focus:border-purple-700";

  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      {multiline ? (
        <textarea
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          rows={4}
          className={common}
        />
      ) : (
        <input
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          className={common}
        />
      )}
    </label>
  );
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("navbar");
  const [content, setContent] = useState(defaultSiteContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await fetch("/api/site-content", {
          cache: "no-store",
        });

        if (!response.ok) throw new Error("Failed to load content");

        const data = await response.json();

        setContent((current) => ({
          ...current,
          ...data,
          navbar: { ...current.navbar, ...data.navbar },
          hero: { ...current.hero, ...data.hero },
        }));
      } catch (error) {
        setMessage("Could not load content. Check the server terminal.");
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, []);

  function updateField(section, key, value) {
    setContent((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [key]: value,
      },
    }));
  }

  function updateLink(index, key, value) {
    setContent((current) => ({
      ...current,
      navbar: {
        ...current.navbar,
        links: current.navbar.links.map((link, i) =>
          i === index ? { ...link, [key]: value } : link
        ),
      },
    }));
  }

  function updateLanguage(index, value) {
    setContent((current) => ({
      ...current,
      navbar: {
        ...current.navbar,
        languages: current.navbar.languages.map((language, i) =>
          i === index ? value : language
        ),
      },
    }));
  }

  async function saveContent(event) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/site-content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          [activeTab]: content[activeTab],
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to save");
      }

      setMessage("Saved successfully!");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  const fields = activeTab === "navbar" ? navbarFields : heroFields;
  const section = content[activeTab];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
        <h1 className="text-3xl font-bold">Sunshine CMS</h1>
        <p className="mt-2 text-gray-600">
          Edit your website content without changing its design.
        </p>

        <div className="mt-8 flex gap-3 border-b border-gray-200">
          {["navbar", "hero"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setMessage("");
              }}
              className={`border-b-2 px-5 py-3 text-sm font-semibold capitalize ${
                activeTab === tab
                  ? "border-purple-800 text-purple-800"
                  : "border-transparent text-gray-500"
              }`}
            >
              {tab === "navbar" ? "Navbar" : "Hero section"}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="py-8 text-gray-600">Loading content...</p>
        ) : (
          <form
            onSubmit={saveContent}
            className="mt-6 space-y-6 rounded-2xl border border-gray-200 bg-white p-5 md:p-8"
          >
            <h2 className="text-xl font-semibold capitalize">
              Edit {activeTab === "navbar" ? "Navbar" : "Hero section"}
            </h2>

            {fields.map(([key, label]) => (
              <InputField
                key={key}
                label={label}
                value={section[key]}
                multiline={key === "description"}
                onChange={(value) => updateField(activeTab, key, value)}
              />
            ))}

            {activeTab === "navbar" && (
              <>
                <h3 className="border-t pt-5 text-lg font-semibold">
                  Navigation links
                </h3>

                {content.navbar.links.map((link, index) => (
                  <div
                    key={index}
                    className="grid gap-4 rounded-lg border border-gray-200 p-4 md:grid-cols-2"
                  >
                    <InputField
                      label={`Link ${index + 1} label`}
                      value={link.label}
                      onChange={(value) =>
                        updateLink(index, "label", value)
                      }
                    />
                    <InputField
                      label={`Link ${index + 1} URL`}
                      value={link.href}
                      onChange={(value) =>
                        updateLink(index, "href", value)
                      }
                    />
                  </div>
                ))}

                <h3 className="border-t pt-5 text-lg font-semibold">
                  Language labels
                </h3>

                {content.navbar.languages.map((language, index) => (
                  <InputField
                    key={index}
                    label={`Language ${index + 1}`}
                    value={language}
                    onChange={(value) => updateLanguage(index, value)}
                  />
                ))}
              </>
            )}

            <div className="flex flex-wrap items-center gap-4 border-t pt-5">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-purple-900 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 disabled:opacity-50"
              >
                {saving ? "Saving..." : `Save ${activeTab}`}
              </button>

              {message && (
                <p role="status" className="text-sm text-gray-700">
                  {message}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
