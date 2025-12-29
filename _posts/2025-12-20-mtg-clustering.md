---
layout: post
title: "Cluster Analysis of the Legacy Metagame"
date: 2025-12-20
categories: [MTG]
summary: "Visualizing deck archetypes using t-SNE on high-dimensional card vectors."
---

# Metagame Topology

We applied **t-SNE** (t-Distributed Stochastic Neighbor Embedding) to the vector space of 50 top-tier Legacy decks.

## Findings
- **Delver Decks** form a tight, central cluster, indicating high card overlap despite name variations (Grixis vs. Izzet).
- **Combo Decks** (Reanimator, Doomsday) exist as satellite clusters, topologically distant from the "Fair Magic" core.
- **Control** is not a cluster but a "manifold" that stretches across the color pie.

## Code Snippet
```python
from sklearn.manifold import TSNE
import matplotlib.pyplot as plt

# Project 100-dim vectors to 2D
tsne = TSNE(n_components=2, perplexity=30)
X_embedded = tsne.fit_transform(deck_vectors)
```

The visualization confirms that "Tempo" and "Midrange" are nearly indistinguishable at the vector level in the current meta.
