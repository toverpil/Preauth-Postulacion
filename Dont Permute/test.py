import unittest
from Dont_permute import find_subset_sum


class TestDontPermute(unittest.TestCase):

    def test_empty_array(self):
        data_array = []
        expected_subset = []
        result = find_subset_sum(data_array, expected_subset)
        self.assertEqual(result, [])

    def test_str_numbers(self):
        data_array = ["1", "2", "5", "10", "2"]
        expected_subset = "15"
        result = find_subset_sum(data_array, expected_subset)
        self.assertEqual(result, [5, 10])

    def test_char_value(self):
        data_array = [1, 5, "a"]
        expected_subset = []
        result = find_subset_sum(data_array, expected_subset)
        self.assertEqual(result, [])


if __name__ == '__main__':
    unittest.main()
