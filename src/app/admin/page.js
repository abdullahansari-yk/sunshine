
"use client";

import { useEffect, useState } from "react";
import { defaultSiteContent } from "@/lib/site-content";

const navbarFields = [
  ["logo", "Logo image"],
  ["phone", "Phone number"],
  ["phoneLink", "Phone link"],
  ["hours", "Opening hours"],
  ["ctaText", "Contact button text"],
  ["ctaLink", "Contact button link"],
];

const heroFields = [
  ["eyebrow", "Small heading"],
  ["headingLine1", "Heading line 1"],
  ["headingLine2", "Heading line 2"],
  ["highlightedWord", "Highlighted word"],
  ["headingLine3", "Heading line 3"],
  ["description", "Description"],
  ["primaryButtonText", "Primary button text"],
  ["primaryButtonLink", "Primary button link"],
  ["secondaryButtonText", "Secondary button text"],
  ["secondaryButtonLink", "Secondary button link"],
  ["seasonalText", "Seasonal information"],
  ["backgroundImage", "Background image"],
  ["backgroundImageAlt", "Background image alt text"],
  ["farmerCardImage", "Farmers card image"],
  ["farmerCardHeading", "Farmers card heading"],
  ["farmerCardDescription", "Farmers card description"],
  ["fieldCardImage", "Field card image"],
  ["fieldCardImageAlt", "Field card image alt text"],
  ["fieldCardHeading", "Field card heading"],
  ["fieldCardDescription", "Field card description"],
];

const cropSectionFields = [
  ["badge", "Section badge"],
  ["heading", "Section heading"],
  ["description", "Section description"],
  ["warningLabel", "Warning label"],
  ["productsHeading", "Products heading"],
  ["agronomistNote", "Agronomist note"],
  ["cropGuideButton", "Crop guide button text (use {crop})"],
  ["adviceButton", "Advice button text"],
];

function InputField({
  label,
  value,
  onChange,
  multiline = false,
  image = false,
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const common =
    "w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 outline-none focus:border-purple-700";

  async function uploadImage(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Upload failed");
      }

      onChange(result.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>

      {image && (
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={uploadImage}
          className={common}
        />
      )}

      {image && uploading && (
        <p className="text-sm text-purple-700">Uploading image...</p>
      )}
      {image && error && <p className="text-sm text-red-600">{error}</p>}

      {image && value && (
        <img
          src={value}
          alt={`${label} preview`}
          className="max-h-40 rounded-lg border object-contain"
        />
      )}

      {image ? (
        <input
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Image URL or /public image path"
          className={common}
        />
      ) : multiline ? (
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
          stats: { ...current.stats, ...data.stats },
          cropSection: { ...current.cropSection, ...data.cropSection },
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
      [section]: { ...current[section], [key]: value },
    }));
  }

  function updateArrayItem(section, arrayName, index, key, value) {
    setContent((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [arrayName]: current[section][arrayName].map((item, i) =>
          i === index ? { ...item, [key]: value } : item
        ),
      },
    }));
  }

  function updateNavbarLink(index, key, value) {
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
        languages: current.navbar.languages.map((item, i) =>
          i === index ? value : item
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
        body: JSON.stringify({ [activeTab]: content[activeTab] }),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Save failed");
      setMessage("Saved successfully!");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  const navbar = content.navbar;
  const hero = content.hero;
  const stats = content.stats;
  const cropSection = content.cropSection;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
        <h1 className="text-3xl font-bold">Sunshine CMS</h1>
        <p className="mt-2 text-gray-600">
          Edit your website content without changing its design.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 border-b border-gray-200">
          {[
            ["navbar", "Navbar"],
            ["hero", "Hero"],
            ["stats", "Stats"],
            ["cropSection", "Crops & Products"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setActiveTab(key);
                setMessage("");
              }}
              className={`border-b-2 px-4 py-3 text-sm font-semibold ${
                activeTab === key
                  ? "border-purple-800 text-purple-800"
                  : "border-transparent text-gray-500"
              }`}
            >
              {label}
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
            {activeTab === "navbar" && (
              <>
                <h2 className="text-xl font-semibold">Navbar</h2>

                {navbarFields.map(([key, label]) => (
                  <InputField
                    key={key}
                    label={label}
                    value={navbar[key]}
                    image={key === "logo"}
                    onChange={(value) => updateField("navbar", key, value)}
                  />
                ))}

                <h3 className="border-t pt-5 text-lg font-semibold">
                  Navigation links
                </h3>

                {navbar.links.map((link, index) => (
                  <div
                    key={index}
                    className="grid gap-4 rounded-lg border p-4 md:grid-cols-2"
                  >
                    <InputField
                      label={`Link ${index + 1} label`}
                      value={link.label}
                      onChange={(value) =>
                        updateNavbarLink(index, "label", value)
                      }
                    />
                    <InputField
                      label={`Link ${index + 1} URL`}
                      value={link.href}
                      onChange={(value) =>
                        updateNavbarLink(index, "href", value)
                      }
                    />
                  </div>
                ))}

                <h3 className="border-t pt-5 text-lg font-semibold">
                  Languages
                </h3>

                {navbar.languages.map((language, index) => (
                  <InputField
                    key={index}
                    label={`Language ${index + 1}`}
                    value={language}
                    onChange={(value) => updateLanguage(index, value)}
                  />
                ))}
              </>
            )}

            {activeTab === "hero" && (
              <>
                <h2 className="text-xl font-semibold">Hero section</h2>
                {heroFields.map(([key, label]) => (
                  <InputField
                    key={key}
                    label={label}
                    value={hero[key]}
                    multiline={key === "description"}
                    image={[
                      "backgroundImage",
                      "farmerCardImage",
                      "fieldCardImage",
                    ].includes(key)}
                    onChange={(value) => updateField("hero", key, value)}
                  />
                ))}
              </>
            )}

            {activeTab === "stats" && (
              <>
                <h2 className="text-xl font-semibold">Stats section</h2>
                <p className="text-sm text-gray-500">
                  Edit the four numbers and their labels. Icons and layout stay
                  unchanged.
                </p>

                {stats.items.map((item, index) => (
                  <div
                    key={index}
                    className="grid gap-4 rounded-lg border p-4 md:grid-cols-2"
                  >
                    <InputField
                      label={`Statistic ${index + 1} value`}
                      value={item.value}
                      onChange={(value) =>
                        updateArrayItem("stats", "items", index, "value", value)
                      }
                    />
                    <InputField
                      label={`Statistic ${index + 1} label`}
                      value={item.label}
                      onChange={(value) =>
                        updateArrayItem("stats", "items", index, "label", value)
                      }
                    />
                  </div>
                ))}
              </>
            )}

            {activeTab === "cropSection" && (
              <>
                <h2 className="text-xl font-semibold">Crops & Products</h2>

                {cropSectionFields.map(([key, label]) => (
                  <InputField
                    key={key}
                    label={label}
                    value={cropSection[key]}
                    multiline={["description", "agronomistNote"].includes(key)}
                    onChange={(value) =>
                      updateField("cropSection", key, value)
                    }
                  />
                ))}

                <h3 className="border-t pt-5 text-lg font-semibold">
                  Crop cards
                </h3>

                {cropSection.crops.map((crop, index) => (
                  <div key={index} className="space-y-4 rounded-xl border p-4">
                    <h4 className="font-semibold">
                      Crop {index + 1}: {crop.name}
                    </h4>

                    {[
                      ["name", "Crop name"],
                      ["season", "Season"],
                      ["warning", "Warning / advice"],
                      ["image", "Crop image"],
                    ].map(([key, label]) => (
                      <InputField
                        key={key}
                        label={label}
                        value={crop[key]}
                        multiline={key === "warning"}
                        image={key === "image"}
                        onChange={(value) =>
                          updateArrayItem(
                            "cropSection",
                            "crops",
                            index,
                            key,
                            value
                          )
                        }
                      />
                    ))}
                  </div>
                ))}

                <h3 className="border-t pt-5 text-lg font-semibold">
                  Product cards
                </h3>

                {cropSection.products.map((product, index) => (
                  <div
                    key={index}
                    className="space-y-4 rounded-xl border p-4"
                  >
                    <h4 className="font-semibold">
                      Product {index + 1}: {product.name}
                    </h4>

                    {[
                      ["name", "Product name"],
                      ["description", "Product description"],
                      ["price", "Price"],
                    ].map(([key, label]) => (
                      <InputField
                        key={key}
                        label={label}
                        value={product[key]}
                        onChange={(value) =>
                          updateArrayItem(
                            "cropSection",
                            "products",
                            index,
                            key,
                            value
                          )
                        }
                      />
                    ))}

                    <label className="flex items-center gap-2 text-sm">
                      <input
                        type="checkbox"
                        checked={Boolean(product.bestseller)}
                        onChange={(event) =>
                          updateArrayItem(
                            "cropSection",
                            "products",
                            index,
                            "bestseller",
                            event.target.checked
                          )
                        }
                      />
                      Show bestseller label
                    </label>
                  </div>
                ))}
              </>
            )}

            <div className="flex flex-wrap items-center gap-4 border-t pt-5">
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-purple-900 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-800 disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save changes"}
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
