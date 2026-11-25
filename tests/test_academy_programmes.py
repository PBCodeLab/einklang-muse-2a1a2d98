"""Check Academy prices, rate terms and the announced live session."""
import json
from pathlib import Path
import unittest


ACADEMY = json.loads(
    (Path(__file__).resolve().parents[1] / "src/data/academy-programmes.json").read_text()
)


class AcademyProgrammeTests(unittest.TestCase):
    def test_practitioner_price(self):
        self.assertEqual(ACADEMY["practitioner"]["price"], 6500)

    def test_practitioner_price_is_per_participant(self):
        self.assertEqual(ACADEMY["practitioner"]["priceBasis"], "participant")

    def test_orchestrator_price(self):
        self.assertEqual(ACADEMY["orchestrator"]["price"], 9950)

    def test_orchestrator_price_is_per_participant(self):
        self.assertEqual(ACADEMY["orchestrator"]["priceBasis"], "participant")

    def test_prices_in_chf(self):
        self.assertEqual(ACADEMY["currency"], "CHF")

    def test_prices_exclude_vat(self):
        self.assertFalse(ACADEMY["vatIncluded"])

    def test_swissmem_members_receive_preferential_rates(self):
        self.assertTrue(ACADEMY["swissmemPreferentialRates"])

    def test_in_house_cohorts_on_request(self):
        self.assertEqual(ACADEMY["inHouseCohorts"], "on_request")

    def test_live_session_date(self):
        self.assertEqual(ACADEMY["liveSession"]["date"], "2027-01-13")

    def test_live_session_is_free(self):
        self.assertEqual(ACADEMY["liveSession"]["price"], 0)


if __name__ == "__main__":
    unittest.main()