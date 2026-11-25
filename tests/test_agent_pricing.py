"""Concrete plan rules, independent of page copy and styling."""

import json
import unittest
from pathlib import Path


PRICING = json.loads(
    (Path(__file__).resolve().parents[1] / "src/data/agent-pricing.json").read_text()
)
PLANS = {plan["id"]: plan for plan in PRICING["plans"]}


class AgentPricingTests(unittest.TestCase):
    def test_individual_monthly_price(self):
        self.assertEqual(PLANS["individual"]["monthlyPrice"], 179)
        self.assertFalse(PLANS["individual"]["perUser"])

    def test_individual_free_trial(self):
        self.assertEqual(PLANS["individual"]["trialDays"], 60)

    def test_individual_monthly_billing(self):
        self.assertEqual(PLANS["individual"]["billingInterval"], "monthly")

    def test_individual_can_cancel_anytime(self):
        self.assertTrue(PLANS["individual"]["cancelAnytime"])

    def test_individual_has_eight_modules(self):
        self.assertEqual(PLANS["individual"]["moduleCount"], 8)

    def test_individual_languages(self):
        self.assertEqual(PLANS["individual"]["languages"], ["DE", "EN", "PT", "ES"])

    def test_individual_browser_app(self):
        self.assertTrue(PLANS["individual"]["browserApp"])

    def test_team_per_user_monthly_price(self):
        self.assertEqual(PLANS["team"]["monthlyPrice"], 149)
        self.assertTrue(PLANS["team"]["perUser"])

    def test_team_minimum_users(self):
        self.assertEqual(PLANS["team"]["minimumUsers"], 3)

    def test_team_annual_invoicing(self):
        self.assertEqual(PLANS["team"]["billingInterval"], "annually")

    def test_team_has_eight_modules(self):
        self.assertEqual(PLANS["team"]["moduleCount"], 8)

    def test_team_teams_integration(self):
        self.assertTrue(PLANS["team"]["teamsIntegration"])

    def test_team_monthly_reporting(self):
        self.assertTrue(PLANS["team"]["monthlyBenefitReporting"])

    def test_team_methodology_support(self):
        self.assertTrue(PLANS["team"]["methodologySupport"])

    def test_team_technology_support(self):
        self.assertTrue(PLANS["team"]["technologySupport"])

    def test_enterprise_flat_monthly_price(self):
        self.assertEqual(PLANS["enterprise"]["monthlyPrice"], 2490)
        self.assertFalse(PLANS["enterprise"]["perUser"])

    def test_enterprise_unlimited_users(self):
        self.assertTrue(PLANS["enterprise"]["unlimitedUsers"])

    def test_enterprise_includes_team_capabilities(self):
        for key in ["moduleCount", "teamsIntegration", "monthlyBenefitReporting", "methodologySupport", "technologySupport"]:
            with self.subTest(capability=key):
                self.assertEqual(PLANS["enterprise"][key], PLANS["team"][key])

    def test_enterprise_copilot_integration(self):
        self.assertTrue(PLANS["enterprise"]["copilotIntegration"])

    def test_enterprise_dedicated_tenant_agent(self):
        self.assertTrue(PLANS["enterprise"]["dedicatedTenantAgent"])

    def test_enterprise_preloaded_strategy(self):
        self.assertTrue(PLANS["enterprise"]["strategyPreloaded"])

    def test_enterprise_preloaded_projects(self):
        self.assertTrue(PLANS["enterprise"]["pastProjectsPreloaded"])

    def test_enterprise_data_stays_in_environment(self):
        self.assertTrue(PLANS["enterprise"]["dataStaysInEnvironment"])

    def test_enterprise_is_better_value_from_17_users(self):
        self.assertEqual(PRICING["enterpriseBetterValueFromUsers"], 17)
        self.assertLess(16 * PLANS["team"]["monthlyPrice"], PLANS["enterprise"]["monthlyPrice"])
        self.assertGreater(17 * PLANS["team"]["monthlyPrice"], PLANS["enterprise"]["monthlyPrice"])

    def test_prices_are_chf(self):
        self.assertEqual(PRICING["currency"], "CHF")

    def test_prices_exclude_vat(self):
        self.assertTrue(PRICING["excludesVat"])


if __name__ == "__main__":
    unittest.main()