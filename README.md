# nowlyapp.com

The site behind Nowly: a landing page and the four legal pages App Review
requires. Static HTML, no build step, no dependencies beyond a web font.

## Pages

| File | URL | Why it exists |
|---|---|---|
| `index.html` | `/` | Landing page |
| `privacy.html` | `/privacy.html` | Guideline 5.1.1(i) — must be reachable in-app |
| `terms.html` | `/terms.html` | Guideline 1.2 — the EULA users accept at signup |
| `guidelines.html` | `/guidelines.html` | Guideline 1.2 — plain-language house rules |
| `support.html` | `/support.html` | Guideline 1.2 — published contact information |

These URLs are hardcoded in the app at `Core/Utilities/AppLinks.swift`.
**A broken link here is a rejection.** If you rename a file, change it there too.

## Publishing on GitHub Pages

1. Create a public repository named `nowly-site`.
2. Upload every file in this folder, keeping `assets/` intact.
3. Settings → Pages → Source: `main`, folder: `/ (root)`.
4. Settings → Pages → Custom domain: `nowlyapp.com`, then tick
   **Enforce HTTPS** once the certificate is issued.

The `CNAME` file in this folder tells GitHub which domain to serve.

## DNS

At your registrar, point the domain at GitHub:

```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   YOUR-USERNAME.github.io
```

Propagation takes anything from minutes to a day. HTTPS follows once GitHub
has verified the domain.

## The support address

`support@nowlyapp.com` is published on every page, so it must actually receive
mail. Cloudflare Email Routing forwards it to a personal inbox for free:

1. Move the domain's DNS to Cloudflare (free plan).
2. Email → Email Routing → add `support@nowlyapp.com`, forward to your inbox.

## Language

One toggle in the header switches the whole site. Every translatable element
appears twice, marked `lang-en` and `lang-ar`; CSS shows one set and hides the
other, and `assets/lang.js` flips `dir` so Arabic reads right to left. The
choice is remembered.

To add a string, add both versions. A missing pair silently shows nothing.

## Keeping it in step with the app

The app changed a great deal after these pages were first written, and pages
that lag the app are the failure App Review actually looks for. Two of them
carry hard obligations:

**Terms** must describe any auto-renewable subscription: what it is called, how
long it runs, what it costs, that payment goes to the Apple Account, that it
renews unless turned off 24 hours before the period ends, and where to cancel.
Apple rejects builds that omit this. Section 7 covers it.

**Privacy policy** must list every category of data collected, including the
optional ones. If a new field appears in the app, it appears here in the same
release — not the one after.

The other two are softer but still worth keeping honest: Guidelines should
cover every surface a user can write on, and Support should answer the
questions the current app actually generates.

## Before launch

- [ ] Replace `Waleed Almehza` with the registered establishment name once the
      CR is issued. It appears in all four legal pages plus the footer.
- [ ] Confirm `support@nowlyapp.com` receives mail.
- [ ] Have a lawyer read the privacy policy. It is written from what the app
      actually does, which makes it accurate, but location data carries real
      obligations under Bahrain's PDPL.
