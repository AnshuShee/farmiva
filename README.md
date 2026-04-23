# 🌿 Farmiva

> **"Fresh from land, delivered with care"**

Farmiva is a web-based farm-to-consumer platform that connects urban and rural customers directly with local farmers. It uses AI-powered freshness scoring, smart packaging logic, and a dual delivery model (express urban + rural hub) to ensure fresh, transparent, and reliable produce delivery.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [User Flows](#user-flows)
- [UI Screens](#ui-screens)
- [Design System](#design-system)
- [MVP Scope](#mvp-scope)
- [Phase 2 Roadmap](#phase-2-roadmap)
- [Business Model](#business-model)
- [KPIs](#kpis)
- [Risks](#risks)

---

## Overview

Farmiva solves two distinct problems at once — urban customers receiving bruised, low-quality produce with no transparency, and rural households lacking reliable doorstep delivery. The platform bridges farmers and consumers directly, cutting out middlemen and adding AI-based quality assurance at every step.

---

## Problem Statement

**Urban:**
- Customers receive bruised or low-quality fruits and vegetables
- No transparency in freshness or handling practices

**Rural:**
- No reliable doorstep delivery due to low population density
- Logistics are not viable for individual rural addresses

---

## Key Features

### 🥬 Smart Freshness System
- AI-based quality scoring from 0 to 100
- Detects bruises, ripeness, and surface defects from uploaded images
- Displays a color-coded Freshness Score badge on every product (green = 80+, amber = 50–79, red = below 50)

### 📦 Smart Packaging Engine
- Categorizes items as fragile, medium, or hard
- Applies auto-packaging rules — no heavy items stacked on fragile ones, cushion packaging for delicate produce

### 🚚 Dual Delivery Model
- **Urban:** 10–30 minute express delivery via micro-warehouses (dark stores)
- **Rural:** Hub + pickup model with weekly scheduled batches and local agents for last-mile distribution

### 📍 Smart Address System
- Map pin + landmark input for precise delivery
- Save and reuse multiple delivery addresses

### 👨‍🌾 Farmer Integration
- Farmers upload produce directly to the platform
- AI estimates freshness score from photos before listing goes live
- Reduces middlemen, increases farmer revenue

### 🔁 Damage Protection System
- Customers upload photo proof of damaged items
- AI verifies the claim automatically
- Auto refund or replacement issued

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend (Web) | React |
| Frontend (Mobile) | React Native |
| Backend | Node.js / Express |
| AI Layer | Python — OpenCV, TensorFlow |
| Primary Database | PostgreSQL |
| Caching | Redis |
| File Storage | AWS S3 / GCP Storage |
| Compute (AI) | AWS / GCP |
| Maps | Google Maps API |

---

## System Architecture

```
┌─────────────────────────────────────────────┐
│                  Frontend                   │
│         React (Web) + React Native          │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│              Backend API                    │
│           Node.js / Express                 │
└──────┬───────────────────────┬──────────────┘
       │                       │
┌──────▼──────┐       ┌────────▼────────┐
│  PostgreSQL │       │   AI Service    │
│  (main DB)  │       │  Python/OpenCV  │
└─────────────┘       │  TensorFlow     │
                      └────────┬────────┘
┌─────────────┐                │
│    Redis    │       ┌────────▼────────┐
│  (caching)  │       │  Cloud Storage  │
└─────────────┘       │  AWS / GCP      │
                      └─────────────────┘
```

---

## User Flows

### 🛒 Urban Customer Flow
1. Opens app → browses products with freshness scores
2. Adds items to cart
3. Smart packaging is auto-applied
4. Selects express delivery → places order
5. Order delivered in 10–30 minutes

### 🌾 Rural Customer Flow
1. Opens app → selects nearest pickup hub
2. Places order
3. Orders are batched with other local customers
4. Batch delivered to village hub on scheduled day
5. Local agent distributes to customers

### 👨‍🌾 Farmer Flow
1. Signs up on the Farmer Portal
2. Uploads produce details and photos
3. AI estimates freshness score
4. Listing goes live on the platform
5. Orders received, payouts processed directly

---

## UI Screens

The following screens make up the full Farmiva web application:

| # | Screen | Description |
|---|---|---|
| 1 | Landing / Home | Hero, trust strip, featured products, how it works |
| 2 | Sign Up | Customer and farmer account creation |
| 3 | Login | Email/password + Google auth |
| 4 | Forgot Password | Email-based reset link flow |
| 5 | Email Verification | 6-digit OTP confirmation |
| 6 | Browse / Listing | Filter sidebar, product grid, freshness sorting |
| 7 | Product Detail | Gallery, freshness ring, farm source, add to cart |
| 8 | Cart | Item list, packaging summary, delivery mode toggle |
| 9 | Checkout | Address, time slot, payment method |
| 10 | Order Confirmation | Success state with order summary |
| 11 | Order History | All/Active/Delivered/Cancelled tabs |
| 12 | Order Tracking | Step progress bar + live map |
| 13 | Rural Hub Pickup | Map with hub markers, batch schedule |
| 14 | Damage Report | Photo upload, item selector, claim tracker |
| 15 | User Profile | Personal info, saved addresses, preferences |
| 16 | Farmer Sign Up | 3-step onboarding with farm + ID verification |
| 17 | Farmer Dashboard | Stats, recent orders, listing preview |
| 18 | Farmer Add Produce | Form + AI freshness score preview |
| 19 | Order Received | Receipt confirmation, ratings, reorder, issue report |

---

## Design System

| Token | Value |
|---|---|
| Primary color | Deep green — `#2D6A4F` |
| Accent color | Warm orange — `#E07B39` / Turmeric yellow — `#E9A800` |
| Background | Warm off-white — `#FAFAF7` |
| Card radius | 12px |
| Font | Inter or DM Sans |
| Heading weight | 600–700 |
| Body weight | 400 |

**Freshness badge colors:**
- 🟢 Green — score 80 and above
- 🟡 Amber — score 50 to 79
- 🔴 Red — score below 50

**Design philosophy:** Clean, warm, and trustworthy. Farmiva should feel like a farmer's market online — not a warehouse or logistics app. Freshness and transparency are the visual heroes of every screen.

---

## MVP Scope

**Phase 1 — Must have:**
- Product listing with basic freshness tagging (manual + basic AI)
- Order and checkout system
- Urban express delivery
- Rural pickup point system
- Basic damage reporting

**Phase 1 — Out of scope:**
- Advanced AI freshness models
- Full farmer marketplace
- Complex analytics dashboards
- Subscription model

---

## Phase 2 Roadmap

- Full AI freshness detection (real-time image analysis)
- Route optimization AI for delivery
- Dedicated farmer app (mobile)
- Subscription model with freshness guarantee
- Voice ordering for rural users with low literacy

---

## Business Model

| Revenue Stream | Description |
|---|---|
| Commission per order | Percentage taken on every customer transaction |
| Subscription | Premium freshness guarantee plan for customers |
| B2B supply | Bulk produce supply to shops and vendors |
| Logistics service | Rural delivery infrastructure offered as a service |

---

## KPIs

- Percentage of damaged items received — target: decrease over time
- Customer satisfaction score — target: increase over time
- Rural order volume — target: grow month-on-month
- Delivery success rate — target: maintain above 95%
- Return and refund rate — target: decrease over time

---

## Risks

| Risk | Mitigation |
|---|---|
| AI accuracy for quality detection | Start with manual tagging, layer AI progressively |
| Rural logistics cost | Batching and hub model reduces per-order cost |
| User trust in a new system | Damage protection + transparent freshness scores build confidence |
| Supply chain consistency | Direct farmer relationships and inventory management |

---

## Project Deliverables

- [x] Product Requirements Document (PRD)
- [x] UI/UX Prompt (Stitch AI ready — 19 screens)
- [x] Figma UI Screens  
  👉 https://www.figma.com/design/Re9gukP9yHIOHcZhVwlwTW/Anshu?node-id=0-1&t=4q862lGVcKyF27fU-1
- [ ] System architecture diagram
- [ ] API design document
- [ ] Working demo (Phase 1)
*Farmiva — Fresh from land, delivered with care.*
