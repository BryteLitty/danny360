# Danny360 One-Page Website Documentation

## Overview
**Project Title:** Danny360 — One-Stop Service Ecosystem  
**Goal:** Present a one-page site that introduces all services under the Danny360 brand, allowing users to learn about each offering in a visually cohesive, interactive experience.

---

## 🎯 Objective
- Showcase Danny360 as the parent brand with 7+ sub-services.
- Provide short descriptions and modal pop-ups for each service.
- Redirect Easy-Fi to a standalone page.
- Create a premium user experience without multi-page navigation.

---

## 🧭 Page Structure
/
├── Hero Section
├── About Section
├── Services Section
│   ├── Easy-Fi → [external redirect]
│   ├── 360net → [modal popup]
│   ├── Easy-Buy → [modal popup]
│   ├── 360 Designs → [modal popup]
│   ├── 360 Constructions → [modal popup]
│   ├── 360 Security → [modal popup]
│   ├── 360 Consult → [modal popup]
├── Highlight / Vision Section
├── Contact Section
└── Footer

---

## 🧱 Section-by-Section Breakdown

### 1. Hero Section
**ID:** `#hero`  
**Purpose:** Welcome users, brand reveal, CTA to explore services.

**Prompt:**
- [ ] Add headline text: "Welcome to Danny360 — Your One-Stop Brand for Internet, Innovation & Everyday Solutions."
- [ ] Add scroll button/CTA linking to `#services`
- [ ] Add background image/video or collage

---

### 2. About Section
**ID:** `#about`  
**Purpose:** High-level brand mission and narrative.

**Prompt:**
- [ ] Add short paragraph: "Danny360 is a unified ecosystem..."
- [ ] Optional: Include founder's quote or company origin

---

### 3. Services Section
**ID:** `#services`  
**Purpose:** Present sub-brands with descriptions and interactivity.

**Display Format:** Grid layout with clickable tiles

| Name               | Interaction         | Description Status         |
|--------------------|---------------------|-----------------------------|
| Easy-Fi            | External Redirect   | Takes user to full site     |
| 360net             | Modal Popup         | Show info                  |
| Easy-Buy           | Modal Popup         | Show info                  |
| 360 Designs        | Modal Popup         | Show info                  |
| 360 Constructions  | Modal Popup         | Show info                  |
| 360 Security       | Modal Popup         | Show info                  |
| 360 Consult        | Modal Popup         | Show info                  |

**Prompt:**
- [ ] Create 7 cards with service name, icon, short tagline
- [ ] For Easy-Fi: add redirect link (new tab)
- [ ] For others: trigger modal with full description

---

### 4. Vision Highlight Section
**ID:** `#highlight`  
**Purpose:** Reinforce the unity and mission of the sub-brands.

**Prompt:**
- [ ] Add paragraph: "Each of our brands stands alone..."
- [ ] Add a row of sub-brand logos/icons

---

### 5. Contact Section
**ID:** `#contact`  
**Purpose:** Entry point for engagement

**Prompt:**
- [ ] Add inviting text: "Want to partner or collaborate? Let’s talk."
- [ ] Add email address and/or WhatsApp CTA
- [ ] Optional: Simple contact form (Name, Email, Message)

---

### 6. Footer
**ID:** `#footer`  
**Purpose:** Legal, social, and navigation wrap-up.

**Prompt:**
- [ ] Add copyright
- [ ] Add anchor links for navigation (Home, Services, Contact)
- [ ] Add social icons (if available)

---

## 🧩 Interaction Behavior

### Modal Behavior
- Triggered on card click (except Easy-Fi)
- Includes service title, full description, and “Coming Soon 🚧” message
- Closes on:
  - ESC key
  - Click outside modal
  - Close icon/button

**Prompt:**
- [ ] Define modal component template
- [ ] Link each service card to modal content

---

### Easy-Fi Redirect
- Opens standalone page in new tab
- URL to be defined (e.g., `https://easyfi.danny360.com`)

**Prompt:**
- [ ] Add redirect behavior for Easy-Fi card

---

## 📝 Content Checklist

- [ ] Write full descriptions for each sub-brand (for modals)
- [ ] Prepare branding assets: logos, icons, and colors
- [ ] Finalize Easy-Fi external link
- [ ] Define contact methods (email, WhatsApp, form?)

---

## ✅ Naming Conventions (Suggested)

| Section            | ID/Class             |
|--------------------|----------------------|
| Hero               | `#hero` / `.hero-section` |
| About              | `#about` / `.about-section` |
| Services           | `#services` / `.services-grid` |
| Modal              | `#modal` / `.modal-container` |
| Contact            | `#contact` / `.contact-section` |
| Footer             | `#footer` / `.footer` |

---

## 📌 Notes
- Keep interactions smooth and visual hierarchy clean
- Use Danny360 colors: Deep Blue, Orange, Wine, White, Black
- Focus on clarity and strong brand presence