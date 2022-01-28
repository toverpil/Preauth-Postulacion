from random import randint


def sum_numbers_and_compare(Numbers, Sum, Actual_index, Next_index, Length):
    if (Numbers[Actual_index] + Numbers[Next_index]) == Sum:
        return [Numbers[Actual_index], Numbers[Next_index]]

    if Next_index == Length:
        if Actual_index + 1 == Length:
            return []
        Actual_index += 1
        Next_index = Actual_index + 1
        return sum_numbers_and_compare(Numbers, Sum, Actual_index, Next_index, Length)

    return sum_numbers_and_compare(Numbers, Sum, Actual_index, Next_index + 1, Length)


def find_subset_sum(Numbers, Sum):
    try:
        Length = len(Numbers)
        if Length == 1:
            return []

        return "Los numeros son {}".format(sum_numbers_and_compare(Numbers, int(Sum), 0, 1, Length - 1))
    except:
        return []


sum = 34
numbers = []

for number in range(1000000):
    numbers.append(randint(-100, 100))
subset_sum_N = find_subset_sum(numbers, sum)
print(subset_sum_N)
