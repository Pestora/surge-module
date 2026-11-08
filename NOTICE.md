# YouTube Metrics

Integrates pinned YouTube Enhance response and request scripts from Maasea/sgmodule, commit 65075cdb388fc5e3094afd7e7314c67b243f3525. Those scripts are licensed under Apache-2.0; see LICENSE.YouTube.Enhance.

Source: https://github.com/Maasea/sgmodule/tree/65075cdb388fc5e3094afd7e7314c67b243f3525/Script/Youtube

Enable YouTube Metrics alone. Disable the older YouTube Hidden Metrics and Youtube (Music) Enhance modules to prevent overlapping response handlers. Enhance functionality and parameters are included in this module. Upstream code is pinned and does not update automatically. The request bundle wraps the unmodified upstream request script: video initplayback uses its empty-response fallback so encrypted Onesie metadata cannot bypass metric filtering. YouTube Music and log_event retain upstream handling.

Surge downloads and caches the three scripts from this repository. Raw response captures and device credentials are not included in this distribution.
