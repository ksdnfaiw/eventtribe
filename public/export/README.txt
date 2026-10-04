EventTribe landing page - static export
=======================================

Files
-----
index.html      The whole page, plain HTML.
styles.css      All styling and animations, plain CSS.
images/         Logo and photos used on the page.
favicon.png     Browser tab icon.
apps-script.gs  Google Apps Script that writes form enquiries into your sheet.

Open it
-------
Double click index.html. No build step, no server, no JavaScript.

Hosting
-------
Upload the whole folder to any host: Hostinger, Netlify drop, GitHub Pages,
cPanel public_html, S3. Keep the folder structure as is.

Connect the form to Google Sheets
---------------------------------
1. Open the sheet, go to Extensions > Apps Script.
2. Paste all of apps-script.gs, save.
3. Deploy > New deployment > Web app.
   Execute as: Me. Who has access: Anyone. Deploy and authorise.
4. Copy the /exec URL.
5. In index.html find PASTE_YOUR_APPS_SCRIPT_URL inside <form action="...">
   and replace it with that URL.

Submissions then append to a "Leads" tab with headers already set.
