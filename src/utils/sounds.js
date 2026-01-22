// Sound effects utility using Web Audio API
// No external files needed - generates sounds programmatically

class SoundManager {
  constructor() {
    this.audioContext = null;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    try {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.initialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported');
    }
  }

  // Play a success/correct answer sound (pleasant chime)
  playCorrect() {
    this.init();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;

    // Create multiple oscillators for a nice chord
    const frequencies = [523.25, 659.25, 783.99]; // C5, E5, G5 (C major chord)
    
    frequencies.forEach((freq, index) => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = freq;
      oscillator.type = 'sine';

      // Envelope
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.3, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.8);

      oscillator.start(now + index * 0.1);
      oscillator.stop(now + 1);
    });

    // Add a higher note for sparkle effect
    setTimeout(() => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = 1046.50; // C6
      oscillator.type = 'sine';

      const time = this.audioContext.currentTime;
      gainNode.gain.setValueAtTime(0.2, time);
      gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

      oscillator.start(time);
      oscillator.stop(time + 0.3);
    }, 200);
  }

  // Play an error/wrong answer sound (buzzer)
  playWrong() {
    this.init();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;

    // Create a buzzer sound
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = 150;
    oscillator.type = 'sawtooth';

    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    oscillator.start(now);
    oscillator.stop(now + 0.3);

    // Second lower buzz
    setTimeout(() => {
      const osc2 = this.audioContext.createOscillator();
      const gain2 = this.audioContext.createGain();

      osc2.connect(gain2);
      gain2.connect(this.audioContext.destination);

      osc2.frequency.value = 120;
      osc2.type = 'sawtooth';

      const time = this.audioContext.currentTime;
      gain2.gain.setValueAtTime(0.25, time);
      gain2.gain.exponentialRampToValueAtTime(0.01, time + 0.25);

      osc2.start(time);
      osc2.stop(time + 0.25);
    }, 150);
  }

  // Play a click sound for buttons
  playClick() {
    this.init();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

    oscillator.start(now);
    oscillator.stop(now + 0.05);
  }

  // Play game over sound
  playGameOver() {
    this.init();
    if (!this.audioContext) return;

    const now = this.audioContext.currentTime;
    const notes = [392, 349.23, 329.63, 293.66]; // G4, F4, E4, D4 (descending)

    notes.forEach((freq, index) => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      oscillator.frequency.value = freq;
      oscillator.type = 'triangle';

      const startTime = now + index * 0.2;
      gainNode.gain.setValueAtTime(0.25, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);

      oscillator.start(startTime);
      oscillator.stop(startTime + 0.3);
    });
  }
}

// Create a singleton instance
const soundManager = new SoundManager();

export const playCorrectSound = () => soundManager.playCorrect();
export const playWrongSound = () => soundManager.playWrong();
export const playClickSound = () => soundManager.playClick();
export const playGameOverSound = () => soundManager.playGameOver();

export default soundManager;
