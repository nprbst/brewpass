package main

import (
	"fmt"
	"math"
	"math/rand"
	"sort"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	len := 50
	hist := make(map[int]int)
	for i := 0; i < 10000; i++ {
		idx := randIndex(len)
		hist[idx] = hist[idx] + 1
	}
	var idxs []int
	for idx := range hist {
		idxs = append(idxs, idx)
	}
	sort.IntSlice(idxs).Sort()
	for _, idx := range idxs {
		fmt.Printf("%2d => %d\n", idx, hist[idx])
	}
}

func randIndex(len int) int {
	max := float64(len - 1)
	div := 4.0 / float64(len)
	norm := rand.NormFloat64()
	return int(
		math.Min(max,
			math.Ceil(
				math.Abs(norm/div))))
}
