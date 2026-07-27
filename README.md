# WarrantyFlow AI — sms-warranty-platform

A UI mockup for an automated warranty-reminder and SMS follow-up platform for home service businesses (HVAC, roofing, water treatment, etc.). Built as a front-end concept/demo — a single dashboard screen showing what the product would look like, not a working SMS backend yet.

Live demo: https://sms-warranty-platform.vercel.app

## What's here

The dashboard mocks up the core idea: when a customer's warranty is about to expire, the system texts them automatically, tracks replies, and turns a "yes" into a booked appointment. The UI shows:

- Top-line stats (messages sent, active customers, appointments booked, monthly revenue)
- An upcoming-reminders table with customer, service, due date, and status
- A visual walkthrough of the SMS automation flow (warranty expires → SMS sent → customer replies → appointment created → staff notified)
- A sample AI follow-up conversation thread
- Subscription plan tiers (Starter / Pro / Agency)

All data on the dashboard is hardcoded — there's no database, SMS provider, or backend wired up yet.

## Stack

React 19 + Vite + Tailwind CSS, in the `text-service/` directory.

## Running locally

```
cd text-service
npm install
npm run dev
```

## Status

Early-stage concept. Next steps would be wiring up real data (Supabase/Postgres or similar), an actual SMS provider (e.g. Twilio), and persisting reminders/appointments instead of hardcoding them.
