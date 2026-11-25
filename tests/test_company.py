"""Check the company's supplied founding year, independently of presentation."""
import json
from pathlib import Path
import unittest


class CompanyFactsTests(unittest.TestCase):
    def test_founded_in_2018(self):
        company = json.loads(
            (Path(__file__).resolve().parents[1] / "src/data/company.json").read_text()
        )
        self.assertEqual(company["foundedYear"], 2018)


if __name__ == "__main__":
    unittest.main()