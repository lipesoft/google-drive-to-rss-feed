function doGet() {
  var ss = SpreadsheetApp.openByUrl('COLE_AQUI');
  var sheet = ss.getSheets()[0];
  var data = sheet.getDataRange().getValues();

  var rss = '<?xml version="1.0" encoding="UTF-8"?>\n';
  rss += '<rss version="2.0">\n<channel>\n';

  rss += '<title>Feed de Fotos</title>\n';

  for (var i = 1; i < data.length; i++) {
    var nome = data[i][0];
    var link = data[i][1];

    if (!link) continue;

    var match = link.match(/d\/(.*?)\//);
    if (!match) continue;

    var fileId = match[1];

    var directLink = 'https://drive.google.com/uc?export=view&id=' + fileId;

    rss += '<item>\n';
    rss += '<title>' + nome + '</title>\n';
    rss += '<enclosure url="' + directLink + '" type="image/jpeg" />\n';
    rss += '</item>\n';
  }

  rss += '</channel>\n</rss>';

  return ContentService
    .createTextOutput(rss)
    .setMimeType(ContentService.MimeType.XML);
}