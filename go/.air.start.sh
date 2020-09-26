#!/bin/bash
set -o nounset -o errexit -o pipefail

exec bin/api-server --debug serve \
    --dev \
    --port 9000
