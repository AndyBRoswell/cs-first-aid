# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$failed = $false

function add-failure([string]$message) {
  Write-Host "::error::$message"
  $script:failed = $true
}

if ($env:prepare_Vercel_outcome -ne 'success') {
  add-failure 'Vercel build output preparation failed.'
}
if ($env:GITHUB_REF_NAME -eq 'dev' -and $env:deploy_Vercel_preview_outcome -ne 'success') {
  add-failure 'Vercel preview deployment failed.'
}
if ($env:GITHUB_REF_NAME -eq 'dev' -and $env:deploy_Vercel_preview_outcome -eq 'success' -and $env:alias_Vercel_preview_outcome -ne 'success') {
  add-failure 'Vercel preview alias assignment failed.'
}
if ($env:GITHUB_REF_NAME -eq 'main' -and $env:deploy_Vercel_production_outcome -ne 'success') {
  add-failure 'Vercel production deployment failed.'
}
if ($env:deploy_Cloudflare_outcome -ne 'success') {
  add-failure 'Cloudflare Pages deployment failed.'
}
if ($env:GITHUB_REF_NAME -eq 'main' -and $env:deploy_Netlify_outcome -ne 'success') {
  add-failure 'Netlify deployment failed.'
}
if ($env:build_GitHub_Pages_outcome -ne 'success') {
  add-failure 'GitHub Pages build failed.'
}
elseif ($env:deploy_GitHub_Pages_outcome -ne 'success') {
  add-failure 'GitHub Pages deployment failed.'
}

if ($failed) { exit 1 }
