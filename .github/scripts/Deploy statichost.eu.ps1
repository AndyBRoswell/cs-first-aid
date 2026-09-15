# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

if ([string]::IsNullOrWhiteSpace($env:STATICHOST_API_KEY)) { throw 'STATICHOST_API_KEY is not configured.' }

$public = [IO.Path]::GetFullPath('apps/main/dist')
if (-not [IO.Directory]::Exists($public)) { throw "Static site output directory not found: $public" }
$archive = Join-Path $env:RUNNER_TEMP "statichost-$([guid]::NewGuid()).zip"
[IO.Compression.ZipFile]::CreateFromDirectory($public, $archive, [IO.Compression.CompressionLevel]::Optimal, $false)

& curl `
  --fail-with-body `
  --silent `
  --show-error `
  --request POST 'https://builder.statichost.eu/cs-first-aid/drop' `
  --header "Authorization: Bearer $env:STATICHOST_API_KEY" `
  --header 'Content-Type: application/zip' `
  --header 'Accept: text/plain' `
  --data-binary "@$archive"
if ($LASTEXITCODE -ne 0) { throw "statichost.eu upload failed with curl exit code $LASTEXITCODE." }
