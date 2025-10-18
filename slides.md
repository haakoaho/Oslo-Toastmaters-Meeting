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

| Time  | Activity                                                     |
| ----- | ------------------------------------------------------------ |
| 17:45 | Gathering and Networking                                     |
| 18:00 | President starts and welcome guests                          |
| 18:05 | Toastmaster of the Evening introduces the theme and the team |
| 18:18 | Prepared speeches                                            |
| 18:50 | Break                                                        |
| 19:00 | Table Topics                                                 |
| 19:30 | Evaluations                                                  |
| 19:50 | Reports, Awards and Thanks                                   |

---
class: 'text-center'
style: "background-color: #ADD8E6;"
layout: "center"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">

# President’s Welcome

<div v-if="agenda.value">
  <h2>{{ agenda.value.structured_roles?.President?.presenter || 'TBA' }}</h2>
</div>
<div v-else class="text-sm text-gray-500">
  Upload agenda.json to show the presenter
</div>

<script setup>
import { reactive } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = reactive({ value: null })
const agenda = window.__SV_AGENDA
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
<h3> {{ agenda.value.structured_roles?.['GrammarianWordoftheDay']?.presenter || 'TBA' }}</h3>

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
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 5rem; left: 1rem; max-height: 100px;" />

<script setup>
import { ref } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = ref(null)
const agenda = window.__SV_AGENDA
</script>

<div v-if="agenda.value && agenda.value.speakers?.[0]">
  <div style="position: absolute; top: 1rem;">
    Evaluator: {{ agenda.value.speakers[0].evaluator || 'TBA' }}
  </div>

  # “{{ agenda.value.speakers[0].title }}”
  ### by {{ agenda.value.speakers[0].name }}

  <div style="position: absolute; right: 1rem; top: 1rem;">
    {{ agenda.value.speakers[0].project }} 

    {{ agenda.value.speakers[0].description }}

{{ agenda.value.speakers[0].duration_green }} - {{agenda.value.speakers[0].duration_red }}
  </div>
</div>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;" />

<script setup>
import { ref } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = ref(null)
const agenda = window.__SV_AGENDA
</script>

# Feedback to Speaker

<QRCode class='mx-auto pt-10' value="https://docs.google.com/forms/d/e/1FAIpQLSeQPvxKCEb9gPYBypRRQ6hRqs8e5OCXi0hL7RB7yKB51Lsf_g/viewform?usp=header" :size="350" render-as="svg" />

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 5rem; left: 1rem; max-height: 100px;" />

<script setup>
import { ref } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = ref(null)
const agenda = window.__SV_AGENDA
</script>

<div v-if="agenda.value && agenda.value.speakers?.[1]">
  <div style="position: absolute; top: 1rem;">
    Evaluator: {{ agenda.value.speakers[1].evaluator || 'TBA' }}
  </div>

  # “{{ agenda.value.speakers[1].title }}”
  ### by {{ agenda.value.speakers[1].name }}

  <div style="position: absolute; right: 1rem; top: 1rem;">
    {{ agenda.value.speakers[1].project }} 

    {{ agenda.value.speakers[1].description }}

{{ agenda.value.speakers[1].duration_green }} - {{agenda.value.speakers[1].duration_red }}
  </div>
</div>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;" />

<script setup>
import { ref } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = ref(null)
const agenda = window.__SV_AGENDA
</script>

# Feedback to Speaker

<QRCode class='mx-auto pt-10' value="https://docs.google.com/forms/d/e/1FAIpQLSeQPvxKCEb9gPYBypRRQ6hRqs8e5OCXi0hL7RB7yKB51Lsf_g/viewform?usp=header" :size="350" render-as="svg" />

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 5rem; left: 1rem; max-height: 100px;" />

<script setup>
import { ref } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = ref(null)
const agenda = window.__SV_AGENDA
</script>
<div v-if="agenda.value && agenda.value.speakers?.[2]">
  <div style="position: absolute; top: 1rem;">
    Evaluator: {{ agenda.value.speakers[2].evaluator || 'TBA' }}
  </div>

  # “{{ agenda.value.speakers[2].title }}”
  ### by {{ agenda.value.speakers[2].name }}

  <div style="position: absolute; right: 1rem; top: 1rem;">
    {{ agenda.value.speakers[2].project }} 

    {{ agenda.value.speakers[2].description }}

{{ agenda.value.speakers[2].duration_green }} - {{agenda.value.speakers[2].duration_red }}
  </div>
</div>

---
style: "background-color: #ADD8E6;"
layout: statement
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;" />

<script setup>
import { ref } from 'vue'
if (!window.__SV_AGENDA) window.__SV_AGENDA = ref(null)
const agenda = window.__SV_AGENDA
</script>

# Feedback to Speaker

<QRCode class='mx-auto pt-10' value="https://docs.google.com/forms/d/e/1FAIpQLSeQPvxKCEb9gPYBypRRQ6hRqs8e5OCXi0hL7RB7yKB51Lsf_g/viewform?usp=header" :size="350" render-as="svg" />

---
layout: default
style: "background-color: #ADD8E6;"
---

<script setup>
import { ref, onMounted } from 'vue';
// 🛑 Update this URL for your deployed Google Apps Script
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
/** Disqualify a speaker — remove from list and POST remaining ones */
async function disqualifySpeaker(speaker, event) {
  // Get the position of the clicked button for explosion placement
  const rect = event.target.getBoundingClientRect();
  explosionPosition.value = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
 
  // Trigger explosion animation
  explodingSpeaker.value = speaker;
 
  const updatedOptions = speakerOptions.value.filter(s => s !== speaker);
 
  isLoading.value = true;
  statusMessage.value = `Disqualifying ${speaker}...`;
  statusType.value = 'info';
 
  try {
    // Fire-and-forget POST with no-cors (can't read response)
    await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ options: updatedOptions }),
      mode: 'no-cors'
    });
   
    // Trust that it worked, wait for explosion animation
    await new Promise(resolve => setTimeout(resolve, 1200));
   
    // Optimistically update UI
    speakerOptions.value = updatedOptions;
    explodingSpeaker.value = null;
    statusMessage.value = `Successfully disqualified ${speaker}. 💥`;
    statusType.value = 'success';
   
    // Verify in background by refetching after a short delay
    setTimeout(async () => {
      try {
        const response = await fetch(`${ENDPOINT_URL}?path=options`);
        const data = await response.json();
       
        if (data.status === 'success' && data.options?.length) {
          // Check if our update actually worked
          if (data.options.includes(speaker)) {
            // Uh oh, speaker is still there - revert UI
            speakerOptions.value = data.options;
            statusMessage.value = `⚠️ Disqualification may have failed. Refreshed list.`;
            statusType.value = 'error';
          } else {
            // Success confirmed!
            speakerOptions.value = data.options;
          }
        }
      } catch (err) {
        // Verification failed, but don't alarm user
        console.error('Background verification failed:', err);
      }
    }, 2000);
   
  } catch (error) {
    explodingSpeaker.value = null;
    statusMessage.value = `POST request error: ${error.message}`;
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
    <div class="mt-8 flex flex-col gap-4 items-center">
      <div
        v-for="speaker in speakerOptions"
        :key="speaker"
        class="flex items-center justify-between w-full max-w-2xl p-4 border border-gray-300 rounded-xl shadow-sm bg-white relative overflow-visible"
        :class="{
          'exploding': explodingSpeaker === speaker
        }"
      >
        <span class="text-lg font-semibold">{{ speaker }}</span>
        <button
          @click="disqualifySpeaker(speaker, $event)"
          :disabled="isLoading"
          class="px-6 py-2 rounded-lg text-white font-bold transition duration-150 ease-in-out"
          :class="{
            'bg-red-600 hover:bg-red-700': !isLoading,
            'bg-gray-400 cursor-not-allowed': isLoading
          }"
        >
          💥 Disqualify
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
// 🛑 Replace this with your actual Apps Script endpoint
const ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbye3kDgEZcBnyl-bK09cbmRmxFpueFdVi43gQv92EWP8wL1soKtq-B913_F_XhiJOZLAg/exec';

const tableTopicsSpeakers = ref([]);
const newSpeaker = ref('');
const statusMessage = ref('Loading existing Table Topics speakers...');
const statusType = ref('info');
const isLoading = ref(false);

/** Fetch current list of Table Topics speakers */
async function fetchSpeakers() {
  isLoading.value = true;
  statusMessage.value = 'Fetching current speakers...';
  statusType.value = 'info';

  try {
    const response = await fetch(`${ENDPOINT_URL}?path=options`);
    const data = await response.json();

    if (data.status === 'success' && Array.isArray(data.options)) {
      tableTopicsSpeakers.value = data.options;
      statusMessage.value = 'Speaker list loaded.';
      statusType.value = 'success';
    } else {
      tableTopicsSpeakers.value = [];
      statusMessage.value = 'No speakers yet.';
      statusType.value = 'warning';
    }
  } catch (err) {
    statusMessage.value = `Error loading: ${err.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}

/** Add a new speaker */
async function addSpeaker() {
  const name = newSpeaker.value.trim();
  if (!name) {
    statusMessage.value = 'Please enter a speaker name.';
    statusType.value = 'warning';
    return;
  }

  if (tableTopicsSpeakers.value.includes(name)) {
    statusMessage.value = `"${name}" is already in the list.`;
    statusType.value = 'error';
    return;
  }

  tableTopicsSpeakers.value.push(name);
  newSpeaker.value = '';
  statusMessage.value = `Added "${name}" locally. Syncing...`;
  statusType.value = 'info';
  isLoading.value = true;

  try {
    await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ options: tableTopicsSpeakers.value }),
      mode: 'no-cors'
    });

    statusMessage.value = `✅ Added "${name}". (Pending confirmation)`;
    statusType.value = 'success';

    // Verify backend consistency in background
    setTimeout(async () => {
      try {
        const response = await fetch(`${ENDPOINT_URL}?path=options`);
        const data = await response.json();
        if (data.status === 'success' && Array.isArray(data.options)) {
          tableTopicsSpeakers.value = data.options;
          statusMessage.value = 'List verified with backend.';
          statusType.value = 'success';
        }
      } catch (err) {
        console.warn('Verification failed:', err);
      }
    }, 1500);

  } catch (err) {
    statusMessage.value = `POST error: ${err.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchSpeakers);
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
  line-height: 1.6;
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
button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
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
</style>

# Table Topics 
<h2 v-if="agenda.value && agenda.value.structured_roles?.TableTopicMaster?.presenter">Table Topics Master: {{ agenda.value.structured_roles?.TableTopicMaster?.presenter || 'TBA' }} </h2>

  <!-- Table Topics Rules -->
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


  <!-- Add Speaker Input Section -->
  <div class="input-section">
    <input
      v-model="newSpeaker"
      type="text"
      placeholder="Enter new Table Topics speaker..."
      :disabled="isLoading"
    />
    <button class="add" @click="addSpeaker" :disabled="isLoading">
      ➕ Add Speaker
    </button>
  </div>

  <!-- Status Message -->
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


---
layout: default
title: Speaker Management Tool
style: "background-color: #ADD8E6;"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; right: 1rem; max-height: 100px;" />
<script setup>
import { ref, onMounted } from 'vue';
// 🛑 Update this URL for your deployed Google Apps Script
const ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbye3kDgEZcBnyl-bK09cbmRmxFpueFdVi43gQv92EWP8wL1soKtq-B913_F_XhiJOZLAg/exec';
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

/** Disqualify a speaker — remove from list and POST remaining ones */
async function disqualifySpeaker(speaker, event) {
  const rect = event.target.getBoundingClientRect();
  explosionPosition.value = {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
 
  explodingSpeaker.value = speaker;
  const updatedOptions = speakerOptions.value.filter(s => s !== speaker);
 
  isLoading.value = true;
  statusMessage.value = `Disqualifying ${speaker}...`;
  statusType.value = 'info';
 
  try {
    await fetch(ENDPOINT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ options: updatedOptions }),
      mode: 'no-cors'
    });
   
    await new Promise(resolve => setTimeout(resolve, 1200));
   
    speakerOptions.value = updatedOptions;
    explodingSpeaker.value = null;
    statusMessage.value = `Successfully disqualified ${speaker}. 💥`;
    statusType.value = 'success';
   
    setTimeout(async () => {
      try {
        const response = await fetch(`${ENDPOINT_URL}?path=options`);
        const data = await response.json();
        if (data.status === 'success' && data.options?.length) {
          if (data.options.includes(speaker)) {
            speakerOptions.value = data.options;
            statusMessage.value = `⚠️ Disqualification may have failed. Refreshed list.`;
            statusType.value = 'error';
          } else {
            speakerOptions.value = data.options;
          }
        }
      } catch (err) {
        console.error('Background verification failed:', err);
      }
    }, 2000);
  } catch (error) {
    explodingSpeaker.value = null;
    statusMessage.value = `POST request error: ${error.message}`;
    statusType.value = 'error';
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchOptions);
</script>

<style scoped>
/* Keep explosion animations unchanged */
@keyframes explode {
  0% { transform: scale(1) rotate(0deg); opacity: 1; filter: brightness(1); }
  10% { transform: scale(1.1) rotate(-5deg); filter: brightness(2); }
  30% { transform: scale(1.5) rotate(5deg); opacity: 1; filter: brightness(3) saturate(2); }
  60% { transform: scale(2.5) rotate(180deg); opacity: 0.6; filter: brightness(5) saturate(3); }
  100% { transform: scale(5) rotate(720deg); opacity: 0; filter: brightness(0) saturate(0); }
}
@keyframes shockwave {
  0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.8); }
  50% { box-shadow: 0 0 60px 30px rgba(255,255,255,0.4); }
  100% { box-shadow: 0 0 120px 60px rgba(255,255,255,0); }
}
@keyframes particles {
  0% { opacity: 1; }
  100% { opacity: 0; filter: blur(15px); }
}
@keyframes flash {
  0%,20%,40%,60%,80%,100% { opacity: 1; }
  10%,30%,50%,70%,90% { opacity: 0.3; }
}
@keyframes textGlitch {
  0% { transform: translate(0); }
  100% { transform: translate(0) scale(0); opacity: 0; }
}
@keyframes explosionGif {
  0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
  10% { opacity: 1; transform: translate(-50%, -50%) scale(0.5); }
  90% { opacity: 1; transform: translate(-50%, -50%) scale(3); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(4); }
}

/* Compact layout for ~8 participants */
.speaker-list {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap