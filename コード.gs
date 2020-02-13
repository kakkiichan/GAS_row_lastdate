function set_last_update() {
  
  var sh=SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  var activerange=sh.getActiveRange();
  
  var activerow=activerange.getRow();
  
  sh.getRange(activerow, 3).setValue(new Date());
  
}
