
"use client";

import { useEffect, useState } from "react";

export default function SeoAdminPage() {
  const [seo, setSeo] = useState({
    title: "",
    description: "",
    ogImageUrl: "",
  });
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Loading SEO settings...");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/seo")
      .then(async (response) => {
        if (!response.ok) throw new Error("Could not load SEO settings");
        return response.json();
      })
      .then((data) => {
        setSeo({
          title: data.title || "",
          description: data.description || "",
          ogImageUrl: data.ogImageUrl || "",
        });
        setMessage("");
      })
      .catch(() => setMessage("Could not load settings. Check MongoDB and the server terminal."))
      .finally(() => setLoading(false));
  }, []);

  function updateField(event) {
    setSeo({ ...seo, [event.target.name]: event.target.value });
  }

  async function saveSeo(event) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      const response = await fetch("/api/seo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-cms-password": password,
        },
        body: JSON.stringify(seo),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Save failed");

      setMessage("SEO settings saved successfully!");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 text-gray-900 sm:p-10">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">Sunshine CMS</h1>
        <p className="mt-2 text-gray-600">Manage homepage SEO metadata.</p>

        <form
          onSubmit={saveSeo}
          className="mt-8 space-y-5 rounded-2xl bg-white p-6 shadow-sm"
        >
          <div>
            <label htmlFor="title" className="mb-2 block font-medium">
              Page title
            </label>
            <input
              id="title"
              name="title"
              value={seo.title}
              onChange={updateField}
              required
              maxLength={200}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
            <p className="mt-1 text-sm text-gray-500">
              {seo.title.length}/200 characters
            </p>
          </div>

          <div>
            <label htmlFor="description" className="mb-2 block font-medium">
              Meta description
            </label>
            <textarea
              id="description"
              name="description"
              value={seo.description}
              onChange={updateField}
              required
              maxLength={320}
              rows={4}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
            <p className="mt-1 text-sm text-gray-500">
              {seo.description.length}/320 characters
            </p>
          </div>

          <div>
            <label htmlFor="ogImageUrl" className="mb-2 block font-medium">
              Social sharing image URL (optional)
            </label>
            <input
              id="ogImageUrl"
              name="ogImageUrl"
              type="url"
              value={seo.ogImageUrl}
              onChange={updateField}
              placeholder="https://example.com/image.jpg"
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block font-medium">
              CMS admin password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <button
            type="submit"
            disabled={loading || saving}
            className="rounded-lg bg-green-700 px-5 py-3 font-semibold text-white disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save SEO settings"}
          </button>

          {message && <p role="status" className="text-sm">{message}</p>}
        </form>
      </div>
    </main>
  );
}
