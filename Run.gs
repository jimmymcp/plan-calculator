//globals
var dutyNo = 0;
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
var memberArray = spreadsheet.getSheetByName('Members').getRange(2, 1, spreadsheet.getSheetByName('Members').getLastRow() - 1, 3).getValues();
var dutySetupArray = [];
var memberDutyArray = [];
var awayDateArray = [];
var dutyArray = [];
var dutyConstraintArray = [];
var constraintSetupArray = [];

function insertDuties() {
  clearDuties();
  dutySetupArray = readArrayFromSheet('Duty Setup');
  populateDuties();  
}

function insertAwayDates() {
  populateAwayDateData();
  writeArrayToSheet(awayDateArray,'Away Date Data');
}

function insertAwayDateContraints() { 
  dutySetupArray = readArrayFromSheet('Duty Setup');
  dutyArray = readArrayFromSheet('Duties');
  populateMemberDutyArray();
  awayDateArray = readArrayFromSheet('Away Date Data');  
  populateConstraintsForAwayDates();
  writeArrayToSheet(dutyConstraintArray,'Duty Constraint');
}

function updateCandidatesForDuties2() {
  dutySetupArray = readArrayFromSheet('Duty Setup');
  dutyArray = readArrayFromSheet('Duties');
  dutyConstraintArray = readArrayFromSheet('Duty Constraint');
  populateMemberDutyArray();  
  updateCandidatesForDuties();
  writeArrayToSheet(dutyArray,'Duties');
}

function calculatePlan() {
  dutySetupArray = readArrayFromSheet('Duty Setup');
  dutyArray = readArrayFromSheet('Duties');
  dutyConstraintArray = readArrayFromSheet('Duty Constraint');
  populateMemberDutyArray();
  awayDateArray = readArrayFromSheet('Away Date Data');
  constraintSetupArray = readArrayFromSheet('Constraint Setup');
  planDuties();
  writeArrayToSheet(dutyConstraintArray,'Duty Constraint');
  writeArrayToSheet(dutyArray,'Duties');
}

function test() {
  dutyArray = readArrayFromSheet('Duties');
  constraintSetupArray = readArrayFromSheet('Constraint Setup');  
  updateConstraintsForDuty(138);
}