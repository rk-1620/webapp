function doGet(){
  return HtmlService.createTemplateFromFile("main").evaluate();

}
function descClicked(u_input)
{

  //Logger.log(des + "+" +amt +"+"+ dr );
  //  Logger.log(des);
  var url="https://docs.google.com/spreadsheets/d/1QNNPkozje-RFTIJFmtapwgS8DWdKTJOUHWw8gnKQs4o/edit#gid=0";
  var ss=SpreadsheetApp.openByUrl(url);
  var debit=ss.getSheetByName("debit");
  var credit=ss.getSheetByName("credit");
  var need=ss.getSheetByName("need");
  var fun=ss.getSheetByName("fun");
  var investing=ss.getSheetByName("investing");
  var savings=ss.getSheetByName("savings");
  var forgive=ss.getSheetByName("forgive");
  var knowledge=ss.getSheetByName("knowledge");
  var health=ss.getSheetByName("health");
  var all=ss.getSheetByName("all");


  var currentDate = new Date();
  var formattedDate = Utilities.formatDate(currentDate, "GMT", "yyyyMMdd");

  var input1 = u_input.cate1;
  switch (input1) 
    {
      case 'debit':
        debit.appendRow([u_input.desc,u_input.amt,u_input.cate2,formattedDate]);
        break;
      default:
        credit.appendRow([u_input.desc,u_input.amt,u_input.cate2,formattedDate]);
        break;
    }

  var input2 = u_input.cate2;
    switch (input2) 
    {
      case 'need':
        need.appendRow([u_input.desc,u_input.amt,formattedDate]);
        all.appendRow([u_input.desc,u_input.amt,u_input.cate1,u_input.cate2,formattedDate,u_input.date1]);
        break;
      case 'fun':
        fun.appendRow([u_input.desc,u_input.amt,formattedDate]);
        all.appendRow([u_input.desc,u_input.amt,u_input.cate1,u_input.cate2,formattedDate]);
        break;
      case 'investing':
        investing.appendRow([u_input.desc,u_input.amt,formattedDate]);
        all.appendRow([u_input.desc,u_input.amt,u_input.cate1,u_input.cate2,formattedDate]);
        break;
      case 'savings':
        savings.appendRow([u_input.desc,u_input.amt,formattedDate]);
        all.appendRow([u_input.desc,u_input.amt,u_input.cate1,u_input.cate2,formattedDate]);
        break;
      case 'forgive':
        forgive.appendRow([u_input.desc,u_input.amt,formattedDate]);
        all.appendRow([u_input.desc,u_input.amt,u_input.cate1,u_input.cate2,formattedDate]);
        break;
      case 'knowledge':
        knowledge.appendRow([u_input.desc,u_input.amt,formattedDate]);
        all.appendRow([u_input.desc,u_input.amt,u_input.cate1,u_input.cate2,formattedDate]);
        break;
      default:
        health.appendRow([u_input.desc,u_input.amt,formattedDate]);
        all.appendRow([u_input.desc,u_input.amt,u_input.cate1,u_input.cate2,formattedDate]);
        break;
    }
 
}

function getinfo(u_input)
{
  var url="https://docs.google.com/spreadsheets/d/1QNNPkozje-RFTIJFmtapwgS8DWdKTJOUHWw8gnKQs4o/edit#gid=0";
  var ss=SpreadsheetApp.openByUrl(url);
  d1=u_input.date1;
  d2=u_input.date2;

  var lastRow = ss.getLastRow();

  for (var i = 1; i < lastRow; i++) {
    
    var cellValue = ss.getRange("F"+i).getValue();
    if(cellValue>=d1 && cellValue<=d2){
      
    }
    
  }

}

function include(filename)
{

  return HtmlService.createHtmlOutputFromFile(filename).getContent();

}
