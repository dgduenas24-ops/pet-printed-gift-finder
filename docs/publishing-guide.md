# Publish your gift finder

This guide applies to the actual plain HTML/CSS/JavaScript project, not the originally suggested React/Vite stack.

## 1. GitHub account
Go to https://github.com/ and sign in, or use Sign up and complete email verification. Keep passwords and verification codes out of chat.

## 2. Create the repository
Open https://github.com/new. Choose your personal account as owner. Name the repository `pet-printed-gift-finder`. Description: `A mobile-first gift finder prototype for Pet Printed US.` Choose Public if the test-task reviewer should be able to open it without an invitation. Leave Add README, .gitignore and license unchecked; our files already include documentation and ignore rules. Create the repository and copy its HTTPS URL.

## 3. Save the local project using Git
Open the project folder in VS Code, then Terminal > New Terminal. Confirm the terminal is in this project's folder, not its parent. Run each command separately:

```text
git init -b main
git config user.name "YOUR NAME"
git config user.email "YOUR GITHUB COMMIT EMAIL"
git add .
git commit -m "Build Pet Printed gift finder prototype"
git remote add origin YOUR_REPOSITORY_HTTPS_URL
git push -u origin main
```

Replace placeholders. Use the private commit email from GitHub Settings > Emails if preferred. These commands set identity for this project only. If a command fails, stop and share the error before continuing. Sign in through the browser if Git prompts. Never paste passwords or tokens into chat.

Reload the repository page. Confirm index.html, app.js, catalog.js, recommend.js, styles.css, build.cjs, package.json, vercel.json and README.md appear. GitHub Actions should run checks after the push.

## 4. Vercel deployment
Sign in at https://vercel.com/. Choose Add New > Project, connect GitHub and import the repository. Limit repository access to this project when that choice is offered. Confirm the target personal account/team.

Use these settings:
- Framework preset: Other
- Root directory: repository root, if only this project was pushed
- Build command: npm run build
- Output directory: dist
- Environment variables: none

The tracked vercel.json supplies build/output settings. The local server.cjs is only for your computer; deployment serves static files copied by build.cjs. Deploy, then test the supplied URL. Check it from a private browser window to establish whether a reviewer can access it. Do not confuse a Vercel account-protected preview with a publicly accessible submission URL.

## 5. Final review
Try all five questions, back/edit/restart, each budget range, Another pet, images and outbound personalization links. Test a phone or narrow browser window. Recheck catalog prices and availability before submission. Add the verified live URL to README.md, then commit and push that update.

## Scope and limits
Five products, seven checked variants. Species suitability for generic photo products is inferred from their photo-upload format and recorded in catalog.js, rather than an explicit store guarantee. Another pet remains unsupported. No shipping deadline guarantees. Larger catalog coverage is still desirable before final submission.

Official references:
- https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
- https://vercel.com/docs/deployments
