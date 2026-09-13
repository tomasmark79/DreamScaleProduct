'use strict';

// This independent illustration contains no DreamScaler firmware or application code.
const pitchNames = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
const scales = {
  major: { name: 'Major', intervals: [0, 2, 4, 5, 7, 9, 11], degrees: [1, 2, 3, 4, 5, 6, 7] },
  minor: { name: 'Natural minor', intervals: [0, 2, 3, 5, 7, 8, 10], degrees: [1, 2, 3, 4, 5, 6, 7] },
  dorian: { name: 'Dorian', intervals: [0, 2, 3, 5, 7, 9, 10], degrees: [1, 2, 3, 4, 5, 6, 7] },
  pentatonic: { name: 'Major pentatonic', intervals: [0, 2, 4, 7, 9], degrees: [1, 2, 3, 5, 6] },
  blues: { name: 'Blues', intervals: [0, 3, 5, 6, 7, 10], degrees: [1, 3, 4, 'blue', 5, 7] }
};
const colors = { 1: '#ff787e', 2: '#f0efd4', 3: '#a9ed83', 4: '#f6db79', 5: '#7da9ff', 6: '#79e4dd', 7: '#d899ef', blue: '#e89969' };
const rootSelect = document.querySelector('#root');
const scaleSelect = document.querySelector('#scale');
const keyboard = document.querySelector('#keyboard');
const soundButton = document.querySelector('#sound-toggle');
let soundEnabled = true;
let audioContext;
const releaseTimers = new WeakMap();

async function previewNote(key) {
  clearTimeout(releaseTimers.get(key));
  key.classList.add('active');
  releaseTimers.set(key, setTimeout(() => key.classList.remove('active'), 420));
  if (!soundEnabled) return;
  try {
    // Create/resume audio inside the key's user gesture, never during page load.
    if (!audioContext || audioContext.state === 'closed') {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error('Web Audio is unavailable');
      audioContext = new Audio();
    }
    if (audioContext.state !== 'running') await audioContext.resume();
    // The visitor may mute the preview while the browser is resuming audio.
    if (!soundEnabled) return;
    if (audioContext.state !== 'running') throw new Error('Audio could not resume');
    playTone(key);
  } catch {
    disableSound();
  }
}

function playTone(key) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;
  oscillator.type = 'triangle';
  oscillator.frequency.value = 440 * Math.pow(2, (Number(key.dataset.midi) - 69) / 12);
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.09, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.8);
  oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
}

let whiteIndex = 0;
for (let midi = 60; midi < 84; midi++) {
  const pitch = midi % 12;
  const isBlack = [1, 3, 6, 8, 10].includes(pitch);
  const key = document.createElement('button');
  key.type = 'button';
  key.className = `piano-key${isBlack ? ' black' : ''}`;
  key.dataset.midi = String(midi);
  key.textContent = pitchNames[pitch];
  if (isBlack) key.style.left = `${whiteIndex * 100 / 14 - 2.175}%`;
  else whiteIndex++;
  key.addEventListener('click', () => previewNote(key));
  keyboard.append(key);
}

function updateScale() {
  const root = Number(rootSelect.value);
  const scale = scales[scaleSelect.value];
  for (const key of keyboard.children) {
    const midi = Number(key.dataset.midi);
    const interval = (midi % 12 - root + 12) % 12;
    const index = scale.intervals.indexOf(interval);
    const inScale = index !== -1;
    clearTimeout(releaseTimers.get(key));
    key.classList.remove('active');
    key.classList.toggle('in-scale', inScale);
    key.style.setProperty('--key-color', inScale ? colors[scale.degrees[index]] : '#f3f5e9');
    key.setAttribute('aria-label', `${pitchNames[midi % 12]}${Math.floor(midi / 12) - 1}, ${inScale ? `in ${pitchNames[root]} ${scale.name}` : 'outside the selected scale'}`);
  }
  const notes = scale.intervals.map(interval => pitchNames[(root + interval) % 12]);
  document.querySelector('#scale-summary').textContent = `${pitchNames[root]} ${scale.name} · ${notes.join('  ')}`;
}

function disableSound() {
  soundEnabled = false;
  soundButton.setAttribute('aria-pressed', 'false');
  soundButton.textContent = '♪ Sound unavailable';
}

soundButton.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundButton.setAttribute('aria-pressed', String(soundEnabled));
  soundButton.textContent = soundEnabled ? '♪ Sound on' : '♪ Sound off';
});

rootSelect.addEventListener('change', updateScale);
scaleSelect.addEventListener('change', updateScale);
document.querySelector('#year').textContent = String(new Date().getFullYear());
updateScale();
