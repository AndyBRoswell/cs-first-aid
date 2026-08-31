$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$failed = $false

function Add-DeploymentFailure([string]$message) {
  Write-Host "::error::$message"
  $script:failed = $true
}

if ($env:PREPARE_VERCEL_OUTCOME -ne 'success') {
  Add-DeploymentFailure 'Vercel build output preparation failed.'
}
if ($env:GITHUB_REF_NAME -eq 'dev' -and $env:DEPLOY_VERCEL_PREVIEW_OUTCOME -ne 'success') {
  Add-DeploymentFailure 'Vercel preview deployment failed.'
}
if ($env:GITHUB_REF_NAME -eq 'dev' -and $env:DEPLOY_VERCEL_PREVIEW_OUTCOME -eq 'success' -and $env:ALIAS_VERCEL_PREVIEW_OUTCOME -ne 'success') {
  Add-DeploymentFailure 'Vercel preview alias assignment failed.'
}
if ($env:GITHUB_REF_NAME -eq 'main' -and $env:DEPLOY_VERCEL_PRODUCTION_OUTCOME -ne 'success') {
  Add-DeploymentFailure 'Vercel production deployment failed.'
}
if ($env:DEPLOY_CLOUDFLARE_OUTCOME -ne 'success') {
  Add-DeploymentFailure 'Cloudflare Pages deployment failed.'
}
if ($env:GITHUB_REF_NAME -eq 'main' -and $env:DEPLOY_NETLIFY_OUTCOME -ne 'success') {
  Add-DeploymentFailure 'Netlify deployment failed.'
}
if ($env:BUILD_GITHUB_PAGES_OUTCOME -ne 'success') {
  Add-DeploymentFailure 'GitHub Pages build failed.'
}
elseif ($env:DEPLOY_GITHUB_PAGES_OUTCOME -ne 'success') {
  Add-DeploymentFailure 'GitHub Pages deployment failed.'
}

if ($failed) { exit 1 }
