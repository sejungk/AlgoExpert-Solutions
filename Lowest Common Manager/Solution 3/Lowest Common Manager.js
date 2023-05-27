function getLowestCommonManager(topManager, reportOne, reportTwo) {
  return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}


function getOrgInfo(manager, reportOne, reportTwo) {
  
  let reportsFound = 0;
  for (const directReport of manager.directReports) {
    const currOrgInfo = getOrgInfo(directReport, reportOne, reportTwo);
    if (currOrgInfo.lowestCommonManager) return currOrgInfo;
    reportsFound += currOrgInfo.reportsFound;
  }


  if (manager === reportOne || manager === reportTwo) reportsFound++;
  const lowestCommonManager = reportsFound === 2 ? manager : null;
  return {lowestCommonManager, reportsFound};
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

