function listarFotos() {
  var urlPlanilha = 'COLE_AQUI';
  var idPasta = 'COLE_AQUI';

  var ss = SpreadsheetApp.openByUrl(urlPlanilha);
  var sheet = ss.getSheets()[0];

  sheet.clear();
  sheet.appendRow(["Nome", "Link", "MimeType"]);

  var pasta = DriveApp.getFolderById(idPasta);
  var arquivos = pasta.getFiles();

  while (arquivos.hasNext()) {
    var arquivo = arquivos.next();

    sheet.appendRow([
      arquivo.getName(),
      arquivo.getUrl(),
      arquivo.getMimeType()
    ]);
  }
}