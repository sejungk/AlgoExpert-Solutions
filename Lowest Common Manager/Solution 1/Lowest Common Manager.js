function getLowestCommonManager(topManager, reportOne, reportTwo) {
  return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}


function getOrgInfo(manager, reportOne, reportTwo) {
  let numImportantReports = 0;
  for (const directReports of manager.directReports) {
    const orgInfo = getOrgInfo(directReports, reportOne, reportTwo);
    // if we've found lowest common manager, return object
    if (orgInfo.lowestCommonManager) return orgInfo;
    numImportantReports += orgInfo.numImportantReports;
  }
  // there will always come a point where we reach a subtree that rooted at one of our 2 reports
  // base case
  if (manager === reportOne || manager === reportTwo) numImportantReports++;
  const lowestCommonManager = numImportantReports === 2 ? manager : null;
  return {lowestCommonManager, numImportantReports};
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

