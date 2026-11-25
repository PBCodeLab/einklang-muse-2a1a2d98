"""Checks the approved measured results, not presentation copy."""

import json
import unittest
from pathlib import Path

RESULTS = json.loads(
    (Path(__file__).resolve().parents[1] / "src/data/results.json").read_text()
)


class ResultsTests(unittest.TestCase):
    def test_productivity_gain_is_30_percent_plus(self):
        self.assertEqual(RESULTS["productivity"]["gainPercent"], 30)
        self.assertTrue(RESULTS["productivity"]["atLeast"])

    def test_measured_metric_is_productivity_not_cost_reduction(self):
        self.assertEqual(RESULTS["productivity"]["metric"], "productivity gain")

    def test_productivity_is_client_reported_average(self):
        self.assertEqual(RESULTS["productivity"]["basis"], "average reported by clients")

    def test_academy_has_160_plus_certified_leaders(self):
        self.assertEqual(RESULTS["academy"]["leadersCertified"], 160)
        self.assertTrue(RESULTS["academy"]["leadersCertifiedAtLeast"])

    def test_academy_roi_is_five_to_one(self):
        self.assertEqual(RESULTS["academy"]["roiRatio"], 5)

    def test_academy_roi_is_not_guaranteed(self):
        self.assertFalse(RESULTS["academy"]["roiGuaranteed"])

    def test_academy_roi_evidence_is_swiss_global_bank_programme(self):
        self.assertEqual(RESULTS["academy"]["roiEvidence"], "Swiss global bank programme")


if __name__ == "__main__":
    unittest.main()