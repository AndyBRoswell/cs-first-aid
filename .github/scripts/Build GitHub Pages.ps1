# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

& (Join-Path $PSScriptRoot 'Require environment variables.ps1') -Name 'GITHUB_REF_NAME'

& pnpm --filter '@cs-first-aid/main' exec astro build `
  --site 'https://andybroswell.github.io' `
  --base "/cs-first-aid/$env:GITHUB_REF_NAME" `
  --outDir dist-github-pages
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
