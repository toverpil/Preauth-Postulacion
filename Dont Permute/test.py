import unittest
from Dont_permute import find_subset_sum


class TestDontPermute(unittest.TestCase):

    def test_empty_array(self):
        data_array = []
        expected_subset = []
        result = find_subset_sum(data_array, expected_subset)
        self.assertEqual(result, [])

if __name__ == '__main__':
    unittest.main()
