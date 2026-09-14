# Changelog

All notable changes to this project will be documented in this file.

## 0.2.0 - 2026-09-14

### Changed

- Sandbox runners now use RPC transport and automatically select the local R2
  backup path when `/dev/fuse` is unavailable, allowing backups and restores to
  work under `wrangler dev` without additional environment configuration.
