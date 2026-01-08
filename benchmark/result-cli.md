# Benchmark Results: CLI Performance

## `simple-git-hooks`

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `bunx -b simple-git-hooks` | 5.297 ± 0.625 | 4.450 | 6.509 | 1.00 |
| `bun simple-git-hooks` | 5.334 ± 0.695 | 4.608 | 6.711 | 1.01 ± 0.18 |
| `npx simple-git-hooks` | 7.039 ± 0.992 | 5.885 | 8.608 | 1.33 ± 0.24 |
