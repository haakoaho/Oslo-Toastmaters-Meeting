import { ref, watch } from 'vue'

const STORAGE_KEY = 'sv_agenda'
const CHANNEL_NAME = 'sv-agenda-channel'

/**
 * Reusable composable that returns the reactive agenda singleton.
 * Syncs across windows via localStorage and BroadcastChannel.
 * Every slide that uses agenda should import this.
 */
export function useAgenda() {
  // Initialize singleton on first call
  if (!window.__SV_AGENDA) {
    const agenda = ref(null)

    // Try load from localStorage first
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) agenda.value = JSON.parse(raw)
    } catch (e) {
      console.warn('Failed parsing localStorage agenda:', e)
    }

    // Fallback: try fetching agenda.json from server
    if (!agenda.value) {
      fetch('/agenda.json')
        .then(r => r.json())
        .then(d => { if (!agenda.value) agenda.value = d })
        .catch(() => {})
    }

    // BroadcastChannel sync
    let bc = null
    try {
      bc = new BroadcastChannel(CHANNEL_NAME)
      bc.onmessage = (ev) => {
        if (ev.data?.type === 'agenda_update') {
          agenda.value = ev.data.payload
        }
      }
    } catch (e) {
      // BroadcastChannel unavailable
    }

    // storage event for other windows (fallback)
    window.addEventListener('storage', (ev) => {
      if (ev.key === STORAGE_KEY && ev.newValue) {
        try { agenda.value = JSON.parse(ev.newValue) } catch {}
      }
    })

    // Persist and broadcast on changes
    watch(agenda, (newVal) => {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal)) } catch {}
      if (bc) {
        try { bc.postMessage({ type: 'agenda_update', payload: newVal }) } catch {}
      }
    }, { deep: true })

    window.__SV_AGENDA = agenda
  }

  return window.__SV_AGENDA
}
