<template>
  <div class="title-animation-container">
    <svg 
      viewBox="-30 -10 860 220" 
      class="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <!-- Définitions de gradients et filtres -->
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1">
            <animate attributeName="stop-color" values="#FF6B6B;#4ECDC4;#45B7D1;#FF6B6B" dur="8s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" style="stop-color:#4ECDC4;stop-opacity:1">
            <animate attributeName="stop-color" values="#4ECDC4;#45B7D1;#FF6B6B;#4ECDC4" dur="8s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#FFA07A;stop-opacity:1">
            <animate attributeName="stop-color" values="#FFA07A;#98D8C8;#FFA07A" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" style="stop-color:#98D8C8;stop-opacity:1">
            <animate attributeName="stop-color" values="#98D8C8;#FFA07A;#98D8C8" dur="6s" repeatCount="indefinite" />
          </stop>
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        <filter id="textGlow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Formes géométriques qui flottent -->
      <g class="floating-shapes">
        <!-- Cercle morphing -->
        <circle cx="70" cy="40" r="22" fill="url(#gradient1)" opacity="0.85" filter="url(#glow)">
          <animate attributeName="cy" values="40;52;40" dur="4s" repeatCount="indefinite" />
          <animate attributeName="r" values="22;27;22" dur="4s" repeatCount="indefinite" />
        </circle>

        <!-- Rectangle qui tourne -->
        <rect x="720" y="35" width="45" height="45" fill="url(#gradient2)" opacity="0.85" filter="url(#glow)" rx="5">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 742.5 57.5; 360 742.5 57.5" 
            dur="10s" 
            repeatCount="indefinite"
          />
          <animate attributeName="y" values="35;47;35" dur="5s" repeatCount="indefinite" />
        </rect>

        <!-- Polygone (triangle) -->
        <polygon points="400,20 388,45 412,45" fill="#FFD93D" opacity="0.9" filter="url(#glow)">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 400 32.5; -360 400 32.5" 
            dur="15s" 
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.9;0.6;0.9" dur="3s" repeatCount="indefinite" />
        </polygon>

        <!-- Ellipse -->
        <ellipse cx="140" cy="170" rx="35" ry="16" fill="#A8E6CF" opacity="0.8" filter="url(#glow)">
          <animate attributeName="cx" values="140;158;140" dur="6s" repeatCount="indefinite" />
          <animate attributeName="rx" values="35;42;35" dur="4s" repeatCount="indefinite" />
        </ellipse>

        <!-- Étoile -->
        <path 
          d="M 660,145 L 667,165 L 688,165 L 671,178 L 678,198 L 660,185 L 642,198 L 649,178 L 632,165 L 653,165 Z" 
          fill="#FFB6C1" 
          opacity="0.85"
          filter="url(#glow)"
        >
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0 660 171.5; 360 660 171.5" 
            dur="15s" 
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.85;1;0.85" dur="4s" repeatCount="indefinite" />
        </path>
      </g>

      <!-- Chemin qui se dessine -->
      <g class="drawing-path">
        <path 
          d="M 60,100 Q 200,75 350,100 T 640,100 L 750,100" 
          stroke="#81D4FA" 
          stroke-width="3" 
          fill="none" 
          stroke-dasharray="800"
          stroke-dashoffset="800"
          opacity="0.9"
          filter="url(#glow)"
          stroke-linecap="round"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            from="800" 
            to="0" 
            dur="5s" 
            repeatCount="indefinite"
          />
        </path>
        
        <!-- Cercles qui suivent le chemin -->
        <circle r="5" fill="#FFD93D" filter="url(#glow)" opacity="0.9">
          <animateMotion 
            dur="5s" 
            repeatCount="indefinite"
            path="M 60,100 Q 200,75 350,100 T 640,100 L 750,100"
          />
        </circle>
        
        <!-- Deuxième cercle avec un décalage -->
        <circle r="3" fill="#FF6B9D" filter="url(#glow)" opacity="0.7">
          <animateMotion 
            dur="5s" 
            repeatCount="indefinite"
            begin="1s"
            path="M 60,100 Q 200,75 350,100 T 640,100 L 750,100"
          />
        </circle>
      </g>

      <!-- Morphing entre formes -->
      <g class="morphing-shape" transform="translate(400, 100)">
        <path fill="#FF6B9D" opacity="0.75" filter="url(#glow)">
          <animate 
            attributeName="d" 
            values="
              M 0,-25 L 23,-7 L 14,20 L -14,20 L -23,-7 Z;
              M 0,-25 A 25,25 0 1,1 0,25 A 25,25 0 1,1 0,-25;
              M -25,-25 L 25,-25 L 25,25 L -25,25 Z;
              M 0,-25 L 23,-7 L 14,20 L -14,20 L -23,-7 Z
            " 
            dur="8s" 
            repeatCount="indefinite"
          />
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            values="0;360" 
            dur="12s" 
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.75;0.9;0.75" dur="4s" repeatCount="indefinite" />
        </path>
      </g>

      <!-- Particules qui montent -->
      <g class="particles">
        <circle cx="120" cy="200" r="3" fill="#4ECDC4" opacity="0.5">
          <animate attributeName="cy" values="200;30;200" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.9;0" dur="5s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;1.5;3" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="195" r="2.5" fill="#FFB6C1" opacity="0.5">
          <animate attributeName="cy" values="195;50;195" dur="7s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.8;0" dur="7s" repeatCount="indefinite" />
          <animate attributeName="r" values="2.5;1.2;2.5" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle cx="520" cy="198" r="3" fill="#A8E6CF" opacity="0.5">
          <animate attributeName="cy" values="198;45;198" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.85;0" dur="6s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;1.5;3" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="680" cy="195" r="3" fill="#FFD93D" opacity="0.5">
          <animate attributeName="cy" values="195;42;195" dur="6.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="6.5s" repeatCount="indefinite" />
          <animate attributeName="r" values="3;1.5;3" dur="6.5s" repeatCount="indefinite" />
        </circle>
      </g>

      <!-- Texte "SVG" stylisé au centre -->
      <g transform="translate(400, 105)">
        <text 
          x="0" 
          y="0" 
          font-size="70" 
          font-weight="bold" 
          text-anchor="middle" 
          fill="url(#gradient1)"
          opacity="0.98"
          filter="url(#textGlow)"
          letter-spacing="6"
        >
          SVG
          <animate attributeName="opacity" values="0.98;1;0.98" dur="3s" repeatCount="indefinite" />
          <animateTransform 
            attributeName="transform" 
            type="scale" 
            values="1;1.03;1" 
            dur="3s" 
            repeatCount="indefinite"
            additive="sum"
          />
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.title-animation-container {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

svg {
  max-width: 100%;
  max-height: 100%;
  overflow: visible;
}
</style>

