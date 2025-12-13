---
transition: slide-down
class: "text-center"
style: "background-color: #ADD8E6;"
theme: neversink
---

<img src="/tmi_logo.png" alt="Logo" style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;"/>
<h1>Oslo Toastmasters Club Meeting</h1>
<script setup>
import { reactive } from 'vue'
const STORAGE_KEY = 'slidev_agenda_data'
const storedData = localStorage.getItem(STORAGE_KEY)
const initialValue = storedData ? JSON.parse(storedData) : null
if (!window.__SV_AGENDA) {
  window.__SV_AGENDA = reactive({ value: initialValue })
}
const agenda = window.__SV_AGENDA
function loadAgenda(event) {
  const file = event.target.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result)
      localStorage.setItem(STORAGE_KEY, e.target.result)
      agenda.value = parsed
      alert('Agenda loaded successfully! Please refresh this page AND the Presenter View to sync data across screens.')
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
<script setup>const agenda = window.__SV_AGENDA</script>

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
    allowfullscreen> </iframe>

</div>


  <div 
    @click="showCustomSlides = !showCustomSlides"
    style="padding: 0.5rem 1rem; background-color: #16a34a; color: white; border-radius: 0.375rem; border: none; cursor: pointer; font-size: 0.875rem;float:right;position:absolute;bottom:50px;right:50px"
  >
    {{ showCustomSlides ? 'Hide Custom Slides' : 'Show Announcements' }}
  </div>

<script setup>const agenda = window.__SV_AGENDA</script>

---
layout: center
class: 'text-center'
style: "background-color: #ADD8E6;"
---

<img src="/tmi_logo.png" alt="Logo"
     style="position: absolute; top: 1rem; left: 1rem; max-height: 100px;">
<script setup>const agenda = window.__SV_AGENDA</script>

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

<h1 class = "h15"> TAGG Team of Today’s Meeting </h1>

- General Evaluator
- Timer
- Ah and Vote Counter
- Grammarian

---
style: "background-color: #ADD8E6;"
layout: statement
---

<script setup>const agenda = window.__SV_AGENDA</script>

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
<script setup>const agenda = window.__SV_AGENDA</script>

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

<script setup>const agenda = window.__SV_AGENDA</script>
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
<script setup>const agenda = window.__SV_AGENDA</script>

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
<script setup>const agenda = window.__SV_AGENDA</script>
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
const isBusy = ref(false);

function addSpeaker() {
  if (isBusy.value) return;
  isBusy.value = true;

  const name = newSpeaker.value.trim();
  if (!name) {
    statusMessage.value = 'Please enter a speaker name.';
    statusType.value = 'warning';
    isBusy.value = false;
    return;
  }

  currentSpeaker.value = name;
  newSpeaker.value = '';
  statusMessage.value = `✅ Speaker Set: "${name}"`;
  statusType.value = 'success';

  fetch(VOTING_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'add', speaker: name }),
    mode: 'no-cors'
  }).finally(() => {
    isBusy.value = false;
  });
}

async function addRandomSpeaker() {
  if (isBusy.value) return;
  isBusy.value = true;

  try {
    statusMessage.value = 'Fetching random speaker...';
    statusType.value = 'info';

    const response = await fetch(REGISTRATION_URL);
    const data = await response.json();
    const speaker = data?.selected || data?.speaker || data?.name;

    if (!speaker) {
      statusMessage.value = '⚠️ No speaker data received';
      statusType.value = 'warning';
      return;
    }

    currentSpeaker.value = speaker;
    statusMessage.value = `✅ Random Speaker: "${speaker}"`;
    statusType.value = 'success';

    await fetch(VOTING_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'add', speaker }),
      mode: 'no-cors'
    });

  } catch (error) {
    statusMessage.value = '❌ Error fetching random speaker';
    statusType.value = 'error';
    console.error(error);
  } finally {
    isBusy.value = false;
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

button:disabled {
  opacity: 0.6;
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

.current-speaker {
  flex: 1;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 6rem;
  font-size: 3rem;
  font-weight: 700;
}

.current-speaker h2 {
  font-size: 1.5rem;
}

.qr-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>

<div class="container" v-if="currentSpeaker.length === 0">
  <div class="admin-box">
    <h1>Table Topics</h1>
    <h2>
      Table Topics Master:
      {{ agenda.value?.structured_roles?.TableTopicMaster?.presenter ?? 'TBA' }}
    </h2>
    <div class="input-section">
      <input
        v-model="newSpeaker"
        type="text"
        placeholder="Speaker"
        :disabled="isBusy"
        @keyup.enter="addSpeaker"
      />
      <button class="add" :disabled="isBusy" @click="addSpeaker">
        🎤 Set Speaker
      </button>
      <button class="add" :disabled="isBusy" @click="addRandomSpeaker">
        🎲 Random Speaker
      </button>
    </div>
    
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
      <h2>Scan QR Code to join</h2>
      <QRCode
        class="mx-auto pt-10"
        value="https://docs.google.com/forms/d/e/1FAIpQLScgOHxi05FhIkkWsqm2YpaHqu-kPh6dtJvzx7tJdll6Wr68Gw/viewform?usp=dialog"
        :size="350"
        render-as="svg"
      />
    </div>
  </div>
</div>

<div v-else class="current-speaker">
  <h1>{{ currentSpeaker }}</h1>
  <h2>Table Topics Speaker</h2>
  <button class="toggle" @click="toggleView">
    👈 Select Next Speaker
  </button>
</div>



---
layout: center
style: "background-color: #ADD8E6;"
---

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
layout: center
style: "background-color: #ADD8E6;"
---

<script setup>const agenda = window.__SV_AGENDA</script>

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
<script setup>const agenda = window.__SV_AGENDA</script>

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
<script setup>const agenda = window.__SV_AGENDA</script>

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
<script setup>const agenda = window.__SV_AGENDA</script>

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
<script setup>const agenda = window.__SV_AGENDA</script>

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
    }, 1000)
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
    }, 1000)
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
</div>












