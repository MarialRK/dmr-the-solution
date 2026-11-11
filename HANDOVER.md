# DMR — The Solution: how to run your website

This guide is for you, Daniel. It explains how to keep the website up to date without touching any code.

Everything in it applies once the site is live. Wherever it says `yourdomain.com`, use the domain you choose.

---

## 1. The two parts of the website

| Part | Address | Who sees it |
|---|---|---|
| **The website** | `yourdomain.com` | Everyone |
| **The dashboard** | `yourdomain.com/admin` | Only you, after logging in |

Changes you save in the dashboard appear on the website within a few seconds. You never need to "rebuild" or "publish the site" yourself.

## 2. Logging in

1. Go to `yourdomain.com/admin`.
2. Enter the email and password set during deployment (`ADMIN_EMAIL` and `ADMIN_PASSWORD` in Vercel).
3. To change your password once you are in, click your account icon at the bottom left and choose **Change password**.

Several wrong passwords in a row lock the account for a short time. This protects the site, so just wait and try again.

## 3. What you can manage

The menu on the left of the dashboard has these sections.

### Enquiries: people who contacted you
- Every message sent through the Contact page appears here, newest first.
- Open one to see the person's name, email, country, whether they are writing as an individual or organisation, the service they want, their timeline and their message.
- **My private notes** is only for you, for example "Called on 14 Nov, sending quote".
- Visitors can send at most 5 enquiries an hour, and spam robots are filtered out automatically.
- Once an email address is set (section 3.9), you will also get an email for every new enquiry.

### Articles: your Insights page
1. Click **Articles → Create new**.
2. Fill in the title, a one-line summary and the article text. The editor works like Word: headings, bold, lists and links.
3. Leave **Show on website** unticked while you are drafting. Visitors cannot see drafts.
4. When it is ready, tick **Show on website** and click **Save**. It appears on the Insights page and on the home page.

The three articles already on the site are built into the website's files. To change those, ask me (or any developer). Articles you create in the dashboard you can edit freely.

### Projects: the Work page
For projects beyond the ones already listed, such as a new venture idea or an app you are building.
- Fill in the title, write an honest **status** (for example "In development", "Completed 2026" or "Concept"), add a short description, and optionally a link.
- They appear after the projects already on the page. **Order** controls their position: lower numbers come first.

### Portfolio items: the Portfolio page
For new pieces of work to show clients.
- Add the project name, a brief description, the problem or objective, your contribution, the tools used, and the outcome or current status.
- Add an image in the same entry.
- Only include work you have permission to show. Keep confidential proposals, government correspondence and investment documents off the site.

### Media items: the Media page
Interviews, talks, events and publications. Choose a type, add the date and a **Link to source**, then tick **Show on website**.

### Images
Every image you upload is kept here.
- Always fill in **Describe the image**, for example "Daniel speaking at ALU Ventures Lab Demo Day". Screen readers use this text, and so does Google.
- A smaller copy is made automatically for the website, so upload the best-quality version you have.

### Service wording: change what a service page says
The 10 services already have full text. Use this section only to change part of it.
1. **Create new** and choose the service.
2. Fill in **only the boxes you want to change**. Anything left empty keeps the current wording.
3. For "What I offer", put one item per line.
4. To return to the original wording, delete the entry.

### About page
Replace the headline and opening paragraphs of the About page. Leave a blank line between paragraphs. Clear the boxes to go back to the original text.

### Site settings
- **Email shown on website**: the public email in the footer and on the Contact page. This is currently a placeholder until you have your domain email.
- **Send new enquiries to this email**: where enquiry alerts go. Only you can see this setting.
- **WhatsApp link**: currently `https://wa.me/250798619965`.
- **Services to hide**: tick a service to remove it from the website temporarily, for example when you are fully booked. Untick it to bring it back.

## 4. Things that still need a developer
These are part of the site's design rather than the dashboard:
- The home page layout, the ventures (Nile Green Group, Nile Green Packaging, Nile Vertex Properties), and the SuddSight case study.
- The built-in photos, logos and business-card samples.
- Adding a completely new service, page or menu item.

The code is in your private GitHub repository `MarialRK/dmr-the-solution`. Any change pushed to the `main` branch goes live automatically through Vercel within about two minutes.

## 5. Accounts the website depends on

| Service | What it does | Cost |
|---|---|---|
| **GitHub** | Stores the code | Free |
| **Vercel** (Pro) | Runs the website, gives the free HTTPS certificate, counts visits | US$20/month |
| **Neon** (through Vercel) | The database for enquiries, articles and settings | Free tier |
| **Vercel Blob** | Stores images you upload in the dashboard | Included up to a limit |
| **Resend** (optional) | Sends enquiry email alerts | Free tier |
| **Cloudflare Turnstile** (optional) | Extra spam protection on the form | Free |
| **Domain registrar** | Your web address | About US$10–40/year |

Keep the logins to these accounts safe, and turn on two-step verification on GitHub and Vercel. Never share the values in Vercel's **Environment Variables** page. They are the keys to your database and dashboard.

## 6. Visitor statistics
In Vercel, open the project and go to the **Analytics** tab. It shows how many people visited, which pages they read and which countries they came from. No cookies are used, and the privacy page explains this to visitors.

## 7. If something goes wrong
- **Website down or showing an error**: in Vercel, open **Deployments**, find the last one marked *Ready* that worked, open its menu (⋯) and choose **Promote to Production**. This rolls the site back instantly.
- **Forgot your dashboard password**: changing `ADMIN_PASSWORD` in Vercel does **not** reset an existing account, because it is only used to create the very first one. Ask a developer to reset it in the database. To avoid this, keep the password in a password manager.
- **Enquiry emails not arriving**: check **Site settings → Send new enquiries to this email**, then check that `RESEND_API_KEY` is set in Vercel. Enquiries are always saved in the dashboard either way.

## 8. Good habits
- Add new work to the Portfolio as you finish it; a site that grows looks alive.
- Aim for an article every month or two.
- Keep every project's status honest.
- Look at Enquiries at least every couple of days, and reply within 24 hours where you can.

---

**DMR — The Solution.**
