#!/usr/bin/env bash
# Local gate for the fork (CI runs on dispatch only). Needs bun, and rust + wasm-pack for the wasm build.
set -euo pipefail
cd "$(dirname "$0")/.."
bun install --frozen-lockfile
bun scripts/build-xlsx-wasm.ts
bun test --isolate packages/xlsx packages/xlsx-react packages/xlsx-i18n
