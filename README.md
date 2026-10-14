# Pet Printed Gift Finder — milestone 3

Working five-question flow, in the user's requested order. Includes back navigation, preserved answers, review/edit, restart and up to three real product recommendations with images, exact variant prices, reasons and outbound personalization links.

## Open locally on Windows
1. Open this folder in VS Code (File > Open Folder).
2. Select Terminal > New Terminal.
3. Run `npm.cmd run dev`.
4. Open http://localhost:5173 in your browser.
5. Stop the server using Ctrl+C in the terminal.

No package download is required for this milestone. It uses plain HTML, CSS, JavaScript and a small Node.js local server rather than the previously suggested React/Vite starter.

## Requirements versus choices
PDF: working US gift finder, real catalog products/prices/links, reasons, natural copy, provided brand tokens, live URL and GitHub repository at final submission.
User: occasion is question 3, followed by preference and budget.
Current design choices: one question per screen, single selection, review screen, local-only milestone.

## Remaining work
Expand the five-product starter catalog, verify live browser/mobile behavior, publish repository and deploy to Vercel. All offered budget bands now have a checked variant for dog/cat/horse, with fewer choices in higher ranges. Other pet species are not yet covered. No delivery guarantees are made.

## Check
Run `npm.cmd run check` to check JavaScript syntax and `npm.cmd test` for recommendation checks. Browser interaction checks are also needed.

## Catalog method and ranking
US store WebMCP get_product confirmed availability, USD prices, images and exact variant IDs on October 14, 2026. Socks also reviewed in the live customization interface: photo upload and bone/fish patterns justify dog/cat suitability. Poster and magnet suitability for dog/cat/horse is an editorial inference from unrestricted pet-photo formats, not an explicit species guarantee from the store. Species evidence is recorded per product in catalog.js. A photo-tile product carrying hidden catalog tags was excluded.

Catalog: photo portrait mug, white 11 oz $17.95; pet-heads blanket, 50×60 in $59.95; photo socks S/M $19.95; round photo magnet $9.95; photo poster unframed 12×18 $19.95, black framed 12×16 $49.95, black framed 16×24 $79.95. Only checked variants are eligible. Images are store examples, not guaranteed depictions of the selected variant; configuration is labeled explicitly.

Eligibility: verified USD product, reviewed species, available positive-priced variant within the chosen band. Ranking: preference +5, occasion +3, recipient +1; ties use stable product ID. Lowest eligible variant per product; one result per product type, at most three. Neutral occasion/preferences add no points. Tags and reasons are editorial judgments; no invented store popularity or delivery claims. Prices are a dated snapshot and need rechecking before submission.

