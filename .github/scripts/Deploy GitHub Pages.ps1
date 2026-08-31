# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

foreach ($name in 'GH_PAGES_TOKEN', 'GITHUB_REPOSITORY', 'GITHUB_REF_NAME', 'GITHUB_SHA', 'RUNNER_TEMP') {
  if ([string]::IsNullOrWhiteSpace([Environment]::GetEnvironmentVariable($name))) { throw "$name is required." }
}

$pages = Join-Path $env:RUNNER_TEMP 'gh-pages'
$remote = "https://x-access-token:${env:GH_PAGES_TOKEN}@github.com/${env:GITHUB_REPOSITORY}.git"
& git clone --branch gh-pages --single-branch $remote $pages
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

$target = Join-Path $pages $env:GITHUB_REF_NAME
$pages_full_path = [IO.Path]::GetFullPath($pages)
$target_full_path = [IO.Path]::GetFullPath($target)
$directory_separator = [IO.Path]::DirectorySeparatorChar
if ($target_full_path.StartsWith("$pages_full_path$directory_separator", [StringComparison]::Ordinal) -eq $false) {
  throw "Refusing to replace a GitHub Pages target outside $pages_full_path."
}

Remove-Item -LiteralPath $target_full_path -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory -Force $target_full_path | Out-Null
& /usr/bin/cp -a apps/main/dist-github-pages/. "$target_full_path/"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
New-Item -ItemType File -Force (Join-Path $pages_full_path '.nojekyll') | Out-Null

Set-Location -LiteralPath $pages_full_path
& git config user.name 'github-actions[bot]'
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& git config user.email '41898282+github-actions[bot]@users.noreply.github.com'
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& git add --all
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

& git diff --cached --quiet
if ($LASTEXITCODE -eq 0) { exit 0 }
if ($LASTEXITCODE -ne 1) { exit $LASTEXITCODE }

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
