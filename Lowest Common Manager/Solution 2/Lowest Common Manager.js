function getLowestCommonManager(topManager, reportOne, reportTwo) {
  return findCommonManager(topManager, reportOne, reportTwo).lowestCommonManager;
}


function findCommonManager(manager, reportOne, reportTwo) {
  let numOfImportantReports = 0;


  for (const directReport of manager.directReports) {
    const orgInfo = findCommonManager(directReport, reportOne, reportTwo);
    if (orgInfo.lowestCommonManager) return orgInfo;
    numOfImportantReports += orgInfo.numOfImportantReports;
  }
  if (manager === reportOne || manager === reportTwo) numOfImportantReports++;
  const lowestCommonManager = numOfImportantReports === 2 ? manager : null;   
  return {numOfImportantReports, lowestCommonManager}
}


// This is an input class. Do not edit.
class OrgChart {
  constructor(name) {
    this.name = name;
    this.directReports = [];
  }
}


// Do not edit the line below.
exports.getLowestCommonManager = getLowestCommonManager;

