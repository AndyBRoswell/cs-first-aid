# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

& (Join-Path $PSScriptRoot 'Require environment variables.ps1') -Name @(
  'GitHub_Pages_token'
  'GITHUB_REPOSITORY'
  'GITHUB_REF_NAME'
  'GITHUB_SHA'
  'RUNNER_TEMP'
)

$pages = [IO.Path]::GetFullPath((Join-Path $env:RUNNER_TEMP 'gh-pages'))
$remote = "https://x-access-token:${env:GitHub_Pages_token}@github.com/${env:GITHUB_REPOSITORY}.git"
& git clone --branch gh-pages --single-branch $remote $pages
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$target = [IO.Path]::GetFullPath($env:GITHUB_REF_NAME, $pages)
if (-not $target.StartsWith($pages + [IO.Path]::DirectorySeparatorChar, [StringComparison]::Ordinal)) {
  throw "Refused to replace a GitHub Pages target outside $pages."
}

Remove-Item -LiteralPath $target -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force $target | Out-Null
& /usr/bin/cp -a apps/main/dist-github-pages/. "$target/"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
New-Item -ItemType File -Force (Join-Path $pages '.nojekyll') | Out-Null

Set-Location -LiteralPath $pages
& git config user.name 'github-actions[bot]'
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& git config user.email '41898282+github-actions[bot]@users.noreply.github.com'
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& git add --all
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

& git diff --cached --quiet
if ($LASTEXITCODE -eq 0) { exit 0 }
if ($LASTEXITCODE -ne 1) { exit $LASTEXITCODE } # Exit on errors; 1 means staged changes were found, so continue to commit.

& git commit -m "Deploy $env:GITHUB_REF_NAME at $env:GITHUB_SHA"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# main and dev update different directories. Rebase/retry only handles the rare
# case where both branch workflows push gh-pages concurrently.
for ($attempt = 1; $attempt -le 5; $attempt++) {
  & git pull --rebase origin gh-pages
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

  & git push origin gh-pages
  if ($LASTEXITCODE -eq 0) { break }
  if ($attempt -eq 5) { exit 1 }
  Start-Sleep -Seconds 2
}
