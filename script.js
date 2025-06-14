// Custom load for botcake ref
      ;(function(){
        const params = new URLSearchParams(window.location.search)
        const botcake_ref = params.get('botcake_ref')
        if (botcake_ref) {
          window.open(botcake_ref, '_self')
        }
      })()

      // Check if user interacted with page
      window.__user_interacted = false
      const handleInteraction = () => {
        window.__user_interacted = true

        document.removeEventListener('mousedown', handleInteraction)
        document.removeEventListener('touchstart', handleInteraction)
      }
      document.addEventListener('mousedown', handleInteraction)
      document.addEventListener('touchstart', handleInteraction)
    


      // Ignore animate on url params
      ;(function(){
        const params = new URLSearchParams(window.location.search)
        const urlParams = new URLSearchParams(window.location.search);
        const animate = urlParams.get("animate");
        if (animate === 'false') {
          const style = document.createElement('style')
          style.textContent = '.no-animate * { transition: none!important; animation: none!important; }'
          document.head.appendChild(style)
          document.querySelector('.pageview')?.classList.add('no-animate')
        }
      })()
    


      const windowHeight = () => {
        const doc = document.documentElement
        doc.style.setProperty('--viewport-height', `${window.innerHeight}px`)
      }
      window.addEventListener('resize', windowHeight)
      windowHeight()