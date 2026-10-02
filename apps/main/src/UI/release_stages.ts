import { validate, type Localized_Release } from '@/core/release_stages.ts'

export function to_HTML_attr(release_stages: Localized_Release): string {
  validate(release_stages)
  return JSON.stringify(release_stages)
}
