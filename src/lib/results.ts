import results from "@/data/results.json";

export const productivityValue = `${results.productivity.gainPercent}%${results.productivity.atLeast ? "+" : ""}`;
export const productivityDescription = `${results.productivity.metric}, ${results.productivity.basis}`;
export const productivityClaim = `${productivityValue} ${productivityDescription}`;
export const academyCertifiedValue = `${results.academy.leadersCertified}${results.academy.leadersCertifiedAtLeast ? "+" : ""}`;
export const academyRoiValue = `${results.academy.roiRatio}:1`;
export const academyRoiClaim = `${academyRoiValue} ROI, as validated in a ${results.academy.roiEvidence}`;