#!/bin/bash
set -o nounset -o errexit -o pipefail

exec bin/api-server \
    --dev
