# Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

[CmdletBinding()]
param(
  [Parameter(Mandatory)][ValidateNotNullOrEmpty()][string[]]$Name
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

foreach ($element in $Name) {
  if ([string]::IsNullOrWhiteSpace([Environment]::GetEnvironmentVariable($element))) { throw "Environment variable $element is required." }
}
