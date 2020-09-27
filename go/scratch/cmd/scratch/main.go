package main

import (
	"fmt"
	"sort"
)

/*
Given an []int, return an []int where the corresponding indices are a count of how many numbers they're bigger than.
Example: [6, 2, 3, 9] => [2, 0, 1, 3]
Has to be less than n²
*/

func main() {
	in := []int{6, 2, 3, 6, 9}

	// This copy wouldn't be necessary if sort.Ints was immutable
	ordered := make([]int, len(in))
	copy(ordered, in)

	sort.Ints(ordered)

	// Take advantage of the sorted index order
	// ...but account for sequential duplicates
	mapped := make(map[int]int)
	last := 0
	less := 0
	for idx, val := range ordered {
		if idx > 0 && val > last {
			less++
		}
		last = val

		mapped[val] = less
	}

	out := make([]int, len(in))
	for idx, val := range in {
		out[idx] = mapped[val]
	}

	fmt.Printf("%v => %v\n", in, out)
}
