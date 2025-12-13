(function(){
  // Lightweight initializer for Slidev slides (no module imports)
  const STORAGE_KEY = 'sv_agenda'
  const CHANNEL_NAME = 'sv-agenda-channel'

  function tryParse(raw){
    try{ return JSON.parse(raw) }catch(e){ return null }
  }

  if (!window.__SV_AGENDA) {
    // prefer a Vue ref if available, but fall back to a simple object
    var initial = null
    try { initial = tryParse(localStorage.getItem(STORAGE_KEY)) } catch(e){}

    // fallback fetch from /agenda.json
    if (!initial) {
      try {
        fetch('/agenda.json').then(r=>r.json()).then(d=>{
          initial = d
          initSingleton(initial)
        }).catch(()=>{ initSingleton(initial) })
        // early return; initSingleton will be called from promise
        return
      } catch(e){ /* ignore */ }
    }

    initSingleton(initial)
  }

  function initSingleton(initial){
    var singleton = null
    if (typeof window.__SV_AGENDA !== 'undefined' && window.__SV_AGENDA) {
      singleton = window.__SV_AGENDA
    }

    // try to create a Vue ref if Vue is present globally
    if (!singleton) {
      try {
        if (window.Vue && typeof window.Vue.ref === 'function') {
          singleton = window.Vue.ref(initial)
        } else if (typeof ref === 'function') {
          singleton = ref(initial)
        } else {
          singleton = { value: initial }
        }
      } catch(e){ singleton = { value: initial } }
    }

    // BroadcastChannel setup
    try {
      var bc = new BroadcastChannel(CHANNEL_NAME)
      bc.onmessage = function(ev){ if (ev.data && ev.data.type === 'agenda_update') {
        try { singleton.value = ev.data.payload } catch(e) { singleton = { value: ev.data.payload } }
      }}
    } catch(e){ /* no BroadcastChannel */ }

    // storage fallback
    window.addEventListener('storage', function(ev){
      if (ev.key === STORAGE_KEY && ev.newValue) {
        try { singleton.value = tryParse(ev.newValue) } catch(e){}
      }
    })

    // helper to persist
    function persist(v){
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)) } catch(e){}
      try { if (bc) bc.postMessage({ type: 'agenda_update', payload: v }) } catch(e){}
    }

    // expose a simple API on singleton if it's a plain object
    if (!singleton.__persist) singleton.__persist = persist

    window.__SV_AGENDA = singleton
  }
})();
