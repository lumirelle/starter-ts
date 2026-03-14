# Benchmark Results: Build Performance

## Tsdown

Raw command:

```sh
hyperfine -w 5 -r 10 -u second 'npx tsdown' 'bunx tsdown' 'bunx -b tsdown' --export-markdown benchmark.md
```

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `npx tsdown` | 1.518 ± 0.052 | 1.462 | 1.642 | 6.43 ± 0.25 |
| `bunx tsdown` | 0.236 ± 0.004 | 0.231 | 0.244 | 1.00 |
| `bunx -b tsdown` | 0.289 ± 0.007 | 0.280 | 0.299 | 1.23 ± 0.04 |

## Bunup

Raw command:

```sh
hyperfine -w 5 -r 10 -u second 'bunx bunup' 'bunx -b bunup' --export-markdown benchmark.md
```

| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `bunx bunup` | 0.211 ± 0.012 | 0.199 | 0.229 | 1.03 ± 0.08 |
| `bunx -b bunup` | 0.206 ± 0.011 | 0.192 | 0.225 | 1.00 |
