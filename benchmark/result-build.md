# Benchmark Results: Build Performance

## `tsdown` (Full featured)

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `bunx -b tsdown` | 1.375 ± 0.154 | 1.248 | 1.776 | 1.00 |
| `bun tsdown` | 1.386 ± 0.108 | 1.266 | 1.555 | 1.01 ± 0.14 |
| `npx tsdown` | 2.565 ± 0.294 | 2.348 | 3.352 | 1.87 ± 0.30 |

## `bun build` (Missing type definition generation support)

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `bun build ./src/index.ts --outdir dist --target node` | 0.266 ± 0.0173 | 0.2397 | 0.2879 | 1.00 |

## `tsc --noEmit` (Only used for type checking)

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `bunx -b tsc --noEmit` | 1.496 ± 0.043 | 1.437 | 1.551 | 1.00 |
| `bun tsc --noEmit` | 1.566 ± 0.200 | 1.432 | 2.090 | 1.05 ± 0.14 |
| `npx -p=typescript tsc --noEmit` | 2.532 ± 0.162 | 2.398 | 2.879 | 1.69 ± 0.12 |
