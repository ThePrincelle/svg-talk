---
theme: apple-basic
title: Les SVG - Quand le Code Prend Forme
info: |
  ## Les SVG : Une Introduction Interactive
  Découvrez la puissance des SVG (Scalable Vector Graphics) à travers des démonstrations interactives.
  
  Basé sur l'article de Josh Comeau - joshwcomeau.com
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
---

<style>
/* Adaptation pour fond noir */
.slidev-layout {
  color: #ddd;
}

.slidev-layout h1,
.slidev-layout h2,
.slidev-layout h3,
.slidev-layout h4 {
  color: #fff;
}

.slidev-layout ul,
.slidev-layout ol,
.slidev-layout p {
  color: #ddd;
}

.slidev-layout code {
  background: #2d2d2d;
  color: #4FC3F7;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}

.slidev-layout pre code {
  background: transparent;
}
</style>

---
layout: center
class: text-center
---

<br/>

# Les

<div class="mt-24">
<TitleAnimation />
</div>

<div style="margin-top: -2.5rem;">
  <h2>Quand le Code Prend Forme</h2>
</div>

<div class="mt-8 text-center">
  <p class="text-lg opacity-80">Une introduction interactive aux graphiques vectoriels</p>
</div>

<div class="abs-br m-6 text-sm opacity-50">
  Présentation interactive
</div>

---
layout: intro
---

# Qui suis-je ?


<div class="relative h-full mt-25 pt-14 pr-12" style="margin-left: 12rem;">
  <div class="flex flex-col items-center justify-center h-full">
    <h2 class="font-bold mb-4" style="font-size: 3rem;">Maxime Princelle</h2>
    <p class="opacity-80 mb-6" style="font-size: 1.5rem;">Technical Lead chez Logitud</p>
  </div>
</div>

<img 
  src="/profile-picture.png" 
  alt="Profile picture" 
  style="position: absolute; bottom: 0; left: 6rem; width: 280px; height: 280px; object-fit: cover;"
/>

---
transition: fade-out
---

# Qu'est-ce qu'un SVG ?

<div v-click>

**SVG** = **S**calable **V**ector **G**raphics

</div>

<div v-click class="mt-8">

## Les formats d'image traditionnels

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="border-2 border-gray-600 rounded p-4">
    <h3 class="text-xl font-bold mb-2">📸 JPG / PNG / GIF</h3>
    <ul class="text-sm">
      <li>Format binaire</li>
      <li>Pixels définis un par un</li>
      <li>Perte de qualité au zoom</li>
      <li>Fichiers lourds</li>
    </ul>
  </div>
  
  <div class="border-2 border-blue-400 rounded p-4" style="background: rgba(66, 153, 225, 0.1);">
    <h3 class="text-xl font-bold mb-2" style="color: #81D4FA;">✨ SVG</h3>
    <ul class="text-sm">
      <li>Format texte (XML)</li>
      <li>Instructions de dessin</li>
      <li>Qualité parfaite à toute échelle</li>
      <li>Fichiers légers</li>
    </ul>
  </div>
</div>

</div>

---

# Hello les SVG !

La magie commence ici : les SVG s'intègrent directement dans le HTML

<div class="grid grid-cols-2 gap-8 mt-8">

<div>

```html
<svg width="100" height="100">
  <circle
    fill="hotpink"
    r="30"
    cx="50"
    cy="50"
  />
</svg>
```

<div v-click class="mt-4">

**Résultat :**

<svg width="100" height="100">
  <circle fill="hotpink" r="30" cx="50" cy="50" />
</svg>

</div>

</div>

<div v-click>

## 🎯 Les SVG sont des citoyens de première classe du DOM !

- On peut les styler avec **CSS**
- On peut les animer avec **CSS** et **JavaScript**
- On peut les manipuler comme des éléments HTML

</div>

</div>

---

# Les SVG sont animables !

Qu'est-ce qu'il va se passer ici si je survole le cercle ?

<CircleHoverDemo />

<div class="mt-8">

```css
circle {
  fill: hotpink;
  transition: r 400ms, cy 600ms;
}
button:hover circle {
  r: 50px;
  cy: 80px;
}
```

</div>

---
layout: section
---

# Les Formes de Base

Découvrons les primitives SVG

---
---

# Les Lignes

La forme la plus simple : une ligne droite entre deux points

<LineDemoWithCode />

---
---

# Les Rectangles

Positionnés par leur coin supérieur gauche

<RectDemoWithCode />

---
---

# Les Cercles

Définis par leur centre et leur rayon

<CircleDemoWithCode />

---
---

# Les Ellipses

Comme les cercles, mais avec deux rayons différents

<EllipseDemoWithCode />

---
---

# Les Polygones

Des formes à plusieurs côtés

<PolygonDemoWithCode />

---

# SVG Évolutifs : Le ViewBox

Le **viewBox** permet aux SVG d'être véritablement scalables

<ViewBoxDemo />

<div v-click class="mt-4">

Le viewBox définit la zone visible du SVG, indépendamment de sa taille d'affichage.

**Format** : `viewBox="x y width height"`

</div>

---
layout: section
---

# Attributs de Présentation

Donnez du style à vos formes

---

# Fill et Stroke

<div class="grid grid-cols-2 gap-8">

<div v-click>

## Fill (Remplissage)

<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="60" fill="hsl(280, 70%, 60%)" />
</svg>

```xml
<circle 
  cx="100" cy="100" r="60"
  fill="hsl(280, 70%, 60%)"
/>
```

</div>

<div v-click>

## Stroke (Contour)

<svg width="200" height="200" viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="60" fill="transparent" stroke="hsl(340, 82%, 52%)" stroke-width="8" />
</svg>

```xml
<circle 
  cx="100" cy="100" r="60"
  fill="transparent"
  stroke="hsl(340, 82%, 52%)"
  stroke-width="8"
/>
```

</div>

</div>

---
layout: two-cols-header
---

<style>
.two-cols-header {
  column-gap: 30px;
}
</style>

<script setup>
import { ref, provide, watch } from 'vue'

const strokeStyles = ref({
  stroke: 'hsl(45deg 100% 50%)',
  strokeWidth: '6px',
  strokeDasharray: '0, 0',
  strokeLinecap: 'butt',
})

provide('strokeStyles', strokeStyles)
</script>

# Les Styles de Stroke

Explorez les différentes possibilités de stylisation

::left::

<StrokeVariants v-model="strokeStyles" />

::right::

<div class="language-css-inline" style="font-size: 0.8rem;">
<pre><code style="font-size: 0.8rem;">stroke: "{{ strokeStyles.stroke }}";</code></pre>
<pre><code style="font-size: 0.8rem;">stroke-width: "{{ strokeStyles.strokeWidth }}";</code></pre>
<pre><code style="font-size: 0.8rem;">stroke-dasharray: "{{ strokeStyles.strokeDasharray }}";</code></pre>
<pre><code style="font-size: 0.8rem;">stroke-linecap: "{{ strokeStyles.strokeLinecap }}";</code></pre>
</div>

<div class="mt-4">

### Propriétés clés
- **stroke-width** : épaisseur du trait
- **stroke-dasharray** : motif de pointillés (longueur trait, longueur espace)
- **stroke-linecap** : terminaison des traits (`butt`, `round`, `square`)

</div>

<div v-click class="mt-4 py-4 px-4 rounded-md bg-blue-500 bg-opacity-50 text-white">

<p style="margin: 0;"><strong>Comment t'as fait pour avoir des transitions fluides et propres comme ça ?</strong></p>

</div>


---
layout: section
---

# Animations

La vraie magie commence ici ! ✨

---
layout: two-cols-header
---

<script setup>
import { ref, provide, watch, computed, onMounted } from 'vue'
import { createHighlighter } from 'shiki'

const strokeState = ref({
  dashOffset: 0,
  dashSize: 10,
  gapSize: 10,
});

const code = computed(() => {
  return `<circle 
    cx="100" 
    cy="100" 
    r="70"
    fill="transparent"
    stroke="hsl(280, 70%, 60%)"
    stroke-width="8"
    stroke-dasharray="${strokeState.value.dashSize}, ${strokeState.value.gapSize}"
    stroke-dashoffset="${strokeState.value.dashOffset}"
    stroke-linecap="round"
  />`
})

const highlightedCode = ref('')

// Initialize highlighter
onMounted(async () => {
  const highlighter = await createHighlighter({
    themes: ['github-dark'],
    langs: ['html']
  })
  
  watch(code, () => {
    highlightedCode.value = highlighter.codeToHtml(code.value, {
      lang: 'html',
      theme: 'github-dark',
      structure: 'inline',
      wrap: true,
      wrapColumn: 100,
    })
  }, { immediate: true })
})

provide('strokeState', strokeState)
provide('highlightedCode', highlightedCode)
</script>

# Stroke Dash Offset

Déplacez les pointillés le long du tracé

::left::

<DashOffsetDemo v-model="strokeState" />

::right::

<div v-html="highlightedCode" class="language-html" style="font-size: 0.8rem; white-space: pre-wrap; word-break: break-word; overflow-wrap: break-word;"></div>

<div v-click class="mt-4">

**<code>stroke-dashoffset</code>** permet de décaler les pointillés le long du chemin.

Combiné avec `stroke-dasharray`, cela ouvre tout un monde d'animations possibles !

</div>

---
layout: two-cols-header
---

# Le Marathon des Traits

Des pointillés qui courent autour de la forme

::left::

<MarathonDemo />

::right::

<div class="mt-4">

```css
@keyframes marathon-run {
  from { stroke-dashoffset: 0; }
  to { stroke-dashoffset: 1000; }
}

circle {
  animation: marathon-run linear infinite;
}
```

</div>

---
layout: two-cols-header
---

# Le Spinner Animé

Un loader élégant en pur SVG

::left::

On fait tourner le cercle et on joue avec les pointillés... et la magie du spinner apparaît !

<div v-click class="mt-4">

```css
@keyframes spinner-rotate {
  100% { transform: rotate(360deg); }
}

@keyframes spinner-dash {
  0%, 100% { stroke-dasharray: 20, 1000; }
  50% { stroke-dasharray: 220, 1000; }
}
```

</div>

::right::

<SpinnerDemo v-click class="mt-4" />


---
layout: two-cols
---

# L'Effet "Dessin"

Oui bon, là c'est un peu de JS tout de même...<br/>
mais c'est pas si compliqué que ça ! 😅

<div class="mt-4">
  <DrawingDemo />
</div>

::right::

<div v-click>

### Le secret :

<ol style="list-style-type: decimal; padding-left: 0; font-size: 0.9rem; margin-bottom: 1rem">
  <li>Calculer la longueur du parcours avec <code>getTotalLength()</code> (littéralement la "distance à parcourir" du crayon&nbsp;!)</li>
  <li>Créer un long trait suivi d’un bel espace avec <code>stroke-dasharray</code> (la magie des pointillés 😎)</li>
  <li>Tout masquer au départ avec <code>stroke-dashoffset</code>, puis animer pour dévoiler le dessin&nbsp;! ✨</li>
</ol>

<div style="font-size: 0.8rem; white-space: pre-wrap; font-family: var(--slidev-code-font-family, 'Fira Mono', 'Consolas', 'Menlo', 'Monaco', 'monospace');">
```js
const pathLength = element.getTotalLength()
element.style.strokeDasharray = `${pathLength}, 1000`
element.style.strokeDashoffset = pathLength
```

```css
@keyframes draw-path {
  from {
     /* Au début : tout est masqué, suspense ! */
    stroke-dashoffset: var(--path-length);
  }
  to {
    stroke-dashoffset: 0;
    /* Et voilà, le tracé se dévoile sous vos yeux 👀 */
  }
}
```
</div>

</div>

---
layout: two-cols-header
---

# La Puissance des SVG

::left::

## Ce que nous avons vu

<div v-click>

✅ Les formes de base

</div>

<div v-click>

✅ Les attributs de présentation

</div>

<div v-click>

✅ Le ViewBox et la scalabilité

</div>

<div v-click>

✅ Les animation avec CSS

</div>

<div v-click>

✅ Le p'tit plus avec le JS

</div>

::right::

<div v-click>

## Pourquoi les SVG ?

- 🎨 **Expressifs** : créez des visuels complexes
- 📱 **Responsive** : parfaits sur tous les écrans
- ⚡ **Performants** : légers et rapides
- 🎭 **Animables** : avec CSS et JavaScript
- ♿ **Accessibles** : compatibles avec les lecteurs d'écran
- 🎯 **Interactifs** : réagissent aux événements

</div>

---
layout: center
class: text-center
---

# Pour Aller Plus Loin

<div class="mt-8">

## 📚 Ressources

<div class="mt-6">

**Article original complet de Josh Comeau :**

[A Friendly Introduction to SVG](https://www.joshwcomeau.com/svg/friendly-introduction-to-svg/)

</div>

<div class="mt-6">

**Guide interactif sur les paths SVG :**

[An Interactive Guide to SVG Paths](https://www.joshwcomeau.com/svg/interactive-guide-to-svg/)

</div>

</div>

<div class="mt-12 text-sm opacity-70">

Cette présentation a été créée avec ❤️ en utilisant Slidev

</div>

---
layout: center
class: text-center
---

# Merci !

<div class="text-6xl" style="margin-top: -3rem;">
  <svg width="240" height="240" viewBox="0 0 240 240" class="inline-block">
    <defs>
      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:hsl(340, 85%, 65%);stop-opacity:1" />
        <stop offset="100%" style="stop-color:hsl(350, 75%, 50%);stop-opacity:1" />
      </linearGradient>
      <filter id="heartGlow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path
      class="heart-fill"
      d="M120,210
         L120,210
         C65,155 45,120 45,90
         C45,65 60,50 80,50
         C95,50 107,58 120,75
         C133,58 145,50 160,50
         C180,50 195,65 195,90
         C195,120 175,155 120,210
         Z"
      fill="url(#heartGradient)"
      opacity="0"
    />
    <path
      class="heart-draw"
      d="M120,210
         L120,210
         C65,155 45,120 45,90
         C45,65 60,50 80,50
         C95,50 107,58 120,75
         C133,58 145,50 160,50
         C180,50 195,65 195,90
         C195,120 175,155 120,210
         Z"
      fill="none"
      stroke="url(#heartGradient)"
      stroke-width="6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-dasharray="520"
      stroke-dashoffset="520"
      filter="url(#heartGlow)"
    />
  </svg>
</div>

<style>
.heart-draw {
  animation: heart-stroke-appear 2s cubic-bezier(0.77,0,0.175,1) forwards;
}

.heart-fill {
  animation: heart-fill-appear 1.5s 1.8s cubic-bezier(0.77,0,0.175,1) forwards;
}

@keyframes heart-stroke-appear {
  from { 
    stroke-dashoffset: 520;
  }
  to { 
    stroke-dashoffset: 0;
  }
}

@keyframes heart-fill-appear {
  from { 
    opacity: 0;
  }
  to { 
    opacity: 1;
  }
}

.typewriter-text {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typewriter 1.2s 3.5s steps(16) forwards;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>

<div class="text-lg opacity-70 typewriter-text">
  Des questions ?
</div>
