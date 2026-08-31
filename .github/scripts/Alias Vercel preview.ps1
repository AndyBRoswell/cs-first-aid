# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

& (Join-Path $PSScriptRoot 'Require environment variables.ps1') -Name @(
  'Vercel_token'
  'Vercel_org_ID'
  'Vercel_deployment_URL'
)

$headers = @{ Authorization = "Bearer $env:Vercel_token" }
$deployment_host = ([uri]$env:Vercel_deployment_URL).Host
$deployment = Invoke-RestMethod -Uri "https://api.vercel.com/v13/deployments/${deployment_host}?teamId=$env:Vercel_org_ID" -Headers $headers
$body = @{ alias = 'cs-first-aid-dev.vercel.app' } | ConvertTo-Json -Compress
Invoke-RestMethod -Method Post -Uri "https://api.vercel.com/v2/deployments/$($deployment.id)/aliases?teamId=$env:Vercel_org_ID" -Headers $headers -ContentType 'application/json' -Body $body | Out-Null
