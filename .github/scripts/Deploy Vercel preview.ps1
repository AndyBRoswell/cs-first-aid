# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

& (Join-Path $PSScriptRoot 'Require environment variables.ps1') -Name @(
  'Vercel_token'
  'GITHUB_OUTPUT'
)

$deployment_output = & pnpm dlx --allow-build=esbuild vercel@59.5.0 deploy --prebuilt --token=$env:Vercel_token
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$url = [string]($deployment_output | Select-Object -Last 1)
$url = $url.Trim()
if ([uri]::IsWellFormedUriString($url, [UriKind]::Absolute) -eq $false) { throw 'Vercel did not return a valid deployment URL.' }

"url=$url" | Add-Content -LiteralPath $env:GITHUB_OUTPUT
