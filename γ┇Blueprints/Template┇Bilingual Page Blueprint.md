# Detailed bilingual page blueprint template

Copy this structure into `<actual-service-directory>-bp.md`; replace placeholders and verify all references. This template is not an approved page. For general pages use a meaningful source identity and actual content paths, not a fictional service directory.

```yaml
---
kind: page-blueprint
status: review-draft
service-directory: <actual-directory>
page-id: <translation-id>
blueprint-version: 0.1
approval: pending-product-owner-review
approved-version: null
approval-reference: null
locales:
  en:
    page-id: <actual-id-en>
    route: <verified-route>
    seo-reference: <canonical-seo-id>
    content-file-path: <actual-repository-path>
    content-file-url: null # replace only with verified Drive URL
  de:
    page-id: <actual-id-de>
    route: <verified-route-or-explicit-pending-decision>
    seo-reference: <canonical-seo-id-or-null-for-legal>
    content-file-path: <actual-repository-path>
    content-file-url: null
---
```

## Shared brief

State audience, page job, service meaning, scope/limits, primary intent per locale, research evidence/status and adjacent-page ownership. Reference Project/SEO rather than duplicating logs. Describe recognise → understand practical help → contact → optional depth. Separate the target from current locale adoption.

## Ordered section overview

| # | Purpose / reader question | EN instance ID | DE instance ID | Recipe and lifecycle |
| --- | --- | --- | --- | --- |
| 01 | ... | ... | ... | Exact registered ID or clearly Proposed |

## 01 · Section name (repeat for each planned section)

- **Instance IDs / recipe:** stable unique locale anchors; actual recipe ID/status and independent block states.
- **Reader stage / perception:** who needs this information and what they should understand.
- **Required meaning / useful questions:** facts, scope, decisions and topic references. Explain intentional overlap with another section at a different depth.
- **Suggested blocks / freedom:** useful palette choices and possible order; permitted omissions/repetition. Separate fixed semantics/interactions from suggestions. Describe new blocks as Experimental or unregistered Proposed; parent approval is insufficient.
- **English SEO coverage:** canonical evidence ID/status, primary/supporting topics, natural phrasing and exclusions.
- **German SEO coverage:** distinct evidence ID/status and natural formal Sie coverage; do not translate volume evidence.
- **Actions / links:** exact existing targets and canonical related references; mark any unresolved route decision.
- **Media:** purpose, existing/needed asset, acceptance and crop needs; reference Media Queue, no duplicate prompts.
- **Length / balance:** useful approximate guidance, not quota. Review heading visibility, density and mobile order.
- **Implementation / open questions:** shell versus recipe, actual transport, renderer/localisation gap and decision required.

## Experimental scope and adoption

List exact recipes and parent/block IDs requested per page/locale. Approval authorises only these trials without promotion; Implementation registers exact scoped permissions with the approved version/decision. List current EN/DE source state and what is still a target. Keep Proposed ideas unimplemented until developed.

## Review, approval and versions

Record unresolved scope/journey/contact/media/research decisions and proportional acceptance checks. After Aykhan actually approves, record `approval`, `approved-version` and an identifiable `approval-reference`; preserve pending amendments separately. Meaning/journey/essential-interaction changes require reapproval; ordinary wording and compatible design do not. Each meaningful blueprint revision increments its own version, separately from the root project version.
