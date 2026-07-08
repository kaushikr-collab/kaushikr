Rustic charcoal research motifs for kaushikr-collab.github.io/kaushikr/ research cards.
Canvas: 420 x 312 px transparent PNG, intended for a 140 x 104 px CSS display slot at 3x retina scale.
Treatment: controlled rustic charcoal edges, dry-brush gaps, faint smudging and dust; no baked paper texture.
Colors: charcoal #17191b and brand red #ad3535; page background fallback #f2f4f4.
Use the transparent *-rustic.png files first. The JPG background versions are fallback only.

Suggested CSS:
.card-figure img.card-motif {
  width: 140px;
  height: 104px;
  object-fit: contain;
  display: block;
  mix-blend-mode: multiply;
  filter: contrast(1.05) brightness(1.09) saturate(0.85);
}
