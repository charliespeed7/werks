# Addressable List Research

> Status: draft
> Owner: founder
> Last updated: 2026-08-03
> Purpose: establish what a lawful, usable list of UK gas and heating engineers actually looks like
> Blocks: `22_distribution.md` (Route 3), and the D1 addressability claim

## The question

`01_vision.md` says Gas Safe Register lists roughly 70,000 registered businesses and 130,000+ engineers. The register is public and searchable by postcode. But "public register" and "usable for outreach" are different claims. This document works out what a lawful, usable list looks like.

It also serves Item 12 of the parallel tasks list: "Work out what a lawful, usable list looks like — Companies House SIC 43220, Google Places, installer schemes — before D1's addressability claim goes in front of an investor."

## Source 1 — Gas Safe Register

**Current figures (verified from Capita/Logic4training, 2025):**
- 80,000 registered businesses (up from 76,000 in 2018, originally 35,000 in 2009)
- 150,000+ registered engineers

**Access:**
- The register is a **consumer-facing postcode lookup**, not a downloadable file or API
- You can search by postcode, trade category, and business name
- Each result shows: business name, registration number, business type, address, phone number, and trade categories
- There is **no published bulk data access, API, or downloadable list** for commercial use
- The register is operated by Capita under an HSE contract (recently renewed, £89M)

**Legal constraints:**
- Most registered businesses are **sole traders** — under PECR, sole traders are treated as "individual subscribers" and **cannot be cold-emailed without prior consent**
- Even publicly available personal data (name, phone, email of a sole trader) is subject to UK GDPR — you need a lawful basis and must provide privacy information
- The Gas Safe Register's own terms of use almost certainly prohibit scraping; using the data for commercial marketing would likely breach their terms
- **Post** is not covered by PECR — postal marketing to sole traders is legal, but the register doesn't provide postal addresses in a bulk format anyway

**Verdict:** Gas Safe Register is the most accurate and complete list, but it is **not usable for electronic cold outreach without consent**. It is useful for:
- Verifying individual businesses during warm outreach (after they've expressed interest)
- Understanding the market size and distribution
- Identifying businesses by trade category during research

**Not usable for:** bulk email, SMS, or automated outreach to sole traders.

## Source 2 — Companies House (SIC 43220)

**What it is:**
SIC code 43220 = "Plumbing, heat and air-conditioning installation." Companies House is the UK's official register of incorporated companies (limited companies, LLPs). It is **public data**, freely accessible via API, and not subject to PECR restrictions on B2B outreach to corporate subscribers.

**Scale:**
- IBISWorld reports **45,457 businesses** in the UK Plumbing, Heating & Air Conditioning Installation industry (2026 figure)
- This includes all business structures (sole traders, partnerships, limited companies)
- Companies House SIC 43220 covers **limited companies and LLPs only** — sole traders are not on Companies House
- Based on industry data, roughly 40–50% of plumbing/heating businesses are incorporated (limited companies or LLPs); the rest are sole traders or partnerships

**Estimated Companies House SIC 43220 count:** approximately 18,000–22,000 active limited companies.

**Advantages:**
- **Free, public, API-accessible** — Companies House has a public API
- **Corporate subscribers** — limited companies and LLPs can be cold-emailed under PECR without consent (as long as content is relevant and opt-out is provided)
- **Business data included** — registered office address, SIC code, incorporation date, company status, directors
- **No legal barrier to B2B outreach** for corporate subscribers

**Disadvantages:**
- **No phone numbers or trading names** — Companies House only has the registered office address, not the trading address or phone number
- **Sole traders excluded** — the majority of 1–3 van gas businesses are sole traders, not limited companies
- **SIC code is self-selected** — a gas engineer might register under 43220, 43290 (other construction installation), or 43390 (other building completion). Multiple SIC codes may be needed.
- **Dormant and shell companies** — many SIC 43220 companies are dormant or inactive. Need to filter by company status = "active" and latest accounts filed.

**Verdict:** Companies House is the best **lawful** source for cold email outreach, but it covers only the incorporated subset (~18,000–22,000 companies) and lacks phone numbers. It is a strong starting list for B2B email outreach, but misses the majority sole trader segment.

## Source 3 — Google Places / Google Business Profiles

**What it is:**
Google Places API can search for businesses by type and location. "Plumber" and "HVAC contractor" are recognised business types. Returns business name, address, phone number, website, rating, and opening hours.

**Scale:**
- No published count of UK plumbing/heating businesses on Google
- Realistically, most active gas businesses have a Google Business Profile (it's how customers find them)
- Estimate: 30,000–50,000 UK plumbing/heating businesses listed on Google (broader than Gas Safe because it includes non-registered businesses)

**Advantages:**
- **Phone numbers included** — unlike Companies House
- **Trading names and addresses** — the actual business, not the registered office
- **Geographic coverage** — can search by radius, city, postcode area
- **Business activity data** — ratings, reviews, hours indicate active businesses

**Disadvantages:**
- **Google Places API terms** prohibit using the data for commercial outreach — you cannot use Google Maps data to build a marketing list. This is a **hard restriction** in their Terms of Service.
- **No legal basis for cold outreach** from Google Places data — the data is provided for display purposes, not marketing
- **Mixed business types** — "plumber" returns everything from one-man bands to large contractors
- **No Gas Safe verification** — a listing does not confirm the business is Gas Safe registered

**Verdict:** Google Places is useful for **research and validation** (understanding the market, checking if a business is active, finding phone numbers for warm follow-up), but **cannot be used as a cold outreach list** under Google's terms. It is not a lawful source for marketing lists.

## Source 4 — Manufacturer Installer Schemes

**What they are:**
Public directories maintained by boiler manufacturers listing their accredited installers.

| Scheme | Manufacturer | Directory Access | Contact Data |
|---|---|---|---|
| Worcester Bosch Accredited Installer | Worcester Bosch | Public postcode lookup on website | Business name, phone, address, website. Can select up to 5 installers to contact. |
| Vaillant Advance | Vaillant | Public directory | Business name, phone, address, accreditation level |
| Baxi Works | Baxi | Public directory | Business name, phone, address |
| Ideal Registered Installers | Ideal Boilers | Public directory | Business name, contact details |
| Glow-worm Club | Glow-worm | Public directory | Business name, contact details |

**Estimated total across all schemes:**
- Worcester Bosch: ~3,000–5,000 accredited installers (largest scheme)
- Vaillant: ~2,000–4,000
- Baxi: ~2,000–3,000
- Ideal: ~1,500–2,500
- Glow-worm: ~1,000–2,000
- Many installers are accredited with multiple manufacturers, so total unique businesses across all schemes is likely **5,000–10,000**

**Legal constraints:**
- Directories are public and the businesses are tradespeople operating commercially
- **Sole trader issue applies again** — if the contact data identifies an individual sole trader, PECR requires consent for electronic marketing
- However, if the business is a limited company listed in the directory, it's a corporate subscriber and can be cold-emailed
- The manufacturer's terms of use for the directory may restrict scraping or commercial use — needs checking per manufacturer

**Advantages:**
- **Highly targeted** — accredited installers are professional, active, and do high volumes of boiler work and annual services
- **Naturally aligned with D5** — these businesses do annual services, which is the retention loop WERKS is built on
- **Public data** — directories are openly accessible
- **Cross-referenceable** — can check against Companies House to determine corporate vs sole trader status

**Disadvantages:**
- **Sole trader majority** — same PECR issue as Gas Safe
- **No bulk download** — like Gas Safe, these are postcode lookups, not downloadable lists
- **Manufacturer terms** — likely prohibit scraping; need to check each manufacturer's terms
- **Overlap with Gas Safe** — most accredited installers are also Gas Safe registered, so this is a subset, not a new list

**Verdict:** Manufacturer installer directories are the **best quality** list — these are the exact businesses WERKS is targeting. But they have the same access and legal constraints as Gas Safe: postcode lookup only, sole trader majority, no bulk export. They are valuable for **warm outreach** (approaching installers through the manufacturer) but not for bulk cold email.

## Source 5 — Checkatrade, Rated People, MyBuilder

**What they are:**
Trade directories where consumers find tradespeople. Businesses list themselves, pay for membership, and receive leads.

**Legal constraints:**
- These are **commercial platforms** with their own terms of service
- Scraping or using their data for outreach is **prohibited** by their terms
- Some (Checkatrade) sell leads to tradespeople, so they are competitors for the tradesperson's marketing spend, not partners

**Verdict:** Not usable as a list source. However, Checkatrade listings are useful for **research** — understanding which gas engineers are active, what services they offer, and whether they're already investing in marketing (which suggests they might value WERKS's lead capture).

## Source 6 — Trade Membership Bodies

| Body | Members | Access |
|---|---|---|
| Association of Plumbing & Heating Contractors (APHC) | ~1,500 members | Member directory on website — limited data |
| Chartered Institute of Plumbing & Heating Engineering (CIPHE) | ~7,000 members | Member directory — professional body |
| SNIPEF (Scotland & NI) | ~300 members | Member directory |
| Building Engineering Services Association (BESA) | ~1,000 members | Member directory |

**Legal constraints:**
- Member directories are typically public
- Same sole trader / corporate subscriber distinction applies
- Trade body endorsement could provide a warm introduction path

**Verdict:** Small lists, but high quality. A partnership with APHC or CIPHE (endorsing WERKS to members) would be the most effective route. Not useful for cold outreach but valuable for warm channels.

## Summary — What a Lawful, Usable List Looks Like

| Source | Size (est.) | Phone numbers | Lawful for cold email? | Lawful for cold call? | Lawful for post? | Quality |
|---|---|---|---|---|---|---|
| Gas Safe Register | 80,000 businesses | Yes (in lookup) | ❌ No (sole trader majority, terms prohibit) | ⚠️ Only if not TPS registered | ✅ Yes | Highest |
| Companies House SIC 43220 | ~18,000–22,000 | ❌ No | ✅ Yes (corporate subscribers) | ⚠️ Only if not TPS registered | ✅ Yes | Medium (no phone, no Gas Safe verification) |
| Google Places | 30,000–50,000 | ✅ Yes | ❌ No (Google terms prohibit) | ❌ No (Google terms prohibit) | ❌ No (Google terms prohibit) | High for research, unusable for outreach |
| Manufacturer installer schemes | 5,000–10,000 unique | ✅ Yes (in lookup) | ⚠️ Limited (sole trader majority) | ⚠️ Only if not TPS registered | ✅ Yes | Highest (exact ICP) |
| Checkatrade / Rated People | Unknown | ✅ Yes | ❌ No (terms prohibit) | ❌ No (terms prohibit) | ❌ No (terms prohibit) | Medium for research |
| Trade bodies (APHC, CIPHE) | ~8,000 combined | Variable | ⚠️ Via partnership only | ⚠️ Via partnership only | ✅ Yes | High |

## Recommendation

**There is no single lawful, downloadable, ready-to-use list.** The addressable market is real and countable (80,000 Gas Safe businesses, 150,000 engineers), but the data is locked behind postcode lookups and PECR restrictions.

The practical approach:

1. **Companies House SIC 43220 is the only lawful cold email list** — ~18,000–22,000 incorporated plumbing/heating businesses. No phone numbers, but email is lawful to corporate subscribers. **This is the cold outreach starting point.** Enrich with phone numbers from Google Places (for research, not for cold calling from that data) or from the businesses' own websites.

2. **Manufacturer installer directories + Gas Safe Register** are the gold standard for targeting, but must be accessed through **warm channels** — partnerships, events, referrals, or in-person outreach. They cannot be scraped for cold email.

3. **Trade body partnerships** (APHC, CIPHE) provide the warmest, smallest, highest-conversion route. A partnership with one trade body could give access to 1,500–7,000 members with endorsement.

4. **Google Places** is a research tool, not a marketing list. Use it to understand the market, verify businesses are active, and find phone numbers for warm follow-up after initial contact through a lawful channel.

5. **The addressability claim in D1 is correct but nuanced.** The market is countable and self-identifying, but "addressable" in the D1 sense means "findable through the register," not "emailable as a bulk list." Cold outreach at scale is lawful only to the incorporated subset (~22,000). The remainder requires warm channels — merchant partnerships, creator content, trade body endorsements, and manufacturer scheme partnerships.

## What this means for `22_distribution.md`

- **Route 1 (merchants)** and **Route 2 (creators)** don't depend on a list — they depend on reach and trust. They are unaffected by these findings.
- **Route 3 (manufacturer schemes)** is confirmed as high-quality but requires partnership, not scraping. The directory research is valuable for understanding the market but cannot be used for cold outreach to sole traders.
- **A fourth route — direct cold email to Companies House SIC 43220 corporate subscribers** — is lawful, cheap, and worth testing. ~20,000 incorporated businesses, cold email under PECR corporate subscriber exception, enriched with phone numbers from websites. CPA would be low (email is cheap) but conversion may be low without a warm signal.

## Open Questions

- [ ] What share of Gas Safe registered businesses are incorporated (limited company/LLP) vs sole traders? If it's 40%+, the Companies House route reaches a substantial subset. If it's 20%, the cold email list is smaller than hoped.
- [ ] Does Capita / Gas Safe Register offer any commercial data licensing or partnership access to the register? Worth asking — they may sell anonymised aggregate data or offer a partnership route.
- [ ] Can manufacturer installer directories be legally scraped for research purposes (not marketing)? The data is public, but terms of use may prohibit it. Needs the solicitor (Item 10) to assess.
- [ ] What is the TPS (Telephone Preference Service) registration rate among gas engineering businesses? If most are not TPS-registered, cold calling is lawful (for corporate subscribers and non-TPS sole traders alike). This opens a much larger channel than email.

## Acceptance Criteria

- [ ] Each source is assessed for legality of cold outreach, not just data availability.
- [ ] The corporate vs sole trader distinction is stated because it is the load-bearing legal fact.
- [ ] A practical recommendation is made that accounts for what is lawful, not just what is possible.
- [ ] The document is consistent with `01_vision.md`'s addressability claim — and states the nuance that "addressable" ≠ "emailable."
