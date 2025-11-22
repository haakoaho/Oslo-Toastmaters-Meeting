---
transition: slide-down
class: "text-center"
style: "background-color: #ADD8E6;"
theme: neversink
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
# Oslo Toastmasters Club Meeting
<br>
<script setup>
/**
 * Create a global reactive singleton on window so every slide
 * can access the same reactive `agenda.value`.
 */
import { reactive } from 'vue'
if (!window.__SV_AGENDA) {
  window.__SV_AGENDA = reactive({ value: null })
}
const agenda = window.__SV_AGENDA
function loadAgenda(event) {
  const file = event.target.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result)
      // assign to the global reactive
      agenda.value = parsed
      // optional: notify user
      // alert('Agenda loaded')
    } catch (err) {
      alert('Invalid JSON file: ' + err.message)
    }
  }
  reader.readAsText(file)
}
</script>
<div class="mt-4">
  <input type="file" @change="loadAgenda" accept=".json" />
  <p class="text-sm text-gray-400 mt-2">Upload <code>agenda.json</code> to load meeting data</p>
</div>
<div v-if="agenda.value" class="mt-6">
  <p>{{ agenda.value.meeting_info.meeting_date }}</p>
</div>
<div v-else class="mt-6 text-sm text-gray-500">
</div>

---
style: "background-color: #ADD8E6;"
class: "text-center"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<h1>Guest are requested to register</h1>
<QRCode class='mx-auto pt-10' value="https://sli.dev" :size="350" render-as="svg" />

---
style: "background-color: #ADD8E6;"
class: "text-center"
layout: "center"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

<div v-if="agenda.value">
<h1>{{ agenda.value.meeting_info.club_name || 'Oslo Toastmasters Club' }}</h1>

{{ agenda.value.meeting_info.meeting_date }}

</div>

<div v-else>
upload agenda.json on the first slide.
</div>

---
style: "background-color: #00008B"
class: "text-light"
---

<img src ='/tmi_logo.png' alt = '' class='float-right' style = 'max-height:75px'>
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# Agenda

| Time  | Activity                                                     |
| ----- | ------------------------------------------------------------ |
| 17:45 | Gathering and Networking                                     |
| 18:00 | President starts and welcome guests                          |
| 18:05 | Toastmaster of the Evening introduces the theme and the team |
| 18:18 | Prepared speeches                                            |
| 18:50 | Break                                                        |
| 19:00 | Table Topics                                                 |
| 19:30 | Evaluations                                                  |
| 19:50 | Reports, Awards and Thanks                                   |

---
class: 'text-center'
style: "background-color: #ADD8E6;"
layout: "center"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;"/>

# President’s Welcome

<div
  v-show="showCustomSlides"
>Press Ctrl/Cmd + Shift + F to go to full screen</div>
<div v-if="agenda.value">
  <h2>{{ agenda.value.structured_roles?.President?.presenter || 'TBA' }}</h2>
</div>
<div v-else class="text-sm text-gray-500">
  Upload agenda.json to show the presenter
</div>

<div
  v-if="showCustomSlides"
  style="display:flex;height:350px"
>
  <iframe
   :src="'https://docs.google.com/presentation/d/1gMV5VSF3nZbM1Rv6lb3Wn1sJDkHk3ryNOciZLW6MKP0/embed?start=false&loop=false&slide=id.p1'"
    style="border:0; width:100%; height:100%;"
    allowfullscreen/>

</div>


  <div 
    @click="showCustomSlides = !showCustomSlides"
    style="padding: 0.5rem 1rem; background-color: #16a34a; color: white; border-radius: 0.375rem; border: none; cursor: pointer; font-size: 0.875rem;float:right;position:absolute;bottom:50px;right:50px"
  >
    {{ showCustomSlides ? 'Hide Custom Slides' : 'Show Announcements' }}
  </div>

<script setup>
import { reactive, ref } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA;
const showCustomSlides = ref(false);
</script>

---
layout: center
class: 'text-center'
style: "background-color: #ADD8E6;"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# Toastmaster of the Evening

<div v-if="agenda.value">
<h2> {{ agenda.value.structured_roles?.Toastmaster?.presenter || 'TBA' }}</h2>
</div>
<div v-else class="text-sm text-gray-500">TBA</div>

---
style: "background-color: #ADD8E6;"
layout: "center"
class: "d-flex flex-column justify-content-start align-items-center h-100"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

<h1 class = "h15"> TAGG Team of Today’s Meeting </h1>

- General Evaluator
- Timer
- Ah and Vote Counter
- Grammarian

---
style: "background-color: #ADD8E6;"
layout: statement
---

<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>


# Timer

<h3 v-if="agenda.value">
<!-- In your JSON there is a blank key for Timer; fallback to readable text if missing -->
{{ agenda.value.structured_roles?.['']?.presenter || agenda.value.structured_roles?.Timer?.presenter || 'TBA' }} 

</h3>

The Timer makes sure the meeting runs on time and helps speakers develop discipline with timing.

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# Ah and Vote Counter

<h3 v-if="agenda.value">
 {{ agenda.value.structured_roles?.AhVoteCounter?.presenter || 'TBA' }}

</h3>

**Ah-Counter:** listens for filler words.  
**Vote Counter:** ensures fair voting and recognition & has tie breaker vote.

---
style: "background-color: #ADD8E6;"
layout: statement
---

<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>
<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
# Grammarian

<div v-if="agenda.value">
<h3> {{ agenda.value.structured_roles?.GrammarianWordoftheDay?.presenter || 'TBA' }}</h3>

<h2> Word of the Day: {{ agenda.value.meeting_info?.word_of_the_day || 'TBA' }}</h2>

</div>

The Grammarian supports members in building better English speaking habits through vocabulary and grammar awareness.

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# General Evaluator

<h3 v-if="agenda.value">
 {{ agenda.value.structured_roles?.GeneralEvaluator?.presenter || 'TBA' }}
</h3>

The General Evaluator is like a quality checker of the entire meeting.

---
style: "background-color: #ADD8E6;"
layout: center
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>
# Prepared Speech Contest

---
layout: statement
style: "background-color: #ADD8E6;"
clicks: 20
---

<img src="/tmi_logo.png" alt="Logo" :style="{ 
    position: 'absolute', 
    top: showCustomSlides ? '1rem' : '2rem', 
    left: '1rem', 
    'max-height': '100px' 
  }">

<div
  v-show="showCustomSlides"
>Press Ctrl/Cmd + Shift + F to go to full screen</div>

<div
  v-if="showCustomSlides"
  style="display:flex;height:350px"
>
  <iframe
    :src="speakerCustomSlideUrls[speakerIndex]"
    style="border:0; width:100%; height:100%;"
    allowfullscreen
  ></iframe>
</div>

<div v-else-if="!finished && showSpeaker && !showCustomSlides">
  <div style="position: absolute; top: 1rem; left: 1rem;">
    <span v-if="currentSpeaker.evaluator">Evaluator: {{ currentSpeaker.evaluator }}</span>
      </div>
  
  <h1> {{ currentSpeaker.title || 'Untitled' }} </h1>
    <h2> by {{ currentSpeaker.name || 'TBA' }} </h2>
  
  <div style="position: absolute; right: 1rem; top: 1rem; text-align: right;">
    <div v-if="currentSpeaker.project">{{ currentSpeaker.project }}</div>
    <div v-if="currentSpeaker.description">{{ currentSpeaker.description }}</div>
    <div v-if="currentSpeaker.time">
      {{ currentSpeaker.time }}
    </div>
  </div>
</div>

<div
  v-else-if="!finished && !showSpeaker"
  style="display:flex;justify-content:center;align-items:center;min-height:100%;padding:4rem 0;text-align:center;"
>
  <div>
    <h2 style="font-size: 2.5rem; margin-bottom: 2rem;">Feedback to Speaker</h2>
    <QRCode
      value="https://docs.google.com/forms/d/e/1FAIpQLSeQPvxKCEb9gPYBypRRQ6hRqs8e5OCXi0hL7RB7yKB51Lsf_g/viewform?usp=header"
      :size="350"
      render-as="svg"
      style="margin-bottom: 3rem;"
    />
  </div>
</div>

<div v-else style="display:flex;justify-content:center;align-items:center;min-height:100%;text-align:center;">
  <h2 style="font-size: 2rem; color: #dc2626;">✅ All speakers completed. Press → for next slide</h2>
</div>

<div style="position: absolute; bottom: 1rem; left: 1rem;">
  <button
    @click="resetToStart"
    style="padding: 0.5rem 1rem; background-color: #2563eb; color: white; border-radius: 0.375rem; border: none; cursor: pointer; font-size: 0.875rem;"
  >
    ↺ Reset to Start
  </button>

  <div v-if="showSpeaker"
    @click="showCustomSlides = !showCustomSlides"
    style="padding: 0.5rem 1rem; margin-left: 40rem; background-color: #16a34a; color: white; border-radius: 0.375rem; border: none; cursor: pointer; font-size: 0.875rem;float:right"
  >
    {{ showCustomSlides ? 'Hide Custom Slides' : 'Show Custom Slides' }}
  </div>

  <span style="margin-left: 1rem; font-size: 0.875rem;">({{ $clicks }}/{{ totalClicks }})</span>
</div>

<script setup>
import { ref, computed, watch } from 'vue'

// Initialize global agenda ref
if (!window.__SV_AGENDA) window.__SV_AGENDA = ref(null)
const agenda = window.__SV_AGENDA

// Load agenda.json if not already loaded
if (!agenda.value) {
  fetch('/agenda.json')
    .then(r => r.json())
    .then(data => {
      agenda.value = data
      console.log('Loaded agenda:', data)
    })
    .catch(err => {
      console.error('Failed to load agenda.json:', err)
      agenda.value = { speakers: [] }
    })
}

// Computed speaker list
const speakers = computed(() => agenda.value?.speakers || [])
const totalClicks = computed(() => speakers.value.length * 2)

// Reset function
const resetToStart = () => {
  if ($slidev?.nav?.currentSlideRoute) {
    $slidev.nav.go($slidev.nav.currentSlideNo, 0)
  }
}

// Core state
const speakerIndex = computed(() => Math.floor($clicks.value / 2))
const showSpeaker = computed(() => $clicks.value % 2 === 0)
const currentSpeaker = computed(() => speakers.value[speakerIndex.value] || {})
const finished = computed(() => speakerIndex.value >= speakers.value.length)


const showCustomSlides = ref(false)

// WATCH: Auto-advance after all click states
watch(() => $clicks.value, (newClicks) => {
  if (speakers.value.length > 0 && newClicks > totalClicks.value) {
    if ($slidev?.nav?.next) $slidev.nav.next()
  }
})

// 🛑 WATCH: Reset custom slides when moving away from the speaker view (to QR code view) 🛑
watch(showSpeaker, (newVal) => {
    // If showSpeaker becomes false (i.e., we moved from click 0 to 1, 2 to 3, etc.)
    if (!newVal) {
        showCustomSlides.value = false
    }
})


const speakerCustomSlideUrls = ["https://docs.google.com/presentation/d/1GVHpI7vKqq0Ziz4Bbl6aGo4eyuXg4-n5n6HRPKO7BJc/embed?start=false&loop=false&slide=id.p1", "https://docs.google.com/presentation/d/1zTeLqJ19cBoJzuwYJFbjbSAJBICR-Ppk7RnwUDnOaWU/embed?start=false&loop=false&slide=id.p1","https://docs.google.com/presentation/d/1qfnXxboqtQQFyoewm_jyxPSMa-icToFPcJDjr6oVRB0/embed?start=false&loop=false&slide=id.p1"];
</script>

---
layout: default
style: "background-color: #ADD8E6;"
---

<script setup>
import { ref, onMounted } from 'vue';
const ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbxUu5xSp9PGSkmJp21XiR6Zh31s_C84S_RqpLunrrqWiGt-AXlg30VBcZz9Ka3SJxUsWw/exec';
const speakerOptions = ref([]);
const statusMessage = ref('Loading options...');
const statusType = ref('info');
const isLoading = ref(false);
const explodingSpeaker = ref(null);
const explosionPosition = ref({ x: 0, y: 0 });
/** Fetch current list of speakers */
async function fetchOptions() {
  isLoading.value = true;
  statusMessage.value = 'Fetching speaker list...';
  statusType.value = 'info';
 
  try {
    const response = await fetch(`${ENDPOINT_URL}?path=options`);
    const data = await response.json();
   
    if (data.status === 'success' && data.options?.length) {
      speakerOptions.value = data.options;
      statusMessage.value = 'Options loaded successfully.';
      statusType.value = 'success';
    } else {
      statusMessage.value = data.message || 'No speakers found.';
      statusType.value = 'error';
    }
  } catch (error) {
    statusMessage.value = `Error fetching data: ${error.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}
/** Disqualify a speaker — fire and forget delete request */
async function disqualifySpeaker(speaker, event) {
  // Get the position of the clicked button for explosion placement
  const rect = event.target.getBoundingClientRect();
  explosionPosition.value = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
 
  // Trigger explosion animation
  explodingSpeaker.value = speaker;
 
  isLoading.value = true;
  statusMessage.value = `Disqualifying ${speaker}...`;
  statusType.value = 'info';
 
  try {
    // Fire-and-forget POST with no-cors (can't read response)
    fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', speaker }),
      mode: 'no-cors'
    });
   
    // Wait for explosion animation
    await new Promise(resolve => setTimeout(resolve, 1200));
   
    // Optimistically update UI
    speakerOptions.value = speakerOptions.value.filter(s => s !== speaker);
    explodingSpeaker.value = null;
    statusMessage.value = `Successfully disqualified ${speaker}. 💥`;
    statusType.value = 'success';
   
  } catch (error) {
    explodingSpeaker.value = null;
    statusMessage.value = `Error disqualifying speaker: ${error.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}
onMounted(fetchOptions);
</script>
<style scoped>
@keyframes explode {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    filter: brightness(1);
  }
  10% {
    transform: scale(1.1) rotate(-5deg);
    filter: brightness(2);
  }
  30% {
    transform: scale(1.5) rotate(5deg);
    opacity: 1;
    filter: brightness(3) saturate(2);
  }
  60% {
    transform: scale(2.5) rotate(180deg);
    opacity: 0.6;
    filter: brightness(5) saturate(3);
  }
  100% {
    transform: scale(5) rotate(720deg);
    opacity: 0;
    filter: brightness(0) saturate(0);
  }
}
@keyframes shockwave {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8),
                0 0 0 0 rgba(255, 255, 0, 0.8),
                0 0 0 0 rgba(255, 165, 0, 0.8);
  }
  50% {
    box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0.4),
                0 0 80px 40px rgba(255, 255, 0, 0.4),
                0 0 100px 50px rgba(255, 165, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 120px 60px rgba(255, 255, 255, 0),
                0 0 160px 80px rgba(255, 255, 0, 0),
                0 0 200px 100px rgba(255, 165, 0, 0);
  }
}
@keyframes particles {
  0% {
    box-shadow:
      0 0 20px 10px #ffffff,
      0 0 20px 10px #ffff00,
      0 0 20px 10px #ffd700,
      0 0 20px 10px #ff8c00,
      0 0 20px 10px #ff4500,
      0 0 20px 10px #ff0000,
      0 0 20px 10px #8b0000;
    filter: blur(0px);
  }
  100% {
    box-shadow:
      -150px -150px 40px -5px #ffffff,
      150px -140px 40px -5px #ffff00,
      -130px 160px 40px -5px #ffd700,
      140px 150px 40px -5px #ff8c00,
      0 -180px 40px -5px #ff4500,
      -170px 50px 40px -5px #ff0000,
      170px -50px 40px -5px #8b0000,
      80px 180px 40px -5px #ffa500,
      -180px -80px 40px -5px #dc143c,
      100px -170px 40px -5px #ff6347,
      -160px 120px 40px -5px #ff7f50,
      160px 80px 40px -5px #ff4500;
    opacity: 0;
    filter: blur(15px);
  }
}
@keyframes flash {
  0%, 20%, 40%, 60%, 80%, 100% {
    opacity: 1;
  }
  10%, 30%, 50%, 70%, 90% {
    opacity: 0.3;
  }
}
@keyframes textGlitch {
  0% {
    transform: translate(0);
    filter: brightness(1) contrast(1);
  }
  20% {
    transform: translate(-5px, 5px);
    filter: brightness(2) contrast(1.5);
  }
  40% {
    transform: translate(5px, -5px);
    filter: brightness(1.5) contrast(1.2);
  }
  60% {
    transform: translate(-5px, -5px);
    filter: brightness(2.5) contrast(1.8);
  }
  80% {
    transform: translate(5px, 5px);
    filter: brightness(1.8) contrast(1.4);
  }
  100% {
    transform: translate(0) scale(0);
    opacity: 0;
  }
}
@keyframes explosionGif {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.5);
  }
  90% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(4);
  }
}
.exploding {
  animation:
    explode 1.2s cubic-bezier(0.36, 0, 0.66, -0.56) forwards,
    shockwave 1.2s ease-out forwards,
    particles 1.2s ease-out forwards,
    flash 0.4s ease-in-out;
  background:
    radial-gradient(circle, #fff 0%, #ffff00 20%, #ff8c00 40%, #ff4500 60%, #ff0000 80%, #8b0000 100%) !important;
  border-color: transparent !important;
  z-index: 1000;
  position: relative;
}
.exploding span {
  animation: textGlitch 0.8s ease-out forwards;
}
.explosion-overlay {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  animation: explosionGif 1.2s ease-out forwards;
}
.explosion-overlay img {
  width: 400px;
  height: 400px;
  object-fit: contain;
}
.speaker-card {
  transition: all 0.3s ease;
}
</style>
<div class="slidev-layout default">
  <h1 class="text-center">Timer's Report on Speakers</h1>
 
  <!-- Status Message -->
  <div
    class="p-4 rounded-md mt-6"
    :class="{
      'bg-blue-100 text-blue-800': statusType === 'info',
      'bg-green-100 text-green-800': statusType === 'success',
      'bg-red-100 text-red-800': statusType === 'error'
    }"
  >
    Status: {{ statusMessage }}
  </div>
 
  <!-- Speaker List -->
  <template v-if="speakerOptions.length > 0">
    <div class="mt-8 flex flex-wrap gap-3 justify-center items-stretch" style="max-width: 100%;">
      <div
        v-for="speaker in speakerOptions"
        :key="speaker"
        class="flex flex-col items-center justify-between p-4 border border-gray-300 rounded-xl shadow-sm bg-white relative overflow-visible speaker-card"
        :class="{
          'exploding': explodingSpeaker === speaker
        }"
        :style="{
          flex: speakerOptions.length <= 4 ? '0 0 calc(50% - 0.75rem)' : '0 0 calc(33.333% - 0.75rem)',
          minWidth: speakerOptions.length > 6 ? '180px' : '220px',
          maxWidth: speakerOptions.length <= 2 ? '400px' : speakerOptions.length <= 4 ? '350px' : '300px'
        }"
      >
        <span 
          class="text-center font-semibold mb-3"
          :style="{
            fontSize: speakerOptions.length <= 4 ? '1.25rem' : speakerOptions.length <= 6 ? '1.125rem' : '1rem'
          }"
        >{{ speaker }}</span>
        <button
          @click="disqualifySpeaker(speaker, $event)"
          :disabled="isLoading"
          class="rounded-lg text-white font-bold transition duration-150 ease-in-out w-full"
          :class="{
            'bg-red-600 hover:bg-red-700': !isLoading,
            'bg-gray-400 cursor-not-allowed': isLoading
          }"
          :style="{
            fontSize: speakerOptions.length > 6 ? '0.875rem' : '1rem',
            padding: speakerOptions.length > 6 ? '0.5rem 0.75rem' : '0.5rem 1.25rem'
          }"
        >
          💣 Disqualify
        </button>
      </div>
    </div>
  </template>
 
  <template v-else-if="!isLoading && statusType === 'error'">
    <p class="mt-8 text-xl text-red-600">
      Could not load speaker options. Check your script URL and logs.
    </p>
  </template>
 
  <!-- Explosion GIF Overlay -->
  <div
    v-if="explodingSpeaker"
    class="explosion-overlay"
    :style="{
      left: explosionPosition.x + 'px',
      top: explosionPosition.y + 'px'
    }"
  >
    <img
      src="https://media.giphy.com/media/X92pmIty2ZJp6/giphy.gif"
      alt="Nuclear Explosion"
    />
  </div>
</div>

---
layout: default
style: "background-color: #ADD8E6;"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;" />

# Best Speaker Voting

<QRCode class='mx-auto pt-10' value="https://docs.google.com/forms/d/e/1FAIpQLSeNybb52ZZ6aE61Yc7DaezGWN7gWP05nQWFbaZpFcoin8QO_Q/viewform?usp=dialog" :size="350" render-as="svg" />

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;" />

# BREAK

---
layout: default
title: Table Topics - Add Speakers
style: "background-color: #ADD8E6;"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; right: 1rem; max-height: 100px;" />

<script setup>
import { ref, onMounted, reactive } from 'vue';
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA

const VOTING_URL = 'https://script.google.com/macros/s/AKfycbye3kDgEZcBnyl-bK09cbmRmxFpueFdVi43gQv92EWP8wL1soKtq-B913_F_XhiJOZLAg/exec';

const REGISTRATION_URL = 'https://script.google.com/macros/s/AKfycbzt5y17AZWLcPsPV21lYPbWJubbiGtKa5vb_Qsir8RDJ6EyjJGW-TrYRRzwNmHiWP-s/exec';

const currentSpeaker = ref('');
const newSpeaker = ref('');
const statusMessage = ref('Ready to add speakers');
const statusType = ref('info');

/** Add a new speaker (instant UI, background send) */
function addSpeaker() {
  const name = newSpeaker.value.trim();
  if (!name) {
    statusMessage.value = 'Please enter a speaker name.';
    statusType.value = 'warning';
    return;
  }

  // Update current speaker and toggle view
  currentSpeaker.value = name;
  newSpeaker.value = '';
  statusMessage.value = `✅ Speaker Set: "${name}"`;
  statusType.value = 'success';

  // Background sync
  fetch(VOTING_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'add', speaker: name }),
    mode: 'no-cors'
  }).catch(() => {
    statusMessage.value = `⚠️ Could not sync "${name}" with server`;
    statusType.value = 'warning';
  });
}

async function addRandomSpeaker() {
  try {
    statusMessage.value = 'Fetching random speaker...';
    statusType.value = 'info';

    const response = await fetch(REGISTRATION_URL);
    const data = await response.json();
    const speaker = data.selected || data.speaker || data.name;
    
   if (!speaker) {
      statusMessage.value = '⚠️ No speaker data received';
      statusType.value = 'warning';
      return;
    }

    // Update current speaker and toggle view
    currentSpeaker.value = speaker;
    statusMessage.value = `✅ Random Speaker: "${speaker}"`;
    statusType.value = 'success';
    fetch(VOTING_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'add', speaker: speaker }),
      mode: 'no-cors'
    }).catch(() => {
      statusMessage.value = `⚠️ Could not sync "${speaker}" with server`;
      statusType.value = 'warning';
    });
  } catch (error) {
    statusMessage.value = '❌ Error fetching random speaker';
    statusType.value = 'error';
    console.error('Error:', error);
  }
}

function toggleView() {
  currentSpeaker.value = '';
}

onMounted(() => {
  statusMessage.value = 'Ready to add Table Topics speakers';
  statusType.value = 'info';
});
</script>

<style scoped>
.rules {
  text-align: left;
  margin-bottom: 2rem;
}

.rules h1 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.rules ul {
  list-style: disc;
  padding-left: 1.5rem;
  line-height: 0.8;
  font-size: 1rem;
}

.input-section {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
}

input {
  width: 250px;
  padding: 0.4rem 0.6rem;
  border: 1px solid #d1d5db;
  border-radius: 0.4rem;
  font-size: 0.9rem;
}

button {
  font-size: 0.9rem;
  padding: 0.35rem 0.75rem;
  border-radius: 0.4rem;
  font-weight: 600;
  color: #fff;
  transition: background 0.15s ease-in-out;
}

button.add {
  background-color: #16a34a;
}
button.add:hover {
  background-color: #15803d;
}

button.toggle {
  background-color: #2563eb;
}
button.toggle:hover {
  background-color: #1d4ed8;
}

.status-box {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  width: fit-content;
}

.status-info { background: #dbeafe; color: #1e3a8a; }
.status-success { background: #dcfce7; color: #166534; }
.status-error { background: #fee2e2; color: #991b1b; }
.status-warning { background: #fef9c3; color: #854d0e; }

.container {
  display: flex;
}

.admin-box {
  flex: 1;
}

.registration-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.speaker-view {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 2rem;
}

.current-speaker {
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  align-items: center;       /* horizontal center */
  text-align: center;
  gap: 6rem;
  font-size: 3rem;         /* larger name */
  font-weight: 700;
}

.current-speaker h2{
  font-size:1.5rem;
}


.no-speaker {
  font-size: 2rem;
  opacity: 0.6;
  font-style: italic;
}

.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>

<div class="container" v-if="currentSpeaker.length==0">
<div class="admin-box">
<h1>Table Topics</h1>

<h2 v-if="agenda.value && agenda.value.structured_roles?.TableTopicMaster?.presenter">
  Table Topics Master: {{ agenda.value.structured_roles?.TableTopicMaster?.presenter || 'TBA' }}
</h2>

<div class="rules">
  <h1>Rules 📋</h1>
  <ul>
    <li>Max. 30 seconds for thinking</li>
    <li>Introduction: name - topic - topic - name</li>
    <li>🟩 Green Card at 1:00</li>
    <li>🟨 Yellow Card at 1:30</li>
    <li>🟥 Red Card at 2:00</li>
    <li>Guests encouraged to participate 🙋‍♀️🙋‍♂️</li>
  </ul>
</div>

<div class="input-section">
  <input
    v-model="newSpeaker"
    type="text"
    placeholder="Speaker"
    @keyup.enter="addSpeaker"
  />
  <button class="add" @click="addSpeaker">🎤 Set Speaker</button>

  <button class="add" @click="addRandomSpeaker">🎲 Random Speaker</button>
</div>

<div
  class="status-box"
  :class="{
    'status-info': statusType === 'info',
    'status-success': statusType === 'success',
    'status-error': statusType === 'error',
    'status-warning': statusType === 'warning'
  }"
>
  {{ statusMessage }}
</div>
</div>

<div class="registration-box">
  <div class="qr-section">
    <h1>Scan QR Code to join</h1>
    <QRCode class='mx-auto pt-10' value="https://docs.google.com/forms/d/e/1FAIpQLScgOHxi05FhIkkWsqm2YpaHqu-kPh6dtJvzx7tJdll6Wr68Gw/viewform?usp=dialog/viewform?usp=dialog" :size="350" render-as="svg" />
  </div>
</div>
</div>
<div v-else class="current-speaker">
    <h1>{{ currentSpeaker }}</h1>
    <h2>Table Topics Speaker</h2>
    <button class="toggle" @click="toggleView">👈 Select Next Speaker</button>
</div>

---
layout: default
style: "background-color: #ADD8E6;"
---

<script setup>
import { ref } from 'vue';
import { onSlideEnter } from '@slidev/client';

const ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbye3kDgEZcBnyl-bK09cbmRmxFpueFdVi43gQv92EWP8wL1soKtq-B913_F_XhiJOZLAg/exec';
const speakerOptions = ref([]);
const statusMessage = ref('Waiting for slide to load...');
const statusType = ref('info');
const isLoading = ref(false);
const explodingSpeaker = ref(null);
const explosionPosition = ref({ x: 0, y: 0 });

/** Fetch current list of speakers */
async function fetchOptions() {
  isLoading.value = true;
  statusMessage.value = 'Fetching speaker list...';
  statusType.value = 'info';
 
  try {
    const response = await fetch(`${ENDPOINT_URL}?path=options`);
    const data = await response.json();
   
    if (data.status === 'success' && data.options?.length) {
      speakerOptions.value = data.options;
      statusMessage.value = 'Options loaded successfully.';
      statusType.value = 'success';
    } else {
      statusMessage.value = data.message || 'No speakers found.';
      statusType.value = 'error';
    }
  } catch (error) {
    statusMessage.value = `Error fetching data: ${error.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}

/** Disqualify a speaker — fire and forget delete request */
async function disqualifySpeaker(speaker, event) {
  // Get the position of the clicked button for explosion placement
  const rect = event.target.getBoundingClientRect();
  explosionPosition.value = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
 
  // Trigger explosion animation
  explodingSpeaker.value = speaker;
 
  isLoading.value = true;
  statusMessage.value = `Disqualifying ${speaker}...`;
  statusType.value = 'info';
 
  try {
    // Fire-and-forget POST with no-cors (can't read response)
    fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', speaker }),
      mode: 'no-cors'
    });
   
    // Wait for explosion animation
    await new Promise(resolve => setTimeout(resolve, 1200));
   
    // Optimistically update UI
    speakerOptions.value = speakerOptions.value.filter(s => s !== speaker);
    explodingSpeaker.value = null;
    statusMessage.value = `Successfully disqualified ${speaker}. 💥`;
    statusType.value = 'success';
   
  } catch (error) {
    explodingSpeaker.value = null;
    statusMessage.value = `Error disqualifying speaker: ${error.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}

// Use onSlideEnter to trigger the loading when the slide is focused
onSlideEnter(() => {
  speakerOptions.value = []; // Clear previous speakers
  fetchOptions();
});
</script>

<style scoped>
@keyframes explode {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    filter: brightness(1);
  }
  10% {
    transform: scale(1.1) rotate(-5deg);
    filter: brightness(2);
  }
  30% {
    transform: scale(1.5) rotate(5deg);
    opacity: 1;
    filter: brightness(3) saturate(2);
  }
  60% {
    transform: scale(2.5) rotate(180deg);
    opacity: 0.6;
    filter: brightness(5) saturate(3);
  }
  100% {
    transform: scale(5) rotate(720deg);
    opacity: 0;
    filter: brightness(0) saturate(0);
  }
}
@keyframes shockwave {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8),
                0 0 0 0 rgba(255, 255, 0, 0.8),
                0 0 0 0 rgba(255, 165, 0, 0.8);
  }
  50% {
    box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0.4),
                0 0 80px 40px rgba(255, 255, 0, 0.4),
                0 0 100px 50px rgba(255, 165, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 120px 60px rgba(255, 255, 255, 0),
                0 0 160px 80px rgba(255, 255, 0, 0),
                0 0 200px 100px rgba(255, 165, 0, 0);
  }
}
@keyframes particles {
  0% {
    box-shadow:
      0 0 20px 10px #ffffff,
      0 0 20px 10px #ffff00,
      0 0 20px 10px #ffd700,
      0 0 20px 10px #ff8c00,
      0 0 20px 10px #ff4500,
      0 0 20px 10px #ff0000,
      0 0 20px 10px #8b0000;
    filter: blur(0px);
  }
  100% {
    box-shadow:
      -150px -150px 40px -5px #ffffff,
      150px -140px 40px -5px #ffff00,
      -130px 160px 40px -5px #ffd700,
      140px 150px 40px -5px #ff8c00,
      0 -180px 40px -5px #ff4500,
      -170px 50px 40px -5px #ff0000,
      170px -50px 40px -5px #8b0000,
      80px 180px 40px -5px #ffa500,
      -180px -80px 40px -5px #dc143c,
      100px -170px 40px -5px #ff6347,
      -160px 120px 40px -5px #ff7f50,
      160px 80px 40px -5px #ff4500;
    opacity: 0;
    filter: blur(15px);
  }
}
@keyframes flash {
  0%, 20%, 40%, 60%, 80%, 100% {
    opacity: 1;
  }
  10%, 30%, 50%, 70%, 90% {
    opacity: 0.3;
  }
}
@keyframes textGlitch {
  0% {
    transform: translate(0);
    filter: brightness(1) contrast(1);
  }
  20% {
    transform: translate(-5px, 5px);
    filter: brightness(2) contrast(1.5);
  }
  40% {
    transform: translate(5px, -5px);
    filter: brightness(1.5) contrast(1.2);
  }
  60% {
    transform: translate(-5px, -5px);
    filter: brightness(2.5) contrast(1.8);
  }
  80% {
    transform: translate(5px, 5px);
    filter: brightness(1.8) contrast(1.4);
  }
  100% {
    transform: translate(0) scale(0);
    opacity: 0;
  }
}
@keyframes explosionGif {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.5);
  }
  90% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(4);
  }
}
.exploding {
  animation:
    explode 1.2s cubic-bezier(0.36, 0, 0.66, -0.56) forwards,
    shockwave 1.2s ease-out forwards,
    particles 1.2s ease-out forwards,
    flash 0.4s ease-in-out;
  background:
    radial-gradient(circle, #fff 0%, #ffff00 20%, #ff8c00 40%, #ff4500 60%, #ff0000 80%, #8b0000 100%) !important;
  border-color: transparent !important;
  z-index: 1000;
  position: relative;
}
.exploding span {
  animation: textGlitch 0.8s ease-out forwards;
}
.explosion-overlay {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  animation: explosionGif 1.2s ease-out forwards;
}
.explosion-overlay img {
  width: 400px;
  height: 400px;
  object-fit: contain;
}
.speaker-card {
  transition: all 0.3s ease;
}
</style>

<div class="slidev-layout default">
  <h1 class="text-center">Timer's Report on Table Topics</h1>
 
  <!-- Status Message -->
  <div
    class="p-4 rounded-md mt-6"
    :class="{
      'bg-blue-100 text-blue-800': statusType === 'info',
      'bg-green-100 text-green-800': statusType === 'success',
      'bg-red-100 text-red-800': statusType === 'error'
    }"
  >
    Status: {{ statusMessage }}
  </div>
 
  <!-- Speaker List -->
  <template v-if="speakerOptions.length > 0">
    <div class="mt-8 flex flex-wrap gap-3 justify-center items-stretch" style="max-width: 100%;">
      <div
        v-for="speaker in speakerOptions"
        :key="speaker"
        class="flex flex-col items-center justify-between p-4 border border-gray-300 rounded-xl shadow-sm bg-white relative overflow-visible speaker-card"
        :class="{
          'exploding': explodingSpeaker === speaker
        }"
        :style="{
          flex: speakerOptions.length <= 4 ? '0 0 calc(50% - 0.75rem)' : '0 0 calc(33.333% - 0.75rem)',
          minWidth: speakerOptions.length > 6 ? '180px' : '220px',
          maxWidth: speakerOptions.length <= 2 ? '400px' : speakerOptions.length <= 4 ? '350px' : '300px'
        }"
      >
        <span 
          class="text-center font-semibold mb-3"
          :style="{
            fontSize: speakerOptions.length <= 4 ? '1.25rem' : speakerOptions.length <= 6 ? '1.125rem' : '1rem'
          }"
        >{{ speaker }}</span>
        <button
          @click="disqualifySpeaker(speaker, $event)"
          :disabled="isLoading"
          class="rounded-lg text-white font-bold transition duration-150 ease-in-out w-full"
          :class="{
            'bg-red-600 hover:bg-red-700': !isLoading,
            'bg-gray-400 cursor-not-allowed': isLoading
          }"
          :style="{
            fontSize: speakerOptions.length > 6 ? '0.875rem' : '1rem',
            padding: speakerOptions.length > 6 ? '0.5rem 0.75rem' : '0.5rem 1.25rem'
          }"
        >
          💣 Disqualify
        </button>
      </div>
    </div>
  </template>
 
  <template v-else-if="!isLoading && statusType === 'error'">
    <p class="mt-8 text-xl text-red-600">
      Could not load speaker options. Check your script URL and logs.
    </p>
  </template>
 
  <!-- Explosion GIF Overlay -->
  <div
    v-if="explodingSpeaker"
    class="explosion-overlay"
    :style="{
      left: explosionPosition.x + 'px',
      top: explosionPosition.y + 'px'
    }"
  >
    <img
      src="https://media.giphy.com/media/X92pmIty2ZJp6/giphy.gif"
      alt="Nuclear Explosion"
    />
  </div>
</div>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;" />

# Best Table Topics Voting

<QRCode class='mx-auto pt-10' value="https://docs.google.com/forms/d/e/1FAIpQLSfFjcZKbUq33UjQ6zihWRROyrE8KKZNjWlVFXostE-j322p4g/viewform?usp=dialog" :size="350" render-as="svg" />

---
style: "background-color: #ADD8E6;"
layout: center
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>
# Speech Evaluation Contest

---
layout: statement
style: "background-color: #ADD8E6;"
clicks: 20
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">

<div v-if="!finished">
  <div style="position: absolute; right: 1rem; top: 1rem;">
    2:00 – 3:00
  </div>
  
  # {{ currentSpeaker.evaluator || 'Evaluator TBA' }}
  ### Evaluating {{ currentSpeaker.name || 'TBA' }}
</div>

<div v-else style="display:flex;justify-content:center;align-items:center;height:60vh;">
  <h2 style="font-size: 2rem; color: #dc2626;">✅ All evaluations completed. Press → for next slide</h2>
</div>

<div style="position: absolute; bottom: 1rem; left: 1rem;">
  <button @click="resetToStart" style="padding: 0.5rem 1rem; background-color: #2563eb; color: white; border-radius: 0.375rem; border: none; cursor: pointer; font-size: 0.875rem;">
    ↺ Reset to Start
  </button>
  <span style="margin-left: 1rem; font-size: 0.875rem;">({{ $clicks }}/{{ totalClicks }})</span>
</div>

<script setup>
import { ref, computed, watch } from 'vue'

// Initialize global agenda ref
if (!window.__SV_AGENDA) window.__SV_AGENDA = ref(null)
const agenda = window.__SV_AGENDA

// Load agenda.json if not already loaded
if (!agenda.value) {
  fetch('/agenda.json')
    .then(r => r.json())
    .then(data => {
      agenda.value = data
      console.log('Loaded agenda:', data)
    })
    .catch(err => {
      console.error('Failed to load agenda.json:', err)
      agenda.value = { speakers: [] }
    })
}

const speakers = computed(() => {
  const s = agenda.value?.speakers || []
  console.log('Speakers:', s)
  return s
})

// One click per evaluator (simpler than speaker slide)
const totalClicks = computed(() => speakers.value.length)

const currentSpeaker = computed(() => speakers.value[$clicks.value] || {})

const finished = computed(() => $clicks.value >= speakers.value.length)

// Function to reset to start
const resetToStart = () => {
  if ($slidev?.nav?.currentSlideRoute) {
    $slidev.nav.go($slidev.nav.currentSlideNo, 0)
  }
}

// Auto-advance when past the last evaluator - jump immediately
watch(() => $clicks.value, (newClicks) => {
  if (speakers.value.length > 0 && newClicks > totalClicks.value) {
    // Immediately navigate to next slide
    if ($slidev?.nav?.next) {
      $slidev.nav.next()
    }
  }
})
</script>

---
layout: default
style: "background-color: #ADD8E6;"
---

<script setup>
import { ref, onMounted } from 'vue';
const ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbzasaenEuAMB_11pQGr23lHVE_j_VSlhhgITDDReQd2MPQ9C0QfSChmX_5ZLlHoadyu/exec';
const speakerOptions = ref([]);
const statusMessage = ref('Loading options...');
const statusType = ref('info');
const isLoading = ref(false);
const explodingSpeaker = ref(null);
const explosionPosition = ref({ x: 0, y: 0 });
/** Fetch current list of speakers */
async function fetchOptions() {
  isLoading.value = true;
  statusMessage.value = 'Fetching speaker list...';
  statusType.value = 'info';
 
  try {
    const response = await fetch(`${ENDPOINT_URL}?path=options`);
    const data = await response.json();
   
    if (data.status === 'success' && data.options?.length) {
      speakerOptions.value = data.options;
      statusMessage.value = 'Options loaded successfully.';
      statusType.value = 'success';
    } else {
      statusMessage.value = data.message || 'No speakers found.';
      statusType.value = 'error';
    }
  } catch (error) {
    statusMessage.value = `Error fetching data: ${error.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}
/** Disqualify a speaker — fire and forget delete request */
async function disqualifySpeaker(speaker, event) {
  // Get the position of the clicked button for explosion placement
  const rect = event.target.getBoundingClientRect();
  explosionPosition.value = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
 
  // Trigger explosion animation
  explodingSpeaker.value = speaker;
 
  isLoading.value = true;
  statusMessage.value = `Disqualifying ${speaker}...`;
  statusType.value = 'info';
 
  try {
    // Fire-and-forget POST with no-cors (can't read response)
    fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', speaker }),
      mode: 'no-cors'
    });
   
    // Wait for explosion animation
    await new Promise(resolve => setTimeout(resolve, 1200));
   
    // Optimistically update UI
    speakerOptions.value = speakerOptions.value.filter(s => s !== speaker);
    explodingSpeaker.value = null;
    statusMessage.value = `Successfully disqualified ${speaker}. 💥`;
    statusType.value = 'success';
   
  } catch (error) {
    explodingSpeaker.value = null;
    statusMessage.value = `Error disqualifying speaker: ${error.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}
onMounted(fetchOptions);
</script>
<style scoped>
@keyframes explode {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    filter: brightness(1);
  }
  10% {
    transform: scale(1.1) rotate(-5deg);
    filter: brightness(2);
  }
  30% {
    transform: scale(1.5) rotate(5deg);
    opacity: 1;
    filter: brightness(3) saturate(2);
  }
  60% {
    transform: scale(2.5) rotate(180deg);
    opacity: 0.6;
    filter: brightness(5) saturate(3);
  }
  100% {
    transform: scale(5) rotate(720deg);
    opacity: 0;
    filter: brightness(0) saturate(0);
  }
}
@keyframes shockwave {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.8),
                0 0 0 0 rgba(255, 255, 0, 0.8),
                0 0 0 0 rgba(255, 165, 0, 0.8);
  }
  50% {
    box-shadow: 0 0 60px 30px rgba(255, 255, 255, 0.4),
                0 0 80px 40px rgba(255, 255, 0, 0.4),
                0 0 100px 50px rgba(255, 165, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 120px 60px rgba(255, 255, 255, 0),
                0 0 160px 80px rgba(255, 255, 0, 0),
                0 0 200px 100px rgba(255, 165, 0, 0);
  }
}
@keyframes particles {
  0% {
    box-shadow:
      0 0 20px 10px #ffffff,
      0 0 20px 10px #ffff00,
      0 0 20px 10px #ffd700,
      0 0 20px 10px #ff8c00,
      0 0 20px 10px #ff4500,
      0 0 20px 10px #ff0000,
      0 0 20px 10px #8b0000;
    filter: blur(0px);
  }
  100% {
    box-shadow:
      -150px -150px 40px -5px #ffffff,
      150px -140px 40px -5px #ffff00,
      -130px 160px 40px -5px #ffd700,
      140px 150px 40px -5px #ff8c00,
      0 -180px 40px -5px #ff4500,
      -170px 50px 40px -5px #ff0000,
      170px -50px 40px -5px #8b0000,
      80px 180px 40px -5px #ffa500,
      -180px -80px 40px -5px #dc143c,
      100px -170px 40px -5px #ff6347,
      -160px 120px 40px -5px #ff7f50,
      160px 80px 40px -5px #ff4500;
    opacity: 0;
    filter: blur(15px);
  }
}
@keyframes flash {
  0%, 20%, 40%, 60%, 80%, 100% {
    opacity: 1;
  }
  10%, 30%, 50%, 70%, 90% {
    opacity: 0.3;
  }
}
@keyframes textGlitch {
  0% {
    transform: translate(0);
    filter: brightness(1) contrast(1);
  }
  20% {
    transform: translate(-5px, 5px);
    filter: brightness(2) contrast(1.5);
  }
  40% {
    transform: translate(5px, -5px);
    filter: brightness(1.5) contrast(1.2);
  }
  60% {
    transform: translate(-5px, -5px);
    filter: brightness(2.5) contrast(1.8);
  }
  80% {
    transform: translate(5px, 5px);
    filter: brightness(1.8) contrast(1.4);
  }
  100% {
    transform: translate(0) scale(0);
    opacity: 0;
  }
}
@keyframes explosionGif {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.5);
  }
  90% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(3);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(4);
  }
}
.exploding {
  animation:
    explode 1.2s cubic-bezier(0.36, 0, 0.66, -0.56) forwards,
    shockwave 1.2s ease-out forwards,
    particles 1.2s ease-out forwards,
    flash 0.4s ease-in-out;
  background:
    radial-gradient(circle, #fff 0%, #ffff00 20%, #ff8c00 40%, #ff4500 60%, #ff0000 80%, #8b0000 100%) !important;
  border-color: transparent !important;
  z-index: 1000;
  position: relative;
}
.exploding span {
  animation: textGlitch 0.8s ease-out forwards;
}
.explosion-overlay {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  animation: explosionGif 1.2s ease-out forwards;
}
.explosion-overlay img {
  width: 400px;
  height: 400px;
  object-fit: contain;
}
.speaker-card {
  transition: all 0.3s ease;
}
</style>
<div class="slidev-layout default">
  <h1 class="text-center">Timer's Report on Evaluators</h1>
 
  <!-- Status Message -->
  <div
    class="p-4 rounded-md mt-6"
    :class="{
      'bg-blue-100 text-blue-800': statusType === 'info',
      'bg-green-100 text-green-800': statusType === 'success',
      'bg-red-100 text-red-800': statusType === 'error'
    }"
  >
    Status: {{ statusMessage }}
  </div>
 
  <!-- Speaker List -->
  <template v-if="speakerOptions.length > 0">
    <div class="mt-8 flex flex-wrap gap-3 justify-center items-stretch" style="max-width: 100%;">
      <div
        v-for="speaker in speakerOptions"
        :key="speaker"
        class="flex flex-col items-center justify-between p-4 border border-gray-300 rounded-xl shadow-sm bg-white relative overflow-visible speaker-card"
        :class="{
          'exploding': explodingSpeaker === speaker
        }"
        :style="{
          flex: speakerOptions.length <= 4 ? '0 0 calc(50% - 0.75rem)' : '0 0 calc(33.333% - 0.75rem)',
          minWidth: speakerOptions.length > 6 ? '180px' : '220px',
          maxWidth: speakerOptions.length <= 2 ? '400px' : speakerOptions.length <= 4 ? '350px' : '300px'
        }"
      >
        <span 
          class="text-center font-semibold mb-3"
          :style="{
            fontSize: speakerOptions.length <= 4 ? '1.25rem' : speakerOptions.length <= 6 ? '1.125rem' : '1rem'
          }"
        >{{ speaker }}</span>
        <button
          @click="disqualifySpeaker(speaker, $event)"
          :disabled="isLoading"
          class="rounded-lg text-white font-bold transition duration-150 ease-in-out w-full"
          :class="{
            'bg-red-600 hover:bg-red-700': !isLoading,
            'bg-gray-400 cursor-not-allowed': isLoading
          }"
          :style="{
            fontSize: speakerOptions.length > 6 ? '0.875rem' : '1rem',
            padding: speakerOptions.length > 6 ? '0.5rem 0.75rem' : '0.5rem 1.25rem'
          }"
        >
          💣 Disqualify
        </button>
      </div>
    </div>
  </template>
 
  <template v-else-if="!isLoading && statusType === 'error'">
    <p class="mt-8 text-xl text-red-600">
      Could not load speaker options. Check your script URL and logs.
    </p>
  </template>
 
  <!-- Explosion GIF Overlay -->
  <div
    v-if="explodingSpeaker"
    class="explosion-overlay"
    :style="{
      left: explosionPosition.x + 'px',
      top: explosionPosition.y + 'px'
    }"
  >
    <img
      src="https://media.giphy.com/media/X92pmIty2ZJp6/giphy.gif"
      alt="Nuclear Explosion"
    />
  </div>
</div>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;" />

# Best Evaluator Voting

<QRCode class='mx-auto pt-10' value="https://docs.google.com/forms/d/e/1FAIpQLSe5CE7i95lf1z67tu31k4FX8TXMhTVSWIesMcFUvbIWovdVqQ/viewform?usp=dialog" :size="350" render-as="svg" />

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# Table Topics Evaluator

<h3 v-if="agenda.value">
 {{ agenda.value.structured_roles?.['TableTopicsEvaluator']?.presenter || 'TBA' }}

</h3>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# Timer Report

<h3 v-if="agenda.value">
 {{ agenda.value.structured_roles?.['Timer']?.presenter || 'TBA' }}

</h3>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# Ah Counter Report

<h3 v-if="agenda.value">
 {{ agenda.value.structured_roles?.AhVoteCounter?.presenter || 'TBA' }}

</h3>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# Grammarian Report

<h3 v-if="agenda.value">
 {{ agenda.value.structured_roles?.GrammarianWordoftheDay?.presenter || 'TBA' }}

</h3>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

# General Evaluation

<h3 v-if="agenda.value">
 {{ agenda.value.structured_roles?.['GeneralEvaluator']?.presenter || 'TBA' }}

</h3>

---
layout: center
class: text-center
style: "background-color: #ADD8E6;"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">

# 🏆 Best Evaluator Award

<div v-if="loading" class="text-2xl animate-pulse mt-10">
  🎵 Drum roll please... 🥁
</div>

<div v-else class="mt-10 text-5xl font-bold text-yellow-400 animate-bounce">
  {{ winner }}
</div>

<script setup>
import { ref } from 'vue'
import { onSlideEnter } from '@slidev/client'

const winner = ref('')
const loading = ref(ref(true)) // Set initial value to true

const loadWinner = async () => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzasaenEuAMB_11pQGr23lHVE_j_VSlhhgITDDReQd2MPQ9C0QfSChmX_5ZLlHoadyu/exec?path=winners')
    const data = await response.json()

    const winnerNames = data.winners || []

    if (winnerNames.length === 0) {
      winner.value = 'No winner data found 😢'
    } else if (winnerNames.length === 1) {
      winner.value = `🎉 ${winnerNames[0]} 🎉`
    } else {
      winner.value = `🤝 It’s a tie! 🎉 ${winnerNames.join(' & ')} 🎉`
    }

    // Delay the reveal for suspense
    setTimeout(() => {
      loading.value = false
    }, 3000)
  } catch (error) {
    console.error('Error fetching winner:', error)
    winner.value = '⚠️ Error fetching results'
    loading.value = false
  }
}

// Use onSlideEnter to trigger the loading when the slide is focused
onSlideEnter(() => {
  loading.value = true // Reset loading state when entering
  winner.value = '' // Clear previous winner
  loadWinner()
})
</script>

<style>
.animate-pulse {
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>

---
layout: center
class: text-center
style: "background-color: #ADD8E6;"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">

# 🏆 Best Speaker

<div v-if="loading" class="text-2xl animate-pulse mt-10">
  🎵 Drum roll please... 🥁
</div>

<div v-else class="mt-10 text-5xl font-bold text-yellow-400 animate-bounce">
  {{ winner }}
</div>

<script setup>
import { ref } from 'vue'
import { onSlideEnter } from '@slidev/client'

const winner = ref('')
const loading = ref(ref(true)) // Set initial value to true

const loadWinner = async () => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxUu5xSp9PGSkmJp21XiR6Zh31s_C84S_RqpLunrrqWiGt-AXlg30VBcZz9Ka3SJxUsWw/exec?path=winners')
    const data = await response.json()

    const winnerNames = data.winners || []

    if (winnerNames.length === 0) {
      winner.value = 'No winner data found 😢'
    } else if (winnerNames.length === 1) {
      winner.value = `🎉 ${winnerNames[0]} 🎉`
    } else {
      winner.value = `🤝 It’s a tie! 🎉 ${winnerNames.join(' & ')} 🎉`
    }

    // Delay the reveal for suspense
    setTimeout(() => {
      loading.value = false
    }, 3000)
  } catch (error) {
    console.error('Error fetching winner:', error)
    winner.value = '⚠️ Error fetching results'
    loading.value = false
  }
}

// Use onSlideEnter to trigger the loading when the slide is focused
onSlideEnter(() => {
  loading.value = true // Reset loading state when entering
  winner.value = '' // Clear previous winner
  loadWinner()
})
</script>

<style>
.animate-pulse {
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>

---
layout: center
class: text-center
style: "background-color: #ADD8E6;"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">

# 🏆 Best Table Topcics

<div v-if="loading" class="text-2xl animate-pulse mt-10">
  🎵 Drum roll please... 🥁
</div>

<div v-else class="mt-10 text-5xl font-bold text-yellow-400 animate-bounce">
  {{ winner }}
</div>

<script setup>
import { ref } from 'vue'
import { onSlideEnter } from '@slidev/client'

const winner = ref('')
const loading = ref(ref(true)) // Set initial value to true

const loadWinner = async () => {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbye3kDgEZcBnyl-bK09cbmRmxFpueFdVi43gQv92EWP8wL1soKtq-B913_F_XhiJOZLAg/exec?path=winners')
    const data = await response.json()

    const winnerNames = data.winners || []

    if (winnerNames.length === 0) {
      winner.value = 'No winner data found 😢'
    } else if (winnerNames.length === 1) {
      winner.value = `🎉 ${winnerNames[0]} 🎉`
    } else {
      winner.value = `🤝 It’s a tie! 🎉 ${winnerNames.join(' & ')} 🎉`
    }

    // Delay the reveal for suspense
    setTimeout(() => {
      loading.value = false
    }, 3000)
  } catch (error) {
    console.error('Error fetching winner:', error)
    winner.value = '⚠️ Error fetching results'
    loading.value = false
  }
}

// Use onSlideEnter to trigger the loading when the slide is focused
onSlideEnter(() => {
  loading.value = true // Reset loading state when entering
  winner.value = '' // Clear previous winner
  loadWinner()
})
</script>

<style>
.animate-pulse {
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>

---
style: "background-color: #ADD8E6;"
layout: statement
---

# Oslo Toastmasters Club
<img src="/tmi_logo.png" alt="Logo"
     style="max-height:400px" class="mx-auto">

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">

<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
</script>

<div v-if="agenda.value">
<h1> Next Meeting</h1>
<h2>{{ agenda.value.meeting_info?.next_meeting_date || 'TBD' }}</h2>
<h2>Oslo Toastmasters Club</h2>
</div>

<div v-else class="text-sm text-gray-500">
Upload agenda.json to show next meeting
</div
