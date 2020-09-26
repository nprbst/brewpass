# build stage
FROM golang:1.14.4-alpine3.12 AS build

RUN apk add --no-cache gcc libc-dev make

WORKDIR /src

COPY . ./

ENV GOCACHE /go/pkg/gocache
RUN go mod download

RUN make api-server

# Minimal image for production
FROM alpine:3.12 as production

RUN apk add bash

COPY --from=build /src/bin/api-server /usr/bin/api-server

ENTRYPOINT ["/usr/bin/api-server"]
