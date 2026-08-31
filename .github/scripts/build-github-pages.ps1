$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

if ([string]::IsNullOrWhiteSpace($env:GITHUB_REF_NAME)) { throw 'GITHUB_REF_NAME is required.' }

& pnpm --filter '@cs-first-aid/main' exec astro build `
  --site 'https://andybroswell.github.io' `
  --base "/cs-first-aid/$env:GITHUB_REF_NAME" `
  --outDir dist-github-pages
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
