package osm

// Generated at https://mholt.github.io/json-to-go/
type QueryResults struct {
	Type     string `json:"type"`
	Features []struct {
		Type       string     `json:"type"`
		ID         string     `json:"id"`
		Properties Properties `json:"properties"`
		Geometry   Geometry   `json:"geometry"`
	} `json:"features"`
}

type Properties struct {
	Type string            `json:"type"`
	ID   string            `json:"id"`
	Tags map[string]string `json:"tags"`
}

type Geometry struct {
	Type        string      `json:"type"`
	Coordinates Coordinates `json:"coordinates"`
}

type Coordinates [2]float64

func (c *Coordinates) Long() float64 {
	return c[0]
}

func (c *Coordinates) Lat() float64 {
	return c[1]
}
