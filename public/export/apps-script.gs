/**
 * EventTribe enquiry form -> Google Sheet
 *
 * SETUP
 * 1. Open your sheet:
 *    https://docs.google.com/spreadsheets/d/1l96By-8mb3DUlIGezKx6gvrqSkwcXgPNVjjJ9u4MLtY/edit
 * 2. Extensions > Apps Script. Delete anything there and paste this whole file.
 * 3. Deploy > New deployment > type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 *    Deploy, authorise, copy the /exec URL.
 * 4. In index.html, replace PASTE_YOUR_APPS_SCRIPT_URL in the <form action="..."> with that URL.
 */

var SHEET_NAME = 'Leads';

var HEADERS = [
  'Timestamp',
  'Name',
  'Organisation',
  'Email',
  'Phone',
  'Event type',
  'Event dates',
  'Delegates',
  'Message',
  'Source'
];

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function readPayload_(e) {
  // Works with a plain HTML form POST and with a JSON fetch POST.
  if (e && e.postData && e.postData.contents) {
    try {
      var parsed = JSON.parse(e.postData.contents);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (err) {
      // not JSON, fall through to form parameters
    }
  }
  return (e && e.parameter) ? e.parameter : {};
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var data = readPayload_(e);
    var sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.organisation || '',
      data.email || '',
      data.phone || '',
      data.eventType || '',
      data.eventDate || '',
      data.delegates || '',
      data.message || '',
      data.source || 'eventtribe-landing'
    ]);

    // A plain form POST opens this response in a tab, so return a thank you page.
    return HtmlService.createHtmlOutput(
      '<div style="font-family:system-ui;padding:48px;text-align:center">' +
      '<h1 style="font-weight:400">Thank you</h1>' +
      '<p>Your enquiry is in. We will reply within one working day.</p>' +
      '</div>'
    );
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
