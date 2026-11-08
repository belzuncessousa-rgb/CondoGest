# Lintel

A phone-first app for running a residential building. This first cut is a
clickable **prototype of the manager's side**: a login screen, a home
dashboard and booking of the common areas, plus sketched Residents, Notices
and More screens.

It is plain HTML, CSS and JavaScript with no build step and no server, so it
runs straight from GitHub Pages. All data is sample data kept in your browser.

## Try it

Open `index.html` in a browser (or the GitHub Pages link once it is set up),
preferably on a phone. On a desktop browser it shows as a phone-width column.
Any email and password signs you in.

## What's in the prototype

| Screen | What works |
| --- | --- |
| **Login** | Manager / Resident switch (resident shows "coming next"), email + password with validation, "keep me signed in", forgot password, building-code sign-in placeholder. |
| **Home** | Greeting, the count of booking requests waiting for an answer, today's bookings as a timeline (with a "Now" marker), quick actions, latest notice. |
| **Bookings → Requests** | Each pending request with date, time, guests, the resident's note, fees and warnings (e.g. over capacity). Approve, or decline with a reason the resident sees. Undo from the toast. |
| **Bookings → Schedule** | Two-week date strip with booking dots, filter by area, tap a booking for details, cancel it (tap twice to confirm). |
| **Bookings → Areas** | Six common areas with their rules, fees, approval mode and how booked they are this week. |
| **Area page** | Capacity, fee, deposit, booking window, cancellation window, availability per day as time slots, the "requires my approval" switch, house rules. Tap a free slot to book it for a resident. |
| **Residents** | Searchable unit list; tap a unit to see its bookings. |
| **Notices** | Building announcements with read counts; post a new one. |
| **More** | Profile, links to future modules (repairs, packages, fees, documents), reset demo data, sign out. |

## Decisions made for this first version

These were picked without input and are all easy to change:

- **Name: "Lintel"** (the beam over a doorway). Placeholder; easy to rename.
- **Sample building:** "Alameda Tower", 64 units on 16 floors, managed by
  "Ana Ribeiro". All people and units are invented.
- **Common areas:** Party Room (needs approval, $80 + $200 deposit, three
  4-hour slots), Rooftop BBQ (instant, $25, 3-hour slots), Tennis Court
  (instant, free, 1-hour slots), Guest Suite (needs approval, $60/night),
  Co-working Room (instant, free, 2-hour slots) and Pool (no booking; shown
  closed for repairs to demonstrate that state).
- **Two booking modes per area:** *instant* (confirmed right away) or
  *needs approval* (lands in the manager's Requests). The manager can switch
  each area between them.
- **Manager can book on behalf of a resident** from any free slot.
- **Declining needs a reason**, shown to the resident.
- **Navigation:** bottom tab bar with Home, Bookings, Residents, Notices, More.
- **Language and formats:** English UI, 24-hour times, US dollars.
- **Look:** dark lobby-teal with a brass accent; follows the phone's light or
  dark mode.
- **Tech:** no framework and no build step for now, so anyone can open and
  edit it. When this becomes a real app we can move to a framework (React
  Native / Expo or a PWA) and a backend.

## Next steps (suggested)

1. Resident view: book an area, see my bookings, receive notices.
2. Repair tickets, package log and fees (the sketched "Soon" items).
3. Pick the real stack and a backend (accounts, buildings, bookings, payments).

## Moving this to its own repository

This code was started on the branch `claude/residential-app` of another
repository, with no shared history. To move it:

```bash
# after creating an empty repo on GitHub, e.g. <you>/lintel
git clone --branch claude/residential-app --single-branch \
  https://github.com/belzuncessousa-rgb/Corner_lands.git lintel
cd lintel
git remote set-url origin https://github.com/<you>/lintel.git
git push -u origin claude/residential-app:main
```

Then in the new repository: **Settings → Pages → Source: GitHub Actions**.
The included workflow publishes the site on every push to `main`.
Finally, delete the `claude/residential-app` branch from the old repository.
