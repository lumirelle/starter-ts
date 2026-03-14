# Benchmark Results: CLI Performance

## ESLint

Raw command:

```sh
hyperfine -w 5 -r 10 -u second 'npx eslint' 'bunx eslint' 'bunx -b eslint' --export-markdown benchmark.md
```

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `npx eslint` | 3.524 ± 0.087 | 3.330 | 3.633 | 1.45 ± 0.04 |
| `bunx eslint` | 2.451 ± 0.081 | 2.336 | 2.584 | 1.01 ± 0.04 |
| `bunx -b eslint` | 2.429 ± 0.042 | 2.354 | 2.491 | 1.00 |

## OxLint

Raw command:

```sh
hyperfine -w 5 -r 10 -u second 'npx oxlint' 'bunx oxlint' 'bunx -b oxlint' --export-markdown benchmark.md
```

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `npx oxlint` | 1.263 ± 0.024 | 1.214 | 1.293 | 5.14 ± 0.20 |
| `bunx oxlint` | 0.246 ± 0.008 | 0.236 | 0.260 | 1.00 |
| `bunx -b oxlint` | 0.276 ± 0.006 | 0.268 | 0.284 | 1.12 ± 0.05 |
