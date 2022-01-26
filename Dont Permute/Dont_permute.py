def find_subset_sum(M, N):
    subset_array = []
    try:
        for first_index, first_number in enumerate(M):
            for second_index, second_number in enumerate(M):
                if first_index == second_index:
                    continue
                if (int(first_number) + int(second_number)) == int(N):
                    subset_array.extend(
                        [int(first_number), int(second_number)])
                    return subset_array
        return subset_array
    except:
        return subset_array


''' TODO: Datos para pruebas, deben ser retirados.
expected_sum = '20'
array_integer = [2, 10, 12, 8, 15, 20]
subset_sum_N = find_subset_sum(array_integer, expected_sum)
print(subset_sum_N)
'''
