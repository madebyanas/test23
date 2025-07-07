function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1');

    const data = JSON.parse(e.postData.contents);

    // Example fields, adapt if needed
    const name = data.name || '';
    const phone = data.phone || '';
    const overallLevel = data.overallLevel || '';
    const grammar = data.grammarPercentage || 0;
    const vocabulary = data.vocabularyPercentage || 0;
    const reading = data.readingPercentage || 0;
    const language = data.selectedLanguage || '';
    const timestamp = data.timestamp || new Date().toISOString();

    // Append to sheet
    sheet.appendRow([
      new Date(),
      name,
      phone,
      overallLevel,
      grammar,
      vocabulary,
      reading,
      language,
      timestamp
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Data saved' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
