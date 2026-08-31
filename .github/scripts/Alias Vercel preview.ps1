# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

if ([string]::IsNullOrWhiteSpace($env:VERCEL_TOKEN)) { throw 'VERCEL_TOKEN is required.' }
if ([string]::IsNullOrWhiteSpace($env:VERCEL_ORG_ID)) { throw 'VERCEL_ORG_ID is required.' }
if ([string]::IsNullOrWhiteSpace($env:VERCEL_DEPLOYMENT_URL)) { throw 'VERCEL_DEPLOYMENT_URL is required.' }

$headers = @{ Authorization = "Bearer $env:VERCEL_TOKEN" }
$deployment_host = ([uri]$env:VERCEL_DEPLOYMENT_URL).Host
$deployment = Invoke-RestMethod -Uri "https://api.vercel.com/v13/deployments/${deployment_host}?teamId=$env:VERCEL_ORG_ID" -Headers $headers
$body = @{ alias = 'cs-first-aid-dev.vercel.app' } | ConvertTo-Json -Compress
Invoke-RestMethod -Method Post -Uri "https://api.vercel.com/v2/deployments/$($deployment.id)/aliases?teamId=$env:VERCEL_ORG_ID" -Headers $headers -ContentType 'application/json' -Body $body | Out-Null
