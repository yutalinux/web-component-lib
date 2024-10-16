#!/bin/bash

pnpm install
pnpm run test
pnpm run lint:check
pnpm run format:check
pnpm run build
