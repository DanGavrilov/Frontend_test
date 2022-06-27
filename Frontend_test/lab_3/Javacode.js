document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { 
      const el = document.querySelector('.follow-cursor') 
      window.addEventListener('click', e => { 
        
        client = el.getBoundingClientRect()      
        el.style.left = (client.left + e.pageX)/2 + 'px'
        el.style.top =(client.top + e.pageY)/2 + 'px'
        
         
      })
    }
    followCursor() 
  
  })