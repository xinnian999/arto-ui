<template>
  <button class="codepen-button">
    <div class="content"><slot /></div>
  </button>
</template>

<style>
.codepen-button {
  display: block;
  cursor: pointer;
  color: #fff;
  position: relative;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  overflow: hidden;
  padding: var(--border-width, 3px);
  isolation: isolate;
  border: none;
}

.codepen-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 400%;
  height: 100%;
  background: linear-gradient(
    115deg,
    #4fcf70,
    #fad648,
    #a767e5,
    #12bcfe,
    #44ce7b
  );
  background-size: 25% 100%;
  animation: an-at-keyframe-css-at-rule-that-translates-via-the-transform-property-the-background-by-negative-25-percent-of-its-width-so-that-it-gives-a-nice-border-animation_-We-use-the-translate-property-to-have-a-nice-transition-so-it_s-not-a-jerk-of-a-start-or-stop
    0.75s linear infinite;
  animation-play-state: paused;
  translate: -5% 0%;
  transition: translate 0.25s ease-out;
}

.codepen-button:hover::before {
  animation-play-state: running;
  transition-duration: 0.75s;
  translate: 0% 0%;
}

@keyframes an-at-keyframe-css-at-rule-that-translates-via-the-transform-property-the-background-by-negative-25-percent-of-its-width-so-that-it-gives-a-nice-border-animation_-We-use-the-translate-property-to-have-a-nice-transition-so-it_s-not-a-jerk-of-a-start-or-stop {
  to {
    transform: translateX(-25%);
  }
}

.codepen-button .content {
  position: relative;
  padding: 10px 15px;
  font-size: 16px;
  background: #000;
  border-radius: 3px;
  width: var(--width, 80px);
  height: var(--height, auto);
}
</style>
