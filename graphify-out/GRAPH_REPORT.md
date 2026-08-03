# Graph Report - .  (2026-08-03)

## Corpus Check
- 16 files · ~12,933 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 87 nodes · 83 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6
- Community 7
- Community 8
- Community 9
- Community 10

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `include` - 7 edges
3. `scripts` - 5 edges
4. `lib` - 4 edges
5. `overrides` - 3 edges
6. `CapstreamHome()` - 3 edges
7. `engines` - 2 edges
8. `@fontsource-variable/jetbrains-mono` - 2 edges
9. `@fontsource-variable/playfair-display` - 2 edges
10. `@fontsource-variable/plus-jakarta-sans` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 3 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.13
Nodes (15): @fontsource-variable/jetbrains-mono, @fontsource-variable/playfair-display, @fontsource-variable/plus-jakarta-sans, lucide-react, next, dependencies, @fontsource-variable/jetbrains-mono, @fontsource-variable/playfair-display (+7 more)

### Community 1 - "Community 1"
Cohesion: 0.13
Nodes (15): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 2 - "Community 2"
Cohesion: 0.15
Nodes (13): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, @types/node, @types/react, @types/react-dom (+5 more)

### Community 3 - "Community 3"
Cohesion: 0.20
Nodes (9): engines, node, license, name, overrides, postcss, sharp, private (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.32
Nodes (4): CapstreamHome(), formatCurrency(), underwritingItems, workflowRows

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 7 - "Community 7"
Cohesion: 0.50
Nodes (4): dom, dom.iterable, esnext, lib

## Knowledge Gaps
- **53 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `license` (+48 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 0` to `Community 3`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 2` to `Community 3`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 1` to `Community 4`, `Community 7`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _53 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._