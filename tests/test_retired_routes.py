"""Regression checks for permanent redirects against the running app."""

import os
import unittest
from urllib.error import HTTPError
from urllib.parse import urljoin, urlparse
from urllib.request import HTTPRedirectHandler, build_opener, urlopen


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, request, fp, code, message, headers, new_url):
        return None


class RetiredRouteTests(unittest.TestCase):
    base_url = os.environ.get("TEST_BASE_URL", "http://localhost:8080")

    def assert_permanent_redirect(self, source, destination):
        opener = build_opener(NoRedirect)
        with self.assertRaises(HTTPError) as caught:
            opener.open(urljoin(self.base_url, source), timeout=30)
        response = caught.exception
        self.assertEqual(response.code, 301)
        location = response.headers.get("Location")
        self.assertIsNotNone(location)
        self.assertEqual(urlparse(location).path.rstrip("/"), destination)
        with urlopen(urljoin(self.base_url, destination), timeout=30) as target:
            self.assertEqual(target.status, 200)

    def test_retired_product_redirects_to_agent(self):
        self.assert_permanent_redirect("/products/custom", "/products/agent")

    def test_retired_case_redirects_to_case_studies(self):
        self.assert_permanent_redirect("/case-studies/sara", "/case-studies")


if __name__ == "__main__":
    unittest.main()